import { useEffect, useRef } from "react";

export default function TachometerGauge({
  lvoProb = 0,
  ichProb = 0,
  title = "Decision Support – LVO/ICH",
}) {
  const canvasRef = useRef(null);

  // Compute confidence & clamped ratio here so JSX overlay can show it
  const absDiff = Math.abs(lvoProb - ichProb);
  const maxProb = Math.max(lvoProb, ichProb);
  let confidence =
    absDiff < 10
      ? Math.round(30 + maxProb * 0.3)
      : absDiff < 20
        ? Math.round(50 + maxProb * 0.4)
        : Math.round(70 + maxProb * 0.3);
  confidence = Math.max(0, Math.min(100, confidence));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let raf = null;
    let currentPos = 0.5;

    // recompute safe values inside effect for animation closure
    const epsLocal = 0.5;
    const safeIchLocal = Math.max(ichProb, epsLocal);
    const rawRatioLocal = lvoProb / safeIchLocal;
    const rminLocal = 0.5,
      rmaxLocal = 2.0;
    const clampedRatioLocal = Math.max(rminLocal, Math.min(rmaxLocal, rawRatioLocal));
    const targetPosBase = (Math.log2(clampedRatioLocal) + 1) / 2;

    // Keep a sanity cap for pixel buffer to avoid runaway sizes
    const MAX_BACKING_PIXELS = 10000;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const cssW = Math.max(1, rect.width || 300);
      const cssH = Math.max(1, rect.height || 200);

      // target backing buffer (device pixels)
      const targetW = Math.min(MAX_BACKING_PIXELS, Math.floor(cssW * dpr));
      const targetH = Math.min(MAX_BACKING_PIXELS, Math.floor(cssH * dpr));

      // Only change backing buffer when needed (prevents resize loop)
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        // reset transform then scale once to DPR
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }

      const width = cssW;
      const height = cssH;
      const isMobile = width < 480;
      const isTablet = width >= 480 && width < 1024;

      // Refined thin proportions (kept your original logic)
      const baseWidth = isMobile ? 12 : isTablet ? 14 : 16;
      const padding = 15;
      const maxRHorizontal = width / 2 - padding - baseWidth / 2;
      const maxRVerticalBase = height / 2 - padding - baseWidth / 2;
      const maxRVertical = isTablet ? Math.min(maxRVerticalBase, height * 0.42) : maxRVerticalBase;
      const radius = Math.max(10, Math.min(maxRHorizontal, maxRVertical));
      const cx = width / 2;
      const cy = height - (padding + baseWidth / 2 + radius);

      ctx.clearRect(0, 0, width, height);

      const isDark = document.body.classList.contains("dark-mode");

      const colors = {
        day: {
          bezel: "#e8eaed",
          bezelShadow: "#c1c7cd",
          track: "#f5f7fa",
          ich: "#8b1538",
          lvo: "#1e3a5f",
          neutral: "#6b7280",
          needle: "#d4af37",
          text: "#374151",
          tickMajor: "#4b5563",
          tickMinor: "#9ca3af",
        },
        night: {
          bezel: "#2d3036",
          bezelShadow: "#1a1d23",
          track: "#383c42",
          ich: "#dc2626",
          lvo: "#3b82f6",
          neutral: "#64748b",
          needle: "#fbbf24",
          text: "#f3f4f6",
          tickMajor: "#d1d5db",
          tickMinor: "#6b7280",
        },
      };
      const theme = isDark ? colors.night : colors.day;

      // Outer bezel
      const bezelGradient = ctx.createLinearGradient(
        cx - radius,
        cy - radius,
        cx + radius,
        cy + radius
      );
      bezelGradient.addColorStop(0, theme.bezel);
      bezelGradient.addColorStop(0.3, theme.bezelShadow);
      bezelGradient.addColorStop(0.7, theme.bezel);
      bezelGradient.addColorStop(1, theme.bezelShadow);

      ctx.strokeStyle = bezelGradient;
      ctx.lineWidth = baseWidth + 4;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 2, 0, Math.PI, false);
      ctx.stroke();

      // Inner track
      ctx.strokeStyle = theme.track;
      ctx.lineWidth = baseWidth;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI, false);
      ctx.stroke();

      // Gradient zones
      const segments = 60;
      const angleStep = Math.PI / segments;
      for (let i = 0; i < segments; i++) {
        const progress = i / (segments - 1);
        const startAngle = i * angleStep;
        const endAngle = Math.min((i + 1) * angleStep, Math.PI);

        let r, g, b;
        if (progress <= 0.5) {
          const t = progress * 2;
          r = Math.round(0 + 242 * t);
          g = Math.round(154 + 66 * t);
          b = Math.round(255 * (1 - t));
        } else {
          const t = (progress - 0.5) * 2;
          r = Math.round(242 + 13 * t);
          g = Math.round(220 * (1 - t));
          b = Math.round(0);
        }
        const color = `rgba(${r}, ${g}, ${b}, 0.85)`;
        ctx.strokeStyle = color;
        ctx.lineWidth = Math.max(1, baseWidth - 4);
        ctx.beginPath();
        ctx.arc(cx, cy, radius, startAngle, endAngle, false);
        ctx.stroke();
      }

      // Ticks (major & minor)
      const majorTicks = [0.5, 0.75, 1.0, 1.5, 2.0];
      const minorTicks = isMobile ? [] : [0.6, 0.9, 1.2, 1.8];

      majorTicks.forEach(val => {
        const pos = (Math.log2(val) + 1) / 2;
        const a = Math.PI - pos * Math.PI;
        const inner = radius - 12;
        const outer = radius - 24;
        ctx.strokeStyle = theme.tickMajor;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
        ctx.lineTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
        ctx.stroke();

        ctx.fillStyle = theme.text;
        const tickFont = isMobile ? 13 : 15;
        ctx.font = `600 ${tickFont}px "SF Pro Display", system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          val.toFixed(1),
          cx + Math.cos(a) * (radius - 35),
          cy + Math.sin(a) * (radius - 35)
        );
      });

      minorTicks.forEach(val => {
        const pos = (Math.log2(val) + 1) / 2;
        const a = Math.PI - pos * Math.PI;
        const inner = radius - 8;
        const outer = radius - 16;
        ctx.strokeStyle = theme.tickMinor;
        ctx.lineWidth = 0.8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
        ctx.lineTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
        ctx.stroke();
      });

      // Threshold markers
      const thresholds = [
        { val: 0.77, label: "ICH", side: "left" },
        { val: 1.3, label: "LVO", side: "right" },
      ];
      thresholds.forEach(th => {
        const pos = (Math.log2(th.val) + 1) / 2;
        const a = Math.PI - pos * Math.PI;
        const inner = radius - 2;
        const outer = radius + 12;
        ctx.strokeStyle = th.side === "left" ? theme.ich : theme.lvo;
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 2]);
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
        ctx.lineTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Zone labels
      const labelFont = isMobile ? 15 : 17;
      const labelDistance = isMobile ? radius + 35 : radius + 42;
      ctx.fillStyle = isDark ? "#ff4444" : "#ff0000";
      ctx.font = `700 ${labelFont}px "SF Pro Display", system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (isDark) {
        ctx.shadowColor = "rgba(0,0,0,0.8)";
        ctx.shadowBlur = 3;
        ctx.shadowOffsetY = 1;
      }
      ctx.fillText(
        "ICH",
        cx + Math.cos(Math.PI) * labelDistance,
        cy + Math.sin(Math.PI) * labelDistance - 10
      );
      ctx.fillStyle = isDark ? "#4499ff" : "#0099ff";
      ctx.fillText("LVO", cx + Math.cos(0) * labelDistance, cy + Math.sin(0) * labelDistance - 10);
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;

      // Needle + animations (same logic)
      const targetPos = targetPosBase;
      currentPos += (targetPos - currentPos) * 0.12;
      const needleAngle = Math.PI - currentPos * Math.PI;
      const needleLen = Math.max(0, radius - baseWidth / 2 - 6);

      // Confidence cone behind needle
      const coneSpan = (1 - confidence / 100) * (Math.PI * 0.05);
      ctx.save();
      ctx.globalAlpha = isDark ? 0.2 : 0.25;
      ctx.fillStyle = theme.neutral;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, needleLen * 0.85, needleAngle - coneSpan, needleAngle + coneSpan, false);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Needle gradient / shaft
      const needleColor = theme.needle;
      const now = performance.now();
      const gradient = ctx.createLinearGradient(
        cx,
        cy,
        cx + Math.cos(needleAngle) * needleLen,
        cy + Math.sin(needleAngle) * needleLen
      );
      gradient.addColorStop(0, needleColor + "ff");
      gradient.addColorStop(0.7, needleColor + "dd");
      gradient.addColorStop(1, needleColor + "bb");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.shadowColor = isDark ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetY = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(needleAngle) * needleLen, cy + Math.sin(needleAngle) * needleLen);
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;

      // Tip glow & core
      const tx = cx + Math.cos(needleAngle) * needleLen;
      const ty = cy + Math.sin(needleAngle) * needleLen;
      const pulse = 0.6 + 0.4 * Math.sin(now * 0.006);
      const tipRadius = 3 + pulse * 2;

      ctx.save();
      ctx.globalAlpha = 0.15 + pulse * 0.25;
      ctx.fillStyle = needleColor;
      ctx.beginPath();
      ctx.arc(tx, ty, tipRadius * 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = 0.4 + pulse * 0.3;
      ctx.fillStyle = needleColor;
      ctx.beginPath();
      ctx.arc(tx, ty, tipRadius * 1.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = needleColor;
      ctx.shadowColor = needleColor;
      ctx.shadowBlur = 4 + pulse * 6;
      ctx.beginPath();
      ctx.arc(tx, ty, tipRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Hub
      const hubOuter = 14;
      const hubInner = 8;

      const hubGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubOuter);
      hubGradient.addColorStop(0, isDark ? "#4a5568" : "#718096");
      hubGradient.addColorStop(0.7, isDark ? "#2d3748" : "#4a5568");
      hubGradient.addColorStop(1, isDark ? "#1a202c" : "#2d3748");

      ctx.fillStyle = hubGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, hubOuter, 0, Math.PI * 2);
      ctx.fill();

      const innerGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubInner);
      innerGradient.addColorStop(0, needleColor + "aa");
      innerGradient.addColorStop(1, needleColor + "44");
      ctx.fillStyle = innerGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, hubInner, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = needleColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, hubOuter - 1, 0, Math.PI * 2);
      ctx.stroke();

      // Ratio display
      const ratioFont = isMobile ? 18 : 22;
      const ratioY = cy - radius * 0.65;
      const plateWidth = isMobile ? 60 : 80;
      const plateHeight = isMobile ? 24 : 30;

      ctx.save();
      ctx.globalAlpha = isDark ? 0.9 : 0.95;
      ctx.fillStyle = isDark ? "#1f2937" : "#ffffff";
      ctx.shadowColor = isDark ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 2;
      ctx.fillRect(cx - plateWidth / 2, ratioY - plateHeight / 2, plateWidth, plateHeight);
      ctx.restore();

      ctx.fillStyle = theme.text;
      ctx.font = `700 ${ratioFont}px "SF Mono", ui-monospace, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(clampedRatioLocal.toFixed(2), cx, ratioY);

      // Confidence indicator (drawn inside gauge and guaranteed visible)
      {
        const confY = cy - radius * 0.25; // sit above hub, inside arc
        const confWidth = Math.min(120, radius * 1.2);
        const confHeight = Math.max(3, Math.min(6, radius * 0.06));

        ctx.fillStyle = isDark ? "#374151" : "#e5e7eb";
        ctx.fillRect(cx - confWidth / 2, confY, confWidth, confHeight);

        const confFill = (confidence / 100) * confWidth;
        const confGradient = ctx.createLinearGradient(
          cx - confWidth / 2,
          confY,
          cx - confWidth / 2 + confFill,
          confY
        );
        confGradient.addColorStop(0, theme.neutral);
        confGradient.addColorStop(1, theme.needle);

        ctx.fillStyle = confGradient;
        ctx.fillRect(cx - confWidth / 2, confY, confFill, confHeight);

        ctx.fillStyle = theme.text;
        ctx.font = `500 ${isMobile ? 10 : 12}px "SF Pro Display", system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`${confidence}% confidence`, cx, confY - 8);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
    // lvoProb & ichProb are intentionally in deps so effect re-runs when values change
  }, [lvoProb, ichProb]);

  return (
    <div
      className="relative flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900  w-full max-w-[420px] aspect-[16/9]"
      data-react-tachometer
      aria-label={title}
    >
      {/* Canvas container is constrained by Tailwind aspect / max-width above */}
      <div className="w-full h-full flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}

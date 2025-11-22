/**
 * Hospital Selector Component
 * Shows nearby hospitals for case transmission
 */
import { COMPREHENSIVE_HOSPITAL_DATABASE } from "../../data/comprehensive-stroke-centers.js";
import { t } from "../../localization/i18n.js";
import { gpsTracker } from "../../services/gps-tracker.js";

export class HospitalSelector {
  constructor() {
    this.currentLocation = null;
    this.hospitals = [];
    this.selectedHospital = null;
    this.onSelect = null;
  }

  /**
   * Show hospital selector modal
   * @param {Function} onSelectCallback - Callback when hospital is selected
   * @returns {Promise<void>}
   */
  async show(onSelectCallback) {
    this.onSelect = onSelectCallback;

    try {
      // Get current location
      this.currentLocation = await gpsTracker.getCurrentLocation();
      // Get nearby hospitals
      this.hospitals = this.getNearbyHospitals(this.currentLocation, 50); // 50km radius

      // Render modal
      this.render();

      // Add event listeners
      this.attachEventListeners();
      this.geocodeLocation();
    } catch (error) {
      console.error("[HospitalSelector] Error:", error);
      this.showError(error.message);
    }
  }

  /**
   * Get hospitals within radius
   */
  getNearbyHospitals(location, radiusKm) {
    const allHospitals = [];

    // Collect all hospitals from all states
    Object.values(COMPREHENSIVE_HOSPITAL_DATABASE).forEach(state => {
      if (state.neurosurgicalCenters) {
        allHospitals.push(...state.neurosurgicalCenters);
      }
      if (state.comprehensiveStrokeCenters) {
        allHospitals.push(...state.comprehensiveStrokeCenters);
      }
      if (state.regionalStrokeUnits) {
        allHospitals.push(...state.regionalStrokeUnits);
      }
    });

    // Calculate distance and filter
    const hospitalsWithDistance = allHospitals
      .map(hospital => ({
        ...hospital,
        distance: this.calculateDistance(
          location.latitude,
          location.longitude,
          hospital.coordinates.lat,
          hospital.coordinates.lng
        ),
      }))
      .filter(h => h.distance <= radiusKm)
      .sort((a, b) => {
        // Sort by capability first, then distance
        const capabilityScore = h => {
          let score = 0;
          if (h.neurosurgery) {
            score += 100;
          }
          if (h.thrombectomy) {
            score += 50;
          }
          if (h.thrombolysis) {
            score += 25;
          }
          return score;
        };

        const scoreDiff = capabilityScore(b) - capabilityScore(a);
        if (scoreDiff !== 0) {
          return scoreDiff;
        }

        return a.distance - b.distance;
      });

    return hospitalsWithDistance.slice(0, 10); // Top 10
  }

  /**
   * Calculate distance (Haversine)
   */
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
        Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10; // Round to 1 decimal
  }

  toRad(degrees) {
    return (degrees * Math.PI) / 180;
  }

  /**
   * Render the modal
   */

  render() {
    const modalHTML = `
     <div
  id="hospitalSelectorModal"
  class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
>
  <div
    class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden animate-fadeIn"
  >
    <!-- Header -->
    <div
      class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
    >
      <h2 class="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
        🏥 ${t("selectHospital")}
      </h2>
      <button
        id="closeHospitalSelector"
        class="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 text-xl font-semibold transition"
      >
        ✕
      </button>
    </div>

    <!-- Current Location -->
    <div class="flex items-center space-y-3 border-b border-gray-200 dark:border-gray-700 justify-between px-6">
      <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b rounded-2xl border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-1">
          📍 ${t("currentLocation")}:
        </p>
        
        <p class="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-wide">
          ${this.currentLocation.latitude.toFixed(6)}, ${this.currentLocation.longitude.toFixed(6)}
        </p>
      </div>
      <button 
        type="button" 
        id="_manualLocationButton" 
        class="px-4 py-2 rounded-md font-medium text-white bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none transition transform hover:scale-[1.02] shadow-sm"
      >
        ✏️ ${t("enterManually")}
      </button>
    </div>

    <div class="hospital-location-manual hidden flex gap-2 px-6">
      <input 
        type="text" 
        id="locationInput" 
        class="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 transition"
        placeholder="${t("enterLocationPlaceholder") || "e.g. München, Köln, Stuttgart, or 48.1351, 11.5820"}"
      />
      <button 
        type="button" 
        id="_searchLocationButton" 
        class="px-4 py-2 rounded-md font-medium text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition transform hover:scale-[1.02] shadow-sm"
      >
        ${t("search")}
      </button>
    </div>

    <!-- Hospital List -->
    <div class="hospital-list max-h-[60vh] overflow-y-auto px-6 py-4 space-y-4">
      ${
        this.hospitals.length > 0
          ? this.hospitals
              .map((hospital, index) => this.renderHospitalCard(hospital, index))
              .join("")
          : `
          <p class="text-center text-gray-600 dark:text-gray-400 italic">
          ${t("noHospitalsFound")}
          </p>`
      }
    </div>

    <!-- Footer -->
    <div
      class="flex justify-end px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
    >
      <button
        id="cancelHospitalSelect"
        class="px-5 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
       ${t("cancel")} 
      </button>
    </div>

     <div 
            id="_strokeCenterResults" 
            class="stroke-center-results space-y-3"
          ></div>
  </div>
</div>
    `;

    // Add to body
    const container = document.createElement("div");
    container.innerHTML = modalHTML;
    document.body.appendChild(container.firstElementChild);
  }

  /**
   * Render individual hospital card
   */
  renderHospitalCard(hospital, index) {
    const capabilities = [];
    if (hospital.neurosurgery) {
      capabilities.push(
        `<span class="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">🧠 NS</span>`
      );
    }
    if (hospital.thrombectomy) {
      capabilities.push(
        `<span class="px-2 py-1 text-xs font-medium rounded-md bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200">🩸 TE</span>`
      );
    }
    if (hospital.thrombolysis) {
      capabilities.push(
        `<span class="px-2 py-1 text-xs font-medium rounded-md bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">💉 TL</span>`
      );
    }

    return `
    <div
      class="hospital-card relative p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 ${
        index === 0 ? "ring-2 ring-blue-500 border-blue-400" : ""
      }"
      data-hospital-index="${index}"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-3">
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
            ${hospital.name}
          </h3>
          ${
            index === 0
              ? `<span class="inline-block mt-1 text-xs font-semibold text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded-md">
                  ⭐ Empfohlen / Recommended
                </span>`
              : ""
          }
        </div>
        <div class="text-right">
          <span class="text-lg font-bold text-gray-900 dark:text-white">${hospital.distance}</span>
          <span class="text-sm text-gray-600 dark:text-gray-400">km</span>
        </div>
      </div>

      <!-- Details -->
      <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
        <p>📍 ${hospital.address}</p>
        <p>📞 ${hospital.emergency || hospital.phone}</p>

        <!-- Capabilities -->
        <div class="flex flex-wrap gap-2 mt-2">
          ${capabilities.join("")}
          ${
            hospital.network
              ? `<span class="px-2 py-1 text-xs font-medium rounded-md bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">${hospital.network}</span>`
              : ""
          }
        </div>

        <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">
          🛏️ ${hospital.beds} Betten / Beds
        </div>
      </div>

      <!-- Select Button -->
      <button
        class="select-hospital-button w-full py-2 mt-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-400 transition focus:ring-2 focus:ring-blue-400"
        data-hospital-index="${index}"
      >
       ${t("select")} →
      </button>
    </div>
  `;
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Manual Location Button
    const manualLocationButton = document.getElementById("_manualLocationButton");
    const locationManual = document.querySelector(".hospital-location-manual");
    const searchLocationButton = document.getElementById("searchLocationButton");
    const locationInput = document.getElementById("locationInput");
    const resultsContainer = document.getElementById("_strokeCenterResults");

    if (manualLocationButton && locationManual) {
      manualLocationButton.addEventListener("click", () => {
        const isHidden = locationManual.classList.contains("hidden");
        locationManual.classList.toggle("hidden", !isHidden);
        locationManual.classList.add("mt-4");
      });
    }

    if (searchLocationButton) {
      searchLocationButton.addEventListener("click", () => {
        const location = locationInput.value.trim();
        if (location) {
          geocodeLocation(location, results, resultsContainer);
        }
      });
    }

    if (locationInput) {
      locationInput.addEventListener("keypress", e => {
        if (e.key === "Enter") {
          const location = locationInput.value.trim();
          if (location) {
            geocodeLocation(location, results, resultsContainer);
          }
        }
      });
    }

    const modal = document.getElementById("hospitalSelectorModal");
    if (!modal) {
      return;
    }

    // Close button
    const closeButton = document.getElementById("closeHospitalSelector");
    if (closeButton) {
      closeButton.addEventListener("click", () => this.close());
    }

    // Cancel button
    const cancelButton = document.getElementById("cancelHospitalSelect");
    if (cancelButton) {
      cancelButton.addEventListener("click", () => this.close());
      const kioskButton = document.getElementById("shareToKiosk");
      kioskButton.textContent = `${t("selectHospital")}`;
      kioskButton.disabled = false;
    }

    // Select hospital buttons
    const selectButtons = modal.querySelectorAll(".select-hospital-button");
    selectButtons.forEach(button => {
      button.addEventListener("click", e => {
        const index = parseInt(e.target.dataset.hospitalIndex);
        this.selectHospital(index);
      });
    });

    // Click outside to close
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        this.close();
      }
    });

    // ESC key to close
    document.addEventListener("keydown", this.handleEscKey);
  }

  geocodeLocation(locationString, results, resultsContainer) {
    try {
      safeSetInnerHTML(resultsContainer, `<div class="loading">${t("searchingLocation")}...</div>`);
    } catch (error) {
      resultsContainer.textContent = "Searching location...";
      console.error("Sanitization failed:", error);
    }

    // Check if user entered coordinates (format: lat, lng or lat,lng)
    const coordPattern = /^(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)$/;
    const coordMatch = locationString.trim().match(coordPattern);

    if (coordMatch) {
      // Direct coordinate input
      const lat = parseFloat(coordMatch[1]);
      const lng = parseFloat(coordMatch[2]);

      // Validate coordinates are within supported German states (Bayern, BW, NRW)
      if (lat >= 47.2 && lat <= 52.5 && lng >= 5.9 && lng <= 15.0) {
        try {
          safeSetInnerHTML(
            resultsContainer,
            `
            <div class="location-success">
              <p>📍 Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}</p>
            </div>
          `
          );
        } catch (error) {
          resultsContainer.textContent = `Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
          console.error("Sanitization failed:", error);
        }
        setTimeout(() => {
          showNearestCenters(lat, lng, results, resultsContainer);
        }, 500);
        return;
      }
      showLocationError(
        "Coordinates appear to be outside Germany. Please check the values.",
        resultsContainer
      );
      return;
    }

    try {
      // Clean up the location string
      let searchLocation = locationString.trim();

      // If it doesn't already include country info, add it
      if (
        !searchLocation.toLowerCase().includes("deutschland") &&
        !searchLocation.toLowerCase().includes("germany") &&
        !searchLocation.toLowerCase().includes("bayern") &&
        !searchLocation.toLowerCase().includes("bavaria") &&
        !searchLocation.toLowerCase().includes("nordrhein") &&
        !searchLocation.toLowerCase().includes("baden")
      ) {
        searchLocation += ", Deutschland";
      }

      // Use Nominatim (OpenStreetMap) geocoding service - free and reliable
      // Note: encodeURIComponent properly handles umlauts (ä, ö, ü, ß)
      const encodedLocation = encodeURIComponent(searchLocation);
      const url = `https://nominatim.openstreetmap.org/search?q=${encodedLocation}&countrycodes=de&format=json&limit=3&addressdetails=1`;

      const response = fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Agent": "iGFAP-StrokeTriage/2.1.0", // Required by Nominatim
        },
      });

      if (!response.ok) {
        throw new Error(`Geocoding API error: ${response.status}`);
      }

      const data = response.json();

      if (data && data.length > 0) {
        // Prefer results from supported states (Bayern, Baden-Württemberg, NRW)
        let location = data[0];
        const supportedStates = ["Bayern", "Baden-Württemberg", "Nordrhein-Westfalen"];

        for (const result of data) {
          if (result.address && supportedStates.includes(result.address.state)) {
            location = result;
            break;
          }
        }

        const lat = parseFloat(location.lat);
        const lng = parseFloat(location.lon);
        const locationName = location.display_name || locationString;

        // Show success message and then proceed with location
        try {
          safeSetInnerHTML(
            resultsContainer,
            `
            <div class="location-success">
              <p>📍 Found: ${locationName}</p>
              <small style="color: #666;">Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}</small>
            </div>
          `
          );
        } catch (error) {
          resultsContainer.textContent = `Found: ${locationName} (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
          console.error("Sanitization failed:", error);
        }

        // Wait a moment to show the found location, then show centers
        setTimeout(() => {
          showNearestCenters(lat, lng, results, resultsContainer);
        }, 1000);
      } else {
        showLocationError(
          `
          <strong>Location "${locationString}" not found.</strong><br>
          <small>Try:</small>
          <ul style="text-align: left; font-size: 0.9em; margin: 10px 0;">
            <li>City name: "München", "Köln", "Stuttgart"</li>
            <li>Address: "Marienplatz 1, München"</li>
            <li>Coordinates: "48.1351, 11.5820"</li>
          </ul>
        `,
          resultsContainer
        );
      }
    } catch (error) {
      // ('Geocoding failed:', error);
      showLocationError(
        `
        <strong>Unable to search location.</strong><br>
        <small>Please try entering coordinates directly (e.g., "48.1351, 11.5820")</small>
      `,
        resultsContainer
      );
    }
  }

  /**
   * Handle ESC key
   */
  handleEscKey = e => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  /**
   * Select hospital
   */
  selectHospital(index) {
    this.selectedHospital = this.hospitals[index];

    console.log("[HospitalSelector] Hospital selected:", this.selectedHospital.name);

    // Call callback
    if (this.onSelect) {
      this.onSelect(this.selectedHospital);
    }

    // Close modal
    this.close();
  }

  /**
   * Show error
   */
  showError(message) {
    const errorHTML = `
      <div class="hospital-selector-overlay" id="hospitalSelectorModal">
        <div class="hospital-selector-modal error">
          <div class="modal-header">
            <h2>⚠️ Fehler / Error</h2>
            <button class="close-button" id="closeHospitalSelector">✕</button>
          </div>

          <div class="error-message">
            <p>${message}</p>
            <p class="error-hint">Bitte überprüfen Sie Ihre Standortfreigabe / Please check your location permissions</p>
          </div>

          <div class="modal-footer">
            <button class="secondary" id="closeHospitalSelector">Schließen / Close</button>
          </div>
        </div>
      </div>
    `;

    const container = document.createElement("div");
    container.innerHTML = errorHTML;
    document.body.appendChild(container.firstElementChild);

    // Attach close listener
    document.getElementById("closeHospitalSelector")?.addEventListener("click", () => this.close());
  }

  /**
   * Close modal
   */
  close() {
    const modal = document.getElementById("hospitalSelectorModal");
    if (modal) {
      modal.remove();
    }

    // Remove ESC listener
    document.removeEventListener("keydown", this.handleEscKey);
  }
}

// Export singleton
export const hospitalSelector = new HospitalSelector();

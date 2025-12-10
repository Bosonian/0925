# Repository Comparison: gfap-ultra vs 0925

**Date**: December 8, 2025
**Purpose**: Document differences and guide GFAP conversion implementation

---

## Repository Locations

| Repository | Path | GitHub |
|------------|------|--------|
| **gfap-ultra** (reference) | `/Users/deepak/igfap-0925-dev` | Main development repo |
| **0925** (target) | `/Users/deepak/igfap-0925-repo` | https://github.com/Bosonian/0925 |

---

## Key Differences

### 1. GFAP Configuration

**gfap-ultra**:
```javascript
export const GFAP_RANGES = {
  plasma: { min: 30, max: 10000, ... },
  wholeblood: { min: 47, max: 10000, ... }
};
```

**0925**:
```javascript
export const GFAP_RANGES = {
  min: 29,  // Generic range
  max: 10001,
  ...
};
```

**Impact**: 0925 doesn't distinguish between cartridge types

---

### 2. Form Configuration

**gfap-ultra** (limited.js:68-79):
```javascript
<input type="number" name="gfap_value" id="gfap_value"
       min="${GFAP_RANGES.wholeblood.min}"
       max="${GFAP_RANGES.wholeblood.max}"
       step="0.1" required>
<input type="hidden" id="gfap_cartridge_type" value="wholeblood">
```

**0925** (limited.js:68-71):
```javascript
<input type="number" name="gfap_value" id="gfap_value"
       min="${GFAP_RANGES.min}"
       max="${GFAP_RANGES.max}"
       step="0.1" required>
<!-- NO cartridge type field -->
```

**Impact**: 0925 has no hidden cartridge type tracking

---

### 3. Conversion Logic

**gfap-ultra** (handlers.js:115-142):
```javascript
// GFAP conversion from whole blood to plasma scale
if ((module === "full" || module === "coma" || module === "limited") && inputs.gfap_value) {
  inputs.gfap_value_original = inputs.gfap_value;

  if (module === "coma") {
    // Abbott Passing-Bablok: Plasma = 0.94x - 1.34
    const ABBOTT_SLOPE = 0.94;
    const ABBOTT_INTERCEPT = -1.34;
    inputs.gfap_value = (ABBOTT_SLOPE * inputs.gfap_value) + ABBOTT_INTERCEPT;
  } else {
    // Limited & Full: Harmonization factor 0.46
    inputs.gfap_value = inputs.gfap_value * 0.46;
  }
}
```

**0925** (handlers.js:62-271):
```javascript
// NO CONVERSION LOGIC
// Values passed directly to API
```

**Impact**: ⚠️ **CRITICAL** - 0925 sends whole blood values to APIs expecting plasma scale

---

### 4. Results Display

**gfap-ultra** (results.js:40-52):
```javascript
// Display original whole blood value (what user entered)
let displayVal = value;
if (key === "gfap_value" && data.gfap_value_original) {
  displayVal = data.gfap_value_original;
}
```

**0925** (results.js):
```javascript
// Shows whatever value is in state (converted or original)
// Need to verify exact implementation
```

**Impact**: May show wrong value in results summary

---

## Functional Impact

### Current Behavior (0925)

**Example**: User enters GFAP = 100 pg/mL (whole blood)

```
Limited Module:
  Form accepts: 100 pg/mL ✓
  Conversion: NONE ❌
  API receives: 100 pg/mL (WRONG - should be 46 pg/mL)
  ICH Risk: Incorrectly calculated (too high)
```

**Real-World Impact**:
- If user enters 100 pg/mL whole blood:
  - Current (0925): API gets 100 → calculates much higher risk
  - Correct (gfap-ultra): API gets 46 → calculates correct risk

### Target Behavior (After Implementation)

**Example**: User enters GFAP = 100 pg/mL (whole blood)

```
Limited Module:
  Form accepts: 100 pg/mL ✓
  Conversion: 100 × 0.46 = 46 pg/mL ✓
  API receives: 46 pg/mL ✓
  Results show: "GFAP: 100 pg/mL" ✓
  ICH Risk: Correctly calculated
```

---

## Files Requiring Changes

### Immediate (Critical)

1. **src/config.js**
   - Current: Lines 104-110
   - Change: Replace GFAP_RANGES with plasma/wholeblood structure
   - Urgency: HIGH

2. **src/logic/handlers.js**
   - Current: No conversion (lines 62-271)
   - Change: Add conversion logic after line 113
   - Urgency: CRITICAL

### Forms (High Priority)

3. **src/ui/screens/limited.js**
   - Current: Line 70 (min/max)
   - Change: Update to wholeblood ranges, add hidden field
   - Urgency: HIGH

4. **src/ui/screens/full.js**
   - Current: Line 83 (min/max)
   - Change: Update to wholeblood ranges, add hidden fields
   - Urgency: HIGH

5. **src/ui/screens/coma.js**
   - Current: Lines 36-37 (min/max)
   - Change: Update to wholeblood ranges, add hidden field
   - Urgency: HIGH

### Display (Medium Priority)

6. **src/ui/screens/results.js**
   - Current: TBD (need to examine)
   - Change: Show original whole blood values
   - Urgency: MEDIUM

---

## Testing Validation

### Known Test Case (Rettungsdienst)

**Input**:
- Age: 82 years
- BP: 150/90 mmHg
- GFAP: 117 pg/mL (whole blood)

**Expected** (with conversion):
```
Limited Module:
  Conversion: 117 × 0.46 = 53.82 pg/mL (plasma)
  API receives: 53.82 pg/mL
  ICH Risk: ~28%
```

**Current 0925 Behavior** (no conversion):
```
Limited Module:
  Conversion: NONE
  API receives: 117 pg/mL (WRONG!)
  ICH Risk: Much higher than 28% (incorrect)
```

---

## Implementation Priority

### Phase 1: Critical Conversion Logic
1. Update config.js (5 min)
2. Add conversion to handlers.js (15 min)
3. Test conversion with console.log (10 min)

### Phase 2: Form Updates
4. Update limited.js (5 min)
5. Update full.js (5 min)
6. Update coma.js (5 min)
7. Test form validation (10 min)

### Phase 3: Display
8. Update results.js (10 min)
9. Verify results display (10 min)

### Phase 4: Integration Testing
10. End-to-end tests (30 min)
11. Known case verification (10 min)

**Total Estimated Time**: ~2 hours

---

## Risks Without Implementation

### Patient Safety
- ⚠️ **Incorrect risk calculations** (too high if whole blood entered)
- ⚠️ **Inconsistent with validated models** (APIs expect plasma scale)
- ⚠️ **Wrong clinical decisions** based on miscalculated risks

### Data Integrity
- ⚠️ **Incompatible with gfap-ultra** (different scales)
- ⚠️ **Cannot compare results** between repositories
- ⚠️ **Research data compromised** if scale unknown

### Operational
- ⚠️ **User confusion** (which scale to enter?)
- ⚠️ **Training inconsistency** (different systems, different inputs)
- ⚠️ **Support burden** (explaining discrepancies)

---

## Next Steps

1. **Review Implementation Plan**: See `GFAP_CONVERSION_IMPLEMENTATION_PLAN.md`
2. **Backup Current Code**: Create git branch before changes
3. **Implement Phase 1**: Critical conversion logic first
4. **Test Incrementally**: Verify each change works
5. **Deploy to Staging**: If available, test before production
6. **Monitor Results**: Check API calls and calculations

---

**Conclusion**: The 0925 repository requires GFAP conversion implementation to match the validated gfap-ultra system. Without this, risk calculations will be incorrect when users enter whole blood GFAP values.

**Recommendation**: Implement immediately using the detailed plan in `GFAP_CONVERSION_IMPLEMENTATION_PLAN.md`.

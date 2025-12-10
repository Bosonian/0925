# GFAP Conversion Implementation Plan - 0925 Repository

**Date**: December 8, 2025
**Scope**: Add GFAP whole blood → plasma conversion to all modules
**Reference Implementation**: igfap-0925-dev (gfap-ultra)

---

## Executive Summary

The 0925 repository currently **does NOT have GFAP conversion logic**. This plan details the changes needed to add the same GFAP conversion system used in gfap-ultra, which converts whole blood GFAP values to plasma scale before sending to Cloud Functions APIs.

**Current State**: Forms accept any GFAP value (29-10001 pg/mL) and send directly to APIs
**Target State**: Forms only accept whole blood values, convert to plasma before API calls

---

## Changes Required

### 1. Update Config (src/config.js)

**Current Configuration**:
```javascript
export const GFAP_RANGES = {
  min: 29,
  max: 10001,
  normal: 100,
  elevated: 500,
  critical: 1000,
};
```

**New Configuration** (copy from gfap-ultra):
```javascript
// GFAP ranges for different cartridge types
// Source: Abbott i-STAT TBI Cartridge Product Specifications
// Whole Blood: Analytical measuring interval 47-10000 pg/mL, Cut-off 65 pg/mL
// Plasma: Analytical measuring interval 30-10000 pg/mL, Cut-off 30 pg/mL
export const GFAP_RANGES = {
  plasma: {
    min: 30,      // Abbott spec: 30 pg/mL (analytical measuring interval)
    max: 10000,   // Abbott spec: 10000 pg/mL
    normal: 100,
    elevated: 500,
    critical: 1000,
  },
  wholeblood: {
    min: 47,      // Abbott spec: 47 pg/mL (analytical measuring interval)
    max: 10000,   // Abbott spec: 10000 pg/mL
    normal: 100,
    elevated: 500,
    critical: 1000,
  }
};
```

**Location**: Line 104-110

---

### 2. Update Limited Module Form (src/ui/screens/limited.js)

**Current Code** (line 70):
```javascript
min="${GFAP_RANGES.min}" max="${GFAP_RANGES.max}"
```

**New Code**:
```javascript
min="${GFAP_RANGES.wholeblood.min}" max="${GFAP_RANGES.wholeblood.max}"
```

**Add Hidden Field** (after line 71):
```javascript
<input type="hidden" id="gfap_cartridge_type" value="wholeblood">
```

**Locations**:
- Line 68-71: Update min/max attributes
- After line 71: Add hidden cartridge type field

---

### 3. Update Full Module Form (src/ui/screens/full.js)

**Current Code** (line 83):
```javascript
min="${GFAP_RANGES.min}" max="${GFAP_RANGES.max}"
```

**New Code**:
```javascript
min="${GFAP_RANGES.wholeblood.min}" max="${GFAP_RANGES.wholeblood.max}"
```

**Add Hidden Fields** (after line 83):
```javascript
<input type="hidden" id="gfap_cartridge_type" value="wholeblood">
<input type="hidden" id="gfap_displayed_value" value="">
```

**Locations**:
- Line 80-83: Update min/max attributes
- After line 83: Add hidden fields

---

### 4. Update Coma Module Form (src/ui/screens/coma.js)

**Current Code** (line 36-37):
```javascript
min="${GFAP_RANGES.min}"
max="${GFAP_RANGES.max}"
```

**New Code**:
```javascript
min="${GFAP_RANGES.wholeblood.min}"
max="${GFAP_RANGES.wholeblood.max}"
```

**Add Hidden Field** (after line 40):
```javascript
<input type="hidden" id="gfap_cartridge_type" value="wholeblood">
```

**Locations**:
- Lines 36-37: Update min/max attributes
- After line 40: Add hidden cartridge type field

---

### 5. Update Form Handler (src/logic/handlers.js)

**Current Code**: No GFAP conversion (inputs sent directly to APIs)

**Add Conversion Logic** (insert after line 113, before line 116):

```javascript
  // GFAP conversion from whole blood cartridge to legacy plasma cartridge scale
  // This conversion happens for all modules that use GFAP values
  // IMPORTANT: Cloud Functions expect plasma-scale GFAP values
  if ((module === "full" || module === "coma" || module === "limited") && inputs.gfap_value) {
    // Store original whole blood value for display in results
    inputs.gfap_value_original = inputs.gfap_value;

    let conversionFactor;
    let conversionMethod;

    if (module === "coma") {
      // Coma Module: Abbott Passing-Bablok regression equation
      // Formula: Plasma GFAP = 0.94 × Whole Blood GFAP - 1.34
      // Source: Abbott i-STAT TBI Cartridge validation study
      const ABBOTT_SLOPE = 0.94;
      const ABBOTT_INTERCEPT = -1.34;
      const originalValue = inputs.gfap_value;
      inputs.gfap_value = (ABBOTT_SLOPE * originalValue) + ABBOTT_INTERCEPT;
      conversionMethod = "Abbott Passing-Bablok (complete equation)";
      console.log(`[Submit] GFAP converted (coma module): ${originalValue} pg/mL → ${inputs.gfap_value.toFixed(2)} pg/mL using ${conversionMethod} (y = 0.94x - 1.34)`);
    } else {
      // Limited & Full Modules: Clinical cut-off ratio harmonization
      // Formula: Plasma GFAP = 0.46 × Whole Blood GFAP
      // This factor harmonizes the 65 pg/mL whole blood cut-off to 30 pg/mL plasma cut-off
      conversionFactor = 0.46;
      conversionMethod = "Clinical cut-off ratio harmonization";
      const originalValue = inputs.gfap_value;
      inputs.gfap_value = inputs.gfap_value * conversionFactor;
      console.log(`[Submit] GFAP converted (${module} module): ${originalValue} pg/mL → ${inputs.gfap_value.toFixed(2)} pg/mL using ${conversionMethod} (factor: ${conversionFactor})`);
    }
  }
```

**Location**: Insert between lines 113 and 116 (after input collection, before store.setFormData)

---

### 6. Update Results Display (src/ui/screens/results.js)

**Find Section**: Where form data is displayed in results summary

**Current Behavior**: Shows converted plasma value

**Target Behavior**: Show original whole blood value (what user entered)

**Code Pattern to Add**:
```javascript
// For GFAP value, use the original (user-entered) value if it exists
let displayVal = value;
if (key === "gfap_value" && data.gfap_value_original) {
  displayVal = data.gfap_value_original; // Show original whole blood value
}
```

**Action Required**:
1. Locate the results summary rendering code
2. Add logic to filter out `gfap_value_original` from display
3. Add logic to use `gfap_value_original` when displaying `gfap_value`

**Note**: Implementation details depend on the current results.js structure. May need to examine the file to determine exact insertion point.

---

## Conversion Formulas

### Coma Module (Abbott Passing-Bablok)
```
Plasma GFAP = 0.94 × Whole Blood GFAP - 1.34
```

**Example**:
- Input: 100 pg/mL (whole blood)
- Converted: 0.94 × 100 - 1.34 = 92.66 pg/mL (plasma)
- API receives: 92.66 pg/mL

### Limited & Full Modules (Harmonization)
```
Plasma GFAP = 0.46 × Whole Blood GFAP
```

**Example**:
- Input: 100 pg/mL (whole blood)
- Converted: 0.46 × 100 = 46 pg/mL (plasma)
- API receives: 46 pg/mL

---

## Testing Strategy

### 1. Unit Tests

**Test Cases**:
```javascript
// Limited Module
Input: 100 pg/mL (whole blood)
Expected: gfap_value = 46, gfap_value_original = 100

// Full Module
Input: 100 pg/mL (whole blood)
Expected: gfap_value = 46, gfap_value_original = 100

// Coma Module
Input: 100 pg/mL (whole blood)
Expected: gfap_value = 92.66, gfap_value_original = 100
```

### 2. Integration Tests

**Test Workflow**:
1. Enter GFAP = 100 pg/mL in Limited module
2. Submit form
3. Verify API request contains: `gfap_value: 46`
4. Verify results summary shows: "GFAP: 100 pg/mL"

### 3. End-to-End Tests

**Test Scenarios**:
- Edge cases: min value (47 pg/mL), max value (10000 pg/mL)
- Boundary validation: Reject 46 pg/mL (below min), reject 10001 pg/mL (above max)
- Decimal precision: 100.5 pg/mL → 46.23 pg/mL

### 4. Verification Tests (Reference Case)

**Known Case** (from Rettungsdienst investigation):
```
Limited Module:
  Input: Age=82, BP=150/90, GFAP=117 pg/mL (whole blood)
  Conversion: 117 × 0.46 = 53.82 pg/mL (plasma)
  Expected Result: ~28% ICH risk

Coma Module:
  Input: Age=82, GFAP=100 pg/mL (whole blood)
  Conversion: 0.94 × 100 - 1.34 = 92.66 pg/mL (plasma)
```

---

## Deployment Checklist

### Pre-Deployment
- [ ] Update config.js with GFAP_RANGES
- [ ] Update limited.js form (min/max + hidden field)
- [ ] Update full.js form (min/max + hidden fields)
- [ ] Update coma.js form (min/max + hidden field)
- [ ] Add conversion logic to handlers.js
- [ ] Update results.js display logic
- [ ] Test all three modules locally

### Testing
- [ ] Verify forms only accept 47-10000 pg/mL
- [ ] Test Limited: 100 pg/mL → 46 pg/mL conversion
- [ ] Test Full: 100 pg/mL → 46 pg/mL conversion
- [ ] Test Coma: 100 pg/mL → 92.66 pg/mL conversion
- [ ] Verify results show original whole blood values
- [ ] Test known case: Age=82, BP=150/90, GFAP=117 → ~28% ICH

### Post-Deployment
- [ ] Monitor API calls for correct plasma values
- [ ] Verify no double-conversion bugs
- [ ] Check results display shows correct values
- [ ] Confirm validation errors for out-of-range inputs

---

## Files to Modify

| File | Lines | Change Type | Priority |
|------|-------|-------------|----------|
| `src/config.js` | 104-110 | Replace GFAP_RANGES | HIGH |
| `src/ui/screens/limited.js` | 70-71 | Update min/max, add hidden field | HIGH |
| `src/ui/screens/full.js` | 80-83 | Update min/max, add hidden fields | HIGH |
| `src/ui/screens/coma.js` | 36-40 | Update min/max, add hidden field | HIGH |
| `src/logic/handlers.js` | 113 (insert after) | Add conversion logic | CRITICAL |
| `src/ui/screens/results.js` | TBD | Update display logic | MEDIUM |

---

## Comparison with gfap-ultra

| Feature | 0925 (Current) | gfap-ultra | After Implementation |
|---------|---------------|------------|----------------------|
| GFAP Range Config | Single min/max | Separate plasma/wholeblood | Match gfap-ultra ✓ |
| Cartridge Type Field | None | Hidden field | Match gfap-ultra ✓ |
| Conversion Logic | None | Yes (handlers.js:115-142) | Match gfap-ultra ✓ |
| Original Value Storage | No | Yes (gfap_value_original) | Match gfap-ultra ✓ |
| Results Display | Shows converted | Shows original | Match gfap-ultra ✓ |
| Coma Formula | N/A | Abbott (0.94x - 1.34) | Match gfap-ultra ✓ |
| Limited/Full Formula | N/A | Harmonization (0.46x) | Match gfap-ultra ✓ |

---

## Risk Assessment

### Low Risk
- ✅ Config changes (backward compatible)
- ✅ Form validation updates (stricter min/max is safer)
- ✅ Hidden field additions (no UI impact)

### Medium Risk
- ⚠️ Conversion logic (could cause incorrect calculations if wrong factor)
- ⚠️ Results display (must show correct original values)

### Mitigation Strategies
1. **Use exact formulas from gfap-ultra** (tested and validated)
2. **Add console logging** for debugging conversion
3. **Test with known cases** before deployment
4. **Deploy to staging first** if available

---

## Timeline Estimate

| Task | Estimated Time |
|------|----------------|
| Update config.js | 5 minutes |
| Update form screens (3 files) | 15 minutes |
| Add conversion logic to handlers.js | 15 minutes |
| Update results.js display | 10 minutes |
| Local testing | 30 minutes |
| End-to-end testing | 30 minutes |
| **Total** | **~2 hours** |

---

## Success Criteria

**Implementation Complete When**:
1. ✅ All forms only accept 47-10000 pg/mL (whole blood range)
2. ✅ Limited module converts using 0.46 factor
3. ✅ Full module converts using 0.46 factor
4. ✅ Coma module converts using Abbott equation (0.94x - 1.34)
5. ✅ Results display shows original whole blood values
6. ✅ APIs receive correct plasma-scale values
7. ✅ Known test case (Age=82, BP=150/90, GFAP=117) gives ~28% ICH risk

---

## Reference Files (gfap-ultra)

For implementation details, refer to:
- `/Users/deepak/igfap-0925-dev/src/config.js` (lines 104-125)
- `/Users/deepak/igfap-0925-dev/src/logic/handlers.js` (lines 115-142)
- `/Users/deepak/igfap-0925-dev/src/ui/screens/limited.js` (lines 68-79)
- `/Users/deepak/igfap-0925-dev/src/ui/screens/full.js` (lines 81-93)
- `/Users/deepak/igfap-0925-dev/src/ui/screens/results.js` (lines 40-52)

---

**Created**: December 8, 2025
**Status**: Ready for Implementation
**Next Step**: Begin with config.js update

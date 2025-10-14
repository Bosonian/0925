const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/research-tools-DGotpYen.js","assets/medical-core-Cya2lCqH.js","assets/enterprise-features-BG9OW9_4.js"])))=>i.map(i=>d[i]);
var ss=Object.defineProperty;var is=(a,e,t)=>e in a?ss(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ve=(a,e,t)=>is(a,typeof e!="symbol"?e+"":e,t);import{s as h,v as as,b as rs,a as H,P as je,m as y,M as b}from"./medical-core-Cya2lCqH.js";import{p as It,a as Ct,b as Lt,A as ns,e as xt,c as os,w as ls}from"./prediction-models-D4Bj5_qH.js";import{s as we,a as he,b as xe,g as rt,m as nt,c as ot}from"./enterprise-features-BG9OW9_4.js";import{i as ke,s as cs,c as ds,r as Mt,a as _t,b as us,d as lt,e as ct,q as qe}from"./research-tools-DGotpYen.js";import{i as ms,r as Rt,a as hs,b as gs}from"./ui-components-BtD-M0jc.js";import{r as Se,R as ie,c as dt}from"./vendor-OK4nxHmZ.js";import"./index-DIpsYUXh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll("link[rel=\"modulepreload\"]"))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n);}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i;}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i);}})();const ps={},Pt=!!(import.meta&&ps),fs={success:!0,message:"Development mode - authentication bypassed",session_token:`dev-token-${Date.now()}`,expires_at:new Date(Date.now()+30*60*1e3).toISOString(),session_duration:1800},ys={coma_ich:{probability:25.3,ich_probability:25.3,drivers:{gfap_value:.4721,baseline_risk:.1456},confidence:.75},limited_ich:{probability:31.7,ich_probability:31.7,drivers:{age_years:.2845,systolic_bp:.1923,gfap_value:.4231,vigilanzminderung:.3456},confidence:.65},full_stroke:{ich_prediction:{probability:28.4,drivers:{age_years:.1834,gfap_value:.3921,systolic_bp:.2341,vigilanzminderung:.2876},confidence:.88},lvo_prediction:{probability:45.2,drivers:{fast_ed_score:.7834,age_years:.2341,eye_deviation:.1923},confidence:.82}},authenticate:{success:!0,message:"Development mode - authentication bypassed",session_token:`dev-token-${Date.now()}`,expires_at:new Date(Date.now()+30*60*1e3).toISOString(),session_duration:1800}},Me=Pt?{COMA_ICH:"/api/cloud-functions/predict_coma_ich",LDM_ICH:"/api/cloud-functions/predict_limited_data_ich",FULL_STROKE:"/api/cloud-functions/predict_full_stroke",LVO_PREDICTION:"/api/cloud-functions/predict_lvo",AUTHENTICATE:"/api/cloud-functions/authenticate-research-access"}:{COMA_ICH:"https://europe-west3-igfap-452720.cloudfunctions.net/predict_coma_ich",LDM_ICH:"https://europe-west3-igfap-452720.cloudfunctions.net/predict_limited_data_ich",FULL_STROKE:"https://europe-west3-igfap-452720.cloudfunctions.net/predict_full_stroke",LVO_PREDICTION:"https://europe-west3-igfap-452720.cloudfunctions.net/predict_lvo",AUTHENTICATE:"https://europe-west3-igfap-452720.cloudfunctions.net/authenticate-research-access"},me={isDevelopment:Pt,mockAuthResponse:fs,mockApiResponses:ys},Nt={ich:{medium:25,high:50},lvo:{medium:25,high:50}},K={min:29,max:10001,normal:100,elevated:500,critical:1e3},ut={autoSaveInterval:18e4,sessionTimeout:30*60*1e3},Na={age_years:{required:!0,min:0,max:120,type:"integer",medicalCheck:a=>a<18?"Emergency stroke assessment typically for adults (≥18 years)":null},systolic_bp:{required:!0,min:60,max:300,type:"number",medicalCheck:(a,e)=>{const t=e==null?void 0:e.diastolic_bp;return t&&a<=t?"Systolic BP must be higher than diastolic BP":null;}},diastolic_bp:{required:!0,min:30,max:200,type:"number",medicalCheck:(a,e)=>{const t=e==null?void 0:e.systolic_bp;return t&&a>=t?"Diastolic BP must be lower than systolic BP":null;}},gfap_value:{required:!0,min:K.min,max:K.max,type:"number",medicalCheck:a=>a>8e3?"Warning: Extremely high GFAP value - please verify lab result (still valid)":null},fast_ed_score:{required:!0,min:0,max:9,type:"integer",medicalCheck:a=>a>=4?"High FAST-ED score suggests LVO - consider urgent intervention":null},gcs:{required:!0,min:3,max:15,type:"integer",medicalCheck:a=>a<8?"GCS < 8 indicates severe consciousness impairment - consider coma module":null}},bs=-.825559,vs=-.408314,Ss=-.82645,ws=1.651521,ks=-0,Es=1,Ts=3.701422,As=2.306173,Is=1.11742,Cs=-1.032167,Ls=.333333,xs=1e-15,Ms=0,_s=16;function Rs(a,e){return Math.abs(e)<xs?Math.log(a+1):((a+1)**e-1)/e;}function mt(a,e,t){return(a-e)/t;}function Ps(a){return a>500?1:a<-500?0:1/(1+Math.exp(-a));}function Ns(a,e){if(a==null)throw new Error("gfap is required");if(e==null)throw new Error("fasted is required");const t=Number(a),s=Number(e);if(!Number.isFinite(t))throw new Error("gfap must be a finite number");if(!Number.isFinite(s))throw new Error("fasted must be a finite number");if(t<0)throw new Error("GFAP value must be non-negative");return{gfap:t,fasted:s};}function Ds(a,e){const t=Ns(a,e),s=Math.max(Ms,Math.min(_s,t.fasted)),r=Rs(t.gfap,bs),i=mt(r,ks,Es),n=mt(s,Ts,As),o=vs+Ss*i+ws*n,c=Is*o+Cs;return Ps(c);}function Da(a,e){return Ds(a,e)>=Ls?1:0;}const ht={en:{appTitle:"iGFAP",emergencyBadge:"Emergency Tool",helpButton:"Help and Instructions",darkModeButton:"Toggle dark mode",languageToggle:"Language",step1:"Initial Assessment",step2:"Data Collection",step3:"Results",comaModuleTitle:"Coma Module",limitedDataModuleTitle:"Limited Data Module",fullStrokeModuleTitle:"Full Stroke Module",triage1Title:"Patient Assessment",triage1Question:"Is the patient comatose?",triage1Help:"Glasgow Coma Scale < 9",triage1Yes:"YES - Comatose",triage1No:"NO - Conscious",triage2Title:"Examination Capability",triage2Question:"Can the patient be reliably examined?",triage2Help:"Patient is not aphasic, confused, or uncooperative",triage2Yes:"YES - Full Exam Possible",triage2No:"NO - Limited Exam Only",ageLabel:"Age (years)",ageHelp:"Patient age in years",systolicLabel:"Systolic BP (mmHg)",systolicHelp:"Systolic blood pressure",diastolicLabel:"Diastolic BP (mmHg)",diastolicHelp:"Diastolic blood pressure",gfapLabel:"GFAP Value (pg/mL)",gfapHelp:"GFAP biomarker level",fastEdLabel:"FAST-ED Score",fastEdHelp:"FAST-ED assessment score (0-9)",headacheLabel:"Headache",vigilanzLabel:"Reduced consciousness",armPareseLabel:"Arm weakness",beinPareseLabel:"Leg weakness",eyeDeviationLabel:"Eye deviation",atrialFibLabel:"Atrial fibrillation",anticoagLabel:"Anticoagulated (NOAK)",antiplateletsLabel:"Antiplatelets",analyzeButton:"Analyze",analyzing:"Analyzing...",printResults:"Print Results",newAssessment:"Start New Assessment",startOver:"Start Over",goBack:"Go Back",goHome:"Go Home",basicInformation:"Basic Information",biomarkersScores:"Biomarkers & Scores",clinicalSymptoms:"Clinical Symptoms",medicalHistory:"Medical History",ageYearsLabel:"Age (years)",systolicBpLabel:"Systolic BP (mmHg)",diastolicBpLabel:"Diastolic BP (mmHg)",gfapValueLabel:"GFAP Value (pg/mL)",fastEdScoreLabel:"FAST-ED Score",ageYearsHelp:"Patient's age in years",systolicBpHelp:"Normal: 90-140 mmHg",diastolicBpHelp:"Normal: 60-90 mmHg",gfapTooltip:"Brain injury biomarker",gfapTooltipLong:"Glial Fibrillary Acidic Protein - Brain injury biomarker",gfapRange:"Range: {min} - {max} pg/mL",fastEdTooltip:"0-9 scale for LVO screening",analyzeIchRisk:"Analyze ICH Risk",analyzeStrokeRisk:"Analyze Stroke Risk",criticalPatient:"Critical Patient",comaAlert:"Patient is comatose (GCS < 9). Rapid assessment required.",vigilanceReduction:"Vigilance Reduction (Decreased alertness)",armParesis:"Arm Paresis",legParesis:"Leg Paresis",eyeDeviation:"Eye Deviation",atrialFibrillation:"Atrial Fibrillation",onNoacDoac:"On NOAC/DOAC",onAntiplatelets:"On Antiplatelets",resultsTitle:"Assessment Results",bleedingRiskAssessment:"Bleeding Risk Assessment",ichProbability:"ICH Probability",lvoProbability:"LVO Probability",lvoMayBePossible:"Large vessel occlusion possible - further evaluation recommended",riskFactorsTitle:"Main Risk Factors",increasingRisk:"Increasing Risk",decreasingRisk:"Decreasing Risk",noFactors:"No factors",riskLevel:"Risk Level",lowRisk:"Low Risk",mediumRisk:"Medium Risk",highRisk:"High Risk",riskLow:"Low",riskMedium:"Medium",riskHigh:"High",riskFactorsAnalysis:"Risk Factors",contributingFactors:"Contributing factors to the assessment",riskFactors:"Risk Factors",increaseRisk:"INCREASE",decreaseRisk:"DECREASE",noPositiveFactors:"No increasing factors",noNegativeFactors:"No decreasing factors",ichRiskFactors:"ICH Risk Factors",lvoRiskFactors:"LVO Risk Factors",criticalAlertTitle:"CRITICAL RISK DETECTED",criticalAlertMessage:"High probability of intracerebral hemorrhage detected.",immediateActionsRequired:"Immediate actions required",initiateStrokeProtocol:"Initiate stroke protocol immediately",urgentCtImaging:"Urgent CT imaging required",considerBpManagement:"Consider blood pressure management",prepareNeurosurgicalConsult:"Prepare for potential neurosurgical consultation",helpTitle:"Quick Reference Guide",gcsTitle:"Glasgow Coma Scale (GCS)",gcsLow:"GCS < 9: Comatose patient - use Coma Module",gcsMod:"GCS 8-12: Moderate impairment",gcsHigh:"GCS 13-15: Mild impairment",fastEdTitle:"FAST-ED Score Components",fastEdFacial:"Facial Palsy: 0-1 points",fastEdArm:"Arm Weakness: 0-2 points",fastEdSpeech:"Speech Changes: 0-2 points",fastEdTime:"Time: Critical factor",fastEdEye:"Eye Deviation: 0-2 points",fastEdDenial:"Denial/Neglect: 0-2 points",criticalValuesTitle:"Critical Values",criticalBp:"Systolic BP > 180: Increased ICH risk",criticalGfap:"GFAP > 500 pg/mL: Significant marker",criticalFastEd:"FAST-ED ≥ 4: Consider LVO",fastEdCalculatorTitle:"FAST-ED Score Calculator",fastEdCalculatorSubtitle:"Click to calculate FAST-ED score components",facialPalsyTitle:"Facial Palsy",facialPalsyNormal:"Normal (0)",facialPalsyMild:"Present (1)",armWeaknessTitle:"Arm Weakness",armWeaknessNormal:"Normal (0)",armWeaknessMild:"Mild weakness or drift (1)",armWeaknessSevere:"Severe weakness or falls immediately (2)",speechChangesTitle:"Speech Abnormalities",speechChangesNormal:"Normal (0)",speechChangesMild:"Mild dysarthria or aphasia (1)",speechChangesSevere:"Severe dysarthria or aphasia (2)",eyeDeviationTitle:"Eye Deviation",eyeDeviationNormal:"Normal (0)",eyeDeviationPartial:"Partial gaze deviation (1)",eyeDeviationForced:"Forced gaze deviation (2)",denialNeglectTitle:"Denial/Neglect",denialNeglectNormal:"Normal (0)",denialNeglectPartial:"Partial neglect (1)",denialNeglectComplete:"Complete neglect (2)",totalScoreTitle:"Total FAST-ED Score",riskLevel:"Risk Level",riskLevelLow:"LOW (Score <4)",riskLevelHigh:"HIGH (Score ≥4 - Consider LVO)",applyScore:"Apply Score",cancel:"Cancel",riskAnalysis:"Risk Analysis",riskAnalysisSubtitle:"Clinical factors in this assessment",contributingFactors:"Contributing factors",factorsShown:"shown",positiveFactors:"Positive factors",negativeFactors:"Negative factors",clinicalInformation:"Clinical Information",clinicalRecommendations:"Clinical Recommendations",clinicalRec1:"Consider immediate imaging if ICH risk is high",clinicalRec2:"Activate stroke team for LVO scores ≥ 50%",clinicalRec3:"Monitor blood pressure closely",clinicalRec4:"Document all findings thoroughly",noDriverData:"No driver data available",driverAnalysisUnavailable:"Driver analysis unavailable",driverInfoNotAvailable:"Driver information not available from this prediction model",driverAnalysisNotAvailable:"Driver analysis not available for this prediction",lvoNotPossible:"LVO assessment not possible with limited data",fullExamRequired:"Full neurological examination required for LVO screening",limitedAssessment:"Limited Assessment",disclaimer:"Clinical Disclaimer",disclaimerText:"This tool is for clinical decision support only. Always use clinical judgment and follow local protocols. Not a replacement for physician assessment.",importantNote:"Important",importantText:"These results are for clinical decision support only. Always use clinical judgment and follow institutional protocols.",predictedMortality:"Predicted 30-day mortality",ichVolumeLabel:"ICH Volume",references:"References",inputSummaryTitle:"Input Summary",inputSummarySubtitle:"Values used for this analysis",privacyLink:"Privacy Policy",disclaimerLink:"Medical Disclaimer",versionLink:"Version 2.1.0 - Research Preview",privacyPolicy:"Privacy Policy: This tool processes data locally. No patient data is stored or transmitted.",medicalDisclaimer:"Medical Disclaimer: This tool is for clinical decision support only. Always use clinical judgment and follow local protocols.",networkError:"Network error - please check your connection and try again",requestTimeout:"Request timeout - please try again",apiError:"Failed to get results",validationError:"Please check your input values",sessionTimeout:"Your session has been idle for 30 minutes. Would you like to continue?",unsavedData:"You have unsaved data. Are you sure you want to leave?",nearestCentersTitle:"Nearest Stroke Centers",useCurrentLocation:"Use Current Location",enterLocationPlaceholder:"Enter city or address...",enterManually:"Enter Location Manually",search:"Search",yourLocation:"Your Location",recommendedCenters:"Recommended Centers",alternativeCenters:"Alternative Centers",noCentersFound:"No stroke centers found in this area",gettingLocation:"Getting your location",searchingLocation:"Searching location",locationError:"Unable to get your location",locationPermissionDenied:"Location access denied. Please allow location access and try again.",locationUnavailable:"Location information is unavailable",locationTimeout:"Location request timed out",geolocationNotSupported:"Geolocation is not supported by this browser",geocodingNotImplemented:"Location search not available. Please use GPS or enter coordinates manually.",tryManualEntry:"Try entering your location manually or use GPS.",distanceNote:"Distances are calculated as straight-line distances. Actual travel times may vary.",travelTimeNote:"Travel times calculated for emergency vehicles with sirens and priority routing.",calculatingTravelTimes:"Calculating travel times",minutes:"min",poweredByOrs:"Travel times powered by OpenRoute Service",comprehensiveCenter:"Comprehensive Stroke Center",primaryCenter:"Primary Stroke Center",telemetryCenter:"Telemedicine Center",thrombectomy:"Thrombectomy",neurosurgery:"Neurosurgery",icu:"Intensive Care",telemedicine:"Telemedicine",stroke_unit:"Stroke Unit",call:"Call",directions:"Directions",emergency:"Emergency",certified:"Certified",prerequisitesTitle:"Prerequisites for Stroke Triage",prerequisitesIntro:"Please confirm that all of the following prerequisites are met:",prerequisitesWarning:"All prerequisites must be met to continue",continue:"Continue",acute_deficit:"Acute (severe) neurological deficit present",symptom_onset:"Symptom onset within 6 hours",no_preexisting:"No pre-existing severe neurological deficits",no_trauma:"No traumatic brain injury present",differentialDiagnoses:"Differential Diagnoses",reconfirmTimeWindow:"Please reconfirm time window!",unclearTimeWindow:"With unclear/extended time window, early demarcated brain infarction is also possible",rareDiagnoses:"Rare diagnoses such as glioblastoma are also possible"},de:{appTitle:"iGFAP",emergencyBadge:"Notfall-Tool",helpButton:"Hilfe und Anweisungen",darkModeButton:"Dunklen Modus umschalten",languageToggle:"Sprache",step1:"Erstbeurteilung",step2:"Datenerhebung",step3:"Ergebnisse",comaModuleTitle:"Koma-Modul",limitedDataModuleTitle:"Begrenzte Daten Modul",fullStrokeModuleTitle:"Vollständiges Schlaganfall-Modul",triage1Title:"Patientenbeurteilung",triage1Question:"Ist der Patient komatös?",triage1Help:"Glasgow Coma Scale < 9",triage1Yes:"JA - Komatös",triage1No:"NEIN - Bei Bewusstsein",triage2Title:"Untersuchungsfähigkeit",triage2Question:"Kann der Patient zuverlässig untersucht werden?",triage2Help:"Patient ist nicht aphasisch, verwirrt oder unkooperativ",triage2Yes:"JA - Vollständige Untersuchung möglich",triage2No:"NEIN - Nur begrenzte Untersuchung",ageLabel:"Alter (Jahre)",ageHelp:"Patientenalter in Jahren",systolicLabel:"Systolischer RR (mmHg)",systolicHelp:"Systolischer Blutdruck",diastolicLabel:"Diastolischer RR (mmHg)",diastolicHelp:"Diastolischer Blutdruck",gfapLabel:"GFAP-Wert (pg/mL)",gfapHelp:"GFAP-Biomarker-Wert",fastEdLabel:"FAST-ED-Score",fastEdHelp:"FAST-ED-Bewertungsscore (0-9)",headacheLabel:"Kopfschmerzen",vigilanzLabel:"Bewusstseinstrübung",armPareseLabel:"Armschwäche",beinPareseLabel:"Beinschwäche",eyeDeviationLabel:"Blickdeviation",atrialFibLabel:"Vorhofflimmern",anticoagLabel:"Antikoaguliert (NOAK)",antiplateletsLabel:"Thrombozytenaggregationshemmer",analyzeButton:"Analysieren",analyzing:"Analysiere...",printResults:"Ergebnisse drucken",newAssessment:"Neue Bewertung starten",startOver:"Von vorn beginnen",goBack:"Zurück",goHome:"Zur Startseite",basicInformation:"Grundinformationen",biomarkersScores:"Biomarker & Scores",clinicalSymptoms:"Klinische Symptome",medicalHistory:"Anamnese",ageYearsLabel:"Alter (Jahre)",systolicBpLabel:"Systolischer RR (mmHg)",diastolicBpLabel:"Diastolischer RR (mmHg)",gfapValueLabel:"GFAP-Wert (pg/mL)",fastEdScoreLabel:"FAST-ED-Score",ageYearsHelp:"Patientenalter in Jahren",systolicBpHelp:"Normal: 90-140 mmHg",diastolicBpHelp:"Normal: 60-90 mmHg",gfapTooltip:"Hirnverletzungs-Biomarker",gfapTooltipLong:"Glial Fibrillary Acidic Protein - Hirnverletzungs-Biomarker",gfapRange:"Bereich: {min} - {max} pg/mL",fastEdTooltip:"0-9 Skala für LVO-Screening",analyzeIchRisk:"ICB-Risiko analysieren",analyzeStrokeRisk:"Schlaganfall-Risiko analysieren",criticalPatient:"Kritischer Patient",comaAlert:"Patient ist komatös (GCS < 9). Schnelle Beurteilung erforderlich.",vigilanceReduction:"Vigilanzminderung (Verminderte Wachheit)",armParesis:"Armparese",legParesis:"Beinparese",eyeDeviation:"Blickdeviation",atrialFibrillation:"Vorhofflimmern",onNoacDoac:"NOAK/DOAK-Therapie",onAntiplatelets:"Thrombozytenaggregationshemmer",resultsTitle:"Bewertungsergebnisse",bleedingRiskAssessment:"Blutungsrisiko-Bewertung",ichProbability:"ICB-Risiko",lvoProbability:"LVO-Risiko",lvoMayBePossible:"Großgefäßverschluss möglich - weitere Abklärung empfohlen",riskFactorsTitle:"Hauptrisikofaktoren",increasingRisk:"Risikoerhöhend",decreasingRisk:"Risikomindernd",noFactors:"Keine Faktoren",riskLevel:"Risikostufe",lowRisk:"Niedriges Risiko",mediumRisk:"Mittleres Risiko",highRisk:"Hohes Risiko",riskLow:"Niedrig",riskMedium:"Mittel",riskHigh:"Hoch",riskFactorsAnalysis:"Risikofaktoren",contributingFactors:"Beitragende Faktoren zur Bewertung",riskFactors:"Risikofaktoren",increaseRisk:"ERHÖHEN",decreaseRisk:"VERRINGERN",noPositiveFactors:"Keine erhöhenden Faktoren",noNegativeFactors:"Keine verringernden Faktoren",ichRiskFactors:"ICB-Risikofaktoren",lvoRiskFactors:"LVO-Risikofaktoren",criticalAlertTitle:"KRITISCHES RISIKO ERKANNT",criticalAlertMessage:"Hohe Wahrscheinlichkeit einer intrazerebralen Blutung erkannt.",immediateActionsRequired:"Sofortige Maßnahmen erforderlich",initiateStrokeProtocol:"Schlaganfall-Protokoll sofort einleiten",urgentCtImaging:"Dringende CT-Bildgebung erforderlich",considerBpManagement:"Blutdruckmanagement erwägen",prepareNeurosurgicalConsult:"Neurochirurgische Konsultation vorbereiten",helpTitle:"Kurzreferenzleitfaden",gcsTitle:"Glasgow Coma Scale (GCS)",gcsLow:"GCS < 9: Komatöser Patient - Koma-Modul verwenden",gcsMod:"GCS 8-12: Mäßige Beeinträchtigung",gcsHigh:"GCS 13-15: Leichte Beeinträchtigung",fastEdTitle:"FAST-ED-Score-Komponenten",fastEdFacial:"Faziale Parese: 0-1 Punkte",fastEdArm:"Armschwäche: 0-2 Punkte",fastEdSpeech:"Sprachveränderungen: 0-2 Punkte",fastEdTime:"Zeit: Kritischer Faktor",fastEdEye:"Blickdeviation: 0-2 Punkte",fastEdDenial:"Verneinung/Neglect: 0-2 Punkte",criticalValuesTitle:"Kritische Werte",criticalBp:"Systolischer RR > 180: Erhöhtes ICB-Risiko",criticalGfap:"GFAP > 500 pg/mL: Signifikanter Marker",criticalFastEd:"FAST-ED ≥ 4: LVO in Betracht ziehen",fastEdCalculatorTitle:"FAST-ED-Score-Rechner",fastEdCalculatorSubtitle:"Klicken Sie, um FAST-ED-Score-Komponenten zu berechnen",facialPalsyTitle:"Fazialisparese",facialPalsyNormal:"Normal (0)",facialPalsyMild:"Vorhanden (1)",armWeaknessTitle:"Armschwäche",armWeaknessNormal:"Normal (0)",armWeaknessMild:"Leichte Schwäche oder Absinken (1)",armWeaknessSevere:"Schwere Schwäche oder fällt sofort ab (2)",speechChangesTitle:"Sprachstörungen",speechChangesNormal:"Normal (0)",speechChangesMild:"Leichte Dysarthrie oder Aphasie (1)",speechChangesSevere:"Schwere Dysarthrie oder Aphasie (2)",eyeDeviationTitle:"Blickdeviation",eyeDeviationNormal:"Normal (0)",eyeDeviationPartial:"Partielle Blickdeviation (1)",eyeDeviationForced:"Forcierte Blickdeviation (2)",denialNeglectTitle:"Verneinung/Neglect",denialNeglectNormal:"Normal (0)",denialNeglectPartial:"Partieller Neglect (1)",denialNeglectComplete:"Kompletter Neglect (2)",totalScoreTitle:"Gesamt-FAST-ED-Score",riskLevel:"Risikostufe",riskLevelLow:"NIEDRIG (Score <4)",riskLevelHigh:"HOCH (Score ≥4 - LVO erwägen)",applyScore:"Score Anwenden",cancel:"Abbrechen",riskAnalysis:"Risikoanalyse",riskAnalysisSubtitle:"Klinische Faktoren in dieser Bewertung",contributingFactors:"Beitragende Faktoren",factorsShown:"angezeigt",positiveFactors:"Positive Faktoren",negativeFactors:"Negative Faktoren",clinicalInformation:"Klinische Informationen",clinicalRecommendations:"Klinische Empfehlungen",clinicalRec1:"Sofortige Bildgebung erwägen bei hohem ICB-Risiko",clinicalRec2:"Stroke-Team aktivieren bei LVO-Score ≥ 50%",clinicalRec3:"Blutdruck engmaschig überwachen",clinicalRec4:"Alle Befunde gründlich dokumentieren",noDriverData:"Keine Treiberdaten verfügbar",driverAnalysisUnavailable:"Treiberanalyse nicht verfügbar",driverInfoNotAvailable:"Treiberinformationen von diesem Vorhersagemodell nicht verfügbar",driverAnalysisNotAvailable:"Treiberanalyse für diese Vorhersage nicht verfügbar",lvoNotPossible:"LVO-Bewertung mit begrenzten Daten nicht möglich",fullExamRequired:"Vollständige neurologische Untersuchung für LVO-Screening erforderlich",limitedAssessment:"Begrenzte Bewertung",disclaimer:"Klinischer Haftungsausschluss",disclaimerText:"Dieses Tool dient nur zur klinischen Entscheidungsunterstützung. Verwenden Sie immer klinisches Urteilsvermögen und befolgen Sie lokale Protokolle. Kein Ersatz für ärztliche Beurteilung.",importantNote:"Wichtig",importantText:"Diese Ergebnisse dienen nur zur klinischen Entscheidungsunterstützung. Verwenden Sie immer klinisches Urteilsvermögen und befolgen Sie institutionelle Protokolle.",predictedMortality:"Vorhergesagte 30-Tage-Mortalität",ichVolumeLabel:"ICB-Volumen",references:"Referenzen",inputSummaryTitle:"Eingabezusammenfassung",inputSummarySubtitle:"Für diese Analyse verwendete Werte",privacyLink:"Datenschutzrichtlinie",disclaimerLink:"Medizinischer Haftungsausschluss",versionLink:"Version 2.1.0 - Research Preview",privacyPolicy:"Datenschutzrichtlinie: Dieses Tool verarbeitet Daten lokal. Keine Patientendaten werden gespeichert oder übertragen.",medicalDisclaimer:"Medizinischer Haftungsausschluss: Dieses Tool dient nur zur klinischen Entscheidungsunterstützung. Verwenden Sie immer klinisches Urteilsvermögen und befolgen Sie lokale Protokolle.",networkError:"Netzwerkfehler - bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut",requestTimeout:"Anfrage-Timeout - bitte versuchen Sie es erneut",apiError:"Ergebnisse konnten nicht abgerufen werden",validationError:"Bitte überprüfen Sie Ihre Eingabewerte",sessionTimeout:"Ihre Sitzung war 30 Minuten lang inaktiv. Möchten Sie fortfahren?",unsavedData:"Sie haben ungespeicherte Daten. Sind Sie sicher, dass Sie verlassen möchten?",nearestCentersTitle:"Nächstgelegene Schlaganfall-Zentren",useCurrentLocation:"Aktuellen Standort verwenden",enterLocationPlaceholder:"Stadt oder Adresse eingeben...",enterManually:"Standort manuell eingeben",search:"Suchen",yourLocation:"Ihr Standort",recommendedCenters:"Empfohlene Zentren",alternativeCenters:"Alternative Zentren",noCentersFound:"Keine Schlaganfall-Zentren in diesem Bereich gefunden",gettingLocation:"Standort wird ermittelt",searchingLocation:"Standort wird gesucht",locationError:"Standort konnte nicht ermittelt werden",locationPermissionDenied:"Standortzugriff verweigert. Bitte erlauben Sie Standortzugriff und versuchen Sie es erneut.",locationUnavailable:"Standortinformationen sind nicht verfügbar",locationTimeout:"Standortanfrage ist abgelaufen",geolocationNotSupported:"Geolokalisierung wird von diesem Browser nicht unterstützt",geocodingNotImplemented:"Standortsuche nicht verfügbar. Bitte verwenden Sie GPS oder geben Sie Koordinaten manuell ein.",tryManualEntry:"Versuchen Sie, Ihren Standort manuell einzugeben oder GPS zu verwenden.",distanceNote:"Entfernungen werden als Luftlinie berechnet. Tatsächliche Fahrzeiten können variieren.",travelTimeNote:"Fahrzeiten berechnet für Rettungsfahrzeuge mit Sondersignalen und Vorfahrtsberechtigung.",calculatingTravelTimes:"Fahrzeiten werden berechnet",minutes:"Min",poweredByOrs:"Fahrzeiten bereitgestellt von OpenRoute Service",comprehensiveCenter:"Überregionales Schlaganfall-Zentrum",primaryCenter:"Regionales Schlaganfall-Zentrum",telemetryCenter:"Telemedizin-Zentrum",thrombectomy:"Thrombektomie",neurosurgery:"Neurochirurgie",icu:"Intensivstation",telemedicine:"Telemedizin",stroke_unit:"Stroke Unit",call:"Anrufen",directions:"Wegbeschreibung",emergency:"Notfall",certified:"Zertifiziert",prerequisitesTitle:"Voraussetzungen für Schlaganfall-Triage",prerequisitesIntro:"Bitte bestätigen Sie, dass alle folgenden Voraussetzungen erfüllt sind:",prerequisitesWarning:"Alle Voraussetzungen müssen erfüllt sein, um fortzufahren",continue:"Weiter",acute_deficit:"Akutes (schweres) neurologisches Defizit vorhanden",symptom_onset:"Symptombeginn innerhalb 6h",no_preexisting:"Keine vorbestehende schwere neurologische Defizite",no_trauma:"Kein Schädelhirntrauma vorhanden",differentialDiagnoses:"Differentialdiagnosen",reconfirmTimeWindow:"Bitte Zeitfenster rekonfirmieren!",unclearTimeWindow:"Bei unklarem/erweitertem Zeitfenster ist auch ein beginnend demarkierter Hirninfarkt möglich",rareDiagnoses:"Seltene Diagnosen wie ein Glioblastom sind auch möglich"}};class Os{constructor(){this.supportedLanguages=["en","de"],this.currentLanguage=this.detectLanguage();}detectLanguage(){const e=localStorage.getItem("language");return e&&this.supportedLanguages.includes(e)?e:(navigator.language||navigator.userLanguage).substring(0,2).toLowerCase()==="de"?"de":"en";}getCurrentLanguage(){return this.currentLanguage;}setLanguage(e){return this.supportedLanguages.includes(e)?(this.currentLanguage=e,localStorage.setItem("language",e),window.dispatchEvent(new CustomEvent("languageChanged",{detail:{language:e}})),!0):!1;}getSupportedLanguages(){return[...this.supportedLanguages];}t(e){return(ht[this.currentLanguage]||ht.en)[e]||e;}toggleLanguage(){const e=this.currentLanguage==="en"?"de":"en";return this.setLanguage(e);}getLanguageDisplayName(e=null){const t=e||this.currentLanguage;return{en:"English",de:"Deutsch"}[t]||t;}formatDateTime(e){const t=this.currentLanguage==="de"?"de-DE":"en-US";return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e);}formatTime(e){const t=this.currentLanguage==="de"?"de-DE":"en-US";return new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e);}}const j=new Os,l=a=>j.t(a),$s=()=>[{id:"acute_deficit",checked:!1},{id:"symptom_onset",checked:!1},{id:"no_preexisting",checked:!1},{id:"no_trauma",checked:!1}];function Fs(){const a=$s();return`
    <div id="prerequisitesModal" class="modal prerequisites-modal" style="display: flex;">
      <div class="modal-content prerequisites-content">
        <div class="modal-header">
          <h2>${l("prerequisitesTitle")}</h2>
          <button class="modal-close" id="closePrerequisites">&times;</button>
        </div>
        
        <div class="modal-body">
          <p class="prerequisites-intro">
            ${l("prerequisitesIntro")}
          </p>
          
          <div class="prerequisites-list">
            ${a.map(e=>`
              <div class="prerequisite-item" data-id="${e.id}">
                <label class="toggle-switch">
                  <input type="checkbox" id="${e.id}" class="toggle-input">
                  <span class="toggle-slider"></span>
                </label>
                <span class="prerequisite-label">
                  ${l(e.id)}
                </span>
              </div>
            `).join("")}
          </div>
          
          <div class="prerequisites-warning" id="prerequisitesWarning" style="display: none;">
            <span class="warning-icon">⚠️</span>
            <span class="warning-text">
              ${l("prerequisitesWarning")}
            </span>
          </div>
        </div>
        
        <div class="modal-footer">
          <div class="button-group">
            <button type="button" class="secondary" id="cancelPrerequisites">
              ${l("cancel")}
            </button>
            <button type="button" class="primary" id="confirmPrerequisites">
              ${l("continue")}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;}function zs(){const a=document.getElementById("prerequisitesModal");if(!a)return;const e=document.getElementById("closePrerequisites"),t=document.getElementById("cancelPrerequisites"),s=document.getElementById("confirmPrerequisites"),r=()=>{a.remove(),pe("welcome");};e==null||e.addEventListener("click",r),t==null||t.addEventListener("click",r),s==null||s.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation();const o=a.querySelectorAll(".toggle-input");if(Array.from(o).every(m=>m.checked))a.remove(),pe("triage2");else{const m=document.getElementById("prerequisitesWarning");m&&(m.style.display="flex",m.classList.add("shake"),setTimeout(()=>m.classList.remove("shake"),500));}});const i=a.querySelectorAll(".toggle-input");i.forEach(n=>{n.addEventListener("change",()=>{const o=Array.from(i).every(m=>m.checked),c=document.getElementById("prerequisitesWarning");o&&c&&(c.style.display="none");});});}function Bs(){const a=document.getElementById("prerequisitesModal");a&&a.remove();const e=document.createElement("div");try{we(e,Fs());const t=e.firstElementChild;if(!t)throw new Error("Failed to create modal element");document.body.appendChild(t);}catch(t){console.error("Prerequisites modal sanitization failed:",t);const s=document.createElement("div");s.className="modal prerequisites-modal",s.style.display="flex",s.textContent="Prerequisites modal could not be displayed securely. Please refresh the page.",document.body.appendChild(s);return;}zs();}const Hs={};function Vs(a){h.logEvent("triage1_answer",{comatose:a}),a?pe("coma"):Bs();}function Us(a){h.logEvent("triage2_answer",{examinable:a}),pe(a?"full":"limited");}function pe(a){h.logEvent("navigate",{from:h.getState().currentScreen,to:a}),h.navigate(a),window.scrollTo(0,0);}function Ws(){h.hasUnsavedData()&&!confirm("Are you sure you want to start over? All entered data will be lost.")||(h.logEvent("reset"),h.reset());}function Gs(){h.goBack()?(h.logEvent("navigate_back"),window.scrollTo(0,0)):Dt();}function Dt(){h.logEvent("navigate_home"),h.goHome(),window.scrollTo(0,0);}async function qs(a,e){var c,m;a.preventDefault();const t=a.target,{module:s}=t.dataset,r=as(t);if(!r.isValid){rs(e,r.validationErrors);try{const d=Object.keys(r.validationErrors)[0];if(d&&t.elements[d]){const T=t.elements[d];T.focus({preventScroll:!0}),T.scrollIntoView({behavior:"smooth",block:"center"});}const u=document.createElement("div");u.className="sr-only",u.setAttribute("role","status"),u.setAttribute("aria-live","polite");const S=Object.keys(r.validationErrors).length;u.textContent=`${S} field${S===1?"":"s"} need attention.`,document.body.appendChild(u),setTimeout(()=>u.remove(),1200);}catch(d){}return;}const i={};Array.from(t.elements).forEach(d=>{if(d.name)if(d.type==="checkbox")i[d.name]=d.checked;else if(d.type==="number"){const u=parseFloat(d.value);i[d.name]=isNaN(u)?0:u;}else d.type==="hidden"&&d.name==="armparese"?i[d.name]=d.value==="true":i[d.name]=d.value;}),h.setFormData(s,i);const n=t.querySelector("button[type=submit]"),o=n?n.innerHTML:"";if(n){n.disabled=!0;try{we(n,`<span class="loading-spinner"></span> ${l("analyzing")}`);}catch(d){console.error("Button loading state sanitization failed:",d),n.textContent=l("analyzing")||"Analyzing...";}}try{console.log("[Submit] Module:",s),console.log("[Submit] Inputs:",i);let d;switch(s){case"coma":d={ich:{...await Lt(i),module:"Coma"},lvo:null};break;case"limited":d={ich:{...await Ct(i),module:"Limited"},lvo:{notPossible:!0}};break;case"full":if(d=await It(i),console.log("[Submit] Full results:",{ich:!!(d!=null&&d.ich),lvo:!!(d!=null&&d.lvo),ichP:(c=d==null?void 0:d.ich)==null?void 0:c.probability,lvoP:(m=d==null?void 0:d.lvo)==null?void 0:m.probability}),!d||!d.ich)throw new Error("Invalid response structure from Full Stroke API");d.ich&&!d.ich.probability&&d.ich.ich_probability!==void 0&&(d.ich.probability=d.ich.ich_probability,console.log("[Submit] Fixed ICH probability for Full Stroke:",d.ich.probability)),d.ich&&!d.ich.module&&(d.ich.module="Full Stroke"),d.lvo&&!d.lvo.module&&(d.lvo.module="Full Stroke");break;default:throw new Error(`Unknown module: ${s}`);}console.log("[Submit] Setting results in store:",d),h.setResults(d),h.logEvent("models_complete",{module:s,results:d});const u=h.getState();console.log("[Submit] State after setResults:",{hasResults:!!u.results,currentScreen:u.currentScreen}),console.log("[Submit] Navigating to results..."),pe("results"),gt("✅ Results loaded",2e3),setTimeout(()=>{try{const S=h.getState().currentScreen;console.log("[Submit] currentScreen after navigate:",S),S!=="results"&&(h.navigate("results"),gt("🔁 Forced results view",1500));}catch(S){}},0);}catch(d){const u=["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)&&!(import.meta&&Hs);if(s==="full"&&u)try{const T=me.mockApiResponses.full_stroke,_=T.ich_prediction||{},x=T.lvo_prediction||{},$=parseFloat(_.probability)||0,M=parseFloat(x.probability)||0,X={ich:{probability:$>1?$/100:$,drivers:_.drivers||null,confidence:parseFloat(_.confidence)||.85,module:"Full Stroke"},lvo:{probability:M>1?M/100:M,drivers:x.drivers||null,confidence:parseFloat(x.confidence)||.85,module:"Full Stroke"}};h.setResults(X),h.logEvent("models_complete_fallback",{module:s,reason:d.message}),pe("results");return;}catch(T){}let S="An error occurred during analysis. Please try again.";if(d instanceof ns&&(S=d.message),Ks(e,S),n){n.disabled=!1;try{we(n,o);}catch(T){console.error("Button restore sanitization failed:",T),n.textContent="Submit";}}}}function Ks(a,e){a.querySelectorAll(".critical-alert").forEach(o=>{var c,m;(m=(c=o.querySelector("h4"))==null?void 0:c.textContent)!=null&&m.includes("Error")&&o.remove();});const t=document.createElement("div");t.className="critical-alert";const s=document.createElement("h4"),r=document.createElement("span");r.className="alert-icon",r.textContent="⚠️",s.appendChild(r),s.appendChild(document.createTextNode(" Error"));const i=document.createElement("p");i.textContent=e,t.appendChild(s),t.appendChild(i);const n=a.querySelector(".container");n?n.prepend(t):a.prepend(t),setTimeout(()=>t.remove(),1e4);}function gt(a,e=2e3){try{const t=document.createElement("div");t.textContent=a,t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.style.cssText=`
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      background: #0066CC;
      color: #fff;
      padding: 10px 14px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 10000;
      font-size: 14px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 160ms ease;
    `,document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1";}),setTimeout(()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200);},e);}catch(t){}}const A={LOW:"low",MEDIUM:"medium",HIGH:"high",CRITICAL:"critical"},k={NETWORK:"network",VALIDATION:"validation",AUTHENTICATION:"authentication",CALCULATION:"calculation",STORAGE:"storage",RENDERING:"rendering",MEDICAL:"medical",SECURITY:"security"};class D extends Error{constructor(e,t,s=k.MEDICAL,r=A.MEDIUM){super(e),this.name="MedicalError",this.code=t,this.category=s,this.severity=r,this.timestamp=new Date().toISOString(),this.context={};}withContext(e){return this.context={...this.context,...e},this;}getUserMessage(){switch(this.category){case k.NETWORK:return"Network connection issue. Please check your internet connection and try again.";case k.VALIDATION:return"Please check your input data and try again.";case k.AUTHENTICATION:return"Authentication failed. Please log in again.";case k.CALCULATION:return"Unable to complete calculation. Please verify your input data.";case k.MEDICAL:return"Medical calculation could not be completed. Please verify all clinical data.";default:return"An unexpected error occurred. Please try again.";}}}class js{constructor(){this.errorQueue=[],this.maxQueueSize=100,this.setupGlobalHandlers();}setupGlobalHandlers(){window.addEventListener("unhandledrejection",e=>{this.handleError(e.reason,k.NETWORK,A.HIGH),e.preventDefault();}),window.addEventListener("error",e=>{this.handleError(e.error,k.RENDERING,A.MEDIUM);});}handleError(e,t=k.NETWORK,s=A.MEDIUM){const r={error:e instanceof Error?e:new Error(String(e)),category:t,severity:s,timestamp:new Date().toISOString(),userAgent:navigator.userAgent.substring(0,100),url:window.location.href};this.errorQueue.push(r),this.errorQueue.length>this.maxQueueSize&&this.errorQueue.shift(),s===A.CRITICAL&&this.handleCriticalError(r);}handleCriticalError(e){e.category===k.MEDICAL&&this.showMedicalAlert(e.error.message);}showMedicalAlert(e){const t=document.createElement("div");t.className="critical-medical-alert",t.style.cssText=`
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #ff4444;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      max-width: 90%;
      text-align: center;
    `,t.textContent=`⚠️ Medical Error: ${e}`,document.body.appendChild(t),setTimeout(()=>{document.body.contains(t)&&document.body.removeChild(t);},1e4);}getErrorSummary(){return{totalErrors:this.errorQueue.length,criticalErrors:this.errorQueue.filter(e=>e.severity===A.CRITICAL).length,recentErrors:this.errorQueue.slice(-10)};}}const Ys=new js;async function v(a,e={}){const{category:t=k.NETWORK,severity:s=A.MEDIUM,fallback:r=null,timeout:i=3e4,retries:n=0,context:o={}}=e;for(let c=0;c<=n;c++)try{const m=new Promise((u,S)=>{setTimeout(()=>S(new Error("Operation timeout")),i);});return await Promise.race([a(),m]);}catch(m){if(Ys.handleError(m,t,s),c<n){await new Promise(u=>setTimeout(u,1e3*(c+1)));continue;}if(r!==null)return typeof r=="function"?r(m):r;throw new D(m.message||"Operation failed",m.code||"UNKNOWN",t,s).withContext(o);}}async function pt(a,e={}){return v(a,{category:k.AUTHENTICATION,severity:A.HIGH,timeout:15e3,fallback:()=>({success:!1,error:!0,message:"Authentication service unavailable"}),...e});}function Qs(a){const e=[],t=[];return!a||typeof a!="object"?(e.push("Patient data must be an object"),{isValid:!1,errors:e,warnings:t}):((typeof a.age!="number"||a.age<0||a.age>120)&&e.push("Age must be a number between 0 and 120"),["male","female","other"].includes(a.gender)||e.push("Gender must be \"male\", \"female\", or \"other\""),(typeof a.gfap!="number"||a.gfap<29||a.gfap>10001)&&e.push("GFAP must be a number between 29 and 10001 pg/mL"),a.nihss!==void 0&&(typeof a.nihss!="number"||a.nihss<0||a.nihss>42)&&e.push("NIHSS must be a number between 0 and 42"),a.gcs!==void 0&&(typeof a.gcs!="number"||a.gcs<3||a.gcs>15)&&e.push("GCS must be a number between 3 and 15"),a.sbp!==void 0&&(typeof a.sbp!="number"||a.sbp<50||a.sbp>300)&&t.push("Systolic BP should typically be between 50-300 mmHg"),a.dbp!==void 0&&(typeof a.dbp!="number"||a.dbp<30||a.dbp>200)&&t.push("Diastolic BP should typically be between 30-200 mmHg"),{isValid:e.length===0,errors:e,warnings:t});}function Js(a){const e=[],t=[];return!a||typeof a!="object"?(e.push("ICH risk result must be an object"),{isValid:!1,errors:e,warnings:t}):((typeof a.probability!="number"||a.probability<0||a.probability>1)&&e.push("Probability must be a number between 0 and 1"),(typeof a.percentage!="number"||a.percentage<0||a.percentage>100)&&e.push("Percentage must be a number between 0 and 100"),["low","moderate","high","critical"].includes(a.riskLevel)||e.push("Risk level must be \"low\", \"moderate\", \"high\", or \"critical\""),(!a.timestamp||!Date.parse(a.timestamp))&&e.push("Timestamp must be a valid ISO date string"),{isValid:e.length===0,errors:e,warnings:t});}function Zs(a){return Qs(a).isValid;}function Xs(a){return Js(a).isValid;}class ei{static ensureType(e,t,s){let r=!1,i=typeof e;switch(t){case"PatientData":r=Zs(e),i="Invalid PatientData";break;case"ICHRiskResult":r=Xs(e),i="Invalid ICHRiskResult";break;case"number":r=typeof e=="number"&&!isNaN(e);break;case"string":r=typeof e=="string";break;case"boolean":r=typeof e=="boolean";break;default:r=typeof e===t;}if(!r)throw new TypeError(`Type error in ${s}: expected ${t}, got ${i}. This is a critical error in medical calculations.`);}static ensureRange(e,t,s){this.ensureType(e,"number",s);const[r,i]=t;if(e<r||e>i)throw new RangeError(`Range error in ${s}: value ${e} must be between ${r} and ${i}. This is a critical error in medical calculations.`);}}const te={DEBUG:{level:0,name:"DEBUG",color:"#6366f1"},INFO:{level:1,name:"INFO",color:"#10b981"},WARN:{level:2,name:"WARN",color:"#f59e0b"},ERROR:{level:3,name:"ERROR",color:"#ef4444"},CRITICAL:{level:4,name:"CRITICAL",color:"#dc2626"}},f={AUTHENTICATION:"AUTH",MEDICAL_CALCULATION:"MEDICAL",NETWORK:"NETWORK",PERFORMANCE:"PERF",SECURITY:"SECURITY",USER_INTERACTION:"UI",DATA_VALIDATION:"VALIDATION",AUDIT:"AUDIT",SYSTEM:"SYSTEM",ERROR:"ERROR"};class ti{constructor(){this.logLevel=this.getLogLevel(),this.sessionId=this.generateSessionId(),this.logBuffer=[],this.maxBufferSize=1e3,this.isProduction=window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1",this.enableConsole=!this.isProduction,this.enableStorage=!0,this.enableNetwork=!1,this.setupErrorHandlers(),this.startPeriodicFlush();}getLogLevel(){try{const e=localStorage.getItem("medicalLogLevel");if(e&&te[e.toUpperCase()])return te[e.toUpperCase()].level;}catch(e){}return this.isProduction?te.INFO.level:te.DEBUG.level;}generateSessionId(){const e=Date.now().toString(36),t=Math.random().toString(36).substring(2,8);return`sess_${e}_${t}`;}setupErrorHandlers(){window.addEventListener("error",e=>{var t;try{this.critical("Unhandled JavaScript Error",{category:f.ERROR,message:e.message,filename:e.filename,lineno:e.lineno,colno:e.colno,stack:(t=e.error)==null?void 0:t.stack});}catch(s){console.error("Logging failed:",s),console.error("Original error:",e.error);}}),window.addEventListener("unhandledrejection",e=>{var t,s;try{this.critical("Unhandled Promise Rejection",{category:f.ERROR,reason:((t=e.reason)==null?void 0:t.message)||String(e.reason)||"Unknown rejection",stack:(s=e.reason)==null?void 0:s.stack});}catch(r){console.error("Logging failed:",r),console.error("Original rejection:",e.reason);}});}createLogEntry(e,t,s={}){var o;const r=s&&typeof s=="object"?s:{},i={timestamp:new Date().toISOString(),level:((o=te[e])==null?void 0:o.name)||e,category:r.category||f.SYSTEM,message:this.sanitizeMessage(t),sessionId:this.sessionId,context:this.sanitizeContext(r),performance:this.getPerformanceMetrics()};(e==="ERROR"||e==="CRITICAL")&&(i.stackTrace=new Error().stack);const n=this.getAnonymizedUserId();return n&&(i.userId=n),i;}sanitizeMessage(e){return typeof e!="string"&&(e=String(e)),e.replace(/\b\d{3}-\d{2}-\d{4}\b/g,"***-**-****").replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,"***@***.***").replace(/\b\d{10,}\b/g,"**********").replace(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g,"[NAME]");}sanitizeContext(e){if(!e||typeof e!="object")return{};const t={...e},s=["password","token","sessionToken","authToken","patientName","firstName","lastName","fullName","email","phone","ssn","mrn","dob","dateOfBirth"],r=i=>{if(!i||typeof i!="object")return i;const n=Array.isArray(i)?[]:{};for(const[o,c]of Object.entries(i)){const m=o.toLowerCase();s.some(d=>m.includes(d))?n[o]="[REDACTED]":typeof c=="object"&&c!==null?n[o]=r(c):n[o]=c;}return n;};return r(t);}getAnonymizedUserId(){try{const e=sessionStorage.getItem("session_hash");if(e)return`user_${e.substring(0,8)}`;}catch(e){}return null;}getPerformanceMetrics(){var e;try{if("performance"in window){const t=ft.getEntriesByType("navigation")[0];return{memoryUsed:((e=ft.memory)==null?void 0:e.usedJSHeapSize)||0,loadTime:(t==null?void 0:t.loadEventEnd)-(t==null?void 0:t.loadEventStart)||0,domReady:(t==null?void 0:t.domContentLoadedEventEnd)-(t==null?void 0:t.domContentLoadedEventStart)||0};}}catch(t){}return null;}log(e,t,s={}){return v(async()=>{if(!e||!t)return;const r=te[e.toUpperCase()];if(!r||r.level<this.logLevel)return;const i=this.createLogEntry(e.toUpperCase(),t,s);this.addToBuffer(i),this.enableConsole&&this.outputToConsole(i),this.enableStorage&&this.storeEntry(i),this.enableNetwork&&await this.sendToLoggingService(i);},{category:k.SYSTEM,context:{operation:"logging",level:e,message:t.substring(0,100)}});}addToBuffer(e){this.logBuffer.push(e),this.logBuffer.length>this.maxBufferSize&&(this.logBuffer=this.logBuffer.slice(-this.maxBufferSize));}outputToConsole(e){const t=te[e.level],r=`color: ${(t==null?void 0:t.color)||"#666666"}; font-weight: bold;`,i=new Date(e.timestamp).toLocaleTimeString();e.level==="ERROR"||e.level==="CRITICAL"||e.level,console.groupCollapsed(`%c[${e.level}] ${i} [${e.category}] ${e.message}`,r),e.context&&Object.keys(e.context).length>0&&console.log("Context:",e.context),e.performance&&console.log("Performance:",e.performance),e.stackTrace&&(e.level==="ERROR"||e.level==="CRITICAL")&&console.log("Stack Trace:",e.stackTrace),console.groupEnd();}storeEntry(e){try{const t=`medicalLog_${e.timestamp}`,s=JSON.stringify(e);sessionStorage.setItem(t,s),this.cleanOldEntries();}catch(t){}}cleanOldEntries(){try{const e=Object.keys(sessionStorage).filter(t=>t.startsWith("medicalLog_")).sort().reverse();e.length>100&&e.slice(100).forEach(t=>{sessionStorage.removeItem(t);});}catch(e){}}async sendToLoggingService(e){return Promise.resolve();}startPeriodicFlush(){setInterval(()=>{this.flushBuffer();},3e4);}flushBuffer(){this.logBuffer.length!==0&&this.info("Log buffer flushed",{category:f.SYSTEM,entriesCount:this.logBuffer.length});}debug(e,t={}){return this.log("DEBUG",e,t);}info(e,t={}){return this.log("INFO",e,t);}warn(e,t={}){return this.log("WARN",e,t);}error(e,t={}){return this.log("ERROR",e,t);}critical(e,t={}){return this.log("CRITICAL",e,t);}medicalCalculation(e,t,s={}){return this.info(`Medical calculation: ${e}`,{category:f.MEDICAL_CALCULATION,operation:e,success:!s.error,...s});}authentication(e,t,s={}){return this.info(`Authentication: ${e}`,{category:f.AUTHENTICATION,action:e,success:t,...s});}userInteraction(e,t={}){return this.debug(`User interaction: ${e}`,{category:f.USER_INTERACTION,action:e,...t});}networkRequest(e,t,s,r={}){const i=s>=400?"ERROR":s>=300?"WARN":"DEBUG";return this.log(i,`Network request: ${t} ${e}`,{category:f.NETWORK,method:t,url:this.sanitizeUrl(e),status:s,...r});}performance(e,t,s={}){return this.debug(`Performance metric: ${e} = ${t}`,{category:f.PERFORMANCE,metric:e,value:t,...s});}auditTrail(e,t={}){return this.info(`Audit: ${e}`,{category:f.AUDIT,event:e,...t});}sanitizeUrl(e){try{const t=new URL(e);return["token","auth","key","secret"].forEach(r=>{t.searchParams.has(r)&&t.searchParams.set(r,"[REDACTED]");}),t.toString();}catch(t){return e;}}getLogs(e={}){var r;const t=[...this.logBuffer];try{Object.keys(sessionStorage).filter(n=>n.startsWith("medicalLog_")).sort().forEach(n=>{try{const o=JSON.parse(sessionStorage.getItem(n));o&&!t.find(c=>c.timestamp===o.timestamp)&&t.push(o);}catch(o){}});}catch(i){}let s=t.sort((i,n)=>new Date(n.timestamp)-new Date(i.timestamp));if(e.level){const i=((r=te[e.level.toUpperCase()])==null?void 0:r.level)||0;s=s.filter(n=>{var c;return(((c=te[n.level])==null?void 0:c.level)||0)>=i;});}if(e.category&&(s=s.filter(i=>i.category===e.category)),e.since){const i=new Date(e.since);s=s.filter(n=>new Date(n.timestamp)>=i);}return e.limit&&(s=s.slice(0,e.limit)),s;}exportLogs(e="json"){const t=this.getLogs();return e==="csv"?this.logsToCSV(t):JSON.stringify(t,null,2);}logsToCSV(e){if(e.length===0)return"";const t=["timestamp","level","category","message","sessionId"],s=e.map(r=>[r.timestamp,r.level,r.category,`"${r.message.replace(/"/g,"\"\"")}"`,r.sessionId]);return[t.join(","),...s.map(r=>r.join(","))].join(`
`);}clearLogs(){this.logBuffer=[];try{Object.keys(sessionStorage).filter(t=>t.startsWith("medicalLog_")).forEach(t=>sessionStorage.removeItem(t));}catch(e){}this.info("Log storage cleared",{category:f.SYSTEM});}}const p=new ti,{debug:Oa,info:$a,warn:Fa,error:za,critical:Ba,medicalCalculation:Ha,authentication:Va,userInteraction:Ua,networkRequest:Wa,performance:ft,auditTrail:Ga}=p,Ke={};class si{constructor(){this.isAuthenticated=!1,this.sessionToken=null,this.sessionExpiry=null,this.lastActivity=Date.now(),this.setupActivityTracking();}async authenticate(e){return pt(async()=>{if(p.info("Authentication attempt started",{category:f.AUTHENTICATION,hasPassword:!!e&&e.length>0,isDevelopment:me.isDevelopment}),ei.ensureType(e,"string","authentication password"),!e||e.trim().length===0)throw p.warn("Authentication failed: empty password",{category:f.AUTHENTICATION}),new D("Password is required","EMPTY_PASSWORD",k.VALIDATION,A.MEDIUM);if(["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)&&!(import.meta&&Ke)||me.isDevelopment){p.info("Development mode authentication path",{category:f.AUTHENTICATION});const o=rt();if(e.trim()!==o)return await this.delayFailedAttempt(),{success:!1,message:"Invalid credentials",errorCode:"INVALID_CREDENTIALS"};await new Promise(c=>setTimeout(c,300)),this.isAuthenticated=!0,this.sessionToken=me.mockAuthResponse.session_token,this.sessionExpiry=new Date(me.mockAuthResponse.expires_at),this.lastActivity=Date.now();try{this.storeSecureSession();}catch(c){console.warn("Session storage failed:",c.message);}return{success:!0,message:"Authentication successful",sessionDuration:me.mockAuthResponse.session_duration};}const s=["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname),r=localStorage.getItem("use_mock_api")!=="false";if(s&&r&&!(import.meta&&Ke)){if(e.trim()!==rt())return await this.delayFailedAttempt(),{success:!1,message:"Invalid credentials",errorCode:"INVALID_CREDENTIALS"};await new Promise(o=>setTimeout(o,200)),this.isAuthenticated=!0,this.sessionToken=`local-preview-token-${Date.now()}`,this.sessionExpiry=new Date(Date.now()+30*60*1e3),this.lastActivity=Date.now();try{this.storeSecureSession();}catch(o){}return{success:!0,message:"Authentication successful",sessionDuration:1800};}p.debug("Sending authentication request",{category:f.AUTHENTICATION,url:Me.AUTHENTICATE});const i=await fetch(Me.AUTHENTICATE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"login",password:e.trim()})});if(!i.ok){let o="Authentication failed",c="AUTH_FAILED";throw i.status===429?(o="Too many authentication attempts. Please wait and try again.",c="RATE_LIMITED"):i.status>=500&&(o="Authentication service temporarily unavailable",c="SERVICE_ERROR"),new D(o,c,k.AUTHENTICATION,i.status>=500?A.HIGH:A.MEDIUM).withContext({statusCode:i.status,url:Me.AUTHENTICATE});}const n=await i.json();if(!n||typeof n!="object")throw new D("Invalid response from authentication service","INVALID_RESPONSE",k.AUTHENTICATION,A.HIGH);if(n.success){this.isAuthenticated=!0,this.sessionToken=n.session_token,this.sessionExpiry=n.expires_at?new Date(n.expires_at):null,this.lastActivity=Date.now();try{this.storeSecureSession();}catch(o){console.warn("Session storage failed:",o.message);}return{success:!0,message:"Authentication successful",sessionDuration:n.session_duration};}throw await this.delayFailedAttempt(),new D(n.message||"Invalid credentials","INVALID_CREDENTIALS",k.AUTHENTICATION,A.MEDIUM).withContext({remainingAttempts:n.rate_limit_remaining,statusCode:i.status});},{timeout:15e3,fallback:t=>{var s;return{success:!1,message:t instanceof D?t.getUserMessage():"Authentication service unavailable. Please try again.",errorCode:t.code||"NETWORK_ERROR",details:t.message,remainingAttempts:(s=t.context)==null?void 0:s.remainingAttempts};},context:{operation:"user_authentication",endpoint:"authenticate"}});}isValidSession(){return this.isAuthenticated?this.sessionExpiry&&new Date>this.sessionExpiry?(this.logout(),!1):!0:this.checkStoredSession();}async validateSessionWithServer(){return this.sessionToken?pt(async()=>{if(["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)&&!(import.meta&&Ke))return this.updateActivity(),!0;const t=await fetch(Me.AUTHENTICATE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"validate_session",session_token:this.sessionToken})});if(!t.ok){if(t.status===401||t.status===403)return this.logout(),!1;throw new D("Session validation service error","VALIDATION_ERROR",k.AUTHENTICATION,A.MEDIUM).withContext({statusCode:t.status});}const s=await t.json();if(!s||typeof s!="object")throw new D("Invalid response from session validation service","INVALID_RESPONSE",k.AUTHENTICATION,A.MEDIUM);return s.success?(this.updateActivity(),!0):(this.logout(),!1);},{timeout:1e4,fallback:e=>(console.warn("Session validation failed, continuing with local session:",e.message),this.isValidSession()),context:{operation:"session_validation",endpoint:"validate_session"}}):!1;}updateActivity(){this.lastActivity=Date.now(),this.storeAuthSession();}async logout(){p.info("User logout initiated",{category:f.AUTHENTICATION}),this.isAuthenticated=!1,this.sessionToken=null,this.sessionExpiry=null;try{await he("auth_session",!0),await he("auth_timestamp",!0),await he("session_token",!0),await he("session_expiry",!0),sessionStorage.removeItem("auth_session"),sessionStorage.removeItem("auth_timestamp"),sessionStorage.removeItem("session_token"),sessionStorage.removeItem("session_expiry"),p.info("Session data cleared during logout",{category:f.SECURITY});}catch(e){p.warn("Failed to clear some session data during logout",{category:f.SECURITY,error:e.message});}}async hashPassword(e){return v(async()=>{if(!e||typeof e!="string")throw new D("Invalid input for password hashing","INVALID_INPUT",k.VALIDATION,A.MEDIUM);if(!crypto||!crypto.subtle)throw new D("Crypto API not available","CRYPTO_UNAVAILABLE",k.SECURITY,A.HIGH);const s=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",s);return Array.from(new Uint8Array(r)).map(o=>o.toString(16).padStart(2,"0")).join("");},{category:k.SECURITY,severity:A.HIGH,timeout:5e3,fallback:()=>{let t=0;for(let s=0;s<e.length;s++){const r=e.charCodeAt(s);t=(t<<5)-t+r,t&=t;}return Math.abs(t).toString(16);},context:{operation:"password_hashing",inputLength:e?e.length:0}});}storeSecureSession(){return v(async()=>{if(!this.isAuthenticated||!this.sessionToken)throw new D("Cannot store session: not authenticated","NOT_AUTHENTICATED",k.AUTHENTICATION,A.LOW);if(typeof sessionStorage=="undefined")throw new D("Session storage not available","STORAGE_UNAVAILABLE",k.STORAGE,A.MEDIUM);return sessionStorage.setItem("auth_session","verified"),sessionStorage.setItem("auth_timestamp",this.lastActivity.toString()),sessionStorage.setItem("session_token",this.sessionToken),this.sessionExpiry&&sessionStorage.setItem("session_expiry",this.sessionExpiry.toISOString()),!0;},{category:k.STORAGE,severity:A.LOW,timeout:1e3,fallback:e=>(console.warn("Failed to store session:",e.message),!1),context:{operation:"store_session",hasToken:!!this.sessionToken,hasExpiry:!!this.sessionExpiry}});}storeAuthSession(){this.storeSecureSession();}checkStoredSession(){try{return v(async()=>{if(typeof sessionStorage=="undefined")throw new D("Session storage not available","STORAGE_UNAVAILABLE",k.STORAGE,A.LOW);const e=await xe("auth_session",!0),t=await xe("auth_timestamp",!0),s=await xe("session_token",!0),r=await xe("session_expiry",!0);if(e==="verified"&&t&&s){if(r){const n=new Date(r);if(new Date>n)return this.logout(),!1;this.sessionExpiry=n;}const i=parseInt(t);if(isNaN(i))throw new D("Invalid session timestamp","INVALID_SESSION_DATA",k.STORAGE,A.MEDIUM);return this.isAuthenticated=!0,this.sessionToken=s,this.lastActivity=i,!0;}return this.logout(),!1;},{category:k.STORAGE,severity:A.LOW,timeout:1e3,fallback:e=>(console.warn("Failed to check stored session:",e.message),this.logout(),!1),context:{operation:"check_stored_session"}});}catch(e){return this.logout(),!1;}}setupActivityTracking(){const e=["mousedown","mousemove","keypress","scroll","touchstart"],t=()=>{this.isAuthenticated&&this.updateActivity();};e.forEach(s=>{document.addEventListener(s,t,{passive:!0});});}async delayFailedAttempt(){return v(async()=>new Promise(e=>{setTimeout(e,1e3);}),{category:k.AUTHENTICATION,severity:A.LOW,timeout:2e3,fallback:()=>Promise.resolve(),context:{operation:"auth_delay"}});}getSessionInfo(){if(!this.isAuthenticated)return{authenticated:!1};const e=this.sessionTimeout-(Date.now()-this.lastActivity),t=Math.floor(e/(60*60*1e3)),s=Math.floor(e%(60*60*1e3)/(60*1e3));return{authenticated:!0,timeRemaining:`${t}h ${s}m`,lastActivity:new Date(this.lastActivity).toLocaleTimeString()};}}const O=new si;function le(a){const e=[{id:1,label:"Triage"},{id:2,label:"Assessment"},{id:3,label:"Results"}];let t="<div class=\"flex items-center justify-between mb-6\">";return e.forEach((s,r)=>{const i=s.id===a,n=s.id<a;t+=`
      <div class="flex-1 flex items-center">
        <div class="relative flex flex-col items-center text-center w-full">
          <div class="w-8 h-8 flex items-center justify-center rounded-full 
                      ${n?"bg-green-500 text-white":i?"bg-blue-500 text-white":"bg-gray-300 text-gray-700"} 
                      font-bold">
            ${n?"✓":s.id}
          </div>
          <span class="mt-2 text-xs ${i?"text-blue-500":"text-gray-500"}">
            ${s.label}
          </span>
        </div>
        
        ${r<e.length-1?`<div class="flex-1 h-1 ${n?"bg-green-500":"bg-gray-300"}"></div>`:""}
      </div>
    `;}),t+="</div>",t;}function yt(){return`
    <div class="container mx-auto px-4 py-8 max-w-lg">
      <!-- Progress -->
      <div class="mb-6">
        ${le(1)}
      </div>

      <!-- Card -->
      <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <!-- Title -->
        <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          ${l("triage1Title")}
        </h2>

        <!-- Question -->
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl mb-6">
          <p class="text-lg text-gray-800 dark:text-gray-200 font-medium mb-2 text-center">
            ${l("triage1Question")}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
            ${l("triage1Help")}
          </p>
        </div>

        <!-- Buttons -->
        <div class="grid grid-cols-2 gap-4">
          <button 
            class="yes-btn w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-md transition transform hover:scale-105"
            data-action="triage1" 
            data-value="true"
          >
            ✅ ${l("triage1Yes")}
          </button>
          
          <button 
            class="no-btn w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl shadow-md transition transform hover:scale-105"
            data-action="triage1" 
            data-value="false"
          >
            ❌ ${l("triage1No")}
          </button>
        </div>
      </div>
    </div>
  `;}function ii(){return`
    <div class="container mx-auto px-4 py-8 max-w-lg">
      <!-- Progress -->
      <div class="mb-6">
        ${le(2)}
      </div>

      <!-- Card -->
      <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <!-- Title -->
        <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          ${l("triage2Title")}
        </h2>

        <!-- Question -->
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl mb-6">
          <p class="text-lg text-gray-800 dark:text-gray-200 font-medium mb-2 text-center">
            ${l("triage2Question")}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
            ${l("triage2Help")}
          </p>
        </div>

        <!-- Buttons -->
        <div class="grid grid-cols-2 gap-4">
          <button 
            class="yes-btn w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md transition transform hover:scale-105"
            data-action="triage2" 
            data-value="true"
          >
            ✅ ${l("triage2Yes")}
          </button>
          
          <button 
            class="no-btn w-full bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-3 rounded-xl shadow-md transition transform hover:scale-105"
            data-action="triage2" 
            data-value="false"
          >
            ❌ ${l("triage2No")}
          </button>
        </div>
      </div>
    </div>
  `;}function ai(){return`
    <div class="container mx-auto px-4 py-6 max-w-md">
      ${le(2)}

      <h2 class="text-xl font-bold text-gray-900 dark:text-white">
        ${l("comaModuleTitle")||"Coma Module"}
      </h2>

      <form data-module="coma" class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <label for="gfap_value" class="text-gray-700 dark:text-gray-200 font-semibold flex items-center space-x-2">
            <span>${l("gfapValueLabel")}</span>
            <span class="relative group cursor-pointer text-gray-400 dark:text-gray-300">
              ℹ️
              <span class="absolute left-1/2 transform -translate-x-1/2 -top-8 w-56 p-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                ${l("gfapTooltipLong")}
              </span>
            </span>
          </label>
          <input
            type="number"
            id="gfap_value"
            name="gfap_value"
            min="${K.min}"
            max="${K.max}"
            step="0.1"
            required
            aria-describedby="gfap-help"
            class="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
          <div id="gfap-help" class="text-gray-500 dark:text-gray-400 text-sm">
            ${l("gfapRange").replace("{min}",K.min).replace("{max}",K.max)}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <button
            type="submit"
            class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            ${l("analyzeIchRisk")}
          </button>
          <button
            type="button"
            class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 rounded-lg transition"
            data-action="reset"
          >
            ${l("startOver")}
          </button>
        </div>
      </form>
    </div>
  `;}function ri(){return`
    <div class="container">
      ${le(2)}
      <h2>${l("limitedDataModuleTitle")||"Limited Data Module"}</h2>
      <form data-module="limited">
        <div class="input-grid">
          <div class="input-group">
            <label for="age_years">${l("ageYearsLabel")}</label>
            <input type="number" name="age_years" id="age_years" min="0" max="120" required aria-describedby="age-help">
            <div id="age-help" class="input-help">${l("ageYearsHelp")}</div>
          </div>
          <div class="input-group">
            <label for="systolic_bp">${l("systolicBpLabel")}</label>
            <div class="input-with-unit">
              <input type="number" name="systolic_bp" id="systolic_bp" min="60" max="300" required aria-describedby="sbp-help" inputmode="numeric">
              <span class="unit">mmHg</span>
            </div>
            <div id="sbp-help" class="input-help">${l("systolicBpHelp")}</div>
          </div>
          <div class="input-group">
            <label for="diastolic_bp">${l("diastolicBpLabel")}</label>
            <div class="input-with-unit">
              <input type="number" name="diastolic_bp" id="diastolic_bp" min="30" max="200" required aria-describedby="dbp-help" inputmode="numeric">
              <span class="unit">mmHg</span>
            </div>
            <div id="dbp-help" class="input-help">${l("diastolicBpHelp")}</div>
          </div>
          <div class="input-group">
            <label for="gfap_value">
              ${l("gfapValueLabel")}
              <span class="tooltip">ℹ️
                <span class="tooltiptext">${l("gfapTooltipLong")}</span>
              </span>
            </label>
            <div class="input-with-unit">
              <input type="number" name="gfap_value" id="gfap_value" min="${K.min}" max="${K.max}" step="0.1" required inputmode="decimal">
              <span class="unit">pg/mL</span>
            </div>
          </div>
        </div>
        <div class="checkbox-group">
          <label class="checkbox-wrapper">
            <input type="checkbox" name="vigilanzminderung" id="vigilanzminderung">
            <span class="checkbox-label">${l("vigilanceReduction")}</span>
          </label>
        </div>
        <button type="submit" class="primary">${l("analyzeIchRisk")}</button>
        <button type="button" class="secondary" data-action="reset">${l("startOver")}</button>
      </form>
    </div>
  `;}function ni(){return`
    <div class="container">
      ${le(2)}
      <h2>${l("fullStrokeModuleTitle")||"Full Stroke Module"}</h2>
      <form data-module="full">
        <h3>${l("basicInformation")}</h3>
        <div class="input-grid">
          <div class="input-group">
            <label for="age_years">${l("ageYearsLabel")}</label>
            <input type="number" name="age_years" id="age_years" min="0" max="120" required>
          </div>
          <div class="input-group">
            <label for="systolic_bp">${l("systolicBpLabel")}</label>
            <div class="input-with-unit">
              <input type="number" name="systolic_bp" id="systolic_bp" min="60" max="300" required inputmode="numeric">
              <span class="unit">mmHg</span>
            </div>
          </div>
          <div class="input-group">
            <label for="diastolic_bp">${l("diastolicBpLabel")}</label>
            <div class="input-with-unit">
              <input type="number" name="diastolic_bp" id="diastolic_bp" min="30" max="200" required inputmode="numeric">
              <span class="unit">mmHg</span>
            </div>
          </div>
        </div>

        <h3>${l("biomarkersScores")}</h3>
        <div class="input-grid">
          <div class="input-group">
            <label for="gfap_value">
              ${l("gfapValueLabel")}
              <span class="tooltip">ℹ️
                <span class="tooltiptext">${l("gfapTooltip")}</span>
              </span>
            </label>
            <div class="input-with-unit">
              <input type="number" name="gfap_value" id="gfap_value" min="${K.min}" max="${K.max}" step="0.1" required inputmode="decimal">
              <span class="unit">pg/mL</span>
            </div>
          </div>
          <div class="input-group">
            <label for="fast_ed_score">
              ${l("fastEdScoreLabel")}
              <span class="tooltip">ℹ️
                <span class="tooltiptext">${l("fastEdCalculatorSubtitle")}</span>
              </span>
            </label>
            <input type="number" name="fast_ed_score" id="fast_ed_score" min="0" max="9" required readonly placeholder="${l("fastEdCalculatorSubtitle")}" style="cursor: pointer;">
            <input type="hidden" name="armparese" id="armparese_hidden" value="false">
            <input type="hidden" name="eye_deviation" id="eye_deviation_hidden" value="false">
          </div>
        </div>

        <h3>${l("clinicalSymptoms")}</h3>
        <div class="input-grid">
          <div class="checkbox-group">
            <label class="checkbox-wrapper">
              <input type="checkbox" name="headache" id="headache">
              <span class="checkbox-label">${l("headacheLabel")}</span>
            </label>
            <label class="checkbox-wrapper">
              <input type="checkbox" name="vigilanzminderung" id="vigilanzminderung">
              <span class="checkbox-label">${l("vigilanzLabel")}</span>
            </label>
          </div>
          <div class="checkbox-group">
            <label class="checkbox-wrapper">
              <input type="checkbox" name="beinparese" id="beinparese">
              <span class="checkbox-label">${l("legParesis")}</span>
            </label>
          </div>
        </div>

        <h3>${l("medicalHistory")}</h3>
        <div class="input-grid">
          <div class="checkbox-group">
            <label class="checkbox-wrapper">
              <input type="checkbox" name="atrial_fibrillation" id="atrial_fibrillation">
              <span class="checkbox-label">${l("atrialFibrillation")}</span>
            </label>
          </div>
          <div class="checkbox-group">
            <label class="checkbox-wrapper">
              <input type="checkbox" name="anticoagulated_noak" id="anticoagulated_noak">
              <span class="checkbox-label">${l("onNoacDoac")}</span>
            </label>
          </div>
          <div class="checkbox-group">
            <label class="checkbox-wrapper">
              <input type="checkbox" name="antiplatelets" id="antiplatelets">
              <span class="checkbox-label">${l("onAntiplatelets")}</span>
            </label>
          </div>
        </div>

        <button type="submit" class="primary">${l("analyzeStrokeRisk")}</button>
        <button type="button" class="secondary" data-action="reset">${l("startOver")}</button>
      </form>
    </div>
  `;}const oi="modulepreload",li=function(a){return"/0925/"+a;},bt={},se=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),o=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=li(c),c in bt)return;bt[c]=!0;const m=c.endsWith(".css"),d=m?"[rel=\"stylesheet\"]":"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":oi,m||(u.as="script"),u.crossOrigin="",u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),m)return new Promise((S,T)=>{u.addEventListener("load",S),u.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${c}`)));});}));}function i(n){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n;}return r.then(n=>{for(const o of n||[])o.status==="rejected"&&i(o.reason);return e().catch(i);});};function Ot(){return`
    <div class="critical-alert">
      <h4><span class="alert-icon">🚨</span> ${l("criticalAlertTitle")}</h4>
      <p>${l("criticalAlertMessage")}</p>
    </div>
  `;}const ci={age_years:"ageLabel",age:"ageLabel",systolic_bp:"systolicLabel",diastolic_bp:"diastolicLabel",systolic_blood_pressure:"systolicLabel",diastolic_blood_pressure:"diastolicLabel",blood_pressure_systolic:"systolicLabel",blood_pressure_diastolic:"diastolicLabel",gfap_value:"gfapLabel",gfap:"gfapLabel",gfap_level:"gfapLabel",fast_ed_score:"fastEdLabel",fast_ed:"fastEdLabel",fast_ed_total:"fastEdLabel",vigilanzminderung:"vigilanzLabel",vigilance_reduction:"vigilanzLabel",reduced_consciousness:"vigilanzLabel",armparese:"armPareseLabel",arm_paresis:"armPareseLabel",arm_weakness:"armPareseLabel",beinparese:"beinPareseLabel",leg_paresis:"beinPareseLabel",leg_weakness:"beinPareseLabel",eye_deviation:"eyeDeviationLabel",blickdeviation:"eyeDeviationLabel",headache:"headacheLabel",kopfschmerzen:"headacheLabel",atrial_fibrillation:"atrialFibLabel",vorhofflimmern:"atrialFibLabel",anticoagulated_noak:"anticoagLabel",anticoagulation:"anticoagLabel",antiplatelets:"antiplateletsLabel",thrombozytenaggregationshemmer:"antiplateletsLabel"},di=[{pattern:/_score$/,replacement:" Score"},{pattern:/_value$/,replacement:" Level"},{pattern:/_bp$/,replacement:" Blood Pressure"},{pattern:/_years?$/,replacement:" (years)"},{pattern:/^ich_/,replacement:"Brain Bleeding "},{pattern:/^lvo_/,replacement:"Large Vessel "},{pattern:/parese$/,replacement:"Weakness"},{pattern:/deviation$/,replacement:"Movement"}];function Oe(a){if(!a)return"";const e=ci[a.toLowerCase()];if(e){const s=l(e);if(s&&s!==e)return s;}let t=a.toLowerCase();return di.forEach(({pattern:s,replacement:r})=>{t=t.replace(s,r);}),t=t.replace(/_/g," ").replace(/\b\w/g,s=>s.toUpperCase()).trim(),t;}function ui(a){return Oe(a).replace(/\s*\([^)]*\)\s*/g,"").trim();}function mi(a,e=""){return a==null||a===""?"":typeof a=="boolean"?a?"✓":"✗":typeof a=="number"?e.includes("bp")||e.includes("blood_pressure")?`${a} mmHg`:e.includes("gfap")?`${a} pg/mL`:e.includes("age")?`${a} years`:e.includes("score")||Number.isInteger(a)?a.toString():a.toFixed(1):a.toString();}function hi(a,e){if(!(a!=null&&a.drivers)&&!(e!=null&&e.drivers))return"";let t=`
    <div class="drivers-section">
      <div class="drivers-header">
        <h3><span class="driver-header-icon">🎯</span> ${l("riskAnalysis")}</h3>
        <p class="drivers-subtitle">${l("riskAnalysisSubtitle")}</p>
      </div>
      <div class="enhanced-drivers-grid">
  `;return console.log("[Drivers] ICH has drivers:",!!(a!=null&&a.drivers),a==null?void 0:a.drivers),console.log("[Drivers] LVO has drivers:",!!(e!=null&&e.drivers),"notPossible:",e==null?void 0:e.notPossible,e==null?void 0:e.drivers),a!=null&&a.drivers&&(console.log("🧠 Rendering ICH drivers panel"),t+=vt(a.drivers,"ICH","ich",a.probability)),e!=null&&e.drivers&&!e.notPossible&&(console.log("🩸 Rendering LVO drivers panel"),t+=vt(e.drivers,"LVO","lvo",e.probability)),t+=`
      </div>
    </div>
  `,t;}function vt(a,e,t,s){if(!a||Object.keys(a).length===0)return`
      <div class="enhanced-drivers-panel ${t}">
        <div class="panel-header">
          <div class="panel-icon ${t}">${t==="ich"?"🩸":"🧠"}</div>
          <div class="panel-title">
            <h4>${e} ${l("riskFactors")}</h4>
            <span class="panel-subtitle">${l("noDriverData")}</span>
          </div>
        </div>
        <p class="no-drivers-message">
          ${l("driverInfoNotAvailable")}
        </p>
      </div>
    `;const r=a;if(r.kind==="unavailable")return`
      <div class="enhanced-drivers-panel ${t}">
        <div class="panel-header">
          <div class="panel-icon ${t}">${t==="ich"?"🩸":"🧠"}</div>
          <div class="panel-title">
            <h4>${e} ${l("riskFactors")}</h4>
            <span class="panel-subtitle">${l("driverAnalysisUnavailable")}</span>
          </div>
        </div>
        <p class="no-drivers-message">
          ${l("driverAnalysisNotAvailable")}
        </p>
      </div>
    `;const i=(r.positive||[]).sort((u,S)=>Math.abs(S.weight)-Math.abs(u.weight)).slice(0,3),n=(r.negative||[]).sort((u,S)=>Math.abs(S.weight)-Math.abs(u.weight)).slice(0,3),o=Math.max(...i.map(u=>Math.abs(u.weight)),...n.map(u=>Math.abs(u.weight)),.01);console.log(`[Drivers] ${t} maxWeight:`,o),console.log(`[Drivers] ${t} positive:`,i.map(u=>`${u.label}: ${u.weight}`)),console.log(`[Drivers] ${t} negative:`,n.map(u=>`${u.label}: ${u.weight}`)),console.log(`[Drivers] ${t} positive weights:`,i.map(u=>Math.abs(u.weight))),console.log(`[Drivers] ${t} negative weights:`,n.map(u=>Math.abs(u.weight)));let c=`
    <div class="enhanced-drivers-panel ${t}">
      <div class="panel-header">
        <div class="panel-icon ${t}">${t==="ich"?"🩸":"🧠"}</div>
        <div class="panel-title">
          <h4>${e} ${l("riskFactors")}</h4>
          <span class="panel-subtitle">${l("contributingFactors")}</span>
        </div>
      </div>
      
      <div class="drivers-split-view">
        <div class="drivers-column positive-column">
          <div class="column-header">
            <span class="column-icon">↑</span>
            <span class="column-title">${l("increaseRisk")}</span>
          </div>
          <div class="compact-drivers">
  `;const m=i.reduce((u,S)=>u+Math.abs(S.weight),0);i.length>0?i.forEach((u,S)=>{const T=m>0?Math.abs(u.weight)/m*100:0,_=Math.abs(u.weight)/o*100;console.log(`[Drivers] ${t} positive driver "${u.label}": weight=${Math.abs(u.weight)}, relativeImportance=${T.toFixed(1)}%, barWidth=${_}%`);const x=Oe(u.label);c+=`
        <div class="compact-driver-item">
          <div class="compact-driver-label">${x}</div>
          <div class="compact-driver-bar positive" style="width: ${_}%">
            <span class="compact-driver-value">+${T.toFixed(0)}%</span>
          </div>
        </div>
      `;}):c+=`<div class="no-factors">${l("noPositiveFactors")}</div>`,c+=`
          </div>
        </div>
        
        <div class="drivers-column negative-column">
          <div class="column-header">
            <span class="column-icon">↓</span>
            <span class="column-title">${l("decreaseRisk")}</span>
          </div>
          <div class="compact-drivers">
  `;const d=n.reduce((u,S)=>u+Math.abs(S.weight),0);return n.length>0?n.forEach((u,S)=>{const T=d>0?Math.abs(u.weight)/d*100:0,_=Math.abs(u.weight)/o*100;console.log(`[Drivers] ${t} negative driver "${u.label}": weight=${Math.abs(u.weight)}, relativeImportance=${T.toFixed(1)}%, barWidth=${_}%`);const x=Oe(u.label);c+=`
        <div class="compact-driver-item">
          <div class="compact-driver-label">${x}</div>
          <div class="compact-driver-bar negative" style="width: ${_}%">
            <span class="compact-driver-value">-${T.toFixed(0)}%</span>
          </div>
        </div>
      `;}):c+=`<div class="no-factors">${l("noNegativeFactors")}</div>`,c+=`
          </div>
        </div>
      </div>
    </div>
  `,c;}const gi={bayern:{neurosurgicalCenters:[{id:"BY-NS-001",name:"LMU Klinikum München - Großhadern",address:"Marchioninistraße 15, 81377 München",coordinates:{lat:48.1106,lng:11.4684},phone:"+49 89 4400-0",emergency:"+49 89 4400-73331",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1440,network:"TEMPiS"},{id:"BY-NS-002",name:"Klinikum rechts der Isar München (TUM)",address:"Ismaninger Str. 22, 81675 München",coordinates:{lat:48.1497,lng:11.6052},phone:"+49 89 4140-0",emergency:"+49 89 4140-2249",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1161,network:"TEMPiS"},{id:"BY-NS-003",name:"Städtisches Klinikum München Schwabing",address:"Kölner Platz 1, 80804 München",coordinates:{lat:48.1732,lng:11.5755},phone:"+49 89 3068-0",emergency:"+49 89 3068-2050",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:648,network:"TEMPiS"},{id:"BY-NS-004",name:"Städtisches Klinikum München Bogenhausen",address:"Englschalkinger Str. 77, 81925 München",coordinates:{lat:48.1614,lng:11.6254},phone:"+49 89 9270-0",emergency:"+49 89 9270-2050",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:689,network:"TEMPiS"},{id:"BY-NS-005",name:"Universitätsklinikum Erlangen",address:"Maximiliansplatz 2, 91054 Erlangen",coordinates:{lat:49.5982,lng:11.0037},phone:"+49 9131 85-0",emergency:"+49 9131 85-39003",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1371,network:"TEMPiS"},{id:"BY-NS-006",name:"Universitätsklinikum Regensburg",address:"Franz-Josef-Strauß-Allee 11, 93053 Regensburg",coordinates:{lat:49.0134,lng:12.0991},phone:"+49 941 944-0",emergency:"+49 941 944-7501",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1042,network:"TEMPiS"},{id:"BY-NS-007",name:"Universitätsklinikum Würzburg",address:"Oberdürrbacher Str. 6, 97080 Würzburg",coordinates:{lat:49.784,lng:9.9721},phone:"+49 931 201-0",emergency:"+49 931 201-24444",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1264,network:"TEMPiS"},{id:"BY-NS-008",name:"Klinikum Nürnberg Nord",address:"Prof.-Ernst-Nathan-Str. 1, 90419 Nürnberg",coordinates:{lat:49.4521,lng:11.0767},phone:"+49 911 398-0",emergency:"+49 911 398-2369",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1368,network:"TEMPiS"},{id:"BY-NS-009",name:"Universitätsklinikum Augsburg",address:"Stenglinstr. 2, 86156 Augsburg",coordinates:{lat:48.3668,lng:10.9093},phone:"+49 821 400-01",emergency:"+49 821 400-2356",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1740,network:"TEMPiS"},{id:"BY-NS-010",name:"Klinikum Aschaffenburg-Alzenau",address:"Am Hasenkopf 1, 63739 Aschaffenburg",coordinates:{lat:49.9737,lng:9.157},phone:"+49 6021 32-0",emergency:"+49 6021 32-2800",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:40,network:"TRANSIT"},{id:"BY-NS-011",name:"Klinikum Landshut",address:"Robert-Koch-Str. 1, 84034 Landshut",coordinates:{lat:48.5665,lng:12.1512},phone:"+49 871 698-0",emergency:"+49 871 698-3333",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:505,network:"TEMPiS"},{id:"BY-NS-012",name:"Klinikum Coburg",address:"Ketschendorfer Str. 33, 96450 Coburg",coordinates:{lat:50.2596,lng:10.9644},phone:"+49 9561 22-0",emergency:"+49 9561 22-6800",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:547,network:"STENO"},{id:"BY-NS-013",name:"Klinikum Passau",address:"Bischof-Pilgrim-Str. 1, 94032 Passau",coordinates:{lat:48.5665,lng:13.4777},phone:"+49 851 5300-0",emergency:"+49 851 5300-2222",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:696,network:"TEMPiS"}],comprehensiveStrokeCenters:[{id:"BY-CS-001",name:"Klinikum Bamberg",address:"Buger Str. 80, 96049 Bamberg",coordinates:{lat:49.8988,lng:10.9027},phone:"+49 951 503-0",emergency:"+49 951 503-11101",thrombectomy:!0,thrombolysis:!0,beds:630,network:"TEMPiS"},{id:"BY-CS-002",name:"Klinikum Bayreuth",address:"Preuschwitzer Str. 101, 95445 Bayreuth",coordinates:{lat:49.9459,lng:11.5779},phone:"+49 921 400-0",emergency:"+49 921 400-5401",thrombectomy:!0,thrombolysis:!0,beds:848,network:"TEMPiS"},{id:"BY-CS-003",name:"Klinikum Coburg",address:"Ketschendorfer Str. 33, 96450 Coburg",coordinates:{lat:50.2596,lng:10.9685},phone:"+49 9561 22-0",emergency:"+49 9561 22-6300",thrombectomy:!0,thrombolysis:!0,beds:522,network:"TEMPiS"}],regionalStrokeUnits:[{id:"BY-RSU-001",name:"Goldberg-Klinik Kelheim",address:"Traubenweg 3, 93309 Kelheim",coordinates:{lat:48.9166,lng:11.8742},phone:"+49 9441 702-0",emergency:"+49 9441 702-6800",thrombolysis:!0,beds:200,network:"TEMPiS"},{id:"BY-RSU-002",name:"DONAUISAR Klinikum Deggendorf",address:"Perlasberger Str. 41, 94469 Deggendorf",coordinates:{lat:48.8372,lng:12.9619},phone:"+49 991 380-0",emergency:"+49 991 380-2201",thrombolysis:!0,beds:450,network:"TEMPiS"},{id:"BY-RSU-003",name:"Klinikum St. Elisabeth Straubing",address:"St.-Elisabeth-Str. 23, 94315 Straubing",coordinates:{lat:48.8742,lng:12.5733},phone:"+49 9421 710-0",emergency:"+49 9421 710-2000",thrombolysis:!0,beds:580,network:"TEMPiS"},{id:"BY-RSU-004",name:"Klinikum Freising",address:"Mainburger Str. 29, 85356 Freising",coordinates:{lat:48.4142,lng:11.7461},phone:"+49 8161 24-0",emergency:"+49 8161 24-2800",thrombolysis:!0,beds:380,network:"TEMPiS"},{id:"BY-RSU-005",name:"Klinikum Landkreis Erding",address:"Bajuwarenstr. 5, 85435 Erding",coordinates:{lat:48.3061,lng:11.9067},phone:"+49 8122 59-0",emergency:"+49 8122 59-2201",thrombolysis:!0,beds:350,network:"TEMPiS"},{id:"BY-RSU-006",name:"Helios Amper-Klinikum Dachau",address:"Krankenhausstr. 15, 85221 Dachau",coordinates:{lat:48.2599,lng:11.4342},phone:"+49 8131 76-0",emergency:"+49 8131 76-2201",thrombolysis:!0,beds:480,network:"TEMPiS"},{id:"BY-RSU-007",name:"Klinikum Fürstenfeldbruck",address:"Dachauer Str. 33, 82256 Fürstenfeldbruck",coordinates:{lat:48.1772,lng:11.2578},phone:"+49 8141 99-0",emergency:"+49 8141 99-2201",thrombolysis:!0,beds:420,network:"TEMPiS"},{id:"BY-RSU-008",name:"Klinikum Ingolstadt",address:"Krumenauerstraße 25, 85049 Ingolstadt",coordinates:{lat:48.7665,lng:11.4364},phone:"+49 841 880-0",emergency:"+49 841 880-2201",thrombolysis:!0,beds:665,network:"TEMPiS"},{id:"BY-RSU-009",name:"Klinikum Passau",address:"Bischof-Pilgrim-Str. 1, 94032 Passau",coordinates:{lat:48.5665,lng:13.4513},phone:"+49 851 5300-0",emergency:"+49 851 5300-2100",thrombolysis:!0,beds:540,network:"TEMPiS"},{id:"BY-RSU-010",name:"Klinikum Landshut",address:"Robert-Koch-Str. 1, 84034 Landshut",coordinates:{lat:48.5436,lng:12.1619},phone:"+49 871 698-0",emergency:"+49 871 698-3333",thrombolysis:!0,beds:790,network:"TEMPiS"},{id:"BY-RSU-011",name:"RoMed Klinikum Rosenheim",address:"Pettenkoferstr. 10, 83022 Rosenheim",coordinates:{lat:47.8567,lng:12.1265},phone:"+49 8031 365-0",emergency:"+49 8031 365-3711",thrombolysis:!0,beds:870,network:"TEMPiS"},{id:"BY-RSU-012",name:"Klinikum Memmingen",address:"Bismarckstr. 23, 87700 Memmingen",coordinates:{lat:47.9833,lng:10.1833},phone:"+49 8331 70-0",emergency:"+49 8331 70-2500",thrombolysis:!0,beds:520,network:"TEMPiS"},{id:"BY-RSU-013",name:"Klinikum Kempten-Oberallgäu",address:"Robert-Weixler-Str. 50, 87439 Kempten",coordinates:{lat:47.7261,lng:10.3097},phone:"+49 831 530-0",emergency:"+49 831 530-2201",thrombolysis:!0,beds:650,network:"TEMPiS"},{id:"BY-RSU-014",name:"Klinikum Aschaffenburg-Alzenau",address:"Am Hasenkopf 1, 63739 Aschaffenburg",coordinates:{lat:49.9747,lng:9.1581},phone:"+49 6021 32-0",emergency:"+49 6021 32-2700",thrombolysis:!0,beds:590,network:"TEMPiS"}],thrombolysisHospitals:[{id:"BY-TH-001",name:"Krankenhaus Vilsbiburg",address:"Sonnenstraße 10, 84137 Vilsbiburg",coordinates:{lat:48.6333,lng:12.2833},phone:"+49 8741 60-0",thrombolysis:!0,beds:180},{id:"BY-TH-002",name:"Krankenhaus Eggenfelden",address:"Pfarrkirchener Str. 5, 84307 Eggenfelden",coordinates:{lat:48.4,lng:12.7667},phone:"+49 8721 98-0",thrombolysis:!0,beds:220}]},badenWuerttemberg:{neurosurgicalCenters:[{id:"BW-NS-001",name:"Universitätsklinikum Freiburg",address:"Hugstetter Str. 55, 79106 Freiburg",coordinates:{lat:48.0025,lng:7.8347},phone:"+49 761 270-0",emergency:"+49 761 270-34010",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1600,network:"FAST"},{id:"BW-NS-002",name:"Universitätsklinikum Heidelberg",address:"Im Neuenheimer Feld 400, 69120 Heidelberg",coordinates:{lat:49.4178,lng:8.6706},phone:"+49 6221 56-0",emergency:"+49 6221 56-36643",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1621,network:"FAST"},{id:"BW-NS-003",name:"Universitätsklinikum Tübingen",address:"Geissweg 3, 72076 Tübingen",coordinates:{lat:48.5378,lng:9.0538},phone:"+49 7071 29-0",emergency:"+49 7071 29-82211",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1550,network:"FAST"},{id:"BW-NS-004",name:"Universitätsklinikum Ulm",address:"Albert-Einstein-Allee 23, 89081 Ulm",coordinates:{lat:48.4196,lng:9.9592},phone:"+49 731 500-0",emergency:"+49 731 500-63001",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1264,network:"FAST"},{id:"BW-NS-005",name:"Klinikum Stuttgart - Katharinenhospital",address:"Kriegsbergstraße 60, 70174 Stuttgart",coordinates:{lat:48.7784,lng:9.1682},phone:"+49 711 278-0",emergency:"+49 711 278-32001",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:950,network:"FAST"},{id:"BW-NS-006",name:"Städtisches Klinikum Karlsruhe",address:"Moltkestraße 90, 76133 Karlsruhe",coordinates:{lat:49.0047,lng:8.3858},phone:"+49 721 974-0",emergency:"+49 721 974-2301",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1570,network:"FAST"},{id:"BW-NS-007",name:"Klinikum Ludwigsburg",address:"Posilipostraße 4, 71640 Ludwigsburg",coordinates:{lat:48.8901,lng:9.1953},phone:"+49 7141 99-0",emergency:"+49 7141 99-67201",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:720,network:"FAST"}],comprehensiveStrokeCenters:[{id:"BW-CS-001",name:"Universitätsmedizin Mannheim",address:"Theodor-Kutzer-Ufer 1-3, 68167 Mannheim",coordinates:{lat:49.4828,lng:8.4664},phone:"+49 621 383-0",emergency:"+49 621 383-2251",thrombectomy:!0,thrombolysis:!0,beds:1400,network:"FAST"}],regionalStrokeUnits:[{id:"BW-RSU-001",name:"Robert-Bosch-Krankenhaus Stuttgart",address:"Auerbachstraße 110, 70376 Stuttgart",coordinates:{lat:48.7447,lng:9.2294},phone:"+49 711 8101-0",emergency:"+49 711 8101-3456",thrombolysis:!0,beds:850,network:"FAST"}],thrombolysisHospitals:[]},nordrheinWestfalen:{neurosurgicalCenters:[{id:"NRW-NS-001",name:"Universitätsklinikum Düsseldorf",address:"Moorenstraße 5, 40225 Düsseldorf",coordinates:{lat:51.1906,lng:6.8064},phone:"+49 211 81-0",emergency:"+49 211 81-17700",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1300,network:"NEVANO+"},{id:"NRW-NS-002",name:"Universitätsklinikum Köln",address:"Kerpener Str. 62, 50937 Köln",coordinates:{lat:50.9253,lng:6.9187},phone:"+49 221 478-0",emergency:"+49 221 478-32500",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1500,network:"NEVANO+"},{id:"NRW-NS-003",name:"Universitätsklinikum Essen",address:"Hufelandstraße 55, 45147 Essen",coordinates:{lat:51.4285,lng:7.0073},phone:"+49 201 723-0",emergency:"+49 201 723-84444",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1350,network:"NEVANO+"},{id:"NRW-NS-004",name:"Universitätsklinikum Münster",address:"Albert-Schweitzer-Campus 1, 48149 Münster",coordinates:{lat:51.9607,lng:7.6261},phone:"+49 251 83-0",emergency:"+49 251 83-47255",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1513,network:"NEVANO+"},{id:"NRW-NS-005",name:"Universitätsklinikum Bonn",address:"Venusberg-Campus 1, 53127 Bonn",coordinates:{lat:50.6916,lng:7.1127},phone:"+49 228 287-0",emergency:"+49 228 287-15107",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1200,network:"NEVANO+"},{id:"NRW-NS-006",name:"Klinikum Dortmund",address:"Beurhausstraße 40, 44137 Dortmund",coordinates:{lat:51.5036,lng:7.4663},phone:"+49 231 953-0",emergency:"+49 231 953-20050",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:1200,network:"NVNR"},{id:"NRW-NS-007",name:"Rhein-Maas Klinikum Würselen",address:"Mauerfeldstraße 25, 52146 Würselen",coordinates:{lat:50.8178,lng:6.1264},phone:"+49 2405 62-0",emergency:"+49 2405 62-2222",neurosurgery:!0,thrombectomy:!0,thrombolysis:!0,beds:420,network:"NEVANO+"}],comprehensiveStrokeCenters:[{id:"NRW-CS-001",name:"Universitätsklinikum Aachen",address:"Pauwelsstraße 30, 52074 Aachen",coordinates:{lat:50.778,lng:6.0614},phone:"+49 241 80-0",emergency:"+49 241 80-89611",thrombectomy:!0,thrombolysis:!0,beds:1400,network:"NEVANO+"}],regionalStrokeUnits:[{id:"NRW-RSU-001",name:"Helios Universitätsklinikum Wuppertal",address:"Heusnerstraße 40, 42283 Wuppertal",coordinates:{lat:51.2467,lng:7.1703},phone:"+49 202 896-0",emergency:"+49 202 896-2180",thrombolysis:!0,beds:1050,network:"NEVANO+"}],thrombolysisHospitals:[{id:"NRW-TH-009",name:"Elisabeth-Krankenhaus Essen",address:"Klara-Kopp-Weg 1, 45138 Essen",coordinates:{lat:51.4495,lng:7.0137},phone:"+49 201 897-0",thrombolysis:!0,beds:583},{id:"NRW-TH-010",name:"Klinikum Oberberg Gummersbach",address:"Wilhelm-Breckow-Allee 20, 51643 Gummersbach",coordinates:{lat:51.0277,lng:7.5694},phone:"+49 2261 17-0",thrombolysis:!0,beds:431},{id:"NRW-TH-011",name:"St. Vincenz-Krankenhaus Limburg",address:"Auf dem Schafsberg, 65549 Limburg",coordinates:{lat:50.3856,lng:8.0584},phone:"+49 6431 292-0",thrombolysis:!0,beds:452},{id:"NRW-TH-012",name:"Klinikum Lüdenscheid",address:"Paulmannshöher Straße 14, 58515 Lüdenscheid",coordinates:{lat:51.2186,lng:7.6298},phone:"+49 2351 46-0",thrombolysis:!0,beds:869}]}},qa={routePatient(a){const{location:e,state:t,ichProbability:s,timeFromOnset:r,clinicalFactors:i}=a,n=t||this.detectState(e),o=gi[n];if(s>=.5){const m=this.findNearest(e,o.neurosurgicalCenters);if(!m)throw new Error(`No neurosurgical centers available in ${n}`);return{category:"NEUROSURGICAL_CENTER",destination:m,urgency:"IMMEDIATE",reasoning:"High bleeding probability (≥50%) - neurosurgical evaluation required",preAlert:"Activate neurosurgery team",bypassLocal:!0,threshold:"≥50%",state:n};}if(s>=.3){const m=[...o.neurosurgicalCenters,...o.comprehensiveStrokeCenters];return{category:"COMPREHENSIVE_CENTER",destination:this.findNearest(e,m),urgency:"URGENT",reasoning:"Intermediate bleeding risk (30-50%) - CT and possible intervention",preAlert:"Prepare for possible neurosurgical consultation",transferPlan:this.findNearest(e,o.neurosurgicalCenters),threshold:"30-50%",state:n};}if(r&&r<=270){const m=[...o.neurosurgicalCenters,...o.comprehensiveStrokeCenters,...o.regionalStrokeUnits,...o.thrombolysisHospitals];return{category:"THROMBOLYSIS_CAPABLE",destination:this.findNearest(e,m),urgency:"TIME_CRITICAL",reasoning:"Low bleeding risk (<30%), within tPA window - nearest thrombolysis",preAlert:"Prepare for thrombolysis protocol",bypassLocal:!1,threshold:"<30%",timeWindow:"≤4.5h",state:n};}const c=[...o.neurosurgicalCenters,...o.comprehensiveStrokeCenters,...o.regionalStrokeUnits];return{category:"STROKE_UNIT",destination:this.findNearest(e,c),urgency:"STANDARD",reasoning:r>270?"Low bleeding risk, outside tPA window - standard stroke evaluation":"Low bleeding risk - standard stroke evaluation",preAlert:"Standard stroke protocol",bypassLocal:!1,threshold:"<30%",timeWindow:r?">4.5h":"unknown",state:n};},detectState(a){return a.lat>=47.5&&a.lat<=49.8&&a.lng>=7.5&&a.lng<=10.2?"badenWuerttemberg":a.lat>=50.3&&a.lat<=52.5&&a.lng>=5.9&&a.lng<=9.5?"nordrheinWestfalen":a.lat>=47.2&&a.lat<=50.6&&a.lng>=10.2&&a.lng<=13.8?"bayern":this.findNearestState(a);},findNearestState(a){const e={bayern:{lat:49,lng:11.5},badenWuerttemberg:{lat:48.5,lng:9},nordrheinWestfalen:{lat:51.5,lng:7.5}};let t="bayern",s=1/0;for(const[r,i]of Object.entries(e)){const n=this.calculateDistance(a,i);n<s&&(s=n,t=r);}return t;},findNearest(a,e){return!e||e.length===0?null:e.map(t=>!t.coordinates||typeof t.coordinates.lat!="number"?null:{...t,distance:this.calculateDistance(a,t.coordinates)}).filter(t=>t!==null).sort((t,s)=>t.distance-s.distance)[0];},calculateDistance(a,e){const s=this.toRad(e.lat-a.lat),r=this.toRad(e.lng-a.lng),i=Math.sin(s/2)*Math.sin(s/2)+Math.cos(this.toRad(a.lat))*Math.cos(this.toRad(e.lat))*Math.sin(r/2)*Math.sin(r/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)));},toRad(a){return a*(Math.PI/180);}};function $t(a,e,t,s){const i=_e(t-a),n=_e(s-e),o=Math.sin(i/2)*Math.sin(i/2)+Math.cos(_e(a))*Math.cos(_e(t))*Math.sin(n/2)*Math.sin(n/2);return 6371*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)));}function _e(a){return a*(Math.PI/180);}async function pi(a,e,t,s,r="driving-car"){try{const i=`https://api.openrouteservice.org/v2/directions/${r}`,o=await fetch(i,{method:"POST",headers:{Accept:"application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",Authorization:"5b3ce3597851110001cf624868c4c27b63ae476c9c26c8bffbc35688","Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({coordinates:[[e,a],[s,t]],radiuses:[1e3,1e3],format:"json"})});if(!o.ok)throw new Error(`Routing API error: ${o.status}`);const c=await o.json();if(c.routes&&c.routes.length>0){const m=c.routes[0];return{duration:Math.round(m.summary.duration/60),distance:Math.round(m.summary.distance/1e3),source:"routing"};}throw new Error("No route found");}catch(i){let n="estimated";i.name==="TypeError"&&i.message.includes("Failed to fetch")?(console.info("[TravelTime] OpenRouteService blocked by CORS, using distance estimation"),n="cors-fallback"):i.message.includes("signal")?(console.info("[TravelTime] OpenRouteService timeout, using distance estimation"),n="timeout-fallback"):(console.info("[TravelTime] OpenRouteService error, using distance estimation:",i.message),n="error-fallback");const o=$t(a,e,t,s);return{duration:Math.round(o/.8),distance:Math.round(o),source:n};}}async function Ka(a,e,t,s){try{const r=await pi(a,e,t,s,"driving-car");return{duration:Math.round(r.duration*.75),distance:r.distance,source:r.source==="routing"?"emergency-routing":"emergency-estimated"};}catch(r){const i=$t(a,e,t,s);return{duration:Math.round(i/1.2),distance:Math.round(i),source:"emergency-estimated"};}}function fi(a,e){const t=Number(a),s=Nt[e];return t>=s.high?"🔴 HIGH RISK":t>=s.medium?"🟡 MEDIUM RISK":"🟢 LOW RISK";}function Ft(){const a=h.getState(),{formData:e}=a;if(!e||Object.keys(e).length===0)return"";let t="";return Object.entries(e).forEach(([s,r])=>{if(r&&Object.keys(r).length>0){const i=l(`${s}ModuleTitle`)||s.charAt(0).toUpperCase()+s.slice(1);let n="";Object.entries(r).forEach(([o,c])=>{if(c===""||c===null||c===void 0)return;const m=ui(o),d=mi(c,o);n+=`
          <div class="flex justify-between items-center py-2 border-b border-gray-700">
            <span class="font-medium text-gray-200">${m}:</span>
            <span class="text-gray-300">${d}</span>
          </div>
        `;}),n&&(t+=`
          <div class="bg-gray-800 rounded-lg shadow-md p-4 mb-6">
            <h4 class="text-lg font-semibold text-white mb-3">${i}</h4>
            <div class="space-y-2">
              ${n}
            </div>
          </div>
        `);}}),t?`
    <div class="bg-gray-900 text-white rounded-lg shadow-lg p-6">
      <h3 class="text-xl font-semibold flex items-center gap-2 mb-2">
        📋 ${l("inputSummaryTitle")}
      </h3>
      <p class="text-gray-400 mb-4">${l("inputSummarySubtitle")}</p>
      <div class="space-y-6">
        ${t}
      </div>
    </div>
  `:"";}function Ye(a,e,t){if(!e)return console.log(`[RiskCard] No data for ${a}`),"";const s=Math.round((e.probability||0)*100);console.log(`[RiskCard] ${a} - probability: ${e.probability}, percent: ${s}%`);const r=fi(s,a),i=s>70,n=s>Nt[a].high,o={ich:"🩸",lvo:"🧠"},c={ich:l("ichProbability"),lvo:l("lvoProbability")},m=i?"critical":n?"high":"normal",d=m==="critical"?"#ff4444":m==="high"?"#ff8800":"#0066cc";return`
    <div class="bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center gap-4 enhanced-risk-card ${a} ${m}">
      
      <!-- Icon & Title -->
      <div class="flex items-center gap-3">
        <div class="text-3xl">${o[a]}</div>
        <div>
          <h3 class="text-lg font-semibold">${c[a]}</h3>
          <div class="text-sm text-gray-300">${r}</div>
        </div>
      </div>

      <!-- Probability Circle -->
      <div class="ml-auto">
        <svg viewBox="0 0 120 120" class="w-24 h-24">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="8"/>
          <circle cx="60" cy="60" r="50" fill="none"
            stroke="${d}"
            stroke-width="8"
            stroke-dasharray="${Math.PI*100}"
            stroke-dashoffset="${Math.PI*100*(1-s/100)}"
            stroke-linecap="round"
            transform="rotate(-90 60 60)"/>
          <text x="60" y="60" text-anchor="middle" dominant-baseline="middle"
            class="font-bold text-white text-xl">
            ${s}%
          </text>
        </svg>
        <div class="text-center mt-2 text-sm">${a==="ich"?"ICH Risk":"LVO Risk"}</div>
      </div>
    </div>
  `;}function yi(a){const e=a.gfap_value||Qe();if(!e||e<=0)return"";const t=xt(e);return`
    <div class="volume-display-container">
      ${hs(t)}
    </div>
  `;}function Qe(){var t;const a=h.getState(),{formData:e}=a;for(const s of["coma","limited","full"])if((t=e[s])!=null&&t.gfap_value)return parseFloat(e[s].gfap_value);return 0;}function bi(a,e){var t;try{if(!a)return console.error("renderResults: No results data provided"),`
        <div class="container mx-auto px-4 py-6 max-w-md">
          <div class="error-message">
            <h2>No Results Available</h2>
            <p>Please complete an assessment first.</p>
            <button class="primary" onclick="window.location.reload()">Start Over</button>
          </div>
        </div>
      `;const{ich:s,lvo:r}=a,i=Ti(s),n=i!=="coma"?ki(a):null;n&&ke(i)&&cs(s,n,$e());const o=(s==null?void 0:s.module)==="Limited"||(s==null?void 0:s.module)==="Coma"||(r==null?void 0:r.notPossible)===!0,c=(s==null?void 0:s.module)==="Full Stroke"||((t=s==null?void 0:s.module)==null?void 0:t.includes("Full"));let m;return console.log("[Results] ICH data:",s),console.log("[Results] LVO data:",r),console.log("[Results] ICH module:",s==null?void 0:s.module),console.log("[Results] isLimitedOrComa:",o),console.log("[Results] isFullModule:",c),o?m=vi(s,a,e,n,i):m=Si(s,r,a,e,n,i),setTimeout(async()=>{console.log("[Results] Initializing volume animations..."),ms();try{const{mountIslands:d}=await se(async()=>{const{mountIslands:u}=await Promise.resolve().then(()=>ta);return{mountIslands:u};},void 0);d();}catch(d){}},100),m;}catch(s){return console.error("Error in renderResults:",s),`
      <div class="container">
        <div class="error-message">
          <h2>Error Displaying Results</h2>
          <p>There was an error displaying the results. Error: ${s.message}</p>
          <button class="primary" onclick="window.location.reload()">Start Over</button>
        </div>
      </div>
    `;}}function vi(a,e,t,s,r){const i=a&&a.probability>.6?Ot():"",n=Math.round(((a==null?void 0:a.probability)||0)*100),o=Rt(),c=Ft(),m=ke(r)?Mt():"",d=s&&ke(r)?_t(a,s,$e()):"",u=(a==null?void 0:a.module)==="Coma"?Ei(a.probability):"",S=(a==null?void 0:a.module)!=="Coma"?Ht(a.probability):"";return`
    <div class="mx-auto px-4 py-6 space-y-6 max-w-md">

      ${le(3)}

      <h2 class="text-2xl font-bold text-gray-800">${l("bleedingRiskAssessment")||"Blutungsrisiko-Bewertung / Bleeding Risk Assessment"}</h2>

      ${i}

      <!-- Single ICH Risk Card -->
      <div class="bg-white shadow rounded-lg p-4">
        ${Ye("ich",a)}
      </div>

      <!-- ICH Volume Card (Coma only) -->
      ${(a==null?void 0:a.module)==="Coma"&&n>=50?`<div class="bg-white shadow rounded-lg p-4">
               ${Vt(a)}
             </div>`:""}

      <!-- Alternative Diagnoses for Coma Module -->
      ${u}

      <!-- Differential Diagnoses for Stroke Modules -->
      ${S}

      <!-- Research Model Comparison -->
      ${d}

      <!-- ICH Drivers Only (not shown for Coma module) -->
      ${(a==null?void 0:a.module)!=="Coma"?`<div class="bg-white shadow rounded-lg p-4">
               <h3 class="text-xl font-semibold mb-2">${l("riskFactorsTitle")||"Hauptrisikofaktoren / Main Risk Factors"}</h3>
               ${zt(a)}
             </div>`:""}

      <div class="space-y-2 mt-6">
        <button class="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded info-toggle" data-target="input-summary">
          <span class="flex items-center gap-2">📋 ${l("inputSummaryTitle")}</span>
          <span>▼</span> 
        </button>
        <div class="hidden bg-white shadow rounded p-4" id="input-summary">
          ${c}
        </div>

        <button class="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded info-toggle" data-target="stroke-centers">
          <span class="flex items-center gap-2">🏥 ${l("nearestCentersTitle")}</span>
          <span>▼</span>
        </button>
        <div class="hidden bg-white shadow rounded p-4" id="stroke-centers">
          ${o}
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-4 mt-6">
          <button type="button" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full" id="printResults">📄 ${l("printResults")}</button>
          <button type="button" class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 w-full" data-action="reset">${l("newAssessment")}</button>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <button type="button" class="bg-gray-100 text-gray-700 px-3 py-2 rounded hover:bg-gray-200" data-action="goBack">← ${l("goBack")}</button>
          <button type="button" class="bg-gray-100 text-gray-700 px-3 py-2 rounded hover:bg-gray-200" data-action="goHome">🏠 ${l("goHome")}</button>
      </div>
      <!-- Disclaimer -->
      <div class="text-sm text-gray-500 mt-4">
        <strong>⚠️ ${l("importantNote")}:</strong> ${l("importantText")} Results generated at ${new Date().toLocaleTimeString()}.
      </div>

      ${Bt(a)}
      ${m}
    </div>
  `;}function Si(a,e,t,s,r,i){var Y,de;const n=Math.round(((a==null?void 0:a.probability)||0)*100),o=Math.round(((e==null?void 0:e.probability)||0)*100);console.log("[FullModuleResults] ICH probability:",a==null?void 0:a.probability,"-> %:",n),console.log("[FullModuleResults] LVO probability:",e==null?void 0:e.probability,"-> %:",o);const c=a&&a.probability>.6?Ot():"",m=Rt(),d=Ft(),u=ke(i)?Mt():"",S=r&&ke(i)?_t(a,r,$e()):"",T=h.getState(),_=parseInt((de=(Y=T.formData)==null?void 0:Y.full)==null?void 0:de.fast_ed_score)||0,x=i==="full"||(a==null?void 0:a.module)==="Full",$=e&&typeof e.probability=="number"&&!e.notPossible,M=x&&_>3&&$,X=n>=50,W=o/Math.max(n,.5),ce=W>=.6&&W<=1.7,G=x&&n>=50&&o>=50&&!ce,F=x&&n>=30&&o>=30;let U=1;M&&U++,X&&U++;const q=U===1?"risk-results-single":U===2?"risk-results-dual":"risk-results-triple",Te=Ht(a.probability);return`
    <div class="container">
      ${le(3)}
      <h2>${l("resultsTitle")}</h2>
      ${c}
      
      <!-- Risk Assessment Display -->
      <div class="${q}">
        ${Ye("ich",a)}
        ${M?Ye("lvo",e):""}
        ${X?Vt(a):""}
      </div>
      
      <!-- Treatment Decision Gauge (when strong signal) -->
      ${F?Ai(n,o):""}
      ${!F&&G?wi(n,o,W):""}
      
      <!-- Differential Diagnoses for Stroke Modules -->
      ${Te}
      
      <!-- Research Model Comparison (hidden unless research mode) -->
      ${S}
      
      <!-- Risk Factor Drivers -->
      <div class="enhanced-drivers-section">
        <h3>${l("riskFactorsTitle")||"Risikofaktoren / Risk Factors"}</h3>
        ${M?hi(a,e):zt(a)}
      </div>
      
      <!-- Collapsible Additional Information -->
      <div class="additional-info-section">
        <button class="info-toggle" data-target="input-summary">
          <span class="toggle-icon">📋</span>
          <span class="toggle-text">${l("inputSummaryTitle")}</span>
          <span class="toggle-arrow">▼</span>
        </button>
        <div class="collapsible-content" id="input-summary" style="display: none;">
          ${d}
        </div>
        
        <button class="info-toggle" data-target="stroke-centers">
          <span class="toggle-icon">🏥</span>
          <span class="toggle-text">${l("nearestCentersTitle")}</span>
          <span class="toggle-arrow">▼</span>
        </button>
        <div class="collapsible-content" id="stroke-centers" style="display: none;">
          ${m}
        </div>
      </div>
      
      <div class="results-actions">
        <div class="primary-actions">
          <button type="button" class="primary" id="printResults"> 📄 ${l("printResults")} </button>
          <button type="button" class="secondary" data-action="reset"> ${l("newAssessment")} </button>
        </div>
        <div class="navigation-actions">
          <button type="button" class="tertiary" data-action="goBack"> ← ${l("goBack")} </button>
          <button type="button" class="tertiary" data-action="goHome"> 🏠 ${l("goHome")} </button>
        </div>
      </div>
      
      <div class="disclaimer">
        <strong>⚠️ ${l("importantNote")}:</strong> ${l("importantText")} Results generated at ${new Date().toLocaleTimeString()}.
      </div>
      
      ${Bt(a)}
      ${u}
    </div>
  `;}function wi(a,e,t){const s=t>1?"LVO":"ICH",r=s==="LVO"?"🧠":"🩸",i=j.getCurrentLanguage()==="de"?s==="LVO"?"LVO-dominant":"ICH-dominant":s==="LVO"?"LVO dominant":"ICH dominant",n=j.getCurrentLanguage()==="de"?`Verhältnis LVO/ICH: ${t.toFixed(2)}`:`LVO/ICH ratio: ${t.toFixed(2)}`;return`
    <div class="tachometer-section">
      <div class="tachometer-card">
        <div class="treatment-recommendation ${s==="LVO"?"lvo-dominant":"ich-dominant"}">
          <div class="recommendation-icon">${r}</div>
          <div class="recommendation-text">
            <h4>${i}</h4>
            <p>${n}</p>
          </div>
          <div class="probability-summary">
            ICH: ${a}% | LVO: ${e}%
          </div>
        </div>
      </div>
    </div>
  `;}function zt(a){if(!a||!a.drivers)return"<p class=\"no-drivers\">No driver data available</p>";const e=a.drivers;if(!e.positive&&!e.negative)return"<p class=\"no-drivers\">Driver format error</p>";const t=e.positive||[],s=e.negative||[];return`
    <div class="drivers-split-view">
      <div class="drivers-column positive-column">
        <div class="column-header">
          <span class="column-icon">⬆</span>
          <span class="column-title">${l("increasingRisk")||"Risikoerhöhend / Increasing Risk"}</span>
        </div>
        <div class="compact-drivers">
          ${t.length>0?t.slice(0,5).map(r=>St(r,"positive")).join(""):`<p class="no-factors">${l("noFactors")||"Keine Faktoren / No factors"}</p>`}
        </div>
      </div>
      
      <div class="drivers-column negative-column">
        <div class="column-header">
          <span class="column-icon">⬇</span>
          <span class="column-title">${l("decreasingRisk")||"Risikomindernd / Decreasing Risk"}</span>
        </div>
        <div class="compact-drivers">
          ${s.length>0?s.slice(0,5).map(r=>St(r,"negative")).join(""):`<p class="no-factors">${l("noFactors")||"Keine Faktoren / No factors"}</p>`}
        </div>
      </div>
    </div>
  `;}function St(a,e){const t=Math.abs(a.weight*100),s=Math.min(t*2,100);return`
    <div class="compact-driver-item">
      <div class="compact-driver-label">${Oe(a.label)}</div>
      <div class="compact-driver-bar ${e}" style="width: ${s}%;">
        <span class="compact-driver-value">${t.toFixed(1)}%</span>
      </div>
    </div>
  `;}function Bt(a){if(!a||!a.probability||Math.round((a.probability||0)*100)<50)return"";const t=Qe();return!t||t<=0?"":`
    <div class="bibliography-section">
      <h4>${l("references")}</h4>
      <div class="citations">
        <div class="citation">
          <span class="citation-number">¹</span>
          <span class="citation-text">Broderick et al. (1993). Volume of intracerebral hemorrhage. A powerful and easy-to-use predictor of 30-day mortality. Stroke, 24(7), 987-993.</span>
        </div>
        <div class="citation">
          <span class="citation-number">²</span>
          <span class="citation-text">Krishnan et al. (2013). Hematoma expansion in intracerebral hemorrhage: Predictors and outcomes. Neurology, 81(19), 1660-1666.</span>
        </div>
        <div class="citation">
          <span class="citation-number">³</span>
          <span class="citation-text">Putra et al. (2020). Functional outcomes and mortality in patients with intracerebral hemorrhage. Critical Care Medicine, 48(3), 347-354.</span>
        </div>
        <div class="citation">
          <span class="citation-number">⁴</span>
          <span class="citation-text">Tangella et al. (2020). Early prediction of mortality in intracerebral hemorrhage using clinical markers. Journal of Neurocritical Care, 13(2), 89-97.</span>
        </div>
      </div>
    </div>
  `;}function ki(a){try{const e=$e();return!e.age||!e.gfap?null:ds(e);}catch(e){return null;}}function $e(){const a=h.getState(),{formData:e}=a;let t=null,s=null;for(const i of["coma","limited","full"])e[i]&&(t=t||e[i].age_years,s=s||e[i].gfap_value);return{age:parseInt(t)||null,gfap:parseFloat(s)||null};}function Ht(a){return Math.round(a*100)<=25?"":`
    <div class="alternative-diagnosis-card">
      <div class="diagnosis-header">
        <span class="diagnosis-icon">⚡</span>
        <h3 class="diagnosis-title">${l("differentialDiagnoses")}</h3>
      </div>

      <div class="diagnosis-body">
        <!-- Time Window Confirmation - Clinical Action -->
        <h4 class="clinical-action">${l("reconfirmTimeWindow")}</h4>
        
        <!-- Actual Differential Diagnoses -->
        <ul class="diagnosis-list">
          <li>${l("unclearTimeWindow")}</li>
          <li>${l("rareDiagnoses")}</li>
        </ul>
      </div>
    </div>
  `;}function Ei(a){const e=Math.round(a*100),t=j.getCurrentLanguage()==="de",s=[t?"Alternative Diagnosen sind SAB, SDH, EDH (Subarachnoidalblutung, Subduralhämatom, Epiduralhämatom)":"Alternative diagnoses include SAH, SDH, EDH (Subarachnoid Hemorrhage, Subdural Hematoma, Epidural Hematoma)",t?"Bei unklarem Zeitfenster seit Symptombeginn oder im erweiterten Zeitfenster kommen auch ein demarkierter Infarkt oder hypoxischer Hirnschaden in Frage":"In cases of unclear time window since symptom onset or extended time window, demarcated infarction or hypoxic brain injury should also be considered"],r=[t?"Alternative Diagnose von Vigilanzminderung wahrscheinlich":"Alternative diagnosis for reduced consciousness likely",t?"Ein Verschluss der Arteria Basilaris ist nicht ausgeschlossen":"Basilar artery occlusion cannot be excluded"],i=e>25?s:r;return`
    <div class="alternative-diagnosis-card">
      <div class="diagnosis-header">
        <span class="diagnosis-icon">⚡</span>
        <h3 class="diagnosis-title">${t?"Differentialdiagnosen":"Differential Diagnoses"}</h3>
      </div>
      <div class="diagnosis-body">
        <ul class="diagnosis-list">
          ${i.map(n=>`<li>${n}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;}function Ti(a){if(!(a!=null&&a.module))return"unknown";const e=a.module.toLowerCase();return e.includes("coma")?"coma":e.includes("limited")?"limited":e.includes("full")?"full":"unknown";}function Vt(a){const e=Qe();if(!e||e<=0)return"";const t=xt(e),s=os(t);return Math.round(((a==null?void 0:a.probability)||0)*100),`
    <div class="enhanced-risk-card volume-card normal">
      <div class="risk-header">
        <div class="risk-icon">🧮</div>
        <div class="risk-title">
          <h3>${l("ichVolumeLabel")}</h3>
        </div>
      </div>
      
      <div class="risk-probability">
        <div class="circles-container">
          <div class="rings-row">
            <div class="circle-item">
              ${yi(a)}
              <div class="circle-label">${l("ichVolumeLabel")}</div>
            </div>
          </div>
        </div>
        
        <div class="risk-assessment">
          <div class="mortality-assessment">
            ${l("predictedMortality")}: ${s}
          </div>
      </div>
    </div>
  </div>
  `;}function Ai(a,e){const t=e/Math.max(a,1);return`
    <div class="tachometer-section">
      <div class="tachometer-card">
        <div class="tachometer-header">
          <h3>🎯 ${j.getCurrentLanguage()==="de"?"Entscheidungshilfe – LVO/ICH":"Decision Support – LVO/ICH"}</h3>
          <div class="ratio-display">LVO/ICH Ratio: ${t.toFixed(2)}</div>
        </div>
        
        <div class="tachometer-gauge" id="tachometer-canvas-container">
          <div data-react-tachometer data-ich="${a}" data-lvo="${e}" data-title="${j.getCurrentLanguage()==="de"?"Entscheidungshilfe – LVO/ICH":"Decision Support – LVO/ICH"}"></div>
        </div>

        <!-- Legend chips for zones -->
        <div class="tachometer-legend" aria-hidden="true">
          <span class="legend-chip ich">ICH</span>
          <span class="legend-chip uncertain">${j.getCurrentLanguage()==="de"?"Unsicher":"Uncertain"}</span>
          <span class="legend-chip lvo">LVO</span>
        </div>

        <!-- Metrics row: ratio, confidence, absolute difference -->
        <div class="metrics-row" role="group" aria-label="Tachometer metrics">
          <div class="metric-card">
            <div class="metric-label">Ratio</div>
            <div class="metric-value">${t.toFixed(2)}</div>
            <div class="metric-unit">LVO/ICH</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Confidence</div>
            <div class="metric-value">${(()=>{const s=Math.abs(e-a),r=Math.max(e,a);let i=s<10?Math.round(30+r*.3):s<20?Math.round(50+r*.4):Math.round(70+r*.3);return i=Math.max(0,Math.min(100,i)),i;})()}%</div>
            <div class="metric-unit">percent</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Difference</div>
            <div class="metric-value">${Math.abs(e-a).toFixed(0)}%</div>
            <div class="metric-unit">|LVO − ICH|</div>
          </div>
        </div>
        
        <div class="probability-summary">
          ICH: ${a}% | LVO: ${e}%
        </div>
        
        <!-- Hidden probability summary for initialization -->
        <div class="probability-summary" style="display: none;">
          ICH: ${a}% | LVO: ${e}%
        </div>
      </div>
    </div>
  `;}function Ii(){return`
    <div class="flex items-center justify-center bg-gray-100 p-4 m-2">
      <div class="bg-white shadow-lg rounded-2xl w-full max-w-xl p-8">

        <!-- Header -->
        <div class="text-center mb-6">
          <div class="flex justify-center items-center space-x-2">
            <div class="text-3xl">🧠</div>
            <h1 class="text-2xl font-bold">iGFAP Stroke Triage</h1>
          </div>
          <div class="mt-1 text-sm text-gray-500">Research Preview v2.1</div>
        </div>

        <!-- Research Access Notice -->
        <div class="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <h2 class="font-semibold text-lg mb-1">🔬 Research Access Required</h2>
          <p class="text-gray-700 text-sm mb-2">This is a research preview of the iGFAP Stroke Triage Assistant for clinical validation.</p>
          <div class="bg-yellow-100 p-2 rounded border border-yellow-200 text-sm text-gray-800">
            <h3 class="font-semibold mb-1">⚠️ Important Notice</h3>
            <ul class="list-disc ml-5 space-y-1">
              <li><strong>Research Use Only</strong> - Not for clinical decision making</li>
              <li><strong>No Patient Data Storage</strong> - All data processed locally</li>
              <li><strong>Clinical Advisory</strong> - Under supervision of Prof. Christian Förch & Dr. Lovepreet Kalra</li>
              <li><strong>Contact:</strong> Deepak Bos (bosdeepak@gmail.com)</li>
            </ul>
          </div>
        </div>

        <!-- Login Form -->
        <form id="loginForm" class="space-y-4">
          <div>
            <label for="researchPassword" class="block text-sm font-medium text-gray-700">Research Access Code</label>
            <input
              type="password"
              id="researchPassword"
              name="password"
              required
              autocomplete="off"
              placeholder="Enter research access code"
              class="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            >
          </div>

          <div id="loginError" class="text-red-600 text-sm hidden"></div>

          <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center disabled:opacity-50 login-button">
            <span class="button-text">Access Research System</span>
            <span class="loading-spinner ml-2 hidden">⏳</span>
          </button>
        </form>

        <!-- Footer -->
        <div class="mt-6 text-gray-500 text-xs space-y-1">
          <p><strong>Regulatory Status:</strong> Research prototype - CE certification pending</p>
          <p><strong>Data Protection:</strong> GDPR compliant - local processing only</p>
          <p><strong>Clinical Oversight:</strong> RKH Klinikum Ludwigsburg, Neurologie</p>
        </div>

      </div>
    </div>
  `;}function Ci(){const a=document.getElementById("loginForm");if(!a)return;const e=document.getElementById("researchPassword"),t=document.getElementById("loginError"),s=a.querySelector(".login-button");e.focus(),a.addEventListener("submit",async o=>{o.preventDefault();const c=e.value.trim();if(!c){r("Please enter the research access code");return;}n(!0),i();try{const m=await O.authenticate(c);console.log(m),m.success?(h.logEvent("auth_success",{timestamp:new Date().toISOString(),userAgent:navigator.userAgent.substring(0,100)}),h.navigate("triage1")):(r(m.message),e.value="",e.focus(),h.logEvent("auth_failed",{timestamp:new Date().toISOString(),errorCode:m.errorCode}));}catch(m){r("Authentication system error. Please try again.");}finally{n(!1);}}),e.addEventListener("input",i);function r(o){t.textContent=o,t.classList.remove("hidden"),e.classList.add("border-red-500");}function i(){t.classList.add("hidden"),e.classList.remove("border-red-500");}function n(o){const c=s.querySelector(".button-text"),m=s.querySelector(".loading-spinner");o?(c.classList.add("hidden"),m.classList.remove("hidden"),s.disabled=!0):(c.classList.remove("hidden"),m.classList.add("hidden"),s.disabled=!1);}}function Li(a){const e=document.createElement("div");e.className="sr-only",e.setAttribute("role","status"),e.setAttribute("aria-live","polite");const t={triage1:"Coma assessment",triage2:"Examination capability assessment",coma:"Coma module",limited:"Limited data module",full:"Full stroke assessment",results:"Assessment results"};e.textContent=`Navigated to ${t[a]||a}`,document.body.appendChild(e),setTimeout(()=>e.remove(),1e3);}function xi(a){const e="iGFAP",s={triage1:"Initial Assessment",triage2:"Examination Capability",coma:"Coma Module",limited:"Limited Data Module",full:"Full Stroke Module",results:"Assessment Results"}[a];document.title=s?`${e} — ${s}`:e;}function Mi(){setTimeout(()=>{const a=document.querySelector("h2");a&&(a.setAttribute("tabindex","-1"),a.focus(),setTimeout(()=>a.removeAttribute("tabindex"),100));},100);}class _i{constructor(){this.scores={facial_palsy:0,arm_weakness:0,speech_changes:0,eye_deviation:0,denial_neglect:0},this.onApply=null,this.modal=null;}getTotal(){return Object.values(this.scores).reduce((e,t)=>e+t,0);}getRiskLevel(){return this.getTotal()>=4?"high":"low";}render(){const e=this.getTotal(),t=this.getRiskLevel();return`
      <div id="fastEdModal" class="modal" role="dialog" aria-labelledby="fastEdModalTitle" aria-hidden="true" style="display: none !important;">
        <div class="modal-content fast-ed-modal">
          <div class="modal-header">
            <h2 id="fastEdModalTitle">${l("fastEdCalculatorTitle")}</h2>
            <button class="modal-close" aria-label="Close">&times;</button>
          </div>
          <div class="modal-body">
            
            <!-- Facial Palsy -->
            <div class="fast-ed-component">
              <h3>${l("facialPalsyTitle")}</h3>
              <div class="radio-group">
                <label class="radio-option">
                  <input type="radio" name="facial_palsy" value="0" ${this.scores.facial_palsy===0?"checked":""}>
                  <span class="radio-label">${l("facialPalsyNormal")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="facial_palsy" value="1" ${this.scores.facial_palsy===1?"checked":""}>
                  <span class="radio-label">${l("facialPalsyMild")}</span>
                </label>
              </div>
            </div>

            <!-- Arm Weakness -->
            <div class="fast-ed-component">
              <h3>${l("armWeaknessTitle")}</h3>
              <div class="radio-group">
                <label class="radio-option">
                  <input type="radio" name="arm_weakness" value="0" ${this.scores.arm_weakness===0?"checked":""}>
                  <span class="radio-label">${l("armWeaknessNormal")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="arm_weakness" value="1" ${this.scores.arm_weakness===1?"checked":""}>
                  <span class="radio-label">${l("armWeaknessMild")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="arm_weakness" value="2" ${this.scores.arm_weakness===2?"checked":""}>
                  <span class="radio-label">${l("armWeaknessSevere")}</span>
                </label>
              </div>
            </div>

            <!-- Speech Changes -->
            <div class="fast-ed-component">
              <h3>${l("speechChangesTitle")}</h3>
              <div class="radio-group">
                <label class="radio-option">
                  <input type="radio" name="speech_changes" value="0" ${this.scores.speech_changes===0?"checked":""}>
                  <span class="radio-label">${l("speechChangesNormal")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="speech_changes" value="1" ${this.scores.speech_changes===1?"checked":""}>
                  <span class="radio-label">${l("speechChangesMild")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="speech_changes" value="2" ${this.scores.speech_changes===2?"checked":""}>
                  <span class="radio-label">${l("speechChangesSevere")}</span>
                </label>
              </div>
            </div>

            <!-- Eye Deviation -->
            <div class="fast-ed-component">
              <h3>${l("eyeDeviationTitle")}</h3>
              <div class="radio-group">
                <label class="radio-option">
                  <input type="radio" name="eye_deviation" value="0" ${this.scores.eye_deviation===0?"checked":""}>
                  <span class="radio-label">${l("eyeDeviationNormal")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="eye_deviation" value="1" ${this.scores.eye_deviation===1?"checked":""}>
                  <span class="radio-label">${l("eyeDeviationPartial")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="eye_deviation" value="2" ${this.scores.eye_deviation===2?"checked":""}>
                  <span class="radio-label">${l("eyeDeviationForced")}</span>
                </label>
              </div>
            </div>

            <!-- Denial/Neglect -->
            <div class="fast-ed-component">
              <h3>${l("denialNeglectTitle")}</h3>
              <div class="radio-group">
                <label class="radio-option">
                  <input type="radio" name="denial_neglect" value="0" ${this.scores.denial_neglect===0?"checked":""}>
                  <span class="radio-label">${l("denialNeglectNormal")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="denial_neglect" value="1" ${this.scores.denial_neglect===1?"checked":""}>
                  <span class="radio-label">${l("denialNeglectPartial")}</span>
                </label>
                <label class="radio-option">
                  <input type="radio" name="denial_neglect" value="2" ${this.scores.denial_neglect===2?"checked":""}>
                  <span class="radio-label">${l("denialNeglectComplete")}</span>
                </label>
              </div>
            </div>

            <!-- Total Score Display -->
            <div class="fast-ed-total">
              <div class="score-display">
                <h3>${l("totalScoreTitle")}: <span class="total-score">${e}/9</span></h3>
                <div class="risk-indicator ${t}">
                  ${l("riskLevel")}: ${l(t==="high"?"riskLevelHigh":"riskLevelLow")}
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <div class="button-group">
              <button class="secondary" data-action="cancel-fast-ed">${l("cancel")}</button>
              <button class="primary" data-action="apply-fast-ed">${l("applyScore")}</button>
            </div>
          </div>
        </div>
      </div>
    `;}setupEventListeners(){if(this.modal=document.getElementById("fastEdModal"),!this.modal)return;this.modal.addEventListener("change",r=>{if(r.target.type==="radio"){const i=r.target.name,n=parseInt(r.target.value);this.scores[i]=n,this.updateDisplay();}});const e=this.modal.querySelector(".modal-close");e==null||e.addEventListener("click",()=>this.close());const t=this.modal.querySelector("[data-action=\"cancel-fast-ed\"]");t==null||t.addEventListener("click",()=>this.close());const s=this.modal.querySelector("[data-action=\"apply-fast-ed\"]");s==null||s.addEventListener("click",()=>this.apply()),this.modal.addEventListener("click",r=>{r.target===this.modal&&(r.preventDefault(),r.stopPropagation());}),document.addEventListener("keydown",r=>{var i;r.key==="Escape"&&((i=this.modal)!=null&&i.classList.contains("show"))&&this.close();});}updateDisplay(){var s,r;const e=(s=this.modal)==null?void 0:s.querySelector(".total-score"),t=(r=this.modal)==null?void 0:r.querySelector(".risk-indicator");if(e&&(e.textContent=`${this.getTotal()}/9`),t){const i=this.getRiskLevel();t.className=`risk-indicator ${i}`,t.textContent=`${l("riskLevel")}: ${l(i==="high"?"riskLevelHigh":"riskLevelLow")}`;}}show(e=0,t=null){this.onApply=t,e>0&&e<=9&&this.approximateFromTotal(e),document.getElementById("fastEdModal")?(this.modal.remove(),document.body.insertAdjacentHTML("beforeend",this.render()),this.modal=document.getElementById("fastEdModal")):document.body.insertAdjacentHTML("beforeend",this.render()),this.setupEventListeners(),this.modal.setAttribute("aria-hidden","false"),this.modal.style.display="flex",this.modal.classList.add("show");const s=this.modal.querySelector("input[type=\"radio\"]");s==null||s.focus();}close(){this.modal&&(this.modal.classList.remove("show"),this.modal.style.display="none",this.modal.setAttribute("aria-hidden","true"));}apply(){const e=this.getTotal(),t=this.scores.arm_weakness>0,s=this.scores.eye_deviation>0;this.onApply&&this.onApply({total:e,components:{...this.scores},armWeaknessBoolean:t,eyeDeviationBoolean:s}),this.close();}approximateFromTotal(e){this.scores={facial_palsy:0,arm_weakness:0,speech_changes:0,eye_deviation:0,denial_neglect:0};let t=e;const s=Object.keys(this.scores);for(const r of s){if(t<=0)break;const n=Math.min(t,r==="facial_palsy"?1:2);this.scores[r]=n,t-=n;}}}const Ri=new _i;function ja(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;}function Pi(){return`<header class="bg-white dark:bg-gray-800 shadow-md px-4 py-3 md:px-8">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="text-3xl"></div>
          <div>
            <h1 class="text-lg font-bold text-gray-900 dark:text-white">iGFAP</h1>
            <small class="text-xs text-gray-500 dark:text-gray-300">Stroke Triage Assistant</small>
          </div>
        </div>

        <div class="hidden md:flex items-center space-x-4">
          <button
            id="helpButton"
            class="px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
          >
            ❓ Help
          </button>
          <button
            id="darkModeToggle"
            class="px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
          >
            🌙 Theme
          </button>
          <button
            id="languageToggle"
            data-lang="en"
            class="px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
          >
            🇬🇧
          </button>
          <span
            id="apiModeToggle"
            class="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded text-xs font-semibold"
          >
            Live Data
          </span>
        </div>

        <div class="md:hidden flex items-center">
          <button
            id="mobileMenuButton"
            class="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition"
          >
            ☰
          </button>
        </div>
      </div>

      <div id="mobileMenu" class="hidden md:hidden mt-2 px-2 space-y-2">
        <button
          id="helpButton"
          class="w-full text-left px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
        >
          ❓ Help
        </button>
        <button
          id="darkModeToggle"
          class="w-full text-left px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
        >
          🌙 Theme
        </button>
        <button
          id="languageToggle"
          data-lang="en"
          class="w-full text-left px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
        >
          🇬🇧 Language
        </button>
        <span
          id="apiModeToggle"
          class="inline-block px-2 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded text-xs font-semibold"
        >
          Live Data
        </span>
      </div>
    </header>`;}function Ni(){return` <footer
      class="bg-gray-100 text-gray-600 text-sm px-4 py-4 md:px-8 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0"
      role="contentinfo"
    >
      <p>
        © <span id="currentYear"></span> iGFAP Project - Research Preview
      </p>

      <div class="flex flex-wrap gap-4 md:gap-6">
        <a href="#" id="privacyLink" class="hover:underline">
          Privacy Policy
        </a>
        <a href="#" id="disclaimerLink" class="hover:underline">
          Medical Disclaimer
        </a>
        <a href="#" id="versionLink" class="hover:underline">
          Version 2.1.0 - Research Preview
        </a>
      </div>
    </footer>`;}function ge(a){a.querySelector("#appContent")||(a.innerHTML=`
      <div class="min-h-screen flex flex-col">
        ${Pi()}
        <main role="main" class="flex-1 w-full flex flex-col items-center justify-start">
          <div id="appContent"></div>
        </main>
        ${Ni()}
      </div>
    `);const e=h.getState(),{currentScreen:t,results:s,startTime:r,screenHistory:i}=e;console.log("[Render] Rendering screen:",t,"Has results:",!!s);const n=document.getElementById("backButton");n&&(n.style.display=i&&i.length>0?"flex":"none");let o="";switch(t){case"login":o=Ii();break;case"triage1":if(!O.isValidSession()){h.navigate("login");return;}o=yt();break;case"triage2":o=ii();break;case"coma":o=ai();break;case"limited":o=ri();break;case"full":o=ni();break;case"results":o=bi(s,r);break;default:o=yt();}const c=a.querySelector("#appContent");if(c)try{we(c,o);}catch(d){c.textContent="Error loading content. Please refresh.";}const m=a.querySelector("form[data-module]");if(m){const{module:d}=m.dataset;Di(m,d);}Oi(a),t==="login"&&setTimeout(()=>{Ci();},100),t==="results"&&s&&setTimeout(()=>{try{console.log("[Render] Initializing stroke center map with results:",s),gs(s);}catch(d){console.error("[Render] Stroke center map initialization failed:",d);}},100),setTimeout(()=>{try{us();}catch(d){}},150),Li(t),xi(t),Mi();}function Di(a,e){const t=h.getFormData(e);!t||Object.keys(t).length===0||Object.entries(t).forEach(([s,r])=>{const i=a.elements[s];i&&(i.type==="checkbox"?i.checked=r===!0||r==="on"||r==="true":i.value=r);});}function Oi(a){a.querySelectorAll("input[type=\"number\"]").forEach(r=>{r.addEventListener("input",()=>{const i=r.closest(".input-group");i&&i.classList.contains("error")&&(i.classList.remove("error"),i.querySelectorAll(".error-message").forEach(n=>n.remove()));});}),a.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",i=>{const{action:n,value:o}=i.currentTarget.dataset,c=o==="true";switch(n){case"triage1":Vs(c);break;case"triage2":Us(c);break;case"reset":Ws();break;case"goBack":Gs();break;case"goHome":Dt();break;}});}),a.querySelectorAll("form[data-module]").forEach(r=>{r.addEventListener("submit",i=>{qs(i,a);});});const e=a.querySelector("#printResults");e&&e.addEventListener("click",()=>window.print());const t=a.querySelector("#fast_ed_score");t&&(t.addEventListener("click",r=>{r.preventDefault();const i=parseInt(t.value)||0;Ri.show(i,n=>{t.value=n.total;const o=a.querySelector("#armparese_hidden");o&&(o.value=n.armWeaknessBoolean?"true":"false");const c=a.querySelector("#eye_deviation_hidden");c&&(c.value=n.eyeDeviationBoolean?"true":"false"),t.dispatchEvent(new Event("change",{bubbles:!0}));});}),t.addEventListener("keydown",r=>{r.preventDefault();})),a.querySelectorAll(".info-toggle").forEach(r=>{r.addEventListener("click",i=>{const n=r.dataset.target,o=a.querySelector(`#${n}`),c=r.querySelector(".toggle-arrow");o&&(o.style.display!=="none"?(o.style.display="none",o.classList.remove("show"),r.classList.remove("active"),c.style.transform="rotate(0deg)"):(o.style.display="block",o.classList.add("show"),r.classList.add("active"),c.style.transform="rotate(180deg)"));});});}const $i={};class Fi{constructor(){this.container=null,this.eventListeners=new Map,this.isInitialized=!1;}initialize(e){this.container=e,this.setupGlobalEventListeners(),this.setupHelpModal(),this.setupFooterLinks(),this.initializeApiModeToggle(),this.initializeResearchMode(),this.setCurrentYear(),this.isInitialized=!0;}setupGlobalEventListeners(){this.addEventListenerSafe("backButton","click",()=>{h.goBack(),ge(this.container);}),this.addEventListenerSafe("homeButton","click",()=>{h.goHome(),ge(this.container);}),this.addEventListenerSafe("languageToggle","click",()=>{this.toggleLanguage();}),this.addEventListenerSafe("darkModeToggle","click",()=>{this.toggleDarkMode();}),this.addEventListenerSafe("apiModeToggle","click",e=>{e.preventDefault(),this.toggleApiMode();}),this.addEventListenerSafe("researchModeToggle","click",e=>{e.preventDefault(),e.stopPropagation(),this.toggleResearchMode();}),this.addGlobalEventListener("keydown",e=>{e.key==="Escape"&&this.closeModal("helpModal");}),this.addGlobalEventListener("beforeunload",e=>{h.hasUnsavedData()&&(e.preventDefault(),e.returnValue="You have unsaved data. Are you sure you want to leave?");});}initializeApiModeToggle(){if(!document.getElementById("apiModeToggle"))return;const t=["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname);localStorage.getItem("use_mock_api")===null&&t&&!(import.meta&&$i)&&localStorage.setItem("use_mock_api","true"),this.updateApiModeButton();}toggleApiMode(){const t=localStorage.getItem("use_mock_api")==="true"?"false":"true";localStorage.setItem("use_mock_api",t),this.updateApiModeButton();try{const s=document.createElement("div");s.className="sr-only",s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.textContent=t==="true"?"Mock data enabled":"Live API enabled",document.body.appendChild(s),setTimeout(()=>s.remove(),1200);}catch(s){}}updateApiModeButton(){const e=document.getElementById("apiModeToggle");if(!e)return;localStorage.getItem("use_mock_api")!=="false"?(e.textContent="🧪",e.title="Mock data: ON (click to use API)",e.setAttribute("aria-label","Mock data enabled")):(e.textContent="☁️",e.title="Live API: ON (click to use mock)",e.setAttribute("aria-label","Live API enabled"));}addEventListenerSafe(e,t,s){const r=document.getElementById(e);if(r){const i=n=>{try{s(n);}catch(o){this.handleUIError(o,`${e}_${t}`);}};r.addEventListener(t,i),this.eventListeners.set(`${e}_${t}`,{element:r,handler:i});}}addGlobalEventListener(e,t){const s=r=>{try{t(r);}catch(i){this.handleUIError(i,`global_${e}`);}};if(e==="keydown"||e==="beforeunload"){const r=e==="beforeunload"?window:document;r.addEventListener(e,s),this.eventListeners.set(`global_${e}`,{element:r,handler:s});}}setupHelpModal(){v(async()=>{const e=document.getElementById("helpButton"),t=document.getElementById("helpModal"),s=t==null?void 0:t.querySelector(".modal-close");e&&t&&(this.closeModal("helpModal"),this.addEventListenerSafe("helpButton","click",()=>{this.openModal("helpModal");}),s&&s.addEventListener("click",()=>{this.closeModal("helpModal");}),t.addEventListener("click",r=>{r.target===t&&this.closeModal("helpModal");}));},e=>{});}setupFooterLinks(){this.addEventListenerSafe("privacyLink","click",e=>{e.preventDefault(),this.showPrivacyPolicy();}),this.addEventListenerSafe("disclaimerLink","click",e=>{e.preventDefault(),this.showDisclaimer();});}toggleLanguage(){v(async()=>{j.toggleLanguage(),this.updateLanguage();},e=>{});}updateLanguage(){document.documentElement.lang=j.getCurrentLanguage(),this.updateElementText(".app-header h1",l("appTitle")),this.updateElementText(".emergency-badge",l("emergencyBadge")),this.updateButtonAttributes("languageToggle",l("languageToggle")),this.updateButtonAttributes("helpButton",l("helpButton")),this.updateButtonAttributes("darkModeToggle",l("darkModeButton")),this.updateElementText("#modalTitle",l("helpTitle"));const e=document.getElementById("languageToggle");if(e){const t=j.getCurrentLanguage();e.textContent=t==="en"?"🇬🇧":"🇩🇪",e.dataset.lang=t;}}updateElementText(e,t){const s=document.querySelector(e);s&&t&&(s.textContent=t);}updateButtonAttributes(e,t){const s=document.getElementById(e);s&&t&&(s.title=t,s.setAttribute("aria-label",t));}toggleDarkMode(){const e=document.getElementById("darkModeToggle");document.body.classList.toggle("dark-mode");const t=document.body.classList.contains("dark-mode");e&&(e.textContent=t?"☀️":"🌙"),localStorage.setItem("theme",t?"dark":"light");}initializeResearchMode(){document.getElementById("researchModeToggle")&&this.updateResearchMode();}updateResearchMode(){const e=document.getElementById("researchModeToggle");if(e){const t=this.getCurrentModuleFromResults(),s=t==="limited"||t==="full";e.style.display=s?"flex":"none",e.style.opacity=s?"1":"0.5";}}getCurrentModuleFromResults(){var s,r;const e=h.getState();if(e.currentScreen!=="results"||!((r=(s=e.results)==null?void 0:s.ich)!=null&&r.module))return null;const t=e.results.ich.module.toLowerCase();return t.includes("coma")?"coma":t.includes("limited")?"limited":t.includes("full")?"full":null;}toggleResearchMode(){const e=document.getElementById("researchPanel");if(!e)return;const t=e.style.display!=="none";e.style.display=t?"none":"block";const s=document.getElementById("researchModeToggle");return s&&(s.style.background=t?"rgba(255, 255, 255, 0.1)":"rgba(0, 102, 204, 0.2)"),!1;}showResearchActivationMessage(){v(async()=>{const e=document.createElement("div");e.className="research-activation-toast";try{we(e,`
            <div class="toast-content">
              🔬 <strong>Research Mode Activated</strong><br>
              <small>Model comparison features enabled</small>
            </div>
          `);}catch(t){e.textContent="🔬 Research Mode Activated - Model comparison features enabled";}document.body.appendChild(e),setTimeout(()=>{document.body.contains(e)&&document.body.removeChild(e);},3e3);},e=>{});}openModal(e){const t=document.getElementById(e);t&&(t.style.display="flex",t.classList.add("show"),t.setAttribute("aria-hidden","false"));}closeModal(e){const t=document.getElementById(e);t&&(t.classList.remove("show"),t.style.display="none",t.setAttribute("aria-hidden","true"));}showPrivacyPolicy(){alert("Privacy Policy: This tool processes data locally. No patient data is stored or transmitted.");}showDisclaimer(){alert("Medical Disclaimer: This tool is for clinical decision support only. Always use clinical judgment and follow local protocols.");}setCurrentYear(){const e=document.getElementById("currentYear");e&&(e.textContent=new Date().getFullYear());}handleUIError(e,t){try{const s=new CustomEvent("uiError",{detail:{error:e,context:t,timestamp:Date.now()}});document.dispatchEvent(s);}catch(s){}}async preloadCriticalComponents(){return v(async()=>{const t=["appContainer","helpModal","languageToggle","darkModeToggle"].filter(s=>!document.getElementById(s));if(t.length>0)throw new Error(`Missing critical UI elements: ${t.join(", ")}`);return!0;},e=>!1);}getStatus(){return{isInitialized:this.isInitialized,hasContainer:!!this.container,eventListenersCount:this.eventListeners.size,currentLanguage:j.getCurrentLanguage(),isDarkMode:document.body.classList.contains("dark-mode")};}destroy(){this.eventListeners.forEach(({element:e,handler:t},s)=>{const[,r]=s.split("_");e&&t&&e.removeEventListener(r,t);}),this.eventListeners.clear(),this.container=null,this.isInitialized=!1;}}class zi{constructor(){this.currentTheme="light",this.isInitialized=!1,this.storageKey="theme";}initialize(){this.loadSavedTheme(),this.setupThemeDetection(),this.isInitialized=!0;}async loadSavedTheme(){return v(async()=>{const e=localStorage.getItem(this.storageKey),t=window.matchMedia("(prefers-color-scheme: dark)").matches;let s;return e==="dark"||e==="light"?s=e:t?s="dark":s="light",this.applyTheme(s),this.updateThemeButton(),s;},e=>(this.applyTheme("light"),this.updateThemeButton(),"light"));}setupThemeDetection(){const e=window.matchMedia("(prefers-color-scheme: dark)"),t=s=>{if(!localStorage.getItem(this.storageKey)){const i=s.matches?"dark":"light";this.applyTheme(i),this.updateThemeButton();}};e.addEventListener?e.addEventListener("change",t):e.addListener(t);}applyTheme(e){e!=="light"&&e!=="dark"&&(e="light"),this.currentTheme=e,e==="dark"?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),this.updateMetaThemeColor(e),this.dispatchThemeChangeEvent(e);}toggleTheme(){const e=this.currentTheme==="dark"?"light":"dark";this.setTheme(e);}setTheme(e){return v(async()=>(this.applyTheme(e),this.saveTheme(e),this.updateThemeButton(),e),t=>this.currentTheme);}saveTheme(e){try{localStorage.setItem(this.storageKey,e);}catch(t){}}updateThemeButton(){const e=document.getElementById("darkModeToggle");if(e){const t=this.currentTheme==="dark";e.textContent=t?"☀️":"🌙";const s=t?"Switch to light mode":"Switch to dark mode";e.setAttribute("aria-label",s),e.title=s;}}updateMetaThemeColor(e){let t=document.querySelector("meta[name=\"theme-color\"]");t||(t=document.createElement("meta"),t.name="theme-color",document.head.appendChild(t));const s={light:"#ffffff",dark:"#1a1a1a"};t.content=s[e]||s.light;}dispatchThemeChangeEvent(e){try{const t=new CustomEvent("themeChanged",{detail:{theme:e,timestamp:Date.now()}});document.dispatchEvent(t);}catch(t){}}getCurrentTheme(){return this.currentTheme;}isDarkMode(){return this.currentTheme==="dark";}getSystemPreferredTheme(){try{return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}catch(e){return"light";}}resetToSystemTheme(){const e=this.getSystemPreferredTheme();this.setTheme(e);try{localStorage.removeItem(this.storageKey);}catch(t){}}getStatus(){return{isInitialized:this.isInitialized,currentTheme:this.currentTheme,isDarkMode:this.isDarkMode(),systemPreferred:this.getSystemPreferredTheme(),hasExplicitPreference:!!localStorage.getItem(this.storageKey)};}destroy(){this.isInitialized=!1;}}class Bi{constructor(){this.autoSaveInterval=null,this.sessionCheckInterval=null,this.isInitialized=!1,this.lastAutoSave=0;}initialize(){this.validateStoredSession(),this.startAutoSave(),this.setupSessionTimeout(),this.setupSessionValidation(),this.isInitialized=!0;}async validateStoredSession(){return v(async()=>O.isValidSession()?(this.restoreFormData(),!0):(this.clearSessionData(),!1),e=>(this.clearSessionData(),!1));}startAutoSave(){this.autoSaveInterval&&clearInterval(this.autoSaveInterval),this.autoSaveInterval=setInterval(()=>{this.performAutoSave();},ut.autoSaveInterval);}async performAutoSave(){return v(async()=>{const e=document.getElementById("appContainer");if(!e)return!1;const t=e.querySelectorAll("form[data-module]");let s=0;for(const r of t)try{const{module:i}=r.dataset;if(i){const n=this.extractFormData(r);this.hasFormDataChanged(i,n)&&(h.setFormData(i,n),s++);}}catch(i){}return this.lastAutoSave=Date.now(),s>0;},e=>!1);}extractFormData(e){const t=new FormData(e),s={};return t.forEach((r,i)=>{const n=e.elements[i];if(n)if(n.type==="checkbox")s[i]=n.checked;else if(n.type==="number"){const o=parseFloat(r);s[i]=isNaN(o)?r:o;}else s[i]=r;}),s;}hasFormDataChanged(e,t){try{const s=h.getFormData(e);return JSON.stringify(s)!==JSON.stringify(t);}catch(s){return!0;}}restoreFormData(){v(async()=>{const e=document.getElementById("appContainer");if(!e)return;e.querySelectorAll("form[data-module]").forEach(s=>{try{const{module:r}=s.dataset;if(r){const i=h.getFormData(r);i&&Object.keys(i).length>0&&this.populateForm(s,i);}}catch(r){}});},e=>{});}populateForm(e,t){Object.entries(t).forEach(([s,r])=>{const i=e.elements[s];if(i)try{i.type==="checkbox"?i.checked=!!r:i.type==="radio"?i.value===r&&(i.checked=!0):i.value=r,i.dispatchEvent(new Event("input",{bubbles:!0}));}catch(n){}});}setupSessionTimeout(){setTimeout(()=>{this.showSessionTimeoutWarning();},ut.sessionTimeout-6e4);}setupSessionValidation(){this.sessionCheckInterval=setInterval(()=>{this.validateCurrentSession();},5*60*1e3);}async validateCurrentSession(){return v(async()=>O.isValidSession()?await O.validateSessionWithServer()?!0:(this.handleSessionExpiry(),!1):(this.handleSessionExpiry(),!1),e=>O.isValidSession());}showSessionTimeoutWarning(){v(async()=>{confirm("Your session will expire in 1 minute. Would you like to continue?")?(O.updateActivity(),this.setupSessionTimeout()):this.endSession();},e=>{});}handleSessionExpiry(){this.clearSessionData(),h.navigate("login"),this.showSessionExpiredMessage();}showSessionExpiredMessage(){const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #ff9800;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `,e.textContent="⏰ Session expired. Please log in again.",document.body.appendChild(e),setTimeout(()=>{document.body.contains(e)&&document.body.removeChild(e);},5e3);}endSession(){O.logout(),this.clearSessionData(),h.reset(),h.navigate("login");}async clearSessionData(){try{p.info("Clearing session data",{category:f.SECURITY}),h.clearAllFormData(),await he("temp_data",!0),await he("research_data",!0),sessionStorage.removeItem("temp_data"),sessionStorage.removeItem("research_data"),p.info("Session data cleared successfully",{category:f.SECURITY});}catch(e){p.warn("Failed to clear some session data",{category:f.SECURITY,error:e.message});}}async forceSave(){return this.performAutoSave();}getStatus(){var e;return{isInitialized:this.isInitialized,isAuthenticated:O.isValidSession(),lastAutoSave:this.lastAutoSave,autoSaveActive:!!this.autoSaveInterval,sessionCheckActive:!!this.sessionCheckInterval,sessionInfo:((e=O.getSessionInfo)==null?void 0:e.call(O))||{}};}destroy(){this.autoSaveInterval&&(clearInterval(this.autoSaveInterval),this.autoSaveInterval=null),this.sessionCheckInterval&&(clearInterval(this.sessionCheckInterval),this.sessionCheckInterval=null),this.isInitialized=!1;}}const J={MEMORY:"memory",SESSION:"session",LOCAL:"local",INDEXED_DB:"indexed_db"},oe={CRITICAL:"critical",HIGH:"high",NORMAL:"normal",LOW:"low"},Hi={API_RESPONSES:15*60*1e3};class wt{constructor(e,t,s,r=oe.NORMAL,i={}){this.key=e,this.value=this.sanitizeValue(t),this.ttl=s,this.priority=r,this.metadata={...i,createdAt:Date.now(),accessCount:0,lastAccessed:Date.now()},this.expiresAt=s>0?Date.now()+s:null,this.encrypted=!1;}sanitizeValue(e){if(typeof e!="object"||e===null)return e;const t=JSON.parse(JSON.stringify(e)),s=["ssn","mrn","patient_id","user_id","session_token"];return this.removeSensitiveFields(t,s),t;}removeSensitiveFields(e,t){Object.keys(e).forEach(s=>{t.some(r=>s.toLowerCase().includes(r))?e[s]="[REDACTED]":typeof e[s]=="object"&&e[s]!==null&&this.removeSensitiveFields(e[s],t);});}isExpired(){return this.expiresAt!==null&&Date.now()>this.expiresAt;}markAccessed(){this.metadata.accessCount+=1,this.metadata.lastAccessed=Date.now();}getAge(){return Date.now()-this.metadata.createdAt;}getTimeToExpiration(){return this.expiresAt===null?1/0:Math.max(0,this.expiresAt-Date.now());}getEvictionScore(){const t={[oe.CRITICAL]:1e3,[oe.HIGH]:100,[oe.NORMAL]:10,[oe.LOW]:1}[this.priority]||1,s=Math.log(this.metadata.accessCount+1),r=1/(this.getAge()+1);return t*s*r;}}class Re{constructor(e=J.MEMORY,t={}){this.storageType=e,this.options={maxSize:100*1024*1024,maxEntries:1e3,cleanupInterval:5*60*1e3,enableEncryption:!1,enableMetrics:!0,...t},this.cache=new Map,this.cleanupTimer=null,this.totalSize=0,this.hitCount=0,this.missCount=0,this.evictionCount=0,this.initializeStorage(),this.startCleanupTimer();}initializeStorage(){switch(this.storageType){case J.SESSION:this.storage=sessionStorage,this.loadFromStorage();break;case J.LOCAL:this.storage=localStorage,this.loadFromStorage();break;case J.INDEXED_DB:this.initializeIndexedDB();break;default:this.storage=null;}}loadFromStorage(){if(this.storage)try{const e=this.storage.getItem("medical_cache");if(e){const t=JSON.parse(e);Object.entries(t).forEach(([s,r])=>{const i=new wt(r.key,r.value,r.ttl,r.priority,r.metadata);i.expiresAt=r.expiresAt,i.isExpired()||(this.cache.set(s,i),this.totalSize+=this.calculateSize(i.value));});}}catch(e){}}saveToStorage(){if(this.storage)try{const e={};this.cache.forEach((t,s)=>{e[s]={key:t.key,value:t.value,ttl:t.ttl,priority:t.priority,metadata:t.metadata,expiresAt:t.expiresAt};}),this.storage.setItem("medical_cache",JSON.stringify(e));}catch(e){}}async initializeIndexedDB(){}set(e,t,s=Hi.API_RESPONSES,r=oe.NORMAL,i={}){const n=H.startMeasurement(je.CACHE,"cache_set",{key:e,priority:r});try{this.ensureCapacity();const o=new wt(e,t,s,r,i),c=this.calculateSize(t);if(this.cache.has(e)){const m=this.cache.get(e);this.totalSize-=this.calculateSize(m.value);}return this.cache.set(e,o),this.totalSize+=c,this.storageType!==J.MEMORY&&this.saveToStorage(),y.publish(b.AUDIT_EVENT,{action:"cache_set",key:e,size:c,ttl:s,priority:r}),H.endMeasurement(n,{success:!0}),!0;}catch(o){return H.endMeasurement(n,{success:!1,error:o.message}),!1;}}get(e){const t=H.startMeasurement(je.CACHE,"cache_get",{key:e});try{const s=this.cache.get(e);return s?s.isExpired()?(this.cache.delete(e),this.totalSize-=this.calculateSize(s.value),this.missCount+=1,H.endMeasurement(t,{hit:!1,expired:!0}),null):(s.markAccessed(),this.hitCount+=1,H.endMeasurement(t,{hit:!0}),s.value):(this.missCount+=1,H.endMeasurement(t,{hit:!1}),null);}catch(s){return H.endMeasurement(t,{hit:!1,error:s.message}),null;}}has(e){const t=this.cache.get(e);return t&&!t.isExpired();}delete(e){const t=this.cache.get(e);return t?(this.totalSize-=this.calculateSize(t.value),this.cache.delete(e),this.storageType!==J.MEMORY&&this.saveToStorage(),y.publish(b.AUDIT_EVENT,{action:"cache_delete",key:e}),!0):!1;}clear(){const e=this.cache.size;this.cache.clear(),this.totalSize=0,this.storage&&this.storage.removeItem("medical_cache"),y.publish(b.AUDIT_EVENT,{action:"cache_cleared",entriesCleared:e});}ensureCapacity(){for(;this.totalSize>this.options.maxSize;)this.evictLeastImportant();for(;this.cache.size>=this.options.maxEntries;)this.evictLeastImportant();}evictLeastImportant(){let e=1/0,t=null;this.cache.forEach((s,r)=>{if(s.priority===oe.CRITICAL&&!s.isExpired())return;const i=s.getEvictionScore();i<e&&(e=i,t=r);}),t&&(this.delete(t),this.evictionCount+=1);}cleanup(){const e=performance.now();let t=0;this.cache.forEach((r,i)=>{r.isExpired()&&(this.delete(i),t+=1);});const s=performance.now()-e;return y.publish(b.AUDIT_EVENT,{action:"cache_cleanup",cleanedCount:t,duration:s,remainingEntries:this.cache.size}),t;}startCleanupTimer(){this.cleanupTimer&&clearInterval(this.cleanupTimer),this.cleanupTimer=setInterval(()=>{this.cleanup();},this.options.cleanupInterval);}stopCleanupTimer(){this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null);}calculateSize(e){try{return JSON.stringify(e).length*2;}catch(t){return 0;}}getStats(){const e=this.hitCount+this.missCount>0?this.hitCount/(this.hitCount+this.missCount)*100:0;return{entries:this.cache.size,totalSize:this.totalSize,maxSize:this.options.maxSize,hitCount:this.hitCount,missCount:this.missCount,hitRate:`${e.toFixed(2)}%`,evictionCount:this.evictionCount,storageType:this.storageType,utilizationPercent:`${(this.totalSize/this.options.maxSize*100).toFixed(2)}%`};}getEntryInfo(e){const t=this.cache.get(e);return t?{key:t.key,size:this.calculateSize(t.value),priority:t.priority,ttl:t.ttl,age:t.getAge(),timeToExpiration:t.getTimeToExpiration(),accessCount:t.metadata.accessCount,lastAccessed:new Date(t.metadata.lastAccessed).toISOString(),isExpired:t.isExpired(),evictionScore:t.getEvictionScore()}:null;}dispose(){this.stopCleanupTimer(),this.clear();}}class re{static getPatientDataCache(){return this.patientDataCache||(this.patientDataCache=new Re(J.SESSION,{maxSize:10*1024*1024,maxEntries:100,enableEncryption:!0})),this.patientDataCache;}static getPredictionCache(){return this.predictionCache||(this.predictionCache=new Re(J.MEMORY,{maxSize:50*1024*1024,maxEntries:500})),this.predictionCache;}static getValidationCache(){return this.validationCache||(this.validationCache=new Re(J.LOCAL,{maxSize:5*1024*1024,maxEntries:200})),this.validationCache;}static getApiCache(){return this.apiCache||(this.apiCache=new Re(J.SESSION,{maxSize:20*1024*1024,maxEntries:300})),this.apiCache;}static clearAllCaches(){[this.patientDataCache,this.predictionCache,this.validationCache,this.apiCache].forEach(e=>{e&&e.clear();});}static disposeAllCaches(){[this.patientDataCache,this.predictionCache,this.validationCache,this.apiCache].forEach(e=>{e&&e.dispose();}),this.patientDataCache=null,this.predictionCache=null,this.validationCache=null,this.apiCache=null;}}ve(re,"patientDataCache",null),ve(re,"predictionCache",null),ve(re,"validationCache",null),ve(re,"apiCache",null);re.getPatientDataCache();const Ya=re.getPredictionCache();re.getValidationCache();re.getApiCache();const E={CRITICAL:"critical",HIGH:"high",NORMAL:"normal",LOW:"low"},Z={PENDING:"pending",LOADING:"loading",LOADED:"loaded",ERROR:"error"};class Vi{constructor(e,t,s={}){this.name=e,this.loader=t,this.priority=s.priority||E.NORMAL,this.state=Z.PENDING,this.component=null,this.error=null,this.loadTime=null,this.dependencies=s.dependencies||[],this.retryCount=0,this.maxRetries=s.maxRetries||3,this.loadPromise=null;}async load(){if(this.state===Z.LOADED)return this.component;if(this.loadPromise)return this.loadPromise;const e=H.startMeasurement(je.USER_INTERACTION,`lazy_load_${this.name}`,{priority:this.priority});return this.state=Z.LOADING,this.loadPromise=this.executeLoad(e),this.loadPromise;}async executeLoad(e){try{const t=performance.now();return await this.loadDependencies(),this.component=await this.loader(),this.loadTime=performance.now()-t,this.state=Z.LOADED,H.endMeasurement(e,{success:!0,loadTime:this.loadTime,retryCount:this.retryCount}),y.publish(b.AUDIT_EVENT,{action:"lazy_component_loaded",component:this.name,loadTime:this.loadTime,priority:this.priority}),this.component;}catch(t){if(this.error=t,this.retryCount++,H.endMeasurement(e,{success:!1,error:t.message,retryCount:this.retryCount}),this.retryCount<this.maxRetries){const s=Math.min(1e3*2**(this.retryCount-1),5e3);return await new Promise(r=>setTimeout(r,s)),this.loadPromise=null,this.load();}throw this.state=Z.ERROR,y.publish(b.AUDIT_EVENT,{action:"lazy_component_load_failed",component:this.name,error:t.message,retryCount:this.retryCount}),t;}}async loadDependencies(){if(this.dependencies.length===0)return;const e=this.dependencies.map(t=>typeof t=="string"?Ut.load(t):typeof t=="function"?t():t.load());await Promise.all(e);}getStatus(){var e;return{name:this.name,state:this.state,priority:this.priority,loadTime:this.loadTime,error:(e=this.error)==null?void 0:e.message,retryCount:this.retryCount};}}class Ut{constructor(){this.components=new Map,this.intersectionObserver=null,this.idleCallback=null,this.loadQueue={[E.CRITICAL]:[],[E.HIGH]:[],[E.NORMAL]:[],[E.LOW]:[]},this.isProcessingQueue=!1,this.initializeObservers();}initializeObservers(){"IntersectionObserver"in window&&(this.intersectionObserver=new IntersectionObserver(e=>this.handleIntersectionChanges(e),{rootMargin:"50px",threshold:.1})),this.scheduleIdleLoading();}register(e,t,s={}){const r=new Vi(e,t,s);return this.components.set(e,r),this.loadQueue[r.priority].push(r),r.priority===E.CRITICAL&&this.processLoadQueue(),y.publish(b.AUDIT_EVENT,{action:"lazy_component_registered",component:e,priority:r.priority}),r;}async load(e){const t=this.components.get(e);if(!t)throw new Error(`Component '${e}' not registered`);return t.load();}async preload(e=E.HIGH){const t=[E.CRITICAL,E.HIGH,E.NORMAL,E.LOW],s=t.slice(0,t.indexOf(e)+1),r=[];s.forEach(i=>{this.loadQueue[i].forEach(n=>{n.state===Z.PENDING&&r.push(n.load());});}),await Promise.allSettled(r),y.publish(b.AUDIT_EVENT,{action:"lazy_components_preloaded",priority:e,count:r.length});}observeElement(e,t){this.intersectionObserver&&(e.dataset.lazyComponent=t,this.intersectionObserver.observe(e));}handleIntersectionChanges(e){e.forEach(t=>{if(t.isIntersecting){const s=t.target.dataset.lazyComponent;s&&(this.load(s).catch(r=>{}),this.intersectionObserver.unobserve(t.target));}});}async processLoadQueue(){if(!this.isProcessingQueue){this.isProcessingQueue=!0;try{await this.processQueueByPriority(E.CRITICAL),await this.processQueueByPriority(E.HIGH);}catch(e){}finally{this.isProcessingQueue=!1;}}}async processQueueByPriority(e){const s=this.loadQueue[e].filter(i=>i.state===Z.PENDING);if(s.length===0)return;const r=s.map(i=>i.load().catch(n=>null));await Promise.allSettled(r);}scheduleIdleLoading(){const e=()=>{"requestIdleCallback"in window?this.idleCallback=requestIdleCallback(t=>{this.processIdleQueue(t),e();},{timeout:5e3}):setTimeout(()=>{this.processIdleQueue({timeRemaining:()=>50}),e();},100);};e();}async processIdleQueue(e){const t=this.loadQueue[E.NORMAL],s=this.loadQueue[E.LOW],r=[...t.filter(i=>i.state===Z.PENDING),...s.filter(i=>i.state===Z.PENDING)];for(const i of r)if(e.timeRemaining()>10)try{await i.load();}catch(n){}else break;}getStats(){const e={total:this.components.size,byState:{pending:0,loading:0,loaded:0,error:0},byPriority:{critical:0,high:0,normal:0,low:0},totalLoadTime:0,averageLoadTime:0};let t=0,s=0;return this.components.forEach(r=>{e.byState[r.state]++,e.byPriority[r.priority]++,r.loadTime&&(t+=r.loadTime,s++);}),e.totalLoadTime=t,e.averageLoadTime=s>0?t/s:0,e;}async reload(e){const t=this.components.get(e);if(!t)throw new Error(`Component '${e}' not registered`);return t.state=Z.PENDING,t.component=null,t.error=null,t.loadTime=null,t.retryCount=0,t.loadPromise=null,t.load();}dispose(){this.intersectionObserver&&this.intersectionObserver.disconnect(),this.idleCallback&&cancelIdleCallback(this.idleCallback),this.components.clear(),Object.values(this.loadQueue).forEach(e=>e.length=0),y.publish(b.AUDIT_EVENT,{action:"lazy_loader_disposed"});}}class Ui{constructor(e){this.lazyLoader=e,this.registerMedicalComponents();}registerMedicalComponents(){this.lazyLoader.register("advanced-analytics",()=>se(()=>import("./research-tools-DGotpYen.js").then(e=>e.g),__vite__mapDeps([0,1])),{priority:E.LOW}),this.lazyLoader.register("clinical-reporting",()=>se(()=>import("./research-tools-DGotpYen.js").then(e=>e.f),__vite__mapDeps([0,1])),{priority:E.LOW}),this.lazyLoader.register("audit-trail",()=>se(()=>import("./research-tools-DGotpYen.js").then(e=>e.h),__vite__mapDeps([0,1])),{priority:E.LOW}),this.lazyLoader.register("medical-service-worker",()=>se(()=>import("./enterprise-features-BG9OW9_4.js").then(e=>e.e),__vite__mapDeps([2,1])),{priority:E.LOW}),this.lazyLoader.register("sw-manager",()=>se(()=>import("./enterprise-features-BG9OW9_4.js").then(e=>e.d),__vite__mapDeps([2,1])),{priority:E.LOW}),this.lazyLoader.register("command-pattern",()=>se(()=>Promise.resolve().then(()=>oa),void 0),{priority:E.NORMAL}),this.lazyLoader.register("prediction-strategy",()=>se(()=>Promise.resolve().then(()=>ha),void 0),{priority:E.NORMAL}),this.lazyLoader.register("validation-factory",()=>se(()=>Promise.resolve().then(()=>Ta),void 0),{priority:E.NORMAL});}async loadByClinicalPriority(e){switch(e){case"emergency":await this.lazyLoader.preload(E.HIGH);break;case"routine":await this.lazyLoader.preload(E.NORMAL);break;case"research":await this.lazyLoader.load("advanced-analytics"),await this.lazyLoader.load("clinical-reporting"),await this.lazyLoader.load("audit-trail");break;case"background":await this.lazyLoader.load("medical-service-worker"),await this.lazyLoader.load("sw-manager");break;default:await this.lazyLoader.preload(E.NORMAL);}}async preloadForModule(e){const s={coma:["command-pattern"],limited:["prediction-strategy"],full:["command-pattern","prediction-strategy","validation-factory"],research:["advanced-analytics","clinical-reporting","audit-trail"]}[e]||[],r=s.map(i=>this.lazyLoader.load(i));await Promise.allSettled(r),y.publish(b.AUDIT_EVENT,{action:"medical_components_preloaded",moduleType:e,components:s});}async loadEnterpriseFeatures(){const e=["medical-service-worker","sw-manager","advanced-analytics","clinical-reporting","audit-trail"],t=e.map(i=>this.lazyLoader.load(i).catch(n=>(console.warn(`Enterprise feature ${i} failed to load:`,n),null))),r=(await Promise.allSettled(t)).filter(i=>i.status==="fulfilled"&&i.value!==null).length;return y.publish(b.AUDIT_EVENT,{action:"enterprise_features_loaded",requested:e.length,loaded:r}),r;}}const De=new Ut;new Ui(De);class Wi{constructor(){this.isInitialized=!1,this.phase3Status={serviceWorker:!1,performanceMonitor:!1,syncManager:!1,lazyLoader:!1},this.phase4Status={reportingSystem:!1,qualityMetrics:!1,auditTrail:!1};}async initialize(){return v(async()=>(await this.initializePhase3Features(),await this.initializePhase4Features(),this.isInitialized=!0,!0),e=>!1);}async initializePhase3Features(){return v(async()=>(await this.initializePerformanceMonitor(),this.initializeServiceWorker(),await this.initializeSyncManager(),await this.initializeProgressiveLoading(),!0),e=>!1);}async initializePerformanceMonitor(){return v(async()=>(H.start(),this.phase3Status.performanceMonitor=!0,!0),e=>(this.phase3Status.performanceMonitor=!1,!1));}async initializeServiceWorker(){v(async()=>{const e=await nt.initialize();return this.phase3Status.serviceWorker=e,e&&await this.prefetchCriticalResources(),e;},e=>(this.phase3Status.serviceWorker=!1,!1));}async initializeSyncManager(){return v(async()=>{const e=await ot.initialize();return this.phase3Status.syncManager=e,e;},e=>(this.phase3Status.syncManager=!1,!1));}async initializeProgressiveLoading(){return v(async()=>(await De.preload("critical"),setTimeout(()=>this.setupViewportLoading(),100),this.phase3Status.lazyLoader=!0,!0),e=>(this.phase3Status.lazyLoader=!1,!1));}setupViewportLoading(){try{document.querySelectorAll(".brain-visualization-placeholder").forEach(s=>{De.observeElement(s,"brain-visualization");}),document.querySelectorAll(".stroke-center-map-placeholder").forEach(s=>{De.observeElement(s,"stroke-center-map");});}catch(e){}}async prefetchCriticalResources(){return v(async()=>{const e=["/0925/src/logic/lvo-local-model.js","/0925/src/logic/ich-volume-calculator.js","/0925/src/patterns/prediction-strategy.js","/0925/src/performance/medical-cache.js"];return await nt.prefetchResources(e),!0;},e=>!1);}async initializePhase4Features(){return v(async()=>(await this.initializeAuditTrail(),await this.initializeReportingSystem(),await this.initializeQualityMetrics(),this.setupPhase4EventHandlers(),!0),e=>!1);}async initializeAuditTrail(){return v(async()=>(await lt.initialize(),this.phase4Status.auditTrail=!0,!0),e=>(this.phase4Status.auditTrail=!1,!1));}async initializeReportingSystem(){return v(async()=>(ct.start(),this.phase4Status.reportingSystem=!0,!0),e=>(this.phase4Status.reportingSystem=!1,!1));}async initializeQualityMetrics(){return v(async()=>(await qe.initialize(),this.phase4Status.qualityMetrics=!0,!0),e=>(this.phase4Status.qualityMetrics=!1,!1));}setupPhase4EventHandlers(){document.addEventListener("submit",async e=>{const t=e.target;t.dataset.module&&await v(async()=>{const s=new FormData(t),r=Object.fromEntries(s.entries());return this.phase4Status.auditTrail&&lt.logEvent("data_entry",{module:t.dataset.module,timestamp:new Date().toISOString(),data_points:Object.keys(r).length}),this.phase4Status.qualityMetrics&&(qe.recordMetric("form_completion","count",1),qe.recordMetric("data_quality","completeness",Object.values(r).filter(i=>i&&i.trim()).length/Object.keys(r).length*100)),!0;},s=>!1);});}getStatus(){return{isInitialized:this.isInitialized,phase3:{...this.phase3Status,overall:Object.values(this.phase3Status).some(e=>e)},phase4:{...this.phase4Status,overall:Object.values(this.phase4Status).some(e=>e)},systemStatus:this.getSystemStatus()};}getSystemStatus(){return{serviceWorkerSupported:"serviceWorker"in navigator,indexedDBSupported:"indexedDB"in window,notificationSupported:"Notification"in window,cacheSupported:"caches"in window,webLockSupported:"locks"in navigator,performanceSupported:"performance"in window};}async restart(){return this.destroy(),this.initialize();}destroy(){var e,t,s,r,i,n;if(this.phase3Status.performanceMonitor)try{(t=(e=H).stop)==null||t.call(e);}catch(o){}if(this.phase3Status.syncManager)try{(r=(s=ot).destroy)==null||r.call(s);}catch(o){}if(this.phase4Status.reportingSystem)try{(n=(i=ct).stop)==null||n.call(i);}catch(o){}this.phase3Status={serviceWorker:!1,performanceMonitor:!1,syncManager:!1,lazyLoader:!1},this.phase4Status={reportingSystem:!1,qualityMetrics:!1,auditTrail:!1},this.isInitialized=!1;}}const Gi={};class qi{constructor(){this.container=null,this.unsubscribe=null,this.isInitialized=!1,this.uiManager=new Fi,this.themeManager=new zi,this.sessionManager=new Bi,this.advancedFeaturesManager=new Wi;}async init(){return v(async()=>{if(p.info("Application initialization started",{category:f.SYSTEM,version:"2.1.0",userAgent:navigator.userAgent.substring(0,100)}),document.readyState==="loading")return p.debug("Waiting for DOM ready",{category:f.SYSTEM}),new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>e(this.init()));});if(this.container=document.getElementById("appContainer"),!this.container)throw p.critical("App container not found",{category:f.SYSTEM,containerId:"appContainer"}),new Error("Critical initialization failure: App container not found");return p.debug("App container found",{category:f.SYSTEM}),O.isValidSession()||(p.info("No valid session, redirecting to login",{category:f.AUTHENTICATION}),h.navigate("login")),p.info("Initializing core features",{category:f.SYSTEM}),await this.initializeCoreFeatures(),p.info("Skipping advanced features initialization",{category:f.SYSTEM}),this.setupRenderingSystem(),p.debug("Initializing UI manager",{category:f.SYSTEM}),this.uiManager.initialize(this.container),p.debug("Initializing theme manager",{category:f.SYSTEM}),this.themeManager.initialize(),p.debug("Initializing session manager",{category:f.SYSTEM}),this.sessionManager.initialize(),import.meta&&Gi&&(p.info("Starting Cloud Functions warm-up (dev only)",{category:f.NETWORK}),ls()),ge(this.container),this.isInitialized=!0,p.info("Application initialization completed successfully",{category:f.SYSTEM,initializationTime:performance.now()}),!0;},e=>{throw p.critical("Application initialization failed",{category:f.SYSTEM,error:e.message,stack:e.stack}),new Error(`App initialization failed: ${e.message}`);});}async initializeCoreFeatures(){return v(async()=>{const e=[this.uiManager.preloadCriticalComponents(),this.themeManager.loadSavedTheme(),this.sessionManager.validateStoredSession()],s=(await Promise.allSettled(e)).filter(r=>r.status==="rejected");if(s.length>0)throw new Error(`${s.length} core features failed to initialize`);return!0;},e=>!1);}async initializeAdvancedFeatures(){v(async()=>(await this.advancedFeaturesManager.initialize(),!0),e=>!1);}setupRenderingSystem(){this.unsubscribe=h.subscribe(()=>{ge(this.container),setTimeout(()=>this.uiManager.updateResearchMode(),200);}),window.addEventListener("languageChanged",()=>{this.uiManager.updateLanguage(),ge(this.container);});}getStatus(){return{isInitialized:this.isInitialized,hasContainer:!!this.container,isAuthenticated:O.isValidSession(),ui:this.uiManager.getStatus(),theme:this.themeManager.getStatus(),session:this.sessionManager.getStatus(),advancedFeatures:this.advancedFeaturesManager.getStatus()};}destroy(){this.unsubscribe&&this.unsubscribe(),this.uiManager.destroy(),this.themeManager.destroy(),this.sessionManager.destroy(),this.advancedFeaturesManager.destroy(),this.isInitialized=!1;}}async function Ki(){const a=new qi;try{return await a.init(),a;}catch(e){throw new Error(`Failed to create application: ${e.message}`);}}const Pe={authentication:"https://europe-west3-igfap-452720.cloudfunctions.net/authenticate-research-access",comaIch:"https://europe-west3-igfap-452720.cloudfunctions.net/predict_coma_ich",limitedIch:"https://europe-west3-igfap-452720.cloudfunctions.net/predict_limited_data_ich",fullStroke:"https://europe-west3-igfap-452720.cloudfunctions.net/predict_full_stroke",lvo:"https://europe-west3-igfap-452720.cloudfunctions.net/predict_lvo"},kt={authentication:{action:"validate_session",session_token:"warmup-test-token"},comaIch:{gfap_value:100},limitedIch:{age_years:65,systolic_bp:140,diastolic_bp:80,gfap_value:100,vigilanzminderung:0},fullStroke:{age_years:65,systolic_bp:140,diastolic_bp:80,gfap_value:100,fast_ed_score:4,headache:0,vigilanzminderung:0,armparese:0,beinparese:0,eye_deviation:0,atrial_fibrillation:0,anticoagulated_noak:0,antiplatelets:0},lvo:{gfap_value:100,fast_ed_score:4}};class ji{constructor(){this.warmupAttempts=0,this.successfulWarmups=0,this.warmupResults={},this.isWarming=!1;}async warmupAllAPIs(e=!0){if(this.isWarming)return p.info("API warmup already in progress",{category:"WARMUP"}),this.warmupResults;this.isWarming=!0,this.warmupAttempts=0,this.successfulWarmups=0,this.warmupResults={},p.info("Starting API warmup process",{category:"WARMUP",endpoints:Object.keys(Pe).length});const t=Object.entries(Pe).map(async([s,r])=>{try{const i=await this.warmupSingleAPI(s,r,kt[s]);return this.warmupResults[s]=i,i.success&&this.successfulWarmups++,i;}catch(i){const n={success:!1,error:i.message,duration:0,timestamp:new Date().toISOString()};return this.warmupResults[s]=n,n;}});return e?(Promise.all(t).then(()=>{this.completeWarmup();}).catch(s=>{p.error("Background API warmup failed",{category:"WARMUP",error:s.message}),this.isWarming=!1;}),{status:"warming",message:"APIs warming up in background"}):(await Promise.all(t),this.completeWarmup(),this.warmupResults);}async warmupSingleAPI(e,t,s){const r=Date.now();this.warmupAttempts++;try{p.info(`Warming up ${e} API`,{category:"WARMUP",url:t});const i=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json","User-Agent":"iGFAP-Warmup/2.1.0"},body:JSON.stringify(s),signal:AbortSignal.timeout(1e4)}),n=Date.now()-r,o={success:!0,status:i.status,duration:n,message:`${e} API warmed up`,timestamp:new Date().toISOString()};return p.info(`Successfully warmed up ${e} API`,{category:"WARMUP",duration:n,status:i.status}),o;}catch(i){const n=Date.now()-r;return i.name==="TypeError"&&i.message.includes("Failed to fetch")?(p.info(`${e} API warmup encountered CORS (expected), function still warmed`,{category:"WARMUP",duration:n}),{success:!0,status:"cors-blocked",duration:n,message:`${e} API warmed (CORS blocked but function activated)`,timestamp:new Date().toISOString()}):(p.warn(`Failed to warm up ${e} API`,{category:"WARMUP",error:i.message,duration:n}),{success:!1,error:i.message,duration:n,timestamp:new Date().toISOString()});}}completeWarmup(){this.isWarming=!1;const e={total:this.warmupAttempts,successful:this.successfulWarmups,failed:this.warmupAttempts-this.successfulWarmups,results:this.warmupResults};p.info("API warmup process completed",{category:"WARMUP",summary:e}),typeof window!="undefined"&&window.dispatchEvent(new CustomEvent("api-warmup-complete",{detail:e}));}getWarmupStatus(){return{isWarming:this.isWarming,attempts:this.warmupAttempts,successful:this.successfulWarmups,results:this.warmupResults};}async warmupCriticalAPIs(){const e=["authentication","comaIch","limitedIch"];p.info("Starting critical API warmup",{category:"WARMUP",apis:e});const t={};for(const s of e)Pe[s]&&(t[s]=await this.warmupSingleAPI(s,Pe[s],kt[s]));return p.info("Critical API warmup completed",{category:"WARMUP",results:t}),t;}}const Et=new ji;async function Wt(a={}){const{background:e=!0,criticalOnly:t=!1}=a;try{return t?await Et.warmupCriticalAPIs():await Et.warmupAllAPIs(e);}catch(s){return p.error("API warmup initialization failed",{category:"WARMUP",error:s.message}),{error:s.message};}}typeof window!="undefined"&&setTimeout(()=>{Wt({background:!0,criticalOnly:!1});},1e3);const Yi={BASE_URL:"/0925/",DEV:!0,MODE:"production",PROD:!1,SSR:!1,VITE_USER_NODE_ENV:"development"};let V=null;async function Gt(){return v(async()=>{V=await Ki(),setTimeout(()=>{Wt({background:!0,criticalOnly:!1}).then(t=>{console.info("[Main] API warmup started:",t.status||"completed");}).catch(t=>{console.warn("[Main] API warmup failed:",t.message);});},2e3);const a=V.getStatus(),e=new CustomEvent("appInitialized",{detail:{timestamp:new Date().toISOString(),status:a,version:"2.1.0",build:"production"}});return document.dispatchEvent(e),V;},a=>{throw Qi(a),a;});}function Qi(a){const e=document.getElementById("appContainer");e&&(e.innerHTML=`
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 50vh;
        padding: 20px;
        text-align: center;
        font-family: system-ui, -apple-system, sans-serif;
      ">
        <div style="
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 8px;
          padding: 24px;
          max-width: 500px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        ">
          <h2 style="color: #856404; margin: 0 0 16px 0;">
            ⚠️ Application Initialization Failed
          </h2>
          <p style="color: #856404; margin: 0 0 16px 0; line-height: 1.5;">
            The medical triage system could not start properly.
            This may be due to a network issue or browser compatibility problem.
          </p>
          <button
            onclick="window.location.reload()"
            style="
              background: #007bff;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 6px;
              font-size: 16px;
              cursor: pointer;
              margin-right: 12px;
            "
          >
            🔄 Reload Application
          </button>
          <button
            onclick="window.open('mailto:bosdeepak@gmail.com?subject=iGFAP App Error', '_blank')"
            style="
              background: #6c757d;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 6px;
              font-size: 16px;
              cursor: pointer;
            "
          >
            📧 Report Issue
          </button>
        </div>
        <small style="color: #6c757d; margin-top: 20px;">
          Error: ${a.message||"Unknown initialization error"}
        </small>
      </div>
    `);const t=new CustomEvent("appInitializationFailed",{detail:{error:a.message,timestamp:new Date().toISOString(),userAgent:navigator.userAgent.substring(0,100)}});document.dispatchEvent(t);}function Tt(){if(V)try{V.destroy();}catch(a){}}function Ji(){document.addEventListener("visibilitychange",()=>{V&&document.visibilityState==="visible"&&(V.getStatus().isAuthenticated||window.location.reload());}),window.addEventListener("beforeunload",Tt),window.addEventListener("unload",Tt);}async function At(){try{try{if(["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)&&!(import.meta&&Yi)&&"serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();for(const s of t)try{await s.unregister();}catch(r){}window.addEventListener("beforeinstallprompt",s=>{s.preventDefault();});}}catch(e){}Ji(),await Gt();const a=new CustomEvent("appReady",{detail:{timestamp:new Date().toISOString(),version:"2.1.0"}});document.dispatchEvent(a);}catch(a){}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",At):At();typeof window!="undefined"&&(window.iGFAPApp={getApp:()=>V,getStatus:()=>(V==null?void 0:V.getStatus())||{error:"App not initialized"},restart:async()=>(V&&V.destroy(),Gt()),getCurrentScreen:()=>{try{return h.getState().currentScreen;}catch(a){return"unknown";}},forceResults:()=>{try{h.navigate("results");const a=document.getElementById("appContainer");return a&&ge(a),!0;}catch(a){return!1;}}});function Ne(a){return getComputedStyle(document.documentElement).getPropertyValue(a).trim();}function Zi({percent:a=0,level:e="normal"}){const t=Se.useRef(null),s=Se.useRef(null);return Se.useEffect(()=>{const r=t.current,i=r==null?void 0:r.parentElement;if(!i||!r)return;s.current=i;const n=()=>{const m=window.devicePixelRatio||1,d=i.offsetWidth||120;r.width=Math.max(1,Math.floor(d*m)),r.height=Math.max(1,Math.floor(d*m));const u=r.getContext("2d");u.setTransform(1,0,0,1,0,0),u.scale(m,m);const S=d,T=d,_=S/2,x=T/2,$=d/2-8,M=Math.min(Math.max($*.12,6),12),X=Math.max(M-2,6),ee=M%2===1?$-.5:$;u.clearRect(0,0,S,T);const W=document.body.classList.contains("dark-mode"),ce=Ne("--border-color")||(W?"#2f3336":"#dee2e6");u.save(),u.globalAlpha=W?.36:.65,u.strokeStyle=ce,u.lineWidth=X,u.lineCap="round",u.beginPath(),u.arc(_,x,ee,0,Math.PI*2),u.stroke(),u.restore();let G=Ne("--primary-color");e==="high"&&(G=Ne("--warning-color")||"#ff9800"),e==="critical"&&(G=Ne("--danger-color")||"#DC143C"),W&&G.includes("#")&&(e==="high"&&(G="#ffaa00"),e==="critical"&&(G="#ff1744"));const F=-Math.PI/2,U=F+Math.PI*2*(Math.max(0,Math.min(100,a))/100);u.save(),u.strokeStyle=W?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.15)",u.lineWidth=M+1.5,u.beginPath(),u.arc(_,x,ee,F,U,!1),u.stroke(),u.restore(),u.strokeStyle=G,u.lineWidth=M,u.beginPath(),u.arc(_,x,ee,F,U,!1),u.stroke();},o=requestAnimationFrame(n),c=new ResizeObserver(()=>requestAnimationFrame(n));return c.observe(i),()=>{cancelAnimationFrame(o),c.disconnect();};},[a,e]),ie.createElement(ie.Fragment,null,ie.createElement("div",{className:"probability-number"},Math.round(a),ie.createElement("span",null,"%")),ie.createElement("canvas",{ref:t,className:"probability-canvas"}));}function Xi({lvoProb:a=0,ichProb:e=0,title:t="Decision Support – LVO/ICH"}){const s=Se.useRef(null);return Se.useEffect(()=>{const r=s.current;if(!r)return;const i=r.getContext("2d");let n=null,o=.5;const m=Math.max(e,.5),d=a/m,T=Math.max(.5,Math.min(2,d)),_=(Math.log2(T)+1)/2,x=Math.abs(a-e),$=Math.max(a,e);let M=x<10?Math.round(30+$*.3):x<20?Math.round(50+$*.4):Math.round(70+$*.3);M=Math.max(0,Math.min(100,M));const X=()=>{const ee=window.devicePixelRatio||1,W=r.getBoundingClientRect(),ce=W.width||300,G=W.height||200;r.width=Math.max(1,Math.floor(ce*ee)),r.height=Math.max(1,Math.floor(G*ee)),i.setTransform(1,0,0,1,0,0),i.scale(ee,ee);const F=ce,U=G,q=F<480,Te=F>=480&&F<1024,Y=q?12:Te?14:16,de=15,jt=F/2-de-Y/2,Je=U/2-de-Y/2,Yt=Te?Math.min(Je,U*.42):Je,I=Math.max(10,Math.min(jt,Yt)),g=F/2,w=U-(de+Y/2+I);i.clearRect(0,0,F,U);const z=document.body.classList.contains("dark-mode"),Ze={day:{bezel:"#e8eaed",bezelShadow:"#c1c7cd",track:"#f5f7fa",ich:"#8b1538",lvo:"#1e3a5f",neutral:"#6b7280",needle:"#d4af37",text:"#374151",tickMajor:"#4b5563",tickMinor:"#9ca3af"},night:{bezel:"#2d3036",bezelShadow:"#1a1d23",track:"#383c42",ich:"#dc2626",lvo:"#3b82f6",neutral:"#64748b",needle:"#fbbf24",text:"#f3f4f6",tickMajor:"#d1d5db",tickMinor:"#6b7280"}},R=z?Ze.night:Ze.day,ye=i.createLinearGradient(g-I,w-I,g+I,w+I);ye.addColorStop(0,R.bezel),ye.addColorStop(.3,R.bezelShadow),ye.addColorStop(.7,R.bezel),ye.addColorStop(1,R.bezelShadow),i.strokeStyle=ye,i.lineWidth=Y+4,i.lineCap="round",i.beginPath(),i.arc(g,w,I+2,0,Math.PI,!1),i.stroke(),i.strokeStyle=R.track,i.lineWidth=Y,i.beginPath(),i.arc(g,w,I,0,Math.PI,!1),i.stroke();const ze=60,Xe=Math.PI/ze;for(let L=0;L<ze;L++){const P=L/(ze-1),C=L*Xe,B=Math.min((L+1)*Xe,Math.PI);let N,be,Ge;if(P<=.5){const ue=P*2;N=Math.round(0+242*ue),be=Math.round(154+66*ue),Ge=Math.round(255*(1-ue));}else{const ue=(P-.5)*2;N=Math.round(242+13*ue),be=Math.round(220*(1-ue)),Ge=Math.round(0);}const ts=`rgba(${N}, ${be}, ${Ge}, 0.85)`;i.strokeStyle=ts,i.lineWidth=Y-4,i.beginPath(),i.arc(g,w,I,C,B,!1),i.stroke();}const Qt=[.5,.75,1,1.5,2],Jt=q?[]:[.6,.9,1.2,1.8];Qt.forEach(L=>{const P=(Math.log2(L)+1)/2,C=Math.PI-P*Math.PI,B=I-12,N=I-24;i.strokeStyle=R.tickMajor,i.lineWidth=1.5,i.lineCap="round",i.beginPath(),i.moveTo(g+Math.cos(C)*B,w+Math.sin(C)*B),i.lineTo(g+Math.cos(C)*N,w+Math.sin(C)*N),i.stroke(),i.fillStyle=R.text;const be=q?13:15;i.font=`600 ${be}px "SF Pro Display", system-ui, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(L.toFixed(1),g+Math.cos(C)*(I-35),w+Math.sin(C)*(I-35));}),Jt.forEach(L=>{const P=(Math.log2(L)+1)/2,C=Math.PI-P*Math.PI,B=I-8,N=I-16;i.strokeStyle=R.tickMinor,i.lineWidth=.8,i.lineCap="round",i.beginPath(),i.moveTo(g+Math.cos(C)*B,w+Math.sin(C)*B),i.lineTo(g+Math.cos(C)*N,w+Math.sin(C)*N),i.stroke();}),[{val:.77,label:"ICH",side:"left"},{val:1.3,label:"LVO",side:"right"}].forEach(L=>{const P=(Math.log2(L.val)+1)/2,C=Math.PI-P*Math.PI,B=I-2,N=I+12;i.strokeStyle=L.side==="left"?R.ich:R.lvo,i.lineWidth=2,i.setLineDash([3,2]),i.beginPath(),i.moveTo(g+Math.cos(C)*B,w+Math.sin(C)*B),i.lineTo(g+Math.cos(C)*N,w+Math.sin(C)*N),i.stroke(),i.setLineDash([]);});const Zt=q?15:17,Ae=q?I+35:I+42;i.fillStyle=z?"#ff4444":"#ff0000",i.font=`700 ${Zt}px "SF Pro Display", system-ui, sans-serif`,i.textAlign="center",i.textBaseline="middle",z&&(i.shadowColor="rgba(0,0,0,0.8)",i.shadowBlur=3,i.shadowOffsetY=1),i.fillText("ICH",g+Math.cos(Math.PI)*Ae,w+Math.sin(Math.PI)*Ae-10),i.fillStyle=z?"#4499ff":"#0099ff",i.fillText("LVO",g+Math.cos(0)*Ae,w+Math.sin(0)*Ae-10),i.shadowBlur=0,i.shadowOffsetY=0,o+=(_-o)*.12;const ae=Math.PI-o*Math.PI,ne=Math.max(0,I-Y/2-6),et=(1-M/100)*(Math.PI*.05);i.save(),i.globalAlpha=z?.2:.25,i.fillStyle=R.neutral,i.beginPath(),i.moveTo(g,w),i.arc(g,w,ne*.85,ae-et,ae+et,!1),i.closePath(),i.fill(),i.restore();const Q=R.needle,Xt=performance.now(),Ie=i.createLinearGradient(g,w,g+Math.cos(ae)*ne,w+Math.sin(ae)*ne);Ie.addColorStop(0,Q+"ff"),Ie.addColorStop(.7,Q+"dd"),Ie.addColorStop(1,Q+"bb"),i.strokeStyle=Ie,i.lineWidth=2.5,i.lineCap="round",i.shadowColor=z?"rgba(0,0,0,0.8)":"rgba(0,0,0,0.3)",i.shadowBlur=4,i.shadowOffsetY=2,i.beginPath(),i.moveTo(g,w),i.lineTo(g+Math.cos(ae)*ne,w+Math.sin(ae)*ne),i.stroke(),i.shadowBlur=0,i.shadowOffsetY=0;const Be=g+Math.cos(ae)*ne,He=w+Math.sin(ae)*ne,Ce=.6+.4*Math.sin(Xt*.006),Ve=3+Ce*2;i.save(),i.globalAlpha=.15+Ce*.25,i.fillStyle=Q,i.beginPath(),i.arc(Be,He,Ve*3.5,0,Math.PI*2),i.fill(),i.restore(),i.save(),i.globalAlpha=.4+Ce*.3,i.fillStyle=Q,i.beginPath(),i.arc(Be,He,Ve*1.8,0,Math.PI*2),i.fill(),i.restore(),i.fillStyle=Q,i.shadowColor=Q,i.shadowBlur=4+Ce*6,i.beginPath(),i.arc(Be,He,Ve,0,Math.PI*2),i.fill(),i.shadowBlur=0;const Ue=14,tt=8,Le=i.createRadialGradient(g,w,0,g,w,Ue);Le.addColorStop(0,z?"#4a5568":"#718096"),Le.addColorStop(.7,z?"#2d3748":"#4a5568"),Le.addColorStop(1,z?"#1a202c":"#2d3748"),i.fillStyle=Le,i.beginPath(),i.arc(g,w,Ue,0,Math.PI*2),i.fill();const We=i.createRadialGradient(g,w,0,g,w,tt);We.addColorStop(0,Q+"aa"),We.addColorStop(1,Q+"44"),i.fillStyle=We,i.beginPath(),i.arc(g,w,tt,0,Math.PI*2),i.fill(),i.strokeStyle=Q,i.lineWidth=1,i.beginPath(),i.arc(g,w,Ue-1,0,Math.PI*2),i.stroke();const es=q?18:22,st=w-I*.65,it=q?60:80,at=q?24:30;if(i.save(),i.globalAlpha=z?.9:.95,i.fillStyle=z?"#1f2937":"#ffffff",i.shadowColor=z?"rgba(0,0,0,0.5)":"rgba(0,0,0,0.2)",i.shadowBlur=8,i.shadowOffsetY=2,i.fillRect(g-it/2,st-at/2,it,at),i.restore(),i.fillStyle=R.text,i.font=`700 ${es}px "SF Mono", ui-monospace, monospace`,i.textAlign="center",i.textBaseline="middle",i.fillText(T.toFixed(2),g,st),!q){const L=w+I*.15,P=60,C=4;i.fillStyle=z?"#374151":"#e5e7eb",i.fillRect(g-P/2,L,P,C);const B=M/100*P,N=i.createLinearGradient(g-P/2,L,g-P/2+B,L);N.addColorStop(0,R.neutral),N.addColorStop(1,R.needle),i.fillStyle=N,i.fillRect(g-P/2,L,B,C),i.fillStyle=R.text,i.font="500 11px \"SF Pro Display\", system-ui, sans-serif",i.textAlign="center",i.fillText(`${M}% confidence`,g,L+18);}n=requestAnimationFrame(X);};return X(),()=>{n&&cancelAnimationFrame(n);};},[a,e]),ie.createElement("div",{className:"gauge-wrapper"},ie.createElement("canvas",{ref:s,className:"gauge-canvas"}));}function ea(){document.querySelectorAll("[data-react-ring]").forEach(a=>{if(a.__mounted)return;const e=parseFloat(a.getAttribute("data-percent"))||0,t=a.getAttribute("data-level")||"normal",s=dt(a);s.render(ie.createElement(Zi,{percent:e,level:t})),a.__mounted=!0,a.__root=s;}),document.querySelectorAll("[data-react-tachometer]").forEach(a=>{if(a.__mounted)return;const e=parseFloat(a.getAttribute("data-ich"))||0,t=parseFloat(a.getAttribute("data-lvo"))||0,s=a.getAttribute("data-title")||"Decision Support – LVO/ICH",r=dt(a);r.render(ie.createElement(Xi,{ichProb:e,lvoProb:t,title:s})),a.__mounted=!0,a.__root=r;});}const ta=Object.freeze(Object.defineProperty({__proto__:null,mountIslands:ea},Symbol.toStringTag,{value:"Module"}));class fe{constructor(e,t,s={}){this.name=e,this.description=t,this.metadata={...s,id:`cmd_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,timestamp:new Date().toISOString()},this.executed=!1,this.undone=!1;}async execute(){if(this.executed&&!this.undone)throw new Error(`Command ${this.name} has already been executed`);try{y.publish(b.AUDIT_EVENT,{action:"command_execute_start",command:this.name,commandId:this.metadata.id});const e=await this.doExecute();return this.executed=!0,this.undone=!1,y.publish(b.AUDIT_EVENT,{action:"command_execute_success",command:this.name,commandId:this.metadata.id}),e;}catch(e){throw y.publish(b.AUDIT_EVENT,{action:"command_execute_error",command:this.name,commandId:this.metadata.id,error:e.message}),e;}}async undo(){if(!this.executed||this.undone)throw new Error(`Command ${this.name} cannot be undone`);try{y.publish(b.AUDIT_EVENT,{action:"command_undo_start",command:this.name,commandId:this.metadata.id});const e=await this.doUndo();return this.undone=!0,y.publish(b.AUDIT_EVENT,{action:"command_undo_success",command:this.name,commandId:this.metadata.id}),e;}catch(e){throw y.publish(b.AUDIT_EVENT,{action:"command_undo_error",command:this.name,commandId:this.metadata.id,error:e.message}),e;}}async doExecute(){throw new Error("doExecute() must be implemented by concrete command");}async doUndo(){throw new Error("doUndo() must be implemented by concrete command");}canUndo(){return this.executed&&!this.undone;}getSummary(){return{name:this.name,description:this.description,id:this.metadata.id,timestamp:this.metadata.timestamp,executed:this.executed,undone:this.undone};}}class sa extends fe{constructor(e,t,s,r){super("UPDATE_PATIENT_DATA",`Update ${e} from ${s} to ${t}`,{fieldName:e,newValue:t,previousValue:s}),this.fieldName=e,this.newValue=t,this.previousValue=s,this.store=r;}async doExecute(){const e=this.store.getFormData("current")||{};return e[this.fieldName]=this.newValue,this.store.setFormData("current",e),y.publish(b.PATIENT_DATA_UPDATED,{field:this.fieldName,newValue:this.newValue,previousValue:this.previousValue}),{field:this.fieldName,value:this.newValue};}async doUndo(){const e=this.store.getFormData("current")||{};return this.previousValue===null||this.previousValue===void 0?delete e[this.fieldName]:e[this.fieldName]=this.previousValue,this.store.setFormData("current",e),y.publish(b.PATIENT_DATA_UPDATED,{field:this.fieldName,newValue:this.previousValue,previousValue:this.newValue,action:"undo"}),{field:this.fieldName,value:this.previousValue};}}class ia extends fe{constructor(e,t,s){super("NAVIGATE",`Navigate from ${t} to ${e}`,{targetScreen:e,sourceScreen:t}),this.targetScreen=e,this.sourceScreen=t,this.store=s;}async doExecute(){return this.store.navigate(this.targetScreen),y.publish(b.NAVIGATION_CHANGED,{from:this.sourceScreen,to:this.targetScreen}),{from:this.sourceScreen,to:this.targetScreen};}async doUndo(){return this.store.navigate(this.sourceScreen),y.publish(b.NAVIGATION_CHANGED,{from:this.targetScreen,to:this.sourceScreen,action:"undo"}),{from:this.targetScreen,to:this.sourceScreen};}}class aa extends fe{constructor(e,t,s){super("SUBMIT_FORM",`Submit ${t} form for prediction`,{moduleType:t,formFields:Object.keys(e)}),this.formData={...e},this.moduleType=t,this.predictionStrategy=s,this.results=null;}async doExecute(){return this.predictionStrategy.setStrategy(this.getStrategyName()),this.results=await this.predictionStrategy.predict(this.formData),y.publish(b.FORM_SUBMITTED,{moduleType:this.moduleType,fieldsCount:Object.keys(this.formData).length,success:!0}),this.results;}async doUndo(){return this.results=null,y.publish(b.FORM_SUBMITTED,{moduleType:this.moduleType,action:"undo"}),null;}getStrategyName(){switch(this.moduleType){case"coma":return"COMA_ICH";case"limited":return"LIMITED_DATA_ICH";case"full":return"FULL_STROKE";default:throw new Error(`Unknown module type: ${this.moduleType}`);}}}class ra extends fe{constructor(e,t){super("CLEAR_DATA",`Clear ${e} data for privacy compliance`,{dataType:e}),this.dataType=e,this.store=t,this.backupData=null;}async doExecute(){switch(this.backupData=this.store.getState(),this.dataType){case"all":this.store.reset();break;case"forms":this.store.clearFormData();break;case"results":this.store.clearResults();break;default:throw new Error(`Unknown data type: ${this.dataType}`);}return y.publish(b.AUDIT_EVENT,{action:"data_cleared",dataType:this.dataType}),{dataType:this.dataType,cleared:!0};}async doUndo(){if(this.backupData)return this.store.setState(this.backupData),y.publish(b.AUDIT_EVENT,{action:"data_restored",dataType:this.dataType}),{dataType:this.dataType,restored:!0};throw new Error("Cannot undo data clear: backup not available");}}class qt{constructor(){this.commandHistory=[],this.currentIndex=-1,this.maxHistorySize=100;}async executeCommand(e){if(!(e instanceof fe))throw new Error("Command must extend MedicalCommand");const t=await e.execute();return this.commandHistory=this.commandHistory.slice(0,this.currentIndex+1),this.commandHistory.push(e),this.currentIndex=this.commandHistory.length-1,this.commandHistory.length>this.maxHistorySize&&(this.commandHistory.shift(),this.currentIndex-=1),t;}async undo(){if(this.currentIndex<0)throw new Error("No commands to undo");const e=this.commandHistory[this.currentIndex];if(!e.canUndo())throw new Error(`Command ${e.name} cannot be undone`);const t=await e.undo();return this.currentIndex-=1,t;}async redo(){if(this.currentIndex>=this.commandHistory.length-1)throw new Error("No commands to redo");return this.currentIndex+=1,await this.commandHistory[this.currentIndex].execute();}canUndo(){return this.currentIndex>=0&&this.commandHistory[this.currentIndex]&&this.commandHistory[this.currentIndex].canUndo();}canRedo(){return this.currentIndex<this.commandHistory.length-1;}getCommandHistory(){return this.commandHistory.map(e=>e.getSummary());}clearHistory(){this.commandHistory=[],this.currentIndex=-1;}getStats(){return{totalCommands:this.commandHistory.length,currentIndex:this.currentIndex,canUndo:this.canUndo(),canRedo:this.canRedo(),executedCommands:this.currentIndex+1};}}const na=new qt,oa=Object.freeze(Object.defineProperty({__proto__:null,ClearDataCommand:ra,MedicalCommand:fe,MedicalCommandInvoker:qt,NavigationCommand:ia,SubmitFormCommand:aa,UpdatePatientDataCommand:sa,medicalCommandInvoker:na},Symbol.toStringTag,{value:"Module"}));class Fe{constructor(e,t){this.name=e,this.description=t,this.requiredFields=[],this.optionalFields=[];}validateInput(e){const t=[],s=[];return this.requiredFields.forEach(r=>{(!(r in e)||e[r]===null||e[r]===void 0)&&s.push(r);}),s.length>0&&t.push(`Missing required fields: ${s.join(", ")}`),{isValid:t.length===0,errors:t,missingFields:s};}preprocessInput(e){return{...e};}async predict(e){throw new Error("predict() method must be implemented by concrete strategy");}postprocessResult(e,t){return{...e,strategy:this.name,timestamp:new Date().toISOString(),inputSummary:this.createInputSummary(t)};}createInputSummary(e){const t={};return[...this.requiredFields,...this.optionalFields].forEach(s=>{s in e&&(t[s]=typeof e[s]);}),t;}}class la extends Fe{constructor(){super("COMA_ICH","ICH prediction for comatose patients"),this.requiredFields=["gfap"],this.optionalFields=["age","symptoms_duration"];}preprocessInput(e){return{gfap:parseFloat(e.gfap),patientType:"comatose"};}async predict(e){const t=this.validateInput(e);if(!t.isValid)throw new Error(`Validation failed: ${t.errors.join(", ")}`);const s=this.preprocessInput(e);y.publish(b.ASSESSMENT_STARTED,{strategy:this.name,inputFields:Object.keys(s)});try{const r=await Lt(s),i=this.postprocessResult(r,e);return y.publish(b.RESULTS_GENERATED,{strategy:this.name,success:!0,confidence:i.confidence}),i;}catch(r){throw y.publish(b.SECURITY_EVENT,{type:"prediction_error",strategy:this.name,error:r.message}),r;}}}class ca extends Fe{constructor(){super("LIMITED_DATA_ICH","ICH prediction with limited clinical data"),this.requiredFields=["gfap","age","systolic_bp","diastolic_bp"],this.optionalFields=["weakness_sudden","speech_sudden","vigilanzminderung"];}preprocessInput(e){return{gfap:parseFloat(e.gfap),age:parseInt(e.age,10),systolic_bp:parseFloat(e.systolic_bp),diastolic_bp:parseFloat(e.diastolic_bp),weakness_sudden:e.weakness_sudden===!0||e.weakness_sudden==="true",speech_sudden:e.speech_sudden===!0||e.speech_sudden==="true",vigilanzminderung:e.vigilanzminderung===!0||e.vigilanzminderung==="true"};}async predict(e){const t=this.validateInput(e);if(!t.isValid)throw new Error(`Validation failed: ${t.errors.join(", ")}`);const s=this.preprocessInput(e);y.publish(b.ASSESSMENT_STARTED,{strategy:this.name,inputFields:Object.keys(s)});try{const r=await Ct(s),i=this.postprocessResult(r,e);return y.publish(b.RESULTS_GENERATED,{strategy:this.name,success:!0,confidence:i.confidence}),i;}catch(r){throw y.publish(b.SECURITY_EVENT,{type:"prediction_error",strategy:this.name,error:r.message}),r;}}}class da extends Fe{constructor(){super("FULL_STROKE","Comprehensive stroke prediction with full clinical data"),this.requiredFields=["gfap","age","systolic_bp","diastolic_bp","fast_ed_score","sex","facialtwitching","armparese","speechdeficit","gaze","agitation"],this.optionalFields=["strokeOnsetKnown","medical_history"];}preprocessInput(e){return{gfap:parseFloat(e.gfap),age:parseInt(e.age,10),systolic_bp:parseFloat(e.systolic_bp),diastolic_bp:parseFloat(e.diastolic_bp),fast_ed_score:parseInt(e.fast_ed_score,10),sex:e.sex==="male"?1:0,facialtwitching:e.facialtwitching===!0||e.facialtwitching==="true",armparese:e.armparese===!0||e.armparese==="true",speechdeficit:e.speechdeficit===!0||e.speechdeficit==="true",gaze:e.gaze===!0||e.gaze==="true",agitation:e.agitation===!0||e.agitation==="true",strokeOnsetKnown:e.strokeOnsetKnown===!0||e.strokeOnsetKnown==="true"};}async predict(e){const t=this.validateInput(e);if(!t.isValid)throw new Error(`Validation failed: ${t.errors.join(", ")}`);const s=this.preprocessInput(e);y.publish(b.ASSESSMENT_STARTED,{strategy:this.name,inputFields:Object.keys(s)});try{const r=await It(s),i=this.postprocessResult(r,e);return y.publish(b.RESULTS_GENERATED,{strategy:this.name,success:!0,confidence:i.confidence}),i;}catch(r){throw y.publish(b.SECURITY_EVENT,{type:"prediction_error",strategy:this.name,error:r.message}),r;}}}class Kt{constructor(){this.strategies=new Map,this.currentStrategy=null,this.predictionHistory=[],this.registerStrategy(new la),this.registerStrategy(new ca),this.registerStrategy(new da);}registerStrategy(e){if(!(e instanceof Fe))throw new Error("Strategy must extend PredictionStrategy");this.strategies.set(e.name,e);}setStrategy(e){const t=this.strategies.get(e);if(!t)throw new Error(`Unknown strategy: ${e}`);this.currentStrategy=t;}async predict(e){if(!this.currentStrategy)throw new Error("No prediction strategy selected");const t=performance.now();try{const s=await this.currentStrategy.predict(e),r=performance.now()-t;return this.predictionHistory.push({strategy:this.currentStrategy.name,timestamp:new Date().toISOString(),duration:r,success:!0}),s;}catch(s){const r=performance.now()-t;throw this.predictionHistory.push({strategy:this.currentStrategy.name,timestamp:new Date().toISOString(),duration:r,success:!1,error:s.message}),s;}}getAvailableStrategies(){return Array.from(this.strategies.keys());}getStrategyInfo(e){const t=this.strategies.get(e);return t?{name:t.name,description:t.description,requiredFields:t.requiredFields,optionalFields:t.optionalFields}:null;}getPredictionHistory(){return[...this.predictionHistory];}clearHistory(){this.predictionHistory=[];}}const ua=new Kt,ma={COMA_ICH:"COMA_ICH",LIMITED_DATA_ICH:"LIMITED_DATA_ICH",FULL_STROKE:"FULL_STROKE"},ha=Object.freeze(Object.defineProperty({__proto__:null,PREDICTION_STRATEGIES:ma,PredictionContext:Kt,predictionContext:ua},Symbol.toStringTag,{value:"Module"}));class ga{constructor(e,t=!1){this.name=e,this.required=t,this.validators=[],this.medicalChecks=[];}addValidator(e){return this.validators.push(e),this;}addMedicalCheck(e){return this.medicalChecks.push(e),this;}validate(e,t=null){const s=[];this.required&&!e&&e!==0&&s.push("This field is required");for(const r of this.validators){const i=r(e);i&&s.push(i);}for(const r of this.medicalChecks){const i=r(e,t);i&&s.push(i);}return s;}toConfig(){return{required:this.required,validate:(e,t)=>this.validate(e,t)};}}class Ee extends ga{constructor(e,t=!1,s=null,r=null){super(e,t),this.min=s,this.max=r,this.type="number",s!==null&&this.addValidator(i=>i!==""&&!isNaN(i)&&parseFloat(i)<s?`Value must be at least ${s}`:null),r!==null&&this.addValidator(i=>i!==""&&!isNaN(i)&&parseFloat(i)>r?`Value must be at most ${r}`:null);}toConfig(){return{...super.toConfig(),min:this.min,max:this.max,type:this.type};}}class pa extends Ee{constructor(e,t,s){super(e,!0,s.min,s.max),this.biomarkerType=t,this.ranges=s,this.addMedicalCheck(r=>{const i=parseFloat(r);return isNaN(i)?null:t==="GFAP"&&i>s.critical?"Extremely high GFAP value - please verify lab result":null;});}}class fa extends Ee{constructor(e,t,s,r){super(e,!0,s,r),this.vitalType=t,this.addMedicalCheck((i,n)=>{const o=parseFloat(i);if(isNaN(o))return null;switch(t){case"SYSTOLIC_BP":if(n!=null&&n.diastolic_bp){const c=parseFloat(n.diastolic_bp);if(!isNaN(c)&&o<=c)return"Systolic BP must be higher than diastolic BP";}break;case"DIASTOLIC_BP":if(n!=null&&n.systolic_bp){const c=parseFloat(n.systolic_bp);if(!isNaN(c)&&o>=c)return"Diastolic BP must be lower than systolic BP";}break;}return null;});}}class ya extends Ee{constructor(e){super(e,!0,0,120),this.addMedicalCheck(t=>{const s=parseFloat(t);return isNaN(s)?null:s<18?"Emergency stroke assessment typically for adults (≥18 years)":null;});}}class ba extends Ee{constructor(e,t,s,r){super(e,!0,s,r),this.scaleType=t,this.addMedicalCheck(i=>{const n=parseFloat(i);if(isNaN(n))return null;switch(t){case"GCS":if(n<8)return"GCS < 8 indicates severe consciousness impairment - consider coma module";break;case"FAST_ED":if(n>=4)return"High FAST-ED score suggests LVO - consider urgent intervention";break;}return null;});}}class va{static createRule(e,t,s={}){switch(e){case"AGE":return new ya(t);case"BIOMARKER":if(s.biomarkerType==="GFAP")return new pa(t,"GFAP",K);throw new Error(`Unsupported biomarker type: ${s.biomarkerType}`);case"VITAL_SIGN":return new fa(t,s.vitalType,s.min,s.max);case"CLINICAL_SCALE":return new ba(t,s.scaleType,s.min,s.max);case"NUMERIC":return new Ee(t,s.required,s.min,s.max);default:throw new Error(`Unsupported validation rule type: ${e}`);}}static createModuleValidation(e){const t={};switch(e){case"LIMITED":t.age_years=this.createRule("AGE","age_years").toConfig(),t.systolic_bp=this.createRule("VITAL_SIGN","systolic_bp",{vitalType:"SYSTOLIC_BP",min:60,max:300}).toConfig(),t.diastolic_bp=this.createRule("VITAL_SIGN","diastolic_bp",{vitalType:"DIASTOLIC_BP",min:30,max:200}).toConfig(),t.gfap_value=this.createRule("BIOMARKER","gfap_value",{biomarkerType:"GFAP"}).toConfig();break;case"FULL":Object.assign(t,this.createModuleValidation("LIMITED")),t.fast_ed_score=this.createRule("CLINICAL_SCALE","fast_ed_score",{scaleType:"FAST_ED",min:0,max:9}).toConfig();break;case"COMA":t.gfap_value=this.createRule("BIOMARKER","gfap_value",{biomarkerType:"GFAP"}).toConfig(),t.gcs=this.createRule("CLINICAL_SCALE","gcs",{scaleType:"GCS",min:3,max:15}).toConfig();break;default:throw new Error(`Unsupported module type: ${e}`);}return t;}static validateModule(e,t){const s=this.createModuleValidation(t),r={};let i=!0;return Object.entries(s).forEach(([n,o])=>{const c=e[n],m=o.validate(c,e);m.length>0&&(r[n]=m,i=!1);}),{isValid:i,validationErrors:r};}}const Sa={AGE:"AGE",BIOMARKER:"BIOMARKER",VITAL_SIGN:"VITAL_SIGN",CLINICAL_SCALE:"CLINICAL_SCALE",NUMERIC:"NUMERIC"},wa={GFAP:"GFAP"},ka={SYSTOLIC_BP:"SYSTOLIC_BP",DIASTOLIC_BP:"DIASTOLIC_BP"},Ea={GCS:"GCS",FAST_ED:"FAST_ED"},Ta=Object.freeze(Object.defineProperty({__proto__:null,BIOMARKER_TYPES:wa,CLINICAL_SCALE_TYPES:Ea,MedicalValidationFactory:va,VALIDATION_RULE_TYPES:Sa,VITAL_SIGN_TYPES:ka},Symbol.toStringTag,{value:"Module"}));export{Me as A,gi as C,me as D,k as E,f as L,D as M,qa as R,Na as V,A as a,Da as b,$t as c,Ka as d,ja as g,Ds as l,p as m,Ya as p,v as s,l as t};
//# sourceMappingURL=index-DIpsYUXh.js.map

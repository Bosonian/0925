# 🧠 Future House Tools for Neurology Researchers - Complete Setup Guide

**Created for:** Neurologists and Neuromedicine/Neurodiagnostic Researchers
**Last Updated:** November 8, 2025

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Quick Start (5 Minutes)](#quick-start)
3. [Complete Setup Instructions](#complete-setup)
4. [Notebook Descriptions](#notebooks)
5. [Common Workflows](#workflows)
6. [Troubleshooting](#troubleshooting)
7. [Cost Management](#costs)
8. [Research Use Cases](#use-cases)

---

## 📊 Overview {#overview}

You now have **4 specialized Google Colab notebooks** for neurology research:

| Notebook | Purpose | Time Investment | Research Value |
|----------|---------|----------------|----------------|
| **1. PaperQA** | Literature analysis with AI | 5 min setup | ⭐⭐⭐⭐⭐ High |
| **2. Robin** | Therapeutic discovery | 10 min setup | ⭐⭐⭐⭐ High |
| **3. Data Analysis** | Neurodiagnostic data analysis | 5 min setup | ⭐⭐⭐⭐⭐ High |
| **4. LAB-Bench** | AI evaluation for research | 10 min setup | ⭐⭐⭐ Medium |

---

## ⚡ Quick Start (5 Minutes) {#quick-start}

### Step 1: Get API Key (2 minutes)

**Option A: OpenAI (Recommended for beginners)**
1. Go to https://platform.openai.com/signup
2. Create account (free)
3. Navigate to https://platform.openai.com/api-keys
4. Click "Create new secret key"
5. Copy the key (starts with `sk-...`)
6. **Cost:** ~$0.50-$2 per 100 questions (GPT-4o-mini)

**Option B: Anthropic Claude (Alternative)**
1. Go to https://console.anthropic.com/
2. Create account
3. Navigate to Settings → API Keys
4. Generate new key
5. Copy the key (starts with `sk-ant-...`)

### Step 2: Access Google Colab (1 minute)

1. Go to https://colab.research.google.com
2. Sign in with your Google account
3. You're ready!

### Step 3: Upload & Run Your First Notebook (2 minutes)

1. Download the notebooks from this directory:
   - `Neurology_PaperQA_Notebook.ipynb` ← **Start with this one!**
   - `Neurology_Robin_Therapeutic_Discovery.ipynb`
   - `Neurodiagnostic_Data_Analysis.ipynb`
   - `LAB_Bench_Evaluation.ipynb`

2. In Google Colab:
   - Click "File" → "Upload notebook"
   - Select `Neurology_PaperQA_Notebook.ipynb`

3. Add your API key:
   - Click the 🔑 **key icon** in the left sidebar
   - Click "+ Add new secret"
   - Name: `OPENAI_API_KEY`
   - Value: Paste your API key
   - Toggle ON "Notebook access"

4. Run the notebook:
   - Click "Runtime" → "Run all"
   - Or press `Ctrl+F9` (Windows) / `Cmd+F9` (Mac)

**🎉 That's it! You're now analyzing neurology literature with AI!**

---

## 🔧 Complete Setup Instructions {#complete-setup}

### For Mac Users

If you want to run tools **locally on your Mac** (not required, but more powerful):

#### Prerequisites Installation

```bash
# Install Homebrew (package manager)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python 3.12
brew install python@3.12

# Verify installation
python3 --version  # Should show 3.12.x

# Install virtualenv
pip3 install virtualenv
```

#### Install paper-qa (Most Useful Tool)

```bash
# Create directory for Future House tools
mkdir ~/future-house-tools
cd ~/future-house-tools

# Create virtual environment
python3 -m venv paperqa-env
source paperqa-env/bin/activate

# Install paper-qa
pip install "paper-qa>=5"

# Add API key to shell profile
echo 'export OPENAI_API_KEY="your-key-here"' >> ~/.zshrc
source ~/.zshrc

# Test it
pqa --version
```

#### Quick Command Line Usage

```bash
# Create papers directory
mkdir ~/neurology-papers
cd ~/neurology-papers

# Add your PDF papers here

# Ask questions
pqa ask "What are the diagnostic criteria for Alzheimer's disease?"

# Use faster settings to save money
pqa ask "What is lecanemab?" --settings fast
```

### For Android Users

**Best Option: Use Google Colab** (covered in Quick Start above)

**Alternative: Termux (for advanced users)**

1. Install F-Droid: https://f-droid.org/
2. Open F-Droid app, search "Termux", install
3. Open Termux, run:
```bash
pkg update && pkg upgrade
pkg install python git
pip install "paper-qa>=5"
```

**Recommendation:** Stick with Google Colab for 95% of your needs. It's easier and more powerful.

---

## 📚 Notebook Descriptions {#notebooks}

### Notebook 1: PaperQA for Neurology Literature

**What it does:**
- Reads PDF papers about neurology
- Answers questions with citations
- Detects contradictions in literature
- Generates summaries

**When to use:**
- Literature reviews for grants/papers
- Quick lookups during clinical rounds
- Systematic reviews
- Staying current with new research

**Example questions:**
```
"What are the latest biomarkers for Alzheimer's disease?"
"What is the mechanism of action of lecanemab?"
"Are there contradictions about amyloid hypothesis?"
"Summarize current MS treatment guidelines"
```

**Features:**
- ✅ Upload PDFs from your device
- ✅ Batch questions (multiple at once)
- ✅ Save results to Google Drive
- ✅ Citation tracking

---

### Notebook 2: Robin Therapeutic Discovery

**What it does:**
- Generates experimental assay proposals
- Identifies therapeutic candidates
- Ranks drugs/interventions by evidence
- Provides clinical recommendations

**When to use:**
- Research planning (what experiments to run)
- Drug candidate identification
- Grant writing (hypothesis generation)
- Clinical trial design

**Example outputs:**
- Top 5 assays for studying Parkinson's disease
- Ranked list of ALS drug candidates
- Evidence summaries for each therapeutic
- Research recommendations for your lab

**Neurological diseases covered:**
- Alzheimer's Disease
- Parkinson's Disease
- ALS
- Multiple Sclerosis
- Epilepsy
- Stroke
- Huntington's Disease
- Migraine
- Traumatic Brain Injury

---

### Notebook 3: Neurodiagnostic Data Analysis

**What it does:**
- Analyzes EEG/MEG data
- Processes clinical trial data
- Statistical analysis (t-tests, ANOVA, correlations)
- Machine learning predictions
- Visualizations

**When to use:**
- Clinical trial data analysis
- EEG signal processing
- Biomarker correlation studies
- Patient outcome prediction
- Grant data analysis

**Supported data types:**
- EEG/MEG recordings
- Clinical assessment scores (MMSE, MoCA, UPDRS, EDSS)
- CSF biomarkers (Aβ, tau, NfL)
- MRI volumetrics
- Blood biomarkers
- Neuropsychological tests

**Features:**
- ✅ Statistical tests (t-tests, ANOVA, correlations)
- ✅ Machine learning (Random Forest, XGBoost)
- ✅ Publication-ready plots
- ✅ Export to Google Drive

---

### Notebook 4: LAB-Bench AI Evaluation

**What it does:**
- Tests AI models on biology questions
- Benchmarks different LLMs
- Evaluates accuracy on neurology topics

**When to use:**
- Before adopting an AI tool for research
- Comparing GPT-4 vs Claude vs others
- Validating AI for specific tasks
- Publication supplement (AI validation)

**Use cases:**
- "Which LLM is best for neurology literature?"
- "Can AI help with protocol design?"
- "Should I trust AI for figure interpretation?"

---

## 💼 Common Workflows for Neurologists {#workflows}

### Workflow 1: Weekly Literature Update

**Goal:** Stay current with neurology research

**Steps:**
1. Open **PaperQA notebook** in Colab
2. Upload recent papers from PubMed (as PDFs)
3. Run batch questions:
   ```
   "What are the main findings of these papers?"
   "Are there any practice-changing results?"
   "What clinical implications are discussed?"
   ```
4. Save summary to Google Drive
5. Review during lunch break

**Time:** 15 minutes/week
**Cost:** ~$1-2/week

---

### Workflow 2: Grant Writing Support

**Goal:** Generate hypotheses and experimental plans

**Steps:**
1. Open **Robin notebook** in Colab
2. Set disease = "Your target disease"
3. Run assay generation
4. Review top 5 experimental approaches
5. Run therapeutic candidate identification
6. Copy results into grant proposal

**Time:** 30 minutes
**Cost:** ~$5 (if using FutureHouse API)

**Output:**
- Ranked experimental assays with rationale
- Therapeutic candidates with evidence
- Literature references
- Research recommendations

---

### Workflow 3: Clinical Trial Analysis

**Goal:** Analyze trial data for publication

**Steps:**
1. Export trial data to CSV
2. Open **Data Analysis notebook** in Colab
3. Upload CSV file
4. Customize code for your endpoints
5. Run statistical analyses
6. Generate publication-quality figures
7. Download results from Google Drive

**Time:** 1-2 hours
**Cost:** Free (no API calls needed)

**Output:**
- Statistical test results
- Correlation analyses
- Subgroup analyses
- Machine learning predictions
- Publication-ready plots

---

### Workflow 4: Case Presentation Prep

**Goal:** Quick literature lookup for complex case

**Steps:**
1. Open **PaperQA notebook** (keep it open in a tab)
2. During case review, ask questions:
   ```
   "What are atypical presentations of X disease?"
   "What diagnostic workup is recommended for Y?"
   "What are treatment options for Z condition?"
   ```
3. Get cited answers in 30 seconds
4. Reference the papers cited

**Time:** 5 minutes
**Cost:** ~$0.10/query

---

## 🔧 Troubleshooting {#troubleshooting}

### "API Key Error"

**Problem:** Notebook can't find your API key

**Solution:**
1. Click 🔑 icon in left sidebar
2. Check that secret name is **exactly** `OPENAI_API_KEY`
3. Make sure "Notebook access" toggle is ON
4. Re-run the cell that loads the API key

---

### "Rate Limit Exceeded"

**Problem:** Too many API calls too quickly

**Solution:**
1. Wait 60 seconds
2. Use cheaper model: Change `gpt-4o` to `gpt-4o-mini`
3. Reduce number of questions in batch
4. Add delays between calls

---

### "Out of Memory" (in Colab)

**Problem:** Large dataset crashes notebook

**Solution:**
1. Click "Runtime" → "Change runtime type"
2. Select "High-RAM" (if available)
3. Or reduce dataset size
4. Process data in chunks

---

### "Module Not Found"

**Problem:** Missing Python package

**Solution:**
Run this cell:
```python
!pip install <package-name>
```

For example:
```python
!pip install mne  # For EEG analysis
```

---

### PDF Upload Issues

**Problem:** Can't upload PDFs

**Solution:**
1. Make sure PDFs aren't password-protected
2. Check file size (Colab limit: 100MB per file)
3. Try uploading one at a time
4. Convert scanned PDFs to searchable text first

---

## 💰 Cost Management {#costs}

### Expected Costs (OpenAI GPT-4o-mini)

| Activity | Approximate Cost |
|----------|-----------------|
| Single literature question | $0.01-0.05 |
| 10-page paper analysis | $0.10-0.20 |
| Batch of 20 questions | $0.50-1.00 |
| Weekly literature updates | $1-2/week |
| Full therapeutic discovery analysis | $2-5 |
| Large clinical trial analysis | Free (local computation) |

### Cost Saving Tips

**1. Use cheaper models:**
```python
# Instead of gpt-4o
settings = Settings(llm="gpt-4o-mini")  # 15x cheaper!
```

**2. Use "fast" settings:**
```bash
pqa ask "question" --settings fast
```

**3. Process locally when possible:**
- Data analysis: No API calls needed
- Statistical tests: Free
- Plotting: Free

**4. Batch questions:**
- Process multiple questions in one session
- Reduces overhead

**5. Monitor usage:**
- Check OpenAI dashboard: https://platform.openai.com/usage
- Set monthly spending limits

### Free Alternatives

**For very limited budgets:**
1. Use Colab's free tier for data analysis (no API needed)
2. Try free local models:
   - Ollama (Mac): Free, runs locally
   - Llama models: Free, lower quality
3. Limit paper-qa to most critical questions

---

## 🎯 Research Use Cases for Neurologists {#use-cases}

### Use Case 1: Systematic Review

**Scenario:** You're writing a systematic review on MS therapeutics

**Tools:** PaperQA

**Workflow:**
1. Download 50-100 PDFs from PubMed
2. Upload to PaperQA notebook
3. Ask:
   - "What are the efficacy rates of different MS therapies?"
   - "What safety concerns are most common?"
   - "Are there direct comparison studies?"
4. Generate comprehensive summary
5. Export references for citation manager

**Time saved:** 20-30 hours vs manual review

---

### Use Case 2: Clinical Trial Planning

**Scenario:** Planning a Phase 2 trial for ALS therapeutic

**Tools:** Robin + PaperQA

**Workflow:**
1. **Robin:** Generate experimental assays for ALS
2. **Robin:** Identify therapeutic candidates
3. **PaperQA:** Deep dive on top candidates
4. **PaperQA:** Check for ongoing trials (upload recent papers)
5. Use outputs for:
   - Grant proposal
   - Protocol design
   - Investigator meetings

**Time saved:** 10-15 hours of literature review

---

### Use Case 3: Biomarker Discovery

**Scenario:** Analyzing CSF biomarkers in AD patients

**Tools:** Data Analysis notebook

**Workflow:**
1. Export data from lab (CSV format)
2. Upload to Data Analysis notebook
3. Run:
   - Correlation analysis (Aβ vs tau vs cognition)
   - Group comparisons (AD vs controls)
   - Machine learning predictions
4. Generate figures for publication
5. Export statistical results

**Time saved:** 5-10 hours vs manual analysis in Excel/SPSS

---

### Use Case 4: Grand Rounds Preparation

**Scenario:** Presenting complex case next week

**Tools:** PaperQA (keep open during prep)

**Workflow:**
1. Upload relevant review papers
2. Ask specific questions:
   - "What are the diagnostic criteria?"
   - "What's the differential diagnosis?"
   - "What are treatment options and evidence levels?"
3. Get cited answers
4. Reference papers in presentation

**Time saved:** 2-3 hours of literature search

---

### Use Case 5: Journal Club

**Scenario:** Leading journal club discussion

**Tools:** PaperQA

**Workflow:**
1. Upload the paper being discussed
2. Upload related papers
3. Ask critical questions:
   - "What are the limitations of this methodology?"
   - "How does this compare to previous studies?"
   - "Are there contradictions with other findings?"
4. Use AI insights to stimulate discussion

**Time saved:** 1-2 hours of background research

---

## 🚀 Next Steps

### Week 1: Get Comfortable
- ✅ Run all 4 notebooks once
- ✅ Try example questions
- ✅ Upload one of your own papers
- ✅ Save results to Google Drive

### Week 2: Integrate into Workflow
- ✅ Set up weekly literature updates
- ✅ Try analyzing a small dataset
- ✅ Use for one clinical question

### Month 1: Advanced Usage
- ✅ Customize code for your specific needs
- ✅ Combine notebooks (PaperQA → Robin → Data Analysis)
- ✅ Share with colleagues
- ✅ Consider local installation on Mac (optional)

---

## 📞 Support Resources

### Official Documentation
- **FutureHouse Cookbook:** https://futurehouse.gitbook.io/futurehouse-cookbook
- **PaperQA Docs:** GitHub repository
- **Aviary Docs:** https://aviary.bio

### Community
- **GitHub Issues:** Report bugs, request features
- **Academic Papers:** Read the research papers for each tool

### API Documentation
- **OpenAI:** https://platform.openai.com/docs
- **Anthropic:** https://docs.anthropic.com

---

## ⚖️ Important Disclaimers

**For Clinical Use:**
- ⚠️ AI outputs are not medical advice
- ⚠️ Always verify critical information
- ⚠️ Use as research assistant, not decision-maker
- ⚠️ Validate results with domain expertise

**For Research:**
- ✅ Excellent for hypothesis generation
- ✅ Great for literature synthesis
- ✅ Useful for data analysis
- ⚠️ Always cite original sources, not AI
- ⚠️ Verify statistical results
- ⚠️ Check for hallucinations in citations

**For Publications:**
- Disclose AI usage in methods section
- Validate all AI-generated references
- Follow journal-specific AI policies
- Use AI as tool, not co-author (most journals)

---

## 📝 Summary

You now have **4 powerful research tools** ready to use:

1. **PaperQA:** Your AI literature assistant (start here!)
2. **Robin:** Therapeutic discovery engine
3. **Data Analysis:** Statistical analysis & ML
4. **LAB-Bench:** AI model evaluation

**Recommended first steps:**
1. Upload `Neurology_PaperQA_Notebook.ipynb` to Google Colab
2. Add your OpenAI API key to secrets
3. Upload 2-3 neurology papers
4. Ask your first question!

**Questions?** All notebooks include detailed instructions and examples.

**Good luck with your research! 🧠🔬**

---

*Last updated: November 8, 2025*
*Created for neurologists and neuromedicine researchers*
*Future House Tools - Open Source AI for Science*

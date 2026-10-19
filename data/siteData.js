// =====================================================================
//  siteData.js — ALL website content lives in this one file.
//  To change text, names, dates, images or download files, edit here.
//  You do NOT need to touch the components to update the website.
// =====================================================================

// ---------------------------------------------------------------------
// 1. Basic project details
// ---------------------------------------------------------------------
export const project = {
  shortName: "Smart Service Marketplace", // ✏️ Change to your app/brand name if you have one
  groupId: "R26-IT-090",
  title: "AI-Powered Smart Service Marketplace for Household Maintenance in Sri Lanka",
  tagline:
    "Describe the problem in your own words — English or Singlish — and we find the right worker, show a fair price and a trust score you can believe.",
  // Put your cover photo at public/images/cover.jpg and change this path.
  coverImage: "/images/cover.svg",
  university: "Sri Lanka Institute of Information Technology (SLIIT)",
  department: "Department of Information Technology",
  year: "2026",
};

// Navigation links (the "id" must match a section id on the page)
export const navLinks = [
  { label: "Problem", id: "problem" },
  { label: "Objectives", id: "objectives" },
  { label: "Methodology", id: "methodology" },
  { label: "Features", id: "components" },
  { label: "Technologies", id: "technologies" },
  { label: "Milestones", id: "milestones" },
  { label: "Documents", id: "documents" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

// ---------------------------------------------------------------------
// 2. Research Problem & Gap
// ---------------------------------------------------------------------
export const researchProblem = {
  intro:
    "Sri Lanka’s informal household maintenance sector (plumbers, electricians, carpenters, technicians and other trades) is largely disorganised. Customers face three linked problems:",
  problems: [
    {
      num: "01",
      title: "They don’t know which worker they need",
      icon: "chat",
      text: "People describe problems in everyday language, often in Singlish (for example, “watura bata pupurala” or “current eka wada na”), not in technical trade terms. Existing platforms such as ikman and TaskRabbit rely on keyword search or category selection, so the customer must already know the correct worker type.",
    },
    {
      num: "02",
      title: "They can’t trust reviews",
      icon: "shield",
      text: "Star ratings alone are unreliable. A customer may give 5 stars but write a complaint, and fake or unverified reviews reduce confidence in word-of-mouth and online ratings.",
    },
    {
      num: "03",
      title: "They don’t know what a job should cost",
      icon: "tag",
      text: "Transport fees and repair prices are negotiated informally, with no transparent estimate based on distance, fuel prices, traffic, weather or the type of repair.",
    },
  ],
  gapTitle: "Research Gap",
  gapStatement:
    "No existing platform, in Sri Lanka or globally, combines multiple AI models into a single household service marketplace. Current platforms such as ikman.lk and TaskRabbit rely on keyword search, category selection and plain star ratings. The customer must already know the worker type, cannot describe the problem in Singlish, and gets no intelligent worker ranking, review-text analysis or transparent price estimate. Existing research studies code-mixed sentiment analysis, worker recommendation and price prediction only as separate models, not as an integrated system. Our platform is the first to bring four AI models together in one end-to-end marketplace: Singlish intent recognition, hybrid worker recommendation, sentiment-based trust scoring and dynamic price estimation.",
  componentGaps: [
    {
      title: "Code-Mixed Service Discovery",
      text: "Local and global service platforms rely on keyword search or category menus, so the customer must already know the worker type. No published work classifies romanised Sinhala-English (Singlish) household problem descriptions into fine-grained worker categories, and no such dataset exists.",
    },
    {
      title: "Context-Aware Worker Matching",
      text: "Marketplaces typically rank workers by a single factor such as rating or distance. Few combine a worker's historical competence in the requested category (qualifications, completion time) with live GPS distance and live trust ratings.",
    },
    {
      title: "Credible Category-Specific Ratings",
      text: "Star ratings alone are unreliable, and Sinhala/Singlish review text is rarely analysed. Ratings are also usually global, so a poor job in one trade affects a worker's score in another.",
    },
    {
      title: "Transparent, Fair Pricing",
      text: "Transport fees and repair prices are usually negotiated on site. There is little work on fees that adapt to fuel prices, traffic and weather, or on estimating a fair repair price range before the job starts.",
    },
  ],
};

// ---------------------------------------------------------------------
// 3. Research Objectives
// ---------------------------------------------------------------------
export const researchObjectives = {
  main: "To design and develop an AI-powered mobile marketplace that connects Sri Lankan customers with suitable household maintenance workers. The platform should understand informal Singlish/English problem descriptions, recommend the most suitable workers, score worker trustworthiness from verified reviews, and estimate fair transport and repair prices.",
  specific: [
    {
      id: "C1",
      badge: "Component 1",
      title: "Intent Recognition",
      icon: "chat",
      text: "Classify free-text problem descriptions in English or romanised Singlish into one of 39 worker categories, using multilingual sentence embeddings (paraphrase-multilingual-MiniLM-L12-v2) and a Support Vector Machine.",
    },
    {
      id: "C2",
      badge: "Component 2",
      title: "Hybrid Worker Recommendation",
      icon: "users",
      text: "Rank eligible workers using a Random Forest model on historical data (NVQ qualifications, past completion time), adjusted in real time by live GPS distance and trust score, and return the top 20 candidates.",
    },
    {
      id: "C3",
      badge: "Component 3",
      title: "Review Credibility & Sentiment Analysis",
      icon: "star",
      text: "Analyse English, Sinhala and Singlish review text with a fine-tuned XLM-RoBERTa model (Positive, Neutral or Negative). Combine the result with star ratings into a category-specific trust score from 0 to 10 that grows more confident as verified reviews accumulate.",
    },
    {
      id: "C4",
      badge: "Component 4",
      title: "Pricing Engine",
      icon: "tag",
      text: "Calculate a transparent transport fee from distance, current petrol price, live traffic and weather. Predict a minimum-to-maximum repair price range with a machine learning regression model.",
    },
    {
      id: "INT",
      badge: "Integration",
      title: "System Integration",
      icon: "server",
      text: "Connect all four components through a microservice backend serving a Flutter mobile application.",
    },
  ],
};

// ---------------------------------------------------------------------
// 4. Methodology & System Architecture
// ---------------------------------------------------------------------
export const methodology = {
  subtitle:
    "An end-to-end multi-tier microservice architecture connecting customer intent recognition, multi-stage recommendation, condition-aware pricing, and verified trust feedback.",
  flowSteps: [
    {
      step: "01",
      actor: "Customer (Flutter App)",
      title: "Problem Description",
      desc: "Customer describes the issue in informal Singlish or English (e.g. “watura bata pupurala” or “current eka wada na”).",
      badge: "Client Input",
    },
    {
      step: "02",
      actor: "Node.js ➔ C1: Intent Recognition (FastAPI)",
      title: "Embeddings & Classification",
      desc: "MiniLM sentence embeddings + SVM maps input to 1 of 39 worker categories. If confidence < 0.4, prompts user to rephrase.",
      badge: "NLP Classification",
    },
    {
      step: "03",
      actor: "C2: Hybrid Recommendation",
      title: "4-Stage Candidate Ranking",
      desc: "Step 1: Filter online workers in category. Step 2: Random Forest suitability score. Step 3: Real-time adjustment with GPS & C3 trust score. Step 4: Returns top 20 ranked workers.",
      badge: "ML + Real-Time Ranking",
    },
    {
      step: "04",
      actor: "C4: Pricing Engine (Flask & FastAPI)",
      title: "Transparent Fare & Price Range",
      desc: "Transport fee adapts to distance, fuel ratio, traffic & weather (100% to worker). Decision Tree regressor predicts fair min/max repair bounds before work starts.",
      badge: "Dynamic Pricing",
    },
    {
      step: "05",
      actor: "C3: Review Credibility & Sentiment (FastAPI)",
      title: "Verified Feedback Loop",
      desc: "Post-job verified reviews analysed by XLM-RoBERTa + star rating → 0–10 category trust score, continuously updating C2 for future rankings.",
      badge: "Verified Trust",
    },
  ],
  componentSummaries: [
    {
      code: "C1",
      title: "Intent Recognition",
      badge: "Component 1",
      model: "paraphrase-multilingual-MiniLM-L12-v2 + SVM (RBF kernel)",
      metric: "82.47%",
      metricLabel: "Accuracy",
      baseline: "vs 71.50% nearest-neighbour baseline",
      dataset: "~21,000 Singlish/English descriptions across 39 trades",
      details:
        "Raw text is converted into 384-dimensional multilingual sentence embeddings and classified by an SVM with an RBF kernel. Trained on a dataset of about 21,000 Singlish/English problem descriptions covering 39 trades. Reached 82.47% accuracy, compared with 71.50% for a nearest-neighbour baseline.",
    },
    {
      code: "C2",
      title: "Hybrid Recommendation",
      badge: "Component 2",
      model: "Two-Stage: Random Forest + Real-Time Context Adjustment",
      metric: "Top 20",
      metricLabel: "Ranked Candidates",
      baseline: "Dynamic multi-factor candidate ranking",
      dataset: "Historical competence (NVQ, completion time) + live GPS & category trust",
      details:
        "A two-stage approach: a machine learning model scores past competence, then a weighted mathematical model adjusts that score for current conditions such as distance and live ratings.",
    },
    {
      code: "C3",
      title: "Trust Scoring & Review Sentiment",
      badge: "Component 3",
      model: "Fine-tuned XLM-RoBERTa + Star Fusion + Bayesian Prior",
      metric: "95.41%",
      metricLabel: "Accuracy",
      baseline: "Weighted F1 Score: 0.954",
      dataset: "Verified multilingual reviews (English, Sinhala, Singlish)",
      details:
        "Reviews are allowed only after verified job completion. The XLM-RoBERTa sentiment model reached 95.41% accuracy (weighted F1 0.954). Final score = 60% star rating + 40% sentiment, blended with a neutral prior of 6.0 according to review count. New workers start at 6.0, and scores are kept separate per service category.",
    },
    {
      code: "C4",
      title: "Dynamic Pricing Engine",
      badge: "Component 4",
      model: "Multi-Output Decision Tree Regressor + Dynamic Transport Formula",
      metric: "R² 0.89 / 0.92",
      metricLabel: "Min / Max Accuracy",
      baseline: "~11 ms mean response time on Render",
      dataset: "Live petrol rates, traffic, weather API & job repair attributes",
      details:
        "The transport fee uses base fare, per-km rate, current petrol price, traffic and weather (100% of the fee goes to the technician). The repair estimator achieved R² of 0.89 for the minimum price and 0.92 for the maximum, with a mean response time of about 11 ms on Render.",
    },
  ],
};

// ---------------------------------------------------------------------
// 5. Technologies Used
// ---------------------------------------------------------------------
export const technologies = [
  { area: "Mobile App", tech: ["Flutter (Dart)"] },
  { area: "Backend", tech: ["Node.js"] },
  { area: "Database", tech: ["MongoDB Atlas"] },
  { area: "ML Microservices", tech: ["Python", "FastAPI", "Uvicorn", "Flask", "Gunicorn"] },
  {
    area: "NLP / ML Models",
    tech: [
      "Sentence-Transformers (paraphrase-multilingual-MiniLM-L12-v2)",
      "XLM-RoBERTa (Hugging Face Transformers)",
      "PyTorch",
      "scikit-learn (SVM, Random Forest, Decision Tree)",
      "FAISS (Baseline)",
    ],
  },
  { area: "Data Processing", tech: ["Pandas", "NumPy", "joblib"] },
  { area: "External APIs", tech: ["Google Maps API (Distance & Traffic)", "Weather API"] },
  { area: "Training Environment", tech: ["Google Colab", "Kaggle (NVIDIA Tesla T4 GPU)"] },
  { area: "Deployment", tech: ["Docker", "Render"] },
  { area: "Testing", tech: ["pytest", "Postman"] },
];

// ---------------------------------------------------------------------
// 3. Literature review (each string = one paragraph)
// ---------------------------------------------------------------------
export const literatureReview = [
  "Research on code-mixed Sinhala-English text has focused on sentiment analysis, hate-speech and humour detection, language identification and transliteration. Sinhala intent classifiers mostly target Sinhala-script chatbots with small intent sets, while code-mixed intent detection has been studied mainly for Hindi-English. Multilingual sentence encoders such as Sentence-BERT and its multilingual variants make it possible to represent informal mixed-language text without hand-written rules.",
  "Recommendation research shows that hybrid approaches, which combine a learned model of past performance with rule-based adjustment for real-time context, outperform single-signal ranking. Ensemble methods such as Random Forest are widely used for tabular suitability prediction because they are robust and interpretable.",
  "Transformer models such as XLM-RoBERTa have achieved strong results for multilingual sentiment classification. Combining text sentiment with star ratings, and weighting the result by the number of verified reviews, reduces the effect of a few extreme reviews on new workers.",
  "Dynamic pricing is well established in ride-hailing, where fares respond to distance, demand and conditions. Tree-based regression models are commonly used to predict price ranges from categorical job attributes. Bringing both ideas to household services supports transparent pricing for customers and fair income for workers.",
];

// ---------------------------------------------------------------------
// 4. Components / features (icon names: see components/Icon.js)
// ---------------------------------------------------------------------
export const features = [
  {
    icon: "chat",
    title: "Intent Recognition",
    text: "Multilingual MiniLM sentence embeddings + SVM classify English or Singlish problem descriptions into 39 worker categories (82.47% accuracy).",
  },
  {
    icon: "users",
    title: "Hybrid Worker Recommendation",
    text: "Random Forest predicts historical suitability; a real-time model adjusts it using live GPS distance and trust ratings to return the top 20 workers.",
  },
  {
    icon: "star",
    title: "Sentiment & Trust Scoring",
    text: "XLM-RoBERTa sentiment (95.41% accuracy) is fused with star ratings into a category-specific 0–10 trust score.",
  },
  {
    icon: "car",
    title: "Dynamic Transport Fee",
    text: "Fees adapt to distance, current petrol price, live traffic and weather, with 100% of the fee going to the technician.",
  },
  {
    icon: "tag",
    title: "Repair Price Estimation",
    text: "A multi-output Decision Tree predicts a minimum and maximum repair price for the selected service before the job starts.",
  },
  {
    icon: "shield",
    title: "Verified Reviews Only",
    text: "Customers can review a worker only after a completed job, which blocks fake reviews at the source.",
  },
  {
    icon: "phone",
    title: "Flutter Mobile App",
    text: "A single cross-platform app for customers and workers, from describing the problem to rating the job.",
  },
  {
    icon: "server",
    title: "Microservice Backend",
    text: "Node.js backend with Python FastAPI/Flask AI services and MongoDB Atlas, so each component can evolve independently.",
  },
];

// ---------------------------------------------------------------------
// 5. Gallery / field visit (optional). Put photos in public/images/gallery
//    Leave the array empty [] to hide this section.
// ---------------------------------------------------------------------
export const gallery = [
  // { src: "/images/gallery/visit-1.jpg", caption: "Meeting with local technicians" },
];

// ---------------------------------------------------------------------
// 6. Milestones  ✏️ These dates are ESTIMATES — check the dates and update as you finish each one
// ---------------------------------------------------------------------
export const milestones = [
  { date: "2026 February", title: "Topic Assessment", text: "Research problem and four components presented to the panel and approved." },
  { date: "2026 March", title: "Project Proposal", text: "Proposal report and presentation covering the problem, objectives and methodology." },
  { date: "2026 April – June", title: "Data Collection & Model Development", text: "Built the Singlish intent dataset, review sentiment data and pricing data; trained the first models." },
  { date: "2026 June", title: "Progress Presentation I", text: "Demonstrated about 50% completion of each component." },
  { date: "2026 August", title: "Progress Presentation II", text: "Demonstrated about 90% completion and integration with the mobile app." },
  { date: "2026 September", title: "Research Paper", text: "Research paper prepared and submitted." },
  { date: "2026 October", title: "Final Reports", text: "Individual theses and the final group report submitted." },
  { date: "2026 November", title: "Final Presentation & Viva", text: "Final demonstration of the complete system and viva." },
];

// ---------------------------------------------------------------------
// 7. Downloadable documents
//    file: "/documents/...."  → a file inside public/documents
//    file: "https://drive.google.com/..." → an external link (for big files)
//    file: ""  → button shows "Coming soon" (not uploaded yet)
// ---------------------------------------------------------------------
export const documentGroups = [
  {
    title: "Presentation Documents",
    items: [
      { label: "Project Proposal Presentation", file: "/documents/presentations/R26-IT-090-Proposal-Presentation.pptx" },
      { label: "Progress Presentation I", file: "/documents/presentations/R26-IT-090-PP1-Presentation.pptx" },
      { label: "Progress Presentation II", file: "/documents/presentations/R26-IT-090-PP2-Presentation.pptx" },
      { label: "Final Presentation", file: "/documents/presentations/R26-IT-090-Final-Presentation.pptx" },
    ],
  },
  {
    title: "Research Paper",
    items: [{ label: "Research Paper", file: "" }], // e.g. "/documents/research-paper/research-paper.pdf"
  },
  {
    title: "Project Proposal Reports",
    items: [
      { label: "IT22551320", file: "" }, // e.g. "/documents/proposal/IT22551320-proposal.pdf"
      { label: "IT22283658", file: "" },
      { label: "IT22643704", file: "" },
      { label: "IT22137982", file: "" },
    ],
  },
  {
    title: "Final Reports",
    items: [
      { label: "IT22551320", file: "" }, // e.g. "/documents/final/IT22551320-final-thesis.pdf"
      { label: "IT22283658", file: "" },
      { label: "IT22643704", file: "" },
      { label: "IT22137982", file: "" },
      { label: "Final Group Report", file: "" },
    ],
  },
];

// ---------------------------------------------------------------------
// 8. Team. Photos go in public/images/team (square images look best).
//    Change "photo" to e.g. "/images/team/IT22551320.jpg" once added.
// ---------------------------------------------------------------------
export const team = [
  { name: "Bandara W.A.M.S", id: "IT22551320", role: "Intent Recognition", photo: "/images/team/IT22551320.png", linkedin: "" },
  { name: "Shiwanthika M.M", id: "IT22283658", role: "Hybrid Worker Recommendation", photo: "/images/team/IT22283658.jpeg", linkedin: "" },
  { name: "Wijebandara W.N.S.K", id: "IT22643704", role: "Sentiment & Trust Scoring", photo: "/images/team/IT22643704.jpg", linkedin: "" },
  { name: "Kumara A.J.T.M", id: "IT22137982", role: "Transport Fee & Price Estimation", photo: "/images/team/IT22137982.jpg", linkedin: "" },
];

export const supervisors = [
  { name: "Prof. Dasuni Navinna", role: "Supervisor", photo: "/images/team/supervisor.jpg" },
  { name: "Mr. Nelum Chathuranga Amarasena", role: "Co-Supervisor", photo: "/images/team/co-supervisor.png" },
];

// ---------------------------------------------------------------------
// 9. References (IEEE style).  ✏️ Add the key references from your theses.
// ---------------------------------------------------------------------
export const references = [
  'N. Reimers and I. Gurevych, "Sentence-BERT: Sentence embeddings using Siamese BERT-networks," in Proc. EMNLP-IJCNLP, 2019, pp. 3982–3992.',
  'N. Reimers and I. Gurevych, "Making monolingual sentence embeddings multilingual using knowledge distillation," in Proc. EMNLP, 2020, pp. 4512–4525.',
  'A. Conneau et al., "Unsupervised cross-lingual representation learning at scale," in Proc. ACL, 2020, pp. 8440–8451.',
  'C. Cortes and V. Vapnik, "Support-vector networks," Machine Learning, vol. 20, no. 3, pp. 273–297, 1995.',
  'L. Breiman, "Random forests," Machine Learning, vol. 45, no. 1, pp. 5–32, 2001.',
  'F. Pedregosa et al., "Scikit-learn: Machine learning in Python," J. Mach. Learn. Res., vol. 12, pp. 2825–2830, 2011.',
  'J. Johnson, M. Douze and H. Jégou, "Billion-scale similarity search with GPUs," IEEE Trans. Big Data, vol. 7, no. 3, pp. 535–547, 2021.',
];

// ---------------------------------------------------------------------
// 10. Contact details
// ---------------------------------------------------------------------
export const contact = {
  address: "SLIIT, New Kandy Road, Malabe, Sri Lanka",
  phone: "", // ✏️ optional, e.g. "+94 77 123 4567"
  email: "r26it090@gmail.com",
};

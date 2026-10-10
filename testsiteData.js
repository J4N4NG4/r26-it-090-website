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
  { label: "Research Gap", id: "research-gap" },
  { label: "Literature Review", id: "literature-review" },
  { label: "Components", id: "components" },
  { label: "Milestones", id: "milestones" },
  { label: "Documents", id: "documents" },
  { label: "Team", id: "team" },
  { label: "References", id: "references" },
  { label: "Contact", id: "contact" },
];

// ---------------------------------------------------------------------
// 2. Research gap — one card per component
// ---------------------------------------------------------------------
export const researchGapIntro =
  "Household maintenance in Sri Lanka is still arranged mostly by word of mouth. Existing platforms expect customers to know the exact trade they need and show reviews that are hard to trust. Our research addresses four gaps.";

export const researchGaps = [
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
    text: "Multilingual MiniLM sentence embeddings + SVM classify English or Singlish problem descriptions into 39 worker categories (78.35% accuracy).",
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
      { label: "Project Proposal Presentation", file: "" }, // e.g. "/documents/presentations/proposal-presentation.pdf"
      { label: "Progress Presentation I", file: "" },
      { label: "Progress Presentation II", file: "" },
      { label: "Final Presentation", file: "" },
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
  { name: "Wijebandara W.N.S.K", id: "IT22643704", role: "Sentiment & Trust Scoring", photo: "/images/team/IT22643704.jpeg", linkedin: "" },
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
  email: "", // ✏️ the group's contact email, e.g. "r26it090@gmail.com"
};

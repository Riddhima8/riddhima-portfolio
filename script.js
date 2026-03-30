const modal = document.getElementById("projectModal");
const titleEl = document.getElementById("modalTitle");
const descEl = document.getElementById("modalDescription");
const pointsEl = document.getElementById("modalPoints");
const linkEl = document.getElementById("modalLink");

const projects = {
  research: {
    title: "Research Analyst Chatbot",
    desc: "LLM-powered research assistant for deep document analysis.",
    points: [
      "RAG architecture using LangChain & FAISS",
      "Multi-document ingestion and semantic search",
      "Source-grounded answers with citations",
      "Interactive UI for research workflows"
    ],
    link: "https://github.com/Riddhima8/Research-Analyst-Chatbot"
  },
  gosafe: {
    title: "GO SAFE – Safety Aware Routing",
    desc: "Safety-first navigation system prioritizing low-risk routes.",
    points: [
      "Risk-weighted graph modeling",
      "Alternative route generation using Dijkstra",
      "OSRM routing API integration",
      "Hackathon project (Top 7)"
    ],
    link: "https://github.com/Riddhima8/GO_SAFE"
  },
  legal: {
    title: "Legal Document Summarizer",
    desc: "LLM fine-tuning pipeline for legal document summarization.",
    points: [
      "LoRA-based transformer fine-tuning",
      "Efficient training under GPU constraints",
      "End-to-end preprocessing and inference",
      "Evaluation using ROUGE & BLEU"
    ],
    link: "https://github.com/Riddhima8/Legal_document_Summarizer"
  },
  laptop: {
    title: "Laptop Price Predictor",
    desc: "End-to-end ML regression system for price prediction.",
    points: [
      "Feature engineering and preprocessing",
      "Regression models and tuning",
      "Evaluation using RMSE",
      "Reusable inference pipeline"
    ],
    link: "https://github.com/Riddhima8/Laptop_price_predictor"
  },
  zeroq: {
    title: "zeroQ",
    desc: "Smart queue and crowd management solution.",
    points: [
      "Queue optimization using analytics",
      "Backend-driven logic",
      "Designed for scalability",
      "Hackathon implementation"
    ],
    link: "https://github.com/Riddhima8/zeroQ"
  },
  rubric: {
    title: "Rubric Analysis System",
    desc: "Automated rubric-based evaluation platform.",
    points: [
      "Structured rubric ingestion",
      "Automated scoring logic",
      "Consistent evaluation criteria",
      "Academic workflow optimization"
    ],
    link: "https://github.com/Riddhima8/Rubric_analysis"
  }
};

function openProject(key) {
  const p = projects[key];
  titleEl.textContent = p.title;
  descEl.textContent = p.desc;
  pointsEl.innerHTML = p.points.map(pt => `<li>${pt}</li>`).join("");
  linkEl.href = p.link;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* Reveal on scroll */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

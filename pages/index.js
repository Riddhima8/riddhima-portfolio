import Head from 'next/head';
import Navbar from '@/components/Navbar';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'AI/ML Engineer',
        'Backend Developer',
        'Software Engineer',
      ],
      typeSpeed: 45,
      backSpeed: 20,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  const PROJECTS = [
    {
      title: 'Legal Document Summarizer',
      description:
        'Fine-tuned a Qwen-based causal LLM using parameter-efficient fine-tuning (LoRA) for analyzing legal documents under GPU memory constraints.',
      detailedInfo:
        'A production-grade legal summarization system powered by a fine-tuned variant of Qwen1.5-0.5B-Chat. Trained using LoRA for domain-specific summarization. The pipeline includes dataset ingestion (from Google Sheets), model training, parameter-efficient fine-tuning (PEFT), and an interactive Streamlit inference interface deployed on Render.\n\nKey Achievements:\n• Engineered custom fine-tuning pipeline for legal abstracts\n• Drastically reduced VRAM usage via LoRA\n• Deployed CPU-friendly pickled inference pipeline without GPUs',
      tech: ['Python', 'PyTorch', 'Hugging Face', 'LoRA (PEFT)'],
      image: '/assets/projects/legal_doc.png',
      links: { github: 'https://github.com/Riddhima8/Legal_document_Summarizer' },
    },
    {
      title: 'Analyst Chatbot (RAG System)',
      description:
        'Developed an end-to-end Retrieval-Augmented Generation pipeline for Q&A over dynamic sources using recursive chunking and FAISS.',
      detailedInfo:
        'A Streamlit and LangChain powered AI chatbot that analyzes and answers questions across multiple news articles using Retrieval-Augmented Generation (RAG). \n\nFeatures:\n• Add up to 3 live news URLs\n• Automatic unstructured text extraction, splitting, and recursive chunking\n• OpenAI embeddings stored in local FAISS vector store\n• LLM-driven intelligence to answer complex source-cited questions interactively',
      tech: ['LangChain', 'OpenAI API', 'FAISS', 'Streamlit'],
      image: '/assets/projects/analyst_chatbot.png',
      links: { github: 'https://github.com/Riddhima8/Research-Analyst-Chatbot' },
    },
    {
      title: 'NLP Server Log Classification',
      description:
        'NLP pipeline to categorize system logs (ERROR, WARNING, INFO) using TF-IDF vectorization and multiple trained classifiers (SVM, Random Forest).',
      detailedInfo:
        'A specialized Natural Language Processing pipeline built to analyze, process, and categorize raw system logs into standardized priority labels: ERROR, WARNING, and INFO.\n\nImplementation:\n• Engineered custom text preprocessing heuristics (regex, stopword removal). \n• Extracted features using TF-IDF vectorization. \n• Trained multiple machine learning classifiers including Logistic Regression, SVM, and Random Forest for optimal accuracy.\n• Provided Jupyter Notebooks outlining exploratory data analysis (EDA) and final model deployment scripts.',
      tech: ['Python', 'NLP', 'Scikit-learn', 'Pandas'],
      image: '/assets/projects/nlp_log.png',
      links: { github: 'https://github.com/Riddhima8/log-classifier' },
    },
    {
      title: 'Backend Interview Preparation System',
      description:
        'Designed REST APIs handling layered architecture (Controller–Service–Repository) and JPA/Hibernate for interview management.',
      detailedInfo:
        'A scalable Spring Boot application (PrepForge) built to manage and streamline technical interview preparations. \n\nTechnical Architecture:\n• Utilized robust MVC layered pattern: Controller, Service, and Repository.\n• Integrated JPA/Hibernate for seamless object-relational mapping (ORM) with a MySQL database.\n• Implemented secure JWT-based authentication and structured exception handling.\n• Designed robust REST endpoints capable of managing high concurrent requests efficiently.',
      tech: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
      image: '/assets/projects/backend_prep.png',
      links: { github: 'https://github.com/Riddhima8/PrepForge' },
    },
    {
      title: 'GoSafe: Safe Route Recommendation',
      description:
        'Safety-aware route recommendation using graph algorithms (Dijkstra) and safety scoring for geospatial navigation.',
      detailedInfo:
        'A mobile navigation application engineered to provide safe route recommendations for pedestrians, minimizing exposure to high-risk areas.\n\nHow it works:\n• Built a cross-platform interface using Flutter, connected to a Firebase backend.\n• Leveraged the OSRM API for base geospatial navigation routing.\n• Modified classic shortest-path algorithms (Dijkstra) to incorporate dynamic "safety scores" derived from historical data inputs, providing alternative routes that prioritize physical safety over speed.',
      tech: ['Flutter', 'Firebase', 'OSRM API'],
      image: '/assets/projects/gosafe.png',
      links: { github: 'https://github.com/Riddhima8/GO_SAFE' },
    },
    {
      title: 'ZeroQ: Offline-First Wallet & AI',
      description:
        'Architected an offline-first wallet with periodic sync and integrated AI-based merchant recommendations using trend analysis.',
      detailedInfo:
        'An innovative digital wallet solution built specifically for low-connectivity environments, ensuring uninterrupted financial tracking.\n\nFeatures:\n• Implemented an offline-first database mapping utilizing Hive/SQLite within a Flutter app.\n• Engineered background synchronization logic to push batched transactions to the cloud when internet access is restored.\n• Integrated the Gemini AI API to analyze offline transaction histories and provide highly contextual, hyper-localized merchant recommendations based on spending trends.',
      tech: ['Flutter', 'Gemini API'],
      image: '/assets/projects/zeroq.png',
      links: { github: 'https://github.com/Riddhima8/zeroQ' },
    },
    {
      title: 'Laptop Price Prediction Model',
      description:
        'Performed feature engineering and trained a Random Forest regression model to predict hardware pricing, deployed in real-time.',
      detailedInfo:
        'A predictive machine learning tool designed to estimate accurate secondary market prices for laptops based on granular hardware specifications.\n\nApproach:\n• Scraped, cleaned, and performed advanced feature engineering on large e-commerce datasets.\n• Addressed confounding variables, missing data, and skewed distributions.\n• Trained and optimized a Random Forest Regressor yielding high confidence accuracy.\n• Wrapped the serialized model inside an intuitive Streamlit UI allowing real-time price quotation adjustments.',
      tech: ['Python', 'Scikit-learn', 'Streamlit'],
      image: '/assets/projects/laptop_price.png',
      links: { github: 'https://github.com/Riddhima8/Laptop_price_predictor' },
    },
  ];

  return (
    <>
      <Head>
        <title>Riddhima Urankar · Professional Portfolio</title>
        <meta name="description" content="Riddhima Paresh Urankar - AI/ML Engineer and Software Developer Portfolio" />
      </Head>
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="section min-h-[95vh] flex items-center justify-center pt-24 relative overflow-hidden">
        {/* Subtle animated background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float-slow opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondaryAccent/10 rounded-full blur-3xl animate-float-slow opacity-50 pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="w-full max-w-4xl text-center z-10">
          <div data-aos="zoom-y-out" data-aos-duration="1000">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
              Riddhima Paresh Urankar
            </h1>
            <p className="text-accent text-xl sm:text-2xl font-medium mb-4 tracking-wide">
              <span ref={typedRef} className="typed-caret" />
            </p>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow">
              I am a results-driven <strong className="text-white">AI/ML Engineer and Backend Developer</strong> specializing in fine-tuning Large Language Models, architecting scalable Retrieval-Augmented Generation (RAG) pipelines, and deploying robust REST APIs. With a strong foundation in both exploratory machine learning research and production-grade software engineering, I build intelligent systems that solve complex, real-world problems efficiently.
            </p>
            <div className="flex flex-wrap shadow-lg justify-center gap-4 hidden-outline">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Riddhima8"
                className="px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-secondaryAccent transition-colors shadow-glow btn-glow"
              >
                GitHub Profile
              </a>
              <a 
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/riddhima-urankar-674637299/" 
                className="px-8 py-3 rounded-md border border-slate-500 hover:border-accent text-gray-100 transition-colors bg-slate-900/50 backdrop-blur btn-glow"
              >
                LinkedIn Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / EDUCATION */}
      <section id="about" className="section py-20 relative border-t border-slate-800/60">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div data-aos="fade-up">
            <h2 className="headline">About <span>Me</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a final-year Computer Engineering student at the <strong>Pune Institute of Computer Technology (PICT)</strong>, holding a strong foundation in both software engineering and artificial intelligence. My technical experience ranges from low-level systems and robust backend APIs to advanced deep learning architectures, such as fine-tuning causal LLMs and implementing scalable RAG environments.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am focused on bridging cutting-edge ML research with production-grade engineering to deliver tangible, high-impact intelligent solutions.
            </p>
          </div>
          <div className="card p-8 flex flex-col justify-center" data-aos="fade-left">
            <h4 className="text-xl font-bold mb-4 text-white">Education</h4>
            <div className="border-l-2 border-accent/40 pl-4 py-1 relative">
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>
              <h5 className="font-semibold text-lg text-gray-200">B.E. Computer Engineering</h5>
              <p className="text-accent text-sm font-medium mb-1">Honors in AI & ML • Pune Institute of Computer Technology</p>
              <p className="text-gray-400 text-sm">2023 — 2027</p>
            </div>
            
            <h4 className="text-xl font-bold mt-8 mb-4 text-white">Test Scores / Ratings</h4>
            <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
              <li>LeetCode Max Rating: <strong>1722</strong> (500+ problems solved)</li>
              <li>CodeChef: <strong>2 Star</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section py-20 border-t border-slate-800/60">
        <h2 className="headline" data-aos="fade-up">Technical <span>Skills</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard title="Languages" items={['Python', 'Java', 'C++', 'SQL']} />
          <SkillCard title="ML & Deep Learning" items={['PyTorch', 'TensorFlow', 'Scikit-learn', 'FAISS']} />
          <SkillCard title="NLP & LLMs" items={['Transformers', 'Hugging Face', 'LangChain', 'RAG']} />
          <SkillCard title="Backend & Tools" items={['Spring Boot', 'REST APIs', 'MySQL', 'Git', 'Docker']} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section py-20 border-t border-slate-800/60">
        <h2 className="headline" data-aos="fade-up">Featured <span>Projects</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, idx) => (
            <div 
              key={p.title}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ProjectCard {...p} gallery={[]} />
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section py-20 border-t border-slate-800/60">
        <h2 className="headline" data-aos="fade-up">Professional <span>Experience</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ExperienceItem
            title="Software Engineering Intern"
            org="StyleCheck • Remote"
            period="Internship"
            details={[
              'Integrated frontend styling workflows with complex backend production APIs.',
              'Worked in agile development sprints prioritizing reliable code and smooth system integrations.',
            ]}
          />
          <ExperienceItem
            title="Project Intern"
            org="AWS Cloud Club, PICT"
            period="Internship"
            details={[
              'Built an AI-driven Retrieval-Augmented Generation (RAG) Analyst Chatbot.',
              'Managed workloads inside a Scrum-based team environment with daily standups and delivery metrics.',
            ]}
          />
          <ExperienceItem
            title="Open Source Contributor"
            org="Social Winter of Code (SWOC) • Remote"
            period="Open Source"
            details={[
              'Actively resolved technical issues and pushed high-quality core feature contributions.',
              'Collaborated on rigorous code review via GitHub pull requests within the distributed community.',
            ]}
          />
          <ExperienceItem
            title="AI/ML Virtual Intern"
            org="Eduskills & Google for Developers"
            period="Academic Cohort"
            details={[
              'Completed intensive and structured coursework focused on Core ML architecture setups and applied AI optimization workflows.',
            ]}
          />
        </div>
      </section>
      
      {/* ACHIEVEMENTS & EXTRAS */}
      <section id="misc" className="section py-20 border-t border-slate-800/60">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div data-aos="fade-up">
            <h2 className="headline">Achievements <span>& Certifications</span></h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">›</span>
                <div>
                  <strong className="text-white block">Top 7 Finalist / 600+ Teams</strong>
                  <span className="text-sm text-gray-400">TechFiesta International Hackathon</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">›</span>
                <div>
                  <strong className="text-white block">Top 5 Finalist / 660+ Teams</strong>
                  <span className="text-sm text-gray-400">Innovation Hackathon (Cummins & Mastercard)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">›</span>
                <div>
                  <strong className="text-white block">DeepLearning.AI (Stanford)</strong>
                  <span className="text-sm text-gray-400">Supervised ML, Advanced Learning Algorithms, Unsupervised Learning</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">›</span>
                <div>
                  <strong className="text-white block">Microsoft & Google Foundations</strong>
                  <span className="text-sm text-gray-400">Foundations of Coding Full-Stack (Microsoft), Project Management (Google)</span>
                </div>
              </li>
            </ul>
          </div>

          <div data-aos="fade-left">
            <h2 className="headline">Extracurricular <span>Activities</span></h2>
            <div className="card p-8">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-4"></div>
                  <div><strong>PICT Swim Team</strong> (District Level)</div>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-4"></div>
                  <div><strong>Pictoreal Club</strong> (Magazine Design Team)</div>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-4"></div>
                  <div><strong>Bharatnatyam</strong> (Bachelor & Diploma)</div>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-4"></div>
                  <div><strong>Indian Classical Music</strong> (Madhyama Pratham)</div>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section py-20 border-t border-slate-800/60">
        <h2 className="headline text-center" data-aos="fade-up">Connect <span>With Me</span></h2>
        <div className="max-w-xl mx-auto mt-10" data-aos="fade-up">
           <div className="card p-8 text-center space-y-6 flex flex-col items-center">
             <p className="text-gray-300 text-lg">
               I am actively open to internships, impactful project collaborations, and challenging software engineering roles.
             </p>
             <div className="flex gap-4">
               <a 
                 href="mailto:riddhima8214@gmail.com"
                 className="px-8 py-3 rounded bg-accent hover:bg-secondaryAccent text-white font-semibold transition shadow-glow btn-glow"
               >
                 riddhima8214@gmail.com
               </a>
             </div>
             <p className="text-sm text-gray-500 mt-4">
               +91-83297-35739 • Pune, India
             </p>
           </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

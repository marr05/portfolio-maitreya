import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ChevronUp, FileText, Brain, Database, Cloud, Code, BookOpen, Gamepad2, Zap, Target, TrendingUp, Cpu, Layers, GitBranch, Building2, Trophy, ArrowRight, Users, Sparkles, Eye, Wrench, CircleOff, BrainCircuit, Binary} from 'lucide-react';

const COLORS = {
  voidBlack: '#0d0d0d',
  darkSpace: '#1a1a2e',
  cyberBlue: '#ff6b35',
  electricPurple: '#f7c59f',
  neonMagenta: '#e84545',
  matrixGreen: '#2eca7f',
  ghostWhite: '#fffaf0',
  silverMist: '#a0937d',
  darkGlass: 'rgba(26, 26, 46, 0.85)',
  cardBg: 'rgba(26, 26, 46, 0.6)',
  borderGlow: 'rgba(255, 107, 53, 0.2)',
};

const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isInView];
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, isInView] = useInView(0.1);
  return (
    <div ref={ref} style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(40px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>{children}</div>
  );
};

const TechLogo = ({ logo, size = 16 }) => {
  const logos = {
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    pytorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    fastapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    streamlit: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
    tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    opencv: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    vscode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    jupyter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    bash: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    sklearn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    langchain: 'https://cdn.simpleicons.org/langchain/ffffff',
    aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    huggingface: 'https://cdn.simpleicons.org/huggingface',
    bedrock: '/bedrock-color.png',
    microsoft: '/microsoft-color.png',
    sagemaker: '/sagemaker.png',
    lambda: '/lambda.png',
    chroma: '/chroma_db.png',
    NEU: 'https://nustbrand.wpengine.com/wp-content/uploads/2022/06/ac-grid-5-red.svg',
    MIT: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/MIT_-_WPU_Logo.webp/997px-MIT_-_WPU_Logo.webp.png?20230328100911',
    PowerBI: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg'
  };
  if (logos[logo]) return <img src={logos[logo]} alt="" style={{ width: size, height: size, filter: logo === 'github' || logo === 'flask' ? 'invert(1)' : 'none' }} />;
  return null;
};

const StatCard = ({ number, label, icon: Icon, color }) => (
  <div style={{ padding: '1.5rem', background: `linear-gradient(135deg, ${COLORS.cardBg}, rgba(139,92,246,0.1))`, backdropFilter: 'blur(10px)', borderRadius: '16px', border: `1px solid ${COLORS.borderGlow}`, textAlign: 'center', transition: 'all 0.3s ease' }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'scale(1.05)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.borderGlow; e.currentTarget.style.transform = 'scale(1)'; }}>
    <Icon size={28} style={{ color, marginBottom: '0.5rem' }} />
    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: COLORS.ghostWhite }}>{number}</div>
    <div style={{ fontSize: '0.85rem', color: COLORS.silverMist }}>{label}</div>
  </div>
);

const SkillSection = ({ title, icon: Icon, subcategories, highlighted }) => (
  <div style={{ padding: '1.5rem', backgroundColor: COLORS.cardBg, borderRadius: '16px', border: `1px solid ${highlighted ? `${COLORS.cyberBlue}40` : COLORS.borderGlow}`, background: highlighted ? `linear-gradient(135deg, ${COLORS.cardBg}, ${COLORS.cyberBlue}10)` : COLORS.cardBg }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
      <Icon size={24} style={{ color: highlighted ? COLORS.cyberBlue : COLORS.silverMist }} />
      <h3 style={{ color: highlighted ? COLORS.cyberBlue : COLORS.ghostWhite, fontSize: '1.15rem', margin: 0 }}>{title}</h3>
      {highlighted && <span style={{ padding: '0.2rem 0.6rem', backgroundColor: `${COLORS.cyberBlue}20`, color: COLORS.cyberBlue, borderRadius: '50px', fontSize: '0.7rem', fontWeight: '600' }}>Core Focus</span>}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginLeft: '0.5rem', borderLeft: `2px solid ${highlighted ? COLORS.cyberBlue : COLORS.borderGlow}30`, paddingLeft: '1rem' }}>
      {subcategories.map((sub, idx) => (
        <div key={idx}>
          <div style={{ color: highlighted ? COLORS.electricPurple : COLORS.silverMist, fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>{sub.title}</div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {sub.items.map(item => (
              <span key={item.name} style={{ padding: '0.35rem 0.7rem', backgroundColor: highlighted ? `${COLORS.cyberBlue}15` : COLORS.voidBlack, borderRadius: '6px', color: highlighted ? COLORS.cyberBlue : COLORS.silverMist, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', border: `1px solid ${highlighted ? `${COLORS.cyberBlue}25` : COLORS.borderGlow}` }}>
                {item.logo && <TechLogo logo={item.logo} size={14} />}{item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FeaturedProjectCard = ({ project, isExpanded, onToggle }) => (
  <div style={{ padding: '2rem', backgroundColor: COLORS.cardBg, borderRadius: '16px', border: `1px solid ${COLORS.borderGlow}`, transition: 'all 0.3s ease', cursor: 'pointer' }}
    onClick={onToggle}
    onMouseEnter={e => { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.boxShadow = `0 0 40px ${project.color}20`; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.borderGlow; e.currentTarget.style.boxShadow = 'none'; }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: `${project.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${project.color}40` }}>
            <project.icon size={24} style={{ color: project.color }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: COLORS.ghostWhite, fontSize: '1.35rem', margin: 0 }}>{project.title}</h3>
            <p style={{ color: project.color, fontSize: '0.9rem', margin: 0 }}>{project.tagline}</p>
          </div>
          {isExpanded ? <ChevronUp size={20} style={{ color: COLORS.silverMist }} /> : <ChevronDown size={20} style={{ color: COLORS.silverMist }} />}
        </div>
        <p style={{ color: COLORS.silverMist, lineHeight: 1.8, marginBottom: '1.5rem' }}>{project.description}</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {project.tech.map(t => (<span key={t} style={{ padding: '0.35rem 0.75rem', backgroundColor: COLORS.voidBlack, color: COLORS.silverMist, borderRadius: '6px', fontSize: '0.8rem', fontFamily: 'monospace', border: `1px solid ${COLORS.borderGlow}` }}>{t}</span>))}
        </div>
        {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: project.color, textDecoration: 'none', fontWeight: '600' }}><Github size={18} /> View on GitHub <ExternalLink size={14} /></a>)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
        {project.metrics.map((m, i) => (<div key={i} style={{ padding: '1rem 1.5rem', backgroundColor: COLORS.voidBlack, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: `1px solid ${COLORS.borderGlow}` }}><span style={{ color: COLORS.silverMist }}>{m.label}</span><span style={{ color: project.color, fontSize: '1.5rem', fontWeight: 'bold' }}>{m.value}</span></div>))}
      </div>
    </div>
    {isExpanded && (
      <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: `1px solid ${COLORS.borderGlow}` }}>
        <h4 style={{ color: COLORS.ghostWhite, marginBottom: '1rem' }}>Project Details</h4>
        <p style={{ color: COLORS.silverMist, lineHeight: 1.9, marginBottom: '1rem' }}><strong style={{ color: COLORS.electricPurple }}>Overview:</strong> {project.details?.overview}</p>
        <p style={{ color: COLORS.silverMist, lineHeight: 1.9 }}><strong style={{ color: COLORS.electricPurple }}>Technical Approach:</strong> {project.details?.technical}</p>
      </div>
    )}
  </div>
);

const CompactProjectCard = ({ project, isExpanded, onToggle }) => (
  <div style={{ padding: '1.25rem', backgroundColor: COLORS.cardBg, borderRadius: '12px', border: `1px solid ${COLORS.borderGlow}`, transition: 'all 0.3s ease', cursor: 'pointer' }}
    onClick={onToggle}
    onMouseEnter={e => { e.currentTarget.style.borderColor = project.color; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.borderGlow; }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: `${project.color}20`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${project.color}40` }}>
        <project.icon size={20} style={{ color: project.color }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h4 style={{ color: COLORS.ghostWhite, fontSize: '1.05rem', margin: 0 }}>{project.title}</h4>
          {isExpanded ? <ChevronUp size={16} style={{ color: COLORS.silverMist }} /> : <ChevronDown size={16} style={{ color: COLORS.silverMist }} />}
        </div>
        <p style={{ color: project.color, fontSize: '0.8rem', margin: '0.2rem 0 0 0' }}>{project.tagline}</p>
      </div>
    </div>
    <p style={{ color: COLORS.silverMist, fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>{project.description}</p>
    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
      {project.tech.slice(0, 4).map(t => (<span key={t} style={{ padding: '0.2rem 0.5rem', backgroundColor: COLORS.voidBlack, color: COLORS.silverMist, borderRadius: '4px', fontSize: '0.7rem', fontFamily: 'monospace', border: `1px solid ${COLORS.borderGlow}` }}>{t}</span>))}
      {project.tech.length > 4 && <span style={{ color: COLORS.silverMist, fontSize: '0.7rem' }}>+{project.tech.length - 4}</span>}
    </div>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {project.metrics.map((m, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span style={{ color: project.color, fontWeight: 'bold', fontSize: '0.95rem' }}>{m.value}</span><span style={{ color: COLORS.silverMist, fontSize: '0.7rem' }}>{m.label}</span></div>))}
    </div>
    {isExpanded && (
      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${COLORS.borderGlow}` }}>
        <p style={{ color: COLORS.silverMist, fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '0.75rem' }}><strong style={{ color: COLORS.electricPurple }}>Overview:</strong> {project.details?.overview}</p>
        <p style={{ color: COLORS.silverMist, fontSize: '0.85rem', lineHeight: 1.8 }}><strong style={{ color: COLORS.electricPurple }}>Technical:</strong> {project.details?.technical}</p>
      </div>
    )}
  </div>
);

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [expandedProjects, setExpandedProjects] = useState({});
  const toggleProject = (idx) => setExpandedProjects(prev => ({ ...prev, [idx]: !prev[idx] }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('mousemove', handleMouse); };
  }, []);

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Blog', 'Contact'];

  const skills = [
    { title: 'AI/ML Concepts', icon: BrainCircuit, highlighted: true, subcategories: [
      { title: 'Core Competencies', items: [{ name: 'RAG Systems' }, { name: 'Agentic AI' }, { name: 'LLM Fine-tuning' }, { name: 'Prompt Engineering' }] },
      { title: 'Domains', items: [{ name: 'NLP' }, { name: 'Computer Vision' }, { name: 'Deep Learning' }, { name: 'Multimodal AI' }] },
    ]},
    { title: 'Languages', icon: Code, subcategories: [
      { items: [{ name: 'Python', logo: 'python' }, { name: 'SQL', logo: 'postgresql' }, { name: 'TypeScript', logo: 'typescript'}, { name: 'Java', logo: 'java' }, { name: 'C++', logo: 'cplusplus' }] },
    ]},
    { title: 'Frameworks & Libraries', icon: Layers, subcategories: [
      { title: 'AI/ML', items: [{ name: 'LangChain', logo: 'langchain' }, { name: 'LangGraph' }, { name: 'PyTorch', logo: 'pytorch' }, { name: 'TensorFlow', logo: 'tensorflow' }, { name: 'HuggingFace', logo: 'huggingface' }, { name: 'Scikit-learn', logo: 'sklearn' }] },
      { title: 'Web & API', items: [{ name: 'FastAPI', logo: 'fastapi' }, { name: 'Flask', logo: 'flask' }, { name: 'React', logo: 'react' }, { name: 'Streamlit', logo: 'streamlit' }] },
      { title: 'Computer Vision', items: [{ name: 'OpenCV', logo: 'opencv' }] },
    ]},
    { title: 'Cloud & Infrastructure', icon: Cloud, subcategories: [
      { title: 'AWS', items: [{ name: 'Lambda', logo:'lambda' }, { name: 'Bedrock', logo:'bedrock' }, { name: 'SageMaker', logo:'sagemaker' }, { name: 'CDK', logo:'aws' }] },
      { title: 'DevOps & CI/CD', items: [{ name: 'Docker', logo: 'docker' }, { name: 'GitHub Actions', logo: 'github' }, { name: 'Linux', logo: 'linux' }] },
    ]},
    { title: 'Databases', icon: Database, subcategories: [
      { title: 'Relational', items: [{ name: 'PostgreSQL', logo: 'postgresql' }] },
      { title: 'Vector Databases', items: [{ name: 'ChromaDB', logo: 'chroma' }, { name: 'pgvector', logo: 'postgresql' }] },
      { title: 'Cache', items: [{ name: 'Redis', logo: 'redis' }] },
    ]},
    { title: 'Tools', icon: Wrench, subcategories: [
      { title: 'Development', items: [{ name: 'Git', logo: 'git' }, { name: 'Jupyter', logo: 'jupyter' }, { name: 'VS Code', logo: 'vscode' }] },
      { title: 'BI & Analytics', items: [{ name: 'Power BI', logo:'PowerBI' }] },
    ]},
  ];

  const featuredProjects = [
    { title: 'SkillBridge AI', tagline: 'Career Navigator for the AI Era', description: 'Human-centered AI system helping mid-career professionals navigate AI-driven job displacement through evidence-based career transition pathways.', tech: ['LangGraph', 'RAG', 'PostgreSQL', 'React', 'Streamlit'], metrics: [{ value: '700K+', label: 'Reddit Posts' }, { value: '7', label: 'Thematic Clusters' }, { value: '92%', label: 'User Satisfaction' }], github: 'https://github.com/marr05/skillbridge-ui', icon: Target, color: COLORS.matrixGreen, details: { overview: 'SkillBridge AI addresses the growing challenge of AI-driven job displacement affecting mid-career professionals. The system analyzes career transition patterns from real-world data to provide personalized, evidence-based guidance for professionals looking to pivot into AI-resilient careers. It focuses on human-centered design principles, ensuring recommendations consider individual circumstances, transferable skills, and realistic transition timelines.', technical: 'Built using LangGraph for orchestrating multi-agent workflows that handle user profiling, skill gap analysis, and pathway generation. Implemented RAG architecture with PostgreSQL and pgvector for semantic search across 700K+ Reddit posts discussing career transitions. The system uses thematic clustering to identify 7 major career transition patterns and success factors. Frontend built with React and Streamlit for rapid prototyping and user testing.' }},
    { title: 'Serverless RAG System', tagline: 'Enterprise Document Intelligence', description: 'Production-grade serverless architecture enabling natural language queries on private enterprise documents with sub-second latency.', tech: ['AWS Lambda', 'ChromaDB', 'Llama 3', 'FastAPI', 'CDK'], metrics: [{ value: '<1s', label: 'Search Latency' }, { value: '99.9%', label: 'Uptime' }, { value: 'IaC', label: 'Deployment' }], github: 'https://github.com/marr05/RAG_TO_AWS', icon: Database, color: COLORS.cyberBlue, details: { overview: 'Enterprise-ready document intelligence system that allows organizations to query their private document repositories using natural language. Designed for scalability and cost-efficiency, the serverless architecture eliminates infrastructure management overhead while maintaining high availability and low latency for end users.', technical: 'Implemented using AWS Lambda for compute, with ChromaDB as the vector store for document embeddings. Llama 3 serves as the LLM backbone for query understanding and response generation. The entire infrastructure is defined as code using AWS CDK, enabling reproducible deployments and version-controlled infrastructure changes. FastAPI handles the API layer with automatic OpenAPI documentation.' }},
    { title: 'SemEval 2024', tagline: 'Top 10 Global (Task 2) • Multimodal NLP', description: 'Propaganda detection in memes using multimodal fusion of visual and textual features across 22 propaganda technique categories.', tech: ['ResNet', 'BERT', 'ViT', 'DeBERTa', 'PyTorch'], metrics: [{ value: 'Top 10', label: 'Global (Task 2)' }, { value: '0.78', label: 'Weighted F1' }, { value: 'Multimodal', label: 'Fusion' }], icon: Trophy, color: COLORS.neonMagenta, details: { overview: 'Competed in SemEval 2024 Task 4: Multilingual Detection of Persuasion Techniques in Memes. The challenge involved detecting propaganda techniques in internet memes across 3 tasks, requiring understanding of both visual imagery and embedded text to identify manipulation tactics. Achieved Top 10 global ranking in Task 2 (technique classification).', technical: 'Developed a multimodal fusion architecture combining ResNet and ViT for image feature extraction with BERT and DeBERTa for text understanding. Implemented hierarchical classification for 22 propaganda technique categories. Used PyTorch for model development with custom training loops for handling class imbalance. Experimented with various fusion strategies including early, late, and attention-based fusion mechanisms.' }},
  ];

  const otherProjects = [
    { title: 'Employee Attrition Prediction', tagline: 'ML Classification System', description: 'Comprehensive ML pipeline comparing 7 models for predicting employee turnover with ensemble methods.', tech: ['XGBoost', 'Neural Networks', 'SVM', 'Random Forest', 'SMOTE', 'Scikit-learn'], metrics: [{ value: '92%', label: 'Accuracy' }, { value: '0.87', label: 'F1' }, { value: '7', label: 'Models' }], icon: Users, color: COLORS.electricPurple, details: { overview: 'Predictive analytics system to identify employees at risk of leaving an organization, enabling HR teams to proactively intervene with retention strategies. The project compared multiple ML approaches to find the optimal model for this imbalanced classification problem.', technical: 'Implemented 7 models: custom MLP, Scikit-learn MLP, XGBoost, SVM with RBF kernel, Random Forest, KNN, and Voting Ensemble. Used SMOTE for class imbalance. XGBoost feature importance revealed key predictors: overtime, monthly income, job satisfaction. Ensemble achieved 92% accuracy with 5-fold cross-validation.' }},
    { title: 'Credit Approval Prediction', tagline: 'Financial Risk Classification', description: 'Binary classification for loan default prediction with comprehensive hyperparameter tuning.', tech: ['Random Forest', 'ANN', 'Logistic Regression', 'Decision Tree', 'SMOTE'], metrics: [{ value: '86%', label: 'Accuracy' }, { value: '87%', label: 'Precision' }, { value: '5', label: 'Models' }], icon: TrendingUp, color: COLORS.cyberBlue, details: { overview: 'Credit risk assessment system for predicting loan defaults, helping financial institutions make informed lending decisions. Balances high precision (avoiding false approvals) with reasonable recall.', technical: 'Evaluated 5 models including ANN with architecture search (1-4 hidden layers). ANN with 3 hidden layers (200 nodes each) achieved best recall (86.46%), Random Forest best accuracy. Used SMOTE and 5-fold cross-validation.' }},
    { title: 'Reverse Face Image Search', tagline: 'Computer Vision System', description: 'Face detection and recognition using HOG, Haar Cascades, and CNN with 92% accuracy on 10K+ images.', tech: ['OpenCV', 'CNN', 'HOG', 'LBPH', 'face_recognition'], metrics: [{ value: '92%', label: 'Accuracy' }, { value: '10K+', label: 'Images' }, { value: '128-dim', label: 'Embeddings' }], icon: Eye, color: COLORS.matrixGreen, details: { overview: 'Developed during internship at C-DAC for Times of India. Takes an input image and searches through a database to find all images containing that person, whether individual or group photos.', technical: 'Implemented three detection approaches: HOG+SVM, Viola-Jones (Haar Cascades), and CNN. For recognition, used LBPH and 128-dimensional face embeddings with Euclidean distance matching.' }},
    { title: 'Urban Water Distribution', tagline: 'Graph Algorithm Optimization', description: 'Comparative analysis of MST algorithms for optimizing water pipeline networks.', tech: ['Java', 'Kruskal', 'Prim', 'Union-Find', 'Priority Queue'], metrics: [{ value: 'O(E log V)', label: 'Complexity' }, { value: '10K', label: 'Vertices' }, { value: '70%', label: 'Faster' }], icon: GitBranch, color: COLORS.electricPurple, details: { overview: 'Optimization study comparing algorithms to minimize total pipeline length while ensuring connectivity for urban water distribution systems.', technical: "Implemented Kruskal's (Union-Find) and Prim's (Priority Queue). Tested on 10K vertices, 100K edges. Kruskal's faster on sparse graphs (10.56% of Prim's time), Prim's better on dense graphs (70.6%)." }},
  ];

  const experience = [
  {
    role: 'Developer Analyst',
    company: 'Michelin',
    period: 'Jul 2021 - Jan 2024',
    location: 'Pune, India',
    highlights: ['500+ hours saved annually', '70+ developers trained', 'Hackathon Winner'],
    description: 'Built intelligent automation systems and data pipelines, leading technical enablement programs across global teams.',
    details: {
      overview: 'Led the development of automated data processing systems and intelligent dashboards that transformed manual workflows into scalable solutions. Championed the adoption of low-code AI tools across the organization, training 100+ developers and achieving significant operational efficiency gains.',
      achievements: [
        'Engineered an automated data pipeline to ingest, process, and analyze HR data, delivering role-based Power BI dashboards for tracking employee attrition and hiring trends—saving 150+ hours annually.',
        'Deployed a scalable automation solution using Power Automate and Oracle APIs for financial data processing, eliminating 350+ manual hours annually by streamlining monthly financial closure procedures.',
        'Led technical enablement programs training 70+ developers per session on building scalable workflows and API integrations, reducing operational manual work by 35% organization-wide.',
        'Spearheaded Power Platform adoption and governance at organizational level, achieving 40% increase in user adoption while optimizing licensing costs.',
        'Won Michelin Innovation Labs Hackathon (2022) for building a data-driven automation solution adopted org-wide; Runner-up in 2023 edition.',
      ]
    }
  },
  {
    role: 'Computer Science Intern',
    company: 'Centre for Development of Advanced Computing',
    period: 'Mar 2020 - Jun 2020',
    location: 'Pune, India',
    highlights: ['92% accuracy', '10K+ images', 'Face Recognition'],
    description: 'Developed computer vision systems for automated face recognition and image tagging for a major news organization.',
    details: {
      overview: 'Built an end-to-end computer vision pipeline for Times of India, enabling reverse image search capabilities across their extensive photo archive. The system automated the manual process of identifying and tagging individuals in news photographs.',
      achievements: [
        'Developed a "Reverse Face Image Search" system using OpenCV and fine-tuned CNN models, achieving 92% accuracy across 10,000+ images.',
        'Implemented multiple face detection approaches (HOG+SVM, Haar Cascades, CNN) to optimize for different accuracy-speed tradeoffs.',
        'Engineered an automated image tagging system that associates names with recognized faces, significantly improving search efficiency for the organization.',
        'Created 128-dimensional face embeddings for efficient similarity matching across large image databases.',
      ]
    }
  },
];

  const education = [
    { school: 'Northeastern University', degree: 'MS in Artificial Intelligence', year: '2024 - 2025', location: 'Boston, MA', logoUrl: 'https://nustbrand.wpengine.com/wp-content/uploads/2022/06/ac-grid-5-red.svg' },
    { school: 'MIT-WPU', degree: 'B.Tech in Computer Science', year: '2017 - 2021', location: 'Pune, India', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/MIT_-_WPU_Logo.webp/997px-MIT_-_WPU_Logo.webp.png?20230328100911' },
  ];

  return (
    <div style={{ backgroundColor: COLORS.voidBlack, color: COLORS.ghostWhite, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,107,53,0.08), transparent 40%)`, pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundImage: 'linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none', zIndex: 1 }} />

      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, padding: '1rem 5%', backgroundColor: scrolled ? COLORS.darkGlass : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? `1px solid ${COLORS.borderGlow}` : 'none', transition: 'all 0.3s ease', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#home" style={{ fontSize: '1.75rem', fontWeight: 'bold', background: `linear-gradient(135deg, ${COLORS.cyberBlue}, ${COLORS.electricPurple})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CircleOff size={24} style={{ color: COLORS.cyberBlue }} />MD.</a>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navItems.map(item => (<a key={item} href={`#${item.toLowerCase()}`} style={{ color: COLORS.silverMist, textDecoration: 'none', fontSize: '0.9rem' }} onMouseEnter={e => e.target.style.color = COLORS.cyberBlue} onMouseLeave={e => e.target.style.color = COLORS.silverMist}>{item}</a>))}
            <a href="/Maitreya_Darokar_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.25rem', background: `linear-gradient(135deg, ${COLORS.cyberBlue}, ${COLORS.electricPurple})`, color: COLORS.voidBlack, borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={16} />Resume</a>
          </div>
        </div>
      </nav>

      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '8rem 5% 4rem', position: 'relative', zIndex: 2, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: `linear-gradient(135deg, ${COLORS.cardBg}, rgba(0,255,136,0.1))`, borderRadius: '50px', border: `1px solid ${COLORS.matrixGreen}40`, marginBottom: '1.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: COLORS.matrixGreen, animation: 'pulse 2s infinite' }} />
                <span style={{ color: COLORS.matrixGreen, fontSize: '0.9rem' }}>Open to opportunities</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', marginBottom: '1rem', lineHeight: 1.1, background: `linear-gradient(135deg, ${COLORS.ghostWhite} 0%, ${COLORS.cyberBlue} 50%, ${COLORS.electricPurple} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Maitreya Darokar</h1>
              <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', background: `linear-gradient(90deg, ${COLORS.cyberBlue}, ${COLORS.neonMagenta})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1.5rem', fontWeight: '600' }}>AI Engineer • RAG Systems • Human-Centered Design</h2>
              <p style={{ color: COLORS.silverMist, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '500px' }}>Building AI systems that work <span style={{ color: COLORS.cyberBlue }}>for</span> humans, not around them. MS in AI from Northeastern. I turn research papers into production pipelines.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <a href="#projects" style={{ padding: '1rem 2rem', background: `linear-gradient(135deg, ${COLORS.cyberBlue}, ${COLORS.electricPurple})`, color: COLORS.voidBlack, borderRadius: '8px', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: `0 4px 30px ${COLORS.cyberBlue}40` }}>View Projects <ArrowRight size={18} /></a>
                <a href="#contact" style={{ padding: '1rem 2rem', border: `2px solid ${COLORS.cyberBlue}`, color: COLORS.cyberBlue, borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Get In Touch</a>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[{ icon: Github, href: 'https://github.com/marr05' }, { icon: Linkedin, href: 'https://www.linkedin.com/in/maitreya-darokar/' }, { icon: Mail, href: 'mailto:maitreya.mmd@gmail.com' }].map(({ icon: Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderGlow}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.silverMist }}><Icon size={20} /></a>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <StatCard number="2.5+" label="Years Experience" icon={Zap} color={COLORS.cyberBlue} />
                <StatCard number="15+" label="ML Models Built" icon={Brain} color={COLORS.electricPurple} />
                <StatCard number="500+" label="Hours Saved Annually" icon={TrendingUp} color={COLORS.matrixGreen} />
                <StatCard number="Top 10" label="Global @ SemEval" icon={Trophy} color={COLORS.neonMagenta} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: '6rem 5%', position: 'relative', zIndex: 2, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <Binary size={34} style={{ color: COLORS.cyberBlue }} /><h2 style={{ fontSize: '2rem' }}>About Me</h2>
              <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, ${COLORS.cyberBlue}, transparent)` }} />
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
            <AnimatedSection delay={0.1}>
              <div style={{ padding: '2rem', backgroundColor: COLORS.cardBg, borderRadius: '16px', border: `1px solid ${COLORS.borderGlow}` }}>
                <p style={{ color: COLORS.silverMist, lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '1.5rem' }}>I'm an AI Engineer who believes technology should <span style={{ color: COLORS.cyberBlue, fontWeight: '600' }}>amplify human capability</span>, not replace human judgment. After 2.5 years at Michelin building automation systems, I pursued my MS in AI at Northeastern to go deeper into the systems reshaping our world.</p>
                <p style={{ color: COLORS.silverMist, lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '1.5rem' }}>My approach is systematic and research-driven. I break complex problems into smaller pieces, validate assumptions with data, and build solutions that prioritize <span style={{ color: COLORS.electricPurple, fontWeight: '600' }}>ethical considerations</span> and user needs.</p>
                <blockquote style={{ borderLeft: `3px solid ${COLORS.cyberBlue}`, paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic' }}>
                  <p style={{ color: COLORS.ghostWhite, fontSize: '1.1rem' }}>"Everybody gangsta until real-world deployment in production."</p>
                  <footer style={{ color: COLORS.silverMist, marginTop: '0.5rem' }}>— Andrej Karpathy</footer>
                </blockquote>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div style={{ padding: '2rem', backgroundColor: COLORS.cardBg, borderRadius: '16px', border: `1px solid ${COLORS.borderGlow}` }}>
                <h3 style={{ color: COLORS.neonMagenta, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Gamepad2 size={20} /> Beyond Code</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[{ icon: '🎮', label: 'Gaming' }, { icon: '⚽', label: 'Soccer & Badminton' }, { icon: '🏎️', label: 'Formula 1 Racing' }, { icon: '📚', label: 'Dostoevsky, Murakami, Kafka' }].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', backgroundColor: COLORS.voidBlack, borderRadius: '8px', border: `1px solid ${COLORS.borderGlow}` }}><span style={{ fontSize: '1.25rem' }}>{item.icon}</span><span style={{ color: COLORS.silverMist }}>{item.label}</span></div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

<section id="experience" style={{ padding: '6rem 5%', backgroundColor: COLORS.darkSpace, position: 'relative', zIndex: 2, boxSizing: 'border-box' }}>
  <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
    <AnimatedSection>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <Building2 size={32} style={{ color: COLORS.cyberBlue }} /><h2 style={{ fontSize: '2rem' }}>Experience & Education</h2>
        <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, ${COLORS.cyberBlue}, transparent)` }} />
      </div>
    </AnimatedSection>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
      {experience.map((exp, idx) => (
        <AnimatedSection key={idx} delay={idx * 0.1}>
          <div 
            style={{ padding: '2rem', backgroundColor: COLORS.cardBg, borderRadius: '16px', border: `1px solid ${COLORS.borderGlow}`, cursor: 'pointer', transition: 'all 0.3s ease' }}
            onClick={() => toggleProject(`exp-${idx}`)}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.cyberBlue; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.borderGlow; }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ color: COLORS.ghostWhite, marginBottom: '0.25rem' }}>{exp.role}</h3>
                  {expandedProjects[`exp-${idx}`] ? <ChevronUp size={20} style={{ color: COLORS.silverMist }} /> : <ChevronDown size={20} style={{ color: COLORS.silverMist }} />}
                </div>
                <p style={{ color: COLORS.cyberBlue, fontWeight: '600' }}>{exp.company}</p>
                <p style={{ color: COLORS.silverMist, fontSize: '0.85rem' }}>{exp.period} • {exp.location}</p>
              </div>
            </div>
            <p style={{ color: COLORS.silverMist, marginBottom: '1rem', lineHeight: 1.7 }}>{exp.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {exp.highlights.map(h => (
                <span key={h} style={{ padding: '0.35rem 0.75rem', background: `linear-gradient(135deg, ${COLORS.cyberBlue}20, ${COLORS.electricPurple}20)`, color: COLORS.cyberBlue, borderRadius: '6px', fontSize: '0.8rem', border: `1px solid ${COLORS.cyberBlue}40` }}>{h}</span>
              ))}
            </div>
            {expandedProjects[`exp-${idx}`] && (
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: `1px solid ${COLORS.borderGlow}` }}>
                <p style={{ color: COLORS.silverMist, lineHeight: 1.9, marginBottom: '1.25rem' }}>
                  <strong style={{ color: COLORS.electricPurple }}>Overview:</strong> {exp.details?.overview}
                </p>
                <div>
                  <strong style={{ color: COLORS.electricPurple }}>Key Achievements:</strong>
                  <ul style={{ color: COLORS.silverMist, lineHeight: 1.9, marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                    {exp.details?.achievements.map((achievement, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
    <AnimatedSection delay={0.3}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
        {education.map((edu, idx) => (
          <div key={idx} style={{ padding: '1.5rem', backgroundColor: COLORS.cardBg, borderRadius: '12px', border: `1px solid ${COLORS.borderGlow}`, display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: COLORS.ghostWhite, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}>
              <img src={edu.logoUrl} alt={edu.school} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <h4 style={{ color: COLORS.cyberBlue }}>{edu.school}</h4>
              <p style={{ color: COLORS.silverMist }}>{edu.degree}</p>
              <p style={{ color: COLORS.silverMist, fontSize: '0.85rem', opacity: 0.7 }}>{edu.year} • {edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </div>
</section>

      <section id="projects" style={{ padding: '6rem 5%', position: 'relative', zIndex: 2, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <Layers size={32} style={{ color: COLORS.cyberBlue }} /><h2 style={{ fontSize: '2rem' }}>Featured Projects</h2>
              <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, ${COLORS.cyberBlue}, transparent)` }} />
            </div>
          </AnimatedSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            {featuredProjects.map((project, idx) => (<AnimatedSection key={idx} delay={idx * 0.1}><FeaturedProjectCard project={project} isExpanded={expandedProjects[`f-${idx}`]} onToggle={() => toggleProject(`f-${idx}`)} /></AnimatedSection>))}
          </div>
          <AnimatedSection delay={0.3}>
            <h3 style={{ color: COLORS.silverMist, fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ width: '20px', height: '2px', backgroundColor: COLORS.cyberBlue }} /> Other Projects</h3>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {otherProjects.map((project, idx) => (<AnimatedSection key={idx} delay={0.3 + idx * 0.1}><CompactProjectCard project={project} isExpanded={expandedProjects[`o-${idx}`]} onToggle={() => toggleProject(`o-${idx}`)} /></AnimatedSection>))}
          </div>
        </div>
      </section>

      <section id="skills" style={{ padding: '6rem 5%', backgroundColor: COLORS.darkSpace, position: 'relative', zIndex: 2, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <Cpu size={32} style={{ color: COLORS.cyberBlue }} /><h2 style={{ fontSize: '2rem' }}>Skills & Technologies</h2>
              <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, ${COLORS.cyberBlue}, transparent)` }} />
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {skills.map((skill, idx) => (<AnimatedSection key={idx} delay={idx * 0.1}><SkillSection title={skill.title} icon={skill.icon} subcategories={skill.subcategories} highlighted={skill.highlighted} /></AnimatedSection>))}
          </div>
        </div>
      </section>

      <section id="blog" style={{ padding: '6rem 5%', position: 'relative', zIndex: 2, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <BookOpen size={32} style={{ color: COLORS.cyberBlue }} /><h2 style={{ fontSize: '2rem' }}>Blog</h2>
              <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, ${COLORS.cyberBlue}, transparent)` }} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div style={{ padding: '4rem', backgroundColor: COLORS.cardBg, borderRadius: '16px', border: `1px dashed ${COLORS.borderGlow}`, textAlign: 'center' }}>
              <Sparkles size={56} style={{ color: COLORS.cyberBlue, marginBottom: '1rem' }} />
              <h3 style={{ color: COLORS.ghostWhite, fontSize: '1.5rem', marginBottom: '0.75rem' }}>Coming Soon</h3>
              <p style={{ color: COLORS.silverMist, maxWidth: '450px', margin: '0 auto', lineHeight: 1.7 }}>I'm working on deep-dives into RAG architectures, agentic AI patterns, and lessons from production deployments. Stay tuned!</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="contact" style={{ padding: '6rem 5%', backgroundColor: COLORS.darkSpace, position: 'relative', zIndex: 2, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <Mail size={48} style={{ color: COLORS.cyberBlue, marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: `linear-gradient(135deg, ${COLORS.ghostWhite}, ${COLORS.cyberBlue})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Let's Build Something</h2>
            <p style={{ color: COLORS.silverMist, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>I'm actively seeking AI/ML Engineer roles where I can deploy robust, human-centered AI solutions. Have a role or project in mind? Let's talk.</p>
            <a href="mailto:maitreya.mmd@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem', background: `linear-gradient(135deg, ${COLORS.cyberBlue}, ${COLORS.electricPurple})`, color: COLORS.voidBlack, borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', boxShadow: `0 4px 30px ${COLORS.cyberBlue}40` }}><Mail size={20} /> Say Hello</a>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
              {[{ icon: Github, href: 'https://github.com/marr05', label: 'GitHub' }, { icon: Linkedin, href: 'https://www.linkedin.com/in/maitreya-darokar/', label: 'LinkedIn' }, { icon: Mail, href: 'mailto:maitreya.mmd@gmail.com', label: 'Email' }].map(({ icon: Icon, href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ padding: '0.75rem 1.5rem', backgroundColor: COLORS.cardBg, borderRadius: '8px', border: `1px solid ${COLORS.borderGlow}`, color: COLORS.silverMist, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon size={18} /> {label}</a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer style={{ padding: '2rem 5%', textAlign: 'center', borderTop: `1px solid ${COLORS.borderGlow}`, position: 'relative', zIndex: 2 }}>
        <p style={{ color: COLORS.silverMist, fontSize: '0.85rem', marginBottom: '0.5rem' }}>Designed & Built by <span style={{ color: COLORS.cyberBlue }}>Maitreya Darokar</span> © 2025</p>
        <p style={{ color: COLORS.silverMist, fontSize: '0.8rem', opacity: 0.7 }}>Built with mass amounts of caffeine 🧡</p>
      </footer>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        @media (max-width: 1024px) { section > div > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { nav > div > div:last-child { display: none !important; } }
      `}</style>
    </div>
  );
};

export default Portfolio;
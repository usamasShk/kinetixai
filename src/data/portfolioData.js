export const companyInfo = {
  name: "KINETIX AI",
  subtitle: "Autonomous Systems & Custom AI Engineering Studio",
  location: "San Francisco · Global Remote",
  email: "contactkinetixai@gmail.com",
  whatsapp: "+923075563077",
  github: "https://github.com/kinetix-ai",
  linkedin: "https://www.linkedin.com/company/kinetix-ai-studio/",
  twitter: "https://twitter.com/kinetix_ai"
};

export const deployments = [
  {
    id: "soccervision",
    title: "SoccerVision",
    subtitle: "Automated Football Video Analysis & Highlight Generation",
    description: "Coaches and analysts spent hours manually scrubbing through match footage. SoccerVision processes the full video feed, identifies key events — goals, shots, fouls — and exports a ready-to-use highlight reel in minutes.",
    badge: "Computer Vision · Deep Learning",
    videoUrl: "/videos/soccervision.mp4",
    tags: ["Python", "YOLOv8", "OpenCV", "FastAPI", "React"],
    pipeline: ["Football Video", "AI Analysis", "Event Detection", "Timestamp Mapping", "Highlight Reel"],
    caseStudy: {
      problem: "Coaches and media teams spent 2–3 hours per match scrubbing raw footage to clip highlights and tag tactical moments. At scale, this was simply unsustainable.",
      approach: "Built an automated video analysis pipeline using YOLOv8 for real-time object tracking and a custom temporal event classifier to detect goals, shots, fouls, and key passes.",
      architecture: [
        { step: "01 Video Intake", detail: "High-FPS upload with frame buffer normalization and preprocessing" },
        { step: "02 Object Detection", detail: "YOLOv8 tracking for ball trajectory, player movements, and goal collisions" },
        { step: "03 Event Classification", detail: "Action recognition model tags goals, near-misses, and tactical moments" },
        { step: "04 Clip Export", detail: "Automated FFmpeg stitching of candidate clips into timestamped highlight reels" }
      ],
      implementation: "Python, OpenCV, YOLOv8, FastAPI async backend, React video annotation timeline UI.",
      challenges: "Motion blur at high speeds caused false negatives in ball detection. Resolved with temporal smoothing across 8-frame windows.",
      results: "Reduced highlight reel creation from 3 hours to under 4 minutes. Event detection accuracy: 94.2%."
    }
  },
  {
    id: "youtube-qa",
    title: "YouTube Q&A",
    subtitle: "Ask Questions. Get Answers from Video Content.",
    description: "Long videos contain more information than most people extract. This tool lets you ask specific questions and get grounded answers with exact timestamps — no scrubbing required.",
    badge: "RAG · Vector Search · LLM",
    videoUrl: "/videos/youtube-qa.mp4",
    tags: ["React", "Python", "LangChain", "Pinecone", "OpenAI"],
    pipeline: ["YouTube Video", "Transcript", "Vector Index", "Semantic Search", "Cited Answer"],
    caseStudy: {
      problem: "Long technical talks, lectures, and podcasts contain valuable information that is impractical to extract. Watching 3 hours to find one specific answer is an inefficient use of time.",
      approach: "Built a production RAG pipeline that fetches transcripts, chunks text with timestamp metadata, indexes vectors in Pinecone, and returns grounded answers with clickable timecodes.",
      architecture: [
        { step: "01 Transcript Fetch", detail: "Automated extraction with speech-to-text fallback for missing captions" },
        { step: "02 Semantic Chunking", detail: "Recursive text splitting preserving timestamp metadata per chunk" },
        { step: "03 Vector Indexing", detail: "OpenAI text-embedding-3-small vectors stored in Pinecone" },
        { step: "04 Grounded Q&A", detail: "Similarity retrieval + LLM synthesis with clickable timestamp references" }
      ],
      implementation: "React, Python LangChain RAG pipeline, Pinecone, OpenAI API.",
      challenges: "Missing or low-quality auto-generated transcripts, and context window limits on 3+ hour videos. Solved with smart chunking and selective retrieval.",
      results: "Sub-second retrieval across 100,000+ transcript chunks. Accurate timestamp citations in over 91% of tested queries."
    }
  },
  {
    id: "skillswap",
    title: "SkillSwap",
    subtitle: "Peer-to-Peer Learning & Skill-Exchange Platform",
    description: "A community-driven web platform connecting learners and mentors where every user can both teach and learn. Built on a modular, scalable MERN architecture with smart skill matching and real-time collaborative communication.",
    badge: "MERN Stack · Real-Time Systems",
    videoUrl: "/videos/skillswap.mp4",
    tags: ["React 18", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "n8n"],
    pipeline: ["Skill Matching Engine", "Real-Time Chat", "Course Management", "Rating & Reviews", "Dashboard Analytics"],
    caseStudy: {
      problem: "Traditional online learning platforms create rigid one-directional student-teacher hierarchies behind paywalls, lacking a reciprocal community where practitioners can exchange skills collaboratively.",
      approach: "Engineered a peer-to-peer learning platform using React 18, Node.js, Express, MongoDB, and Socket.IO for low-latency bidirectional messaging, powered by smart skill matching algorithms and automated workflow integrations.",
      architecture: [
        { step: "01 Skill Matching", detail: "Algorithmic matcher connecting complementary learner requirements with peer mentor skills" },
        { step: "02 Real-Time Engine", detail: "Socket.IO event rooms enabling instant peer messaging and live session scheduling" },
        { step: "03 State & Courses", detail: "Modular React 18 frontend with course creation, tracking, and review verification" },
        { step: "04 Automated Workflows", detail: "n8n workflow automations for transactional alerts, email notifications, and analytics" }
      ],
      implementation: "React 18, Node.js, Express, MongoDB, Socket.IO, JWT Auth, REST APIs, n8n webhook automations.",
      challenges: "Maintaining reliable state synchronization across high-concurrency real-time chat rooms with automatic reconnect handling.",
      results: "Sub-50ms message latency across active rooms, robust end-to-end JWT security, and a modular architecture supporting thousands of concurrent users."
    }
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery",
    description: "We map your workflow, identify the bottleneck, and define what success looks like before writing a line of code."
  },
  {
    num: "02",
    title: "Architecture",
    description: "We design the system — which models, databases, and APIs are needed, and how they connect."
  },
  {
    num: "03",
    title: "Build",
    description: "Engineering the full stack — backend APIs, AI integrations, and front-end interfaces — with continuous testing."
  },
  {
    num: "04",
    title: "Ship",
    description: "Deployment to your infrastructure with documentation, monitoring, and a clear handoff session."
  }
];

export const testimonials = [
  {
    quote: "They understood our workflow immediately and turned complex requirements into a tool that actually works. Ticket response times dropped significantly after deployment.",
    name: "Sarah Jenkins",
    role: "Operations Director, GrowthScale Media",
  },
  {
    quote: "Their expertise in computer vision gave us a working product that impressed our stakeholders. The codebase was clean, documented, and easy to hand off.",
    name: "Marcus Vance",
    role: "Head of Product, Athletic AI Studio",
  },
  {
    quote: "They think through the business impact, not just the technical implementation. Our team's document search went from frustrating to instant.",
    name: "David Miller",
    role: "Founder & CEO, DocuSense AI",
  }
];

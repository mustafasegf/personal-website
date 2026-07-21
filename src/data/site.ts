export const site = {
  name: "Mustafa Zaki Assagaf",
  title: "Hi, I'm Mustafa",
  description: "Backend, Cloud, and System Engineer. I craft fast, reliable, and secure web application for a living.",
  email: "mustafa.segf@gmail.com",
  github: "https://github.com/mustafasegf",
  linkedin: "https://linkedin.com/in/mustafa-assagaf",
  x: "https://x.com/mustafasegf",
};

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
  github: string;
  img?: string;
  color: string;
}

export const showcase: Project[] = [
  {
    title: "URL Shortener",
    img: "/images/shortener.png",
    desc: "URL Shortner is a simple URL shortener that allows you to shorten any URL and get the original URL back.",
    tags: ["Go", "Redis", "Postgres"],
    href: "https://mustafasegf.com/s",
    github: "https://github.com/mustafasegf/go-shortener",
    color: "bg-brand-green",
  },
  {
    title: "Anonymous Chat",
    img: "/images/tech2.jpeg",
    desc: "Anonymous Chat is a simple chat application that allows you to chat anonymously with a room you create.",
    tags: ["Go", "Kafka", "Docker", "Websocket"],
    href: "https://mustafasegf.com/chat",
    github: "https://github.com/mustafasegf/chat",
    color: "bg-brand-mint",
  },
  {
    title: "Neoman",
    img: "/images/neoman.png",
    desc: "Neoman is a Postman-like terminal application that allows you to send and receive HTTP requests and responses.",
    tags: ["Go", "Terminal", "Bubbletea"],
    href: "https://mustafasegf.com/neoman",
    github: "https://github.com/mustafasegf/neoman",
    color: "bg-brand-pink",
  },
];

export const projects: Project[] = [
  {
    title: "Hompimpa",
    desc: "Simple real-time Indonesian traditional game using Redis and WebSocket",
    tags: ["Go", "Redis", "Postgres"],
    href: "https://mustafasegf.com/hompimpa",
    github: "https://github.com/mustafasegf/hompimpa",
    color: "bg-brand-tan",
  },
  {
    title: "SSO proxy",
    desc: "SSO to Rest API proxy using golang and colly scraper",
    tags: ["Go", "Colly"],
    github: "https://github.com/ristekoss/sso-proxy",
    color: "bg-brand-pink-soft",
  },
  {
    title: "NotionAPI",
    desc: "Contributed to Notion Library using Go",
    tags: ["Go", "Notion", "Library"],
    github: "https://github.com/jomei/notionapi",
    color: "bg-brand-lavender",
  },
  {
    title: "KS-YAML",
    desc: "Kambing Style YAML formatter to YAML for better readability",
    tags: ["Go", "YAML", "CLI", "Library"],
    github: "https://github.com/kambi-ng/ks-yaml",
    color: "bg-brand-green",
  },
  {
    title: "Leetbot",
    desc: "Discord Bot to get daily and random LeetCode problems",
    tags: ["Typescript", "Discord", "Bot"],
    github: "https://github.com/kambi-ng/leetbot",
    color: "bg-brand-lemon",
  },
  {
    title: "Extract Kurikulum",
    desc: "Parse and convert university curriculum from PDF to JSON",
    tags: ["Go", "Parser"],
    github: "https://github.com/mustafasegf/extract-kurikulum",
    color: "bg-brand-lavender",
  },
  {
    title: "Notion Notes",
    desc: "Discord and line bot to save notes into Notion using API",
    tags: ["Go", "Bot", "Notion"],
    github: "https://github.com/mustafasegf/notion-note",
    color: "bg-brand-blue",
  },
  {
    title: "Moodlefeed",
    desc: "Discord and line bot to send notifications updates when moodle changes",
    tags: ["Go", "Bot", "Moodle"],
    github: "https://github.com/mustafasegf/moodlefeed",
    color: "bg-brand-rose",
  },
  {
    title: "Moodletui",
    desc: "Moodle terminal user interface to navigate and see moodle courses",
    tags: ["Go", "Terminal", "Bubbletea"],
    github: "https://github.com/mustafasegf/moodletui",
    color: "bg-brand-pink-soft",
  },
];

export interface Experience {
  role: string;
  company: string;
  range: string;
  href?: string;
  desc?: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "MLOps Engineer",
    company: "GoPay",
    range: "Aug 2024 - Present",
    href: "https://gopay.co.id/",
    desc: "Largest e-wallet and financial ecosystem in Indonesia",
    bullets: [
      "Led the training of Sahabat AI, Indonesia's first LLM, on a 64× Nvidia H100 Kubernetes cluster using vLLM, SGLang, and NVIDIA TensorRT",
      "Architected and deployed an inference platform running on 40× Nvidia H100 GPUs, serving thousands of concurrent requests with low latency",
      "Built LLM-powered dispute resolution agent processing 10K+ daily tickets, reducing support costs by 40% and boosting customer satisfaction by 52%",
      "Built automated TTS & STT loan collection system handling 10K+ daily voice calls, saving IDR 3B annually ($200K+)",
    ],
  },
  {
    role: "Platform Engineer",
    company: "University of Indonesia",
    range: "Nov 2023 - Aug 2024",
    href: "https://cs.ui.ac.id/",
    bullets: [
      "Built an in-house PaaS from scratch in Rust as a single-binary application, capable of 400+ concurrent deployments",
      "Replaced Heroku with a highly optimized self-hosted solution, reducing infrastructure costs by $2000 per month",
      "Optimized server usage with cold-start memory swap from RAM to storage, reducing idle memory usage by 30-50%",
    ],
  },
  {
    role: "MLOps Engineer",
    company: "Soca AI",
    range: "Apr 2023 - Nov 2023",
    desc: "AI stealth startup focusing on edge devices",
    bullets: [
      "Developed a high-performance server using Rust and Axum for real-time image processing",
      "Implemented image preprocessing shaders using wgpu in Rust and WebGPU for GPU-accelerated computations",
      "Designed and optimized an inference server and client using PaddleOCR with ONNX for efficient text recognition",
    ],
  },
  {
    role: "HPC Cluster Admin (SLURM)",
    company: "University of Indonesia",
    range: "Feb 2023 - Jul 2023",
    href: "https://cs.ui.ac.id/",
    desc: "Faculty of Computer Science",
    bullets: [
      "Managed and optimized SLURM-based HPC environment on an NVIDIA DGX Station for parallel programming coursework and research",
      "Configured job scheduling, GPU resource allocation, and monitoring for multi-user workloads",
    ],
  },
  {
    role: "Software Engineer",
    company: "Rvere",
    range: "Sep 2022 - Apr 2023",
    href: "https://rvere.com/",
    desc: "Shopify store speed and performance optimization",
    bullets: [
      "Drove 17% increase in sales by optimizing critical P95 PostgreSQL queries, reducing user abandonment",
      "Cut infrastructure costs by 80% by migrating Google Lighthouse audit process to serverless AWS Lambda",
      "Prevented multi-hour service disruptions through real-time Grafana alerting system implementation",
    ],
  },
  {
    role: "Backend Engineer",
    company: "SayaKaya",
    range: "Jan 2022 - Jun 2022",
    href: "https://sayakaya.id/",
    desc: "Mobile mutual funds application",
    bullets: [
      "Created B2B enabler service for closing a multi-hundred billion Rupiah (7 figures USD) deal",
      "Built a backend service from scratch using Golang with the Fiber framework and OpenAPI documentation",
      "Designed a CI/CD pipeline using Google Cloud Build, deployed on Google Cloud Run",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Fotoyu",
    range: "Apr 2021 - Oct 2021",
    href: "https://fotoyu.com/",
    desc: "Photo marketplace platform",
    bullets: [
      "Improved API response time by 46% by implementing Redis caching for PostgreSQL database queries",
      "Developed and automated CI/CD pipelines using AWS CodePipeline, AWS CodeBuild, and AWS EKS with Terraform",
    ],
  },
];

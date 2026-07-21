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
    title: "Intel 8080 Emulator",
    img: "/images/intel-8080.png",
    desc: "Cycle-accurate Intel 8080 CPU emulator running Space Invaders in the browser via WASM, with interrupt handling and a live debug panel showing CPU state, disassembly, and memory.",
    tags: ["Rust", "WASM", "Emulator"],
    href: "https://8080.mus.sh",
    github: "https://github.com/mustafasegf/intel-8080-emu",
    color: "bg-brand-green",
  },
  {
    title: "Pacil Web Service",
    img: "/images/pemasak.png",
    desc: "Platform-as-a-service built from scratch in Rust for Fasilkom UI. A single binary running the git server, reverse proxy, web dashboard, and Docker infrastructure behind 400+ student deployments.",
    tags: ["Rust", "Docker", "PaaS"],
    github: "https://github.com/mustafasegf/pemasak-infra",
    color: "bg-brand-mint",
  },
  {
    title: "Neoman",
    img: "/images/neoman.png",
    desc: "Neoman is a Postman-like terminal application that allows you to send and receive HTTP requests and responses, complete with keyboard navigation.",
    tags: ["Rust", "Terminal", "TUI"],
    github: "https://github.com/mustafasegf/neoman",
    color: "bg-brand-pink",
  },
];

export const projects: Project[] = [
  {
    title: "URL Shortener",
    desc: "Simple URL shortener with a web UI. Shortening any URL and getting the original back, with Redis caching in front of Postgres",
    tags: ["Go", "Redis", "Postgres"],
    github: "https://github.com/mustafasegf/go-shortener",
    color: "bg-brand-green",
  },
  {
    title: "Anonymous Chat",
    desc: "Chat application that lets you talk anonymously in rooms you create, streaming messages through Kafka over WebSocket",
    tags: ["Go", "Kafka", "WebSocket"],
    github: "https://github.com/mustafasegf/chat",
    color: "bg-brand-mint",
  },
  {
    title: "Hompimpa",
    desc: "Real-time multiplayer version of the Indonesian traditional game hompimpa, scaling WebSocket connections with Redis pub/sub",
    tags: ["Go", "Redis", "WebSocket"],
    github: "https://github.com/mustafasegf/hompimpa",
    color: "bg-brand-tan",
  },
  {
    title: "SSO Proxy",
    desc: "Proxy server to sign in with Universitas Indonesia SSO credentials via a REST API call, built with a colly scraper",
    tags: ["Go", "Colly", "API"],
    github: "https://github.com/ristekoss/sso-proxy",
    color: "bg-brand-pink-soft",
  },
  {
    title: "NotionAPI",
    desc: "Contributed to the most popular Notion API SDK for Go, a library with 575+ stars",
    tags: ["Go", "Notion", "Open Source"],
    github: "https://github.com/jomei/notionapi",
    color: "bg-brand-lavender",
  },
  {
    title: "KS-YAML",
    desc: "Kambing Style YAML, a formatter and linter for writing human-readable, developer-friendly YAML",
    tags: ["Go", "YAML", "CLI"],
    github: "https://github.com/kambi-ng/ks-yaml",
    color: "bg-brand-green",
  },
  {
    title: "Leetbot",
    desc: "Discord bot to get daily and random LeetCode problems, still alive and kicking on a server near you",
    tags: ["TypeScript", "Discord", "Bot"],
    github: "https://github.com/kambi-ng/leetbot",
    color: "bg-brand-lemon",
  },
  {
    title: "Extract Kurikulum",
    desc: "Parse and convert university curriculum from PDF to JSON, because sometimes JSON is better than PDF",
    tags: ["Go", "Parser", "PDF"],
    github: "https://github.com/mustafasegf/extract-kurikulum",
    color: "bg-brand-tan",
  },
  {
    title: "Notion Notes",
    desc: "Discord and Line bot to save notes straight into Notion through its API",
    tags: ["Go", "Bot", "Notion"],
    github: "https://github.com/mustafasegf/notion-note",
    color: "bg-brand-blue",
  },
  {
    title: "Moodlefeed",
    desc: "Discord and Line bot that watches Moodle and sends notification updates when courses change",
    tags: ["Go", "Bot", "Moodle"],
    github: "https://github.com/mustafasegf/moodlefeed",
    color: "bg-brand-rose",
  },
  {
    title: "Moodletui",
    desc: "Moodle terminal user interface to navigate courses and read forums without leaving the terminal",
    tags: ["Go", "Terminal", "TUI"],
    github: "https://github.com/mustafasegf/moodletui",
    color: "bg-brand-pink-soft",
  },
  {
    title: "Zeta OS",
    desc: "Hobby OS from scratch in Rust for x86_64, booted with Limine and built reproducibly with Nix flakes",
    tags: ["Rust", "Nix", "OS Dev"],
    github: "https://github.com/mustafasegf/zetaos",
    color: "bg-brand-mint",
  },
  {
    title: "Rust Redis Clone",
    desc: "Redis-compatible server with an async TCP event loop and RESP protocol parsing, for the CodeCrafters challenge",
    tags: ["Rust", "Tokio", "TCP"],
    github: "https://github.com/mustafasegf/codecrafters-redis-rust",
    color: "bg-brand-lemon",
  },
  {
    title: "Raft Consensus",
    desc: "Distributed Raft consensus algorithm implemented in Rust, complete with log replication",
    tags: ["Rust", "Protobuf", "Distributed"],
    github: "https://github.com/mustafasegf/raft",
    color: "bg-brand-tan",
  },
  {
    title: "CUDA 100 Days",
    desc: "100 days of CUDA kernel programming: vector ops, image processing kernels, and PMPP book exercises",
    tags: ["CUDA", "C++", "GPU"],
    github: "https://github.com/mustafasegf/cuda-100-days-challange",
    color: "bg-brand-green",
  },
  {
    title: "Lisp Interpreter",
    desc: "Lisp dialect interpreter written from scratch in C with a full REPL, grammar built on a parser combinator",
    tags: ["C", "Parser", "REPL"],
    github: "https://github.com/mustafasegf/build-your-own-lisp",
    color: "bg-brand-lavender",
  },
  {
    title: "DOS Raycasting Engine",
    desc: "2D raycasting engine in C for MS-DOS, rendering a first-person 3D view straight into VGA memory",
    tags: ["C", "MS-DOS", "Graphics"],
    github: "https://github.com/mustafasegf/dos-graphics",
    color: "bg-brand-pink-soft",
  },
  {
    title: "OCaml C Compiler",
    desc: "C compiler front-end in OCaml with a lexer, parser, and AST, built test-driven for a functional programming course",
    tags: ["OCaml", "Compiler", "Parser"],
    github: "https://github.com/mustafasegf/ocaml_c_compiler",
    color: "bg-brand-yellow",
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
    role: "Platform Engineer",
    company: "AI&",
    range: "Apr 2026 - Present",
    href: "https://aiand.com/",
    bullets: [
      "Own the reliability of the on-prem GPU server fleet, keeping training and inference workloads running around the clock",
      "Built end-to-end telemetry with dedicated GPU observability, from hardware metrics to application traces and alerting",
      "Provisioned and operate the Kubernetes cluster and CI/CD pipelines that power the ML platform",
      "Automated infrastructure as code with Pulumi and pyinfra for reproducible server provisioning",
    ],
  },
  {
    role: "MLOps Engineer",
    company: "GoPay",
    range: "Aug 2024 - Apr 2026",
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

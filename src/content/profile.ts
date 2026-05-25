export type Experience = {
  company: string;
  role: string;
  client?: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type Social = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "mail" | "file";
};

export const profile = {
  name: "Sathesh Sivashanmugam",
  title: "Sr. Cybersecurity Engineer II",
  tagline:
    "Expert in Secure Systems & Scalable Architecture. Driving innovation at American Express.",
  location: "Glendale, Arizona, USA",
  email: "satheshshiva@gmail.com",
  resumeUrl: "/Sathesh_Sivashanmugam.pdf",
  bio: [
    "I'm a Senior Cybersecurity Engineer with 17+ years of experience designing secure, scalable systems for the world's most demanding financial and consumer-tech platforms — from American Express to Apple Inc.",
    "I thrive on the messy edges where security meets product velocity: encryption, cloud architecture, AI-system threat modeling, and the kind of pragmatic engineering that ships under real constraints.",
    "Outside of shipping code, I judge international technology awards, publish research on AI security, and lead engineering teams with a Harvard-certified leadership lens.",
  ],
  highlights: [
    { label: "Years of experience", value: "17+" },
    { label: "Tenure at American Express", value: "10+ yrs" },
    { label: "Awards judged", value: "4 categories" },
    { label: "Published research", value: "LLM Security" },
  ],
  experience: [
    {
      company: "American Express",
      role: "Sr. Cybersecurity Engineer II",
      location: "Phoenix, Arizona",
      start: "Aug 2025",
      end: "Present",
      bullets: [
        "Drive cybersecurity engineering initiatives across mission-critical financial platforms.",
        "Apply 17+ years of systems and security expertise to safeguard scalable architecture.",
      ],
    },
    {
      company: "American Express",
      role: "Senior Software Engineer I",
      location: "Phoenix, Arizona",
      start: "Jan 2019",
      end: "Aug 2025",
      bullets: [
        "Led scrum teams: hands-on coding, daily stand-ups, technical mentorship.",
        "Partnered with Engineering Directors and Product Owners on requirements and system design.",
        "Designed and shipped resilient services powering customer-facing financial products.",
      ],
    },
    {
      company: "American Express",
      role: "Software Engineer",
      location: "Phoenix, Arizona",
      start: "Nov 2015",
      end: "Dec 2018",
      bullets: [
        "Revised, modularized, and modernized legacy codebases — reducing operating costs by 80%.",
        "Established modern development standards adopted across multiple teams.",
      ],
    },
    {
      company: "Wipro Technologies",
      role: "Senior Software Engineer",
      client: "Apple Inc.",
      location: "Sunnyvale, California",
      start: "Apr 2013",
      end: "Nov 2015",
      bullets: [
        "Collaborated with cross-functional Apple teams to analyze and design system solutions to evolving requirements.",
        "Wrote production code and guided offshore engineers to deliver multiple concurrent projects.",
      ],
    },
    {
      company: "Wipro Technologies",
      role: "Senior Software Engineer",
      client: "Apple Inc.",
      location: "Chennai, India",
      start: "Dec 2009",
      end: "Apr 2013",
      bullets: [
        "Delivered Java and front-end enhancement projects for Apple Inc.",
        "Provided technical guidance, code review, and kept project deliverables on timeline.",
      ],
    },
    {
      company: "Wipro Technologies",
      role: "Software Engineer",
      client: "MasterCard",
      location: "Chennai, India",
      start: "Sep 2008",
      end: "Dec 2009",
      bullets: [
        "Wrote highly maintainable, solid code for multiple software applications.",
        "Earned consistent praise from the client for code quality and reliability.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: "Model Inversion Attacks on Llama 3",
      description:
        "Published research demonstrating PII extraction from large language models through model inversion. Explores attack surfaces in modern LLMs and proposes mitigations relevant to enterprises deploying generative AI.",
      tags: ["LLM Security", "Research", "Privacy", "Llama 3"],
    },
    {
      title: "Globee Awards — Technology Judge",
      description:
        "Selected as a judge across four Globee Awards categories — Cybersecurity 2026, Technology, Artificial Intelligence, and Customer Excellence — evaluating innovative products and platforms worldwide.",
      tags: ["Judging", "Cybersecurity", "AI", "Technology"],
    },
    {
      title: "Security Vulnerability Disclosure — Wipro",
      description:
        "Discovered and responsibly disclosed a security vulnerability in the Wipro Technologies internal portal. Recognized with an Honors-Awards mention for the contribution.",
      tags: ["Vulnerability Research", "Disclosure", "Web Security"],
    },
  ] as Project[],
  skills: [
    {
      name: "Security",
      items: ["Encryption", "LLM Security", "Threat Modeling", "Vulnerability Research"],
    },
    {
      name: "Languages",
      items: ["Java", "Go", "Python", "JavaScript", "TypeScript"],
    },
    {
      name: "Backend & Data",
      items: ["Spring", "Node.js", "Kafka", "J2EE", "MongoDB", "NoSQL"],
    },
    {
      name: "Cloud & Platform",
      items: ["Cloud Computing", "Scalable Architecture", "Microservices"],
    },
    {
      name: "Frontend",
      items: ["AngularJS", "jQuery", "React"],
    },
    {
      name: "Leadership",
      items: [
        "Harvard Leadership Excellence",
        "Scrum / Agile",
        "Mentorship",
        "Technical Strategy",
      ],
    },
  ] as SkillGroup[],
  certifications: [
    "Harvard Leadership Excellence",
    "Sun Certified Java Programmer",
    "Judge — Globee® Awards for Cybersecurity 2026",
    "Judge — Globee® Awards for Technology",
    "Judge — Globee® Awards for Artificial Intelligence",
    "Judge — Globee® Awards for Customer Excellence",
  ],
  education: [
    {
      school: "Anna University",
      degree: "Bachelor of Engineering, Computer Science",
      years: "2004 — 2008",
    },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sathesh-sivashanmugam-929a0526/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:satheshshiva@gmail.com",
      icon: "mail",
    },
    {
      label: "Resume",
      href: "/Sathesh_Sivashanmugam.pdf",
      icon: "file",
    },
  ] as Social[],
};

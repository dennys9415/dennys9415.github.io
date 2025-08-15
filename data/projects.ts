export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  type: string;
  githubUrl: string;
  liveUrl?: string;
  codeSnippet?: string; // opcional
};

const projects: Project[] = [
  {
    slug: "singularity-box",
    title: "Singularity Box - IT & Cloud Solutions",
    summary:
      "Development and deployment of full-stack applications, networking solutions, cybersecurity, server maintenance, and cloud management using AWS and Azure. Includes containerized environments with Docker and Kubernetes.",
    tags: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "React",
      "Node.js",
      "PostgreSQL",
      "Nginx",
      "Python",
      "PHP",
    ],
    type: "fullstack-cloud",
    githubUrl: "",
    liveUrl: "https://thesingularitybox.com",
  },
  {
    slug: "chat-app-realtime",
    title: "Real-Time Chat App with WebSocket",
    summary:
      "Messaging application built with WebSocket and Ratchet in PHP, integrated with PostgreSQL for message storage and user management.",
    tags: [
      "PHP",
      "Ratchet WebSocket",
      "PostgreSQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Docker",
    ],
    type: "fullstack",
    githubUrl: "https://github.com/yourusername/chat-app",
  },
  {
    slug: "paint-by-numbers",
    title: "Paint by Numbers Image Processor",
    summary:
      "React app that converts uploaded images into numbered coloring templates with palettes. Migrated from AngularJS to ReactJS.",
    tags: ["React", "JavaScript", "HTML5 Canvas", "Web Workers", "CSS"],
    type: "frontend",
    githubUrl: "https://github.com/yourusername/pbn-react",
  },
  {
    slug: "cloud-infra-automation",
    title: "Cloud Infrastructure Automation",
    summary:
      "IaC automation for AWS and Azure using Terraform and GitHub Actions to provision servers and deploy apps.",
    tags: [
      "Terraform",
      "AWS",
      "Azure",
      "GitHub Actions",
      "Docker",
      "Linux",
      "Bash",
    ],
    type: "devops",
    githubUrl: "",
    codeSnippet: `# Ejemplo de pipeline GitHub Actions
name: ci-cd
on: [push]
jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci && npm test
      - name: Build Docker
        run: docker build -t ghcr.io/youruser/app:$GITHUB_SHA .
      - name: Push Image
        run: echo $CR_PAT | docker login ghcr.io -u youruser --password-stdin
      - run: docker push ghcr.io/youruser/app:$GITHUB_SHA`,
  },
  {
    slug: "vpn-secure-networking",
    title: "VPN Deployment for Secure Networking",
    summary:
      "Configured secure VPN (L2TP/IPsec) for remote network access, managed firewall rules, and encryption settings.",
    tags: ["Linux", "IPsec", "L2TP", "FirewallD", "Bash"],
    type: "networking",
    githubUrl: "",
  },
];

export default projects;

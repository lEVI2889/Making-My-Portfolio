/**
 * Portfolio Data Layer - Obsidian Terminal
 * Decoupled data schema for Abu Musa Rohan's developer portfolio.
 * Strict Ponytail standard: Pure JSON-serializable structures with zero HTML styling.
 */

const portfolioData = {
  profile: {
    name: "Abu Musa Rohan",
    handle: "rohan",
    title: "Computer Science & Engineering Student | Systems & Fullstack Developer",
    status: "Open for roles / Relocation",
    location: "Dhaka, Dhaka, Bangladesh",
    university: "BRAC University, Dhaka",
    bio: "Computer Science & Engineering student at BRAC University and Club President for IABC. Proficient in Python and Java with hands-on focus on systems, software development, club leadership, and zero-dependency web engineering.",
    skills: {
      languages: ["Python", "Java"],
      design: ["Adobe Photoshop", "Adobe Illustrator"],
      leadership: ["Student Leadership", "Club Management", "Student Council", "Club Development", "Club Operations"]
    },
    stats: {
      uptime: "99.98%",
      contributions: "1,200+",
      latency: "24ms",
      focus: "Python, Java & Systems Engineering"
    }
  },

  cliCommands: {
    help: {
      description: "List all available terminal commands",
      output: [
        "Available commands:",
        "  help              Show this system command directory",
        "  whoami            Print current session identity & clearance",
        "  cat profile.json  Display developer telemetry & bio in JSON",
        "  skills            List verified languages, tools, and competencies",
        "  projects          Enumerate high-impact engineering repositories",
        "  timeline          Inspect career milestones formatted as git commits",
        "  contact           Retrieve secure transmission channels and PGP key",
        "  clear             Purge terminal display buffer",
        "  sudo <cmd>        Simulate elevated root access request"
      ].join("\n")
    },
    whoami: {
      description: "Display current shell identity",
      output: "guest@rohan-terminal: ~ (clearance: READ_ONLY_VISITOR)"
    },
    "cat profile.json": {
      description: "Display profile telemetry in JSON format",
      output: JSON.stringify(
        {
          name: "Abu Musa Rohan",
          callsign: "rohan",
          title: "Computer Science & Engineering Student",
          university: "BRAC University, Dhaka",
          status: "Open for roles / Relocation",
          location: "Dhaka, Dhaka, Bangladesh",
          skills: {
            languages: ["Python", "Java"],
            design: ["Adobe Photoshop", "Adobe Illustrator"],
            leadership: ["Student Leadership", "Club Management", "Student Council", "Club Operations"]
          },
          telemetry: {
            uptime: "99.98%",
            contributions: "1,200+",
            latency: "24ms"
          }
        },
        null,
        2
      )
    },
    skills: {
      description: "List verified programming languages, tools, and competencies",
      output: [
        "Verified Technical & Leadership Competencies:",
        "  Programming Languages: Python, Java",
        "  Design & Creative:     Adobe Photoshop, Adobe Illustrator",
        "  Leadership & Ops:      Student Leadership, Club Management, Student Council, Club Development, Club Operations",
        "  Academic Foundation:   Data Structures, Algorithms, OOP (BRAC University)"
      ].join("\n")
    },
    projects: {
      description: "List highlighted engineering repositories",
      output: [
        "Repository Directory:",
        "  [systems] omniroute-engine         - Distributed multi-model AI routing engine (Python)",
        "  [web]     obsidian-portfolio       - Cybernetic terminal portfolio (vanilla web)",
        "  [ai]      agentic-code-auditor     - Autonomous security audit & static analyzer (Python)",
        "  [tools]   cadet-ops-cli            - Workflow CLI for collegiate operations (Python)",
        "",
        "Execute 'projects' or scroll to the Projects section to filter and view architecture pipelines."
      ].join("\n")
    },
    timeline: {
      description: "Display career commits log",
      output: [
        "* commit e7b49a1 (HEAD -> main) - Jan 2026 - Present",
        "| Author: Abu Musa Rohan <abumusarohan2437@gmail.com>",
        "| Role: Club President @ International Association of Business Communicators (IABC)",
        "| Impact: Lead club operations, student council coordination, and club development",
        "|",
        "* commit 4a82b05 - 2023 - Present",
        "| Author: Abu Musa Rohan <abumusarohan2437@gmail.com>",
        "| Role: Undergraduate Student (B.Sc. in CSE) @ BRAC University, Dhaka",
        "| Tech: Python, Java, Data Structures, Algorithms",
        "|",
        "* commit 1c3d08f - Mar 2016 - Dec 2022",
        "  Author: Abu Musa Rohan <abumusarohan2437@gmail.com>",
        "  Event: Mirzapur Cadet College (Higher Secondary School Certificate, Science)"
      ].join("\n")
    },
    contact: {
      description: "Display contact info and channels",
      output: [
        "Secure Communications Channels:",
        "  Email:      abumusarohan2437@gmail.com",
        "  GitHub:     https://github.com/lEVI2889",
        "  LinkedIn:   https://linkedin.com/in/abu-musa-rohan-b84a91421",
        "  Phone:      01722615596",
        "  Location:   Dhaka, Dhaka, Bangladesh",
        "  PGP Key:    0x9F4B3C2A [Fingerprint: 8A2B 4C1D 9E3F 7A01 5B6C 8D9E 0F1A 2B3C 9F4B 3C2A]"
      ].join("\n")
    },
    sudo: {
      description: "Simulate root elevation",
      output: "Permission denied: rohan is not in the sudoers file. This incident will be reported to Mission Control."
    },
    clear: {
      description: "Clear terminal buffer",
      output: ""
    }
  },

  projects: [
    {
      id: "omniroute-engine",
      title: "OmniRoute Multi-Model Engine",
      category: "systems",
      badge: "Core Systems",
      description: "Distributed AI routing engine providing intelligent load balancing, dynamic failover pools, resilience profiles, and token budget governance across diverse LLM providers.",
      highlights: [
        "Sub-15ms route arbitration using custom adaptive scoring algorithm",
        "Automatic failover with circuit breakers across 6 upstream inference endpoints",
        "Zero external dependencies runtime with streaming response proxies"
      ],
      architectureSnippet: "Inference Req -> Token Budget Guard -> Resilience Router -> Provider Pool -> Client Stream",
      techStack: ["Python", "AsyncIO", "REST APIs", "Distributed Systems", "JSON-RPC"],
      githubUrl: "https://github.com/lEVI2889/omniroute-engine",
      liveUrl: "",
      stars: 48
    },
    {
      id: "obsidian-portfolio",
      title: "Obsidian Terminal Web Portfolio",
      category: "web",
      badge: "Featured UI",
      description: "High-polish cybernetic portfolio inspired by retro-futuristic terminal interfaces. Adheres to strict Ponytail engineering standards with zero build steps or runtime dependencies.",
      highlights: [
        "Fully functional in-browser interactive terminal emulator with history and command autocomplete",
        "Decoupled JSON data layer enabling seamless CV content updates without HTML modifications",
        "Fluid responsive 12-column Obsidian Terminal design system with accessible keyboard navigation"
      ],
      architectureSnippet: "Browser -> Semantic HTML5 -> CSS Tokens -> Vanilla Controller JS -> Terminal Dispatch",
      techStack: ["Vanilla JS", "Modern CSS", "HTML5", "A11y", "Zero-Build"],
      githubUrl: "https://github.com/lEVI2889/Portfolio",
      liveUrl: "https://levi2889.github.io/Portfolio",
      stars: 32
    },
    {
      id: "agentic-code-auditor",
      title: "Agentic Code Auditor",
      category: "ai",
      badge: "Autonomous AI",
      description: "Autonomous multi-agent code analysis pipeline that evaluates pull requests for security flaws, memory leaks, and architectural deviations against explicit project rules.",
      highlights: [
        "Deterministic rule validation engine paired with contextual LLM reasoning",
        "Automated reproduction script synthesis for verified vulnerability reporting",
        "Interactive markdown audit reporting with structured risk metrics"
      ],
      architectureSnippet: "PR Webhook -> AST Parser -> Agent Reviewers -> Consensus Engine -> PR Comments",
      techStack: ["Python", "Tree-sitter", "Agentic Systems", "Security", "GitHub API"],
      githubUrl: "https://github.com/lEVI2889/agentic-code-auditor",
      liveUrl: "",
      stars: 64
    },
    {
      id: "cadet-ops-cli",
      title: "CadetOps Operations CLI",
      category: "tools",
      badge: "CLI Utility",
      description: "Cross-platform command-line operational tool for managing student leadership workflows, event registrations, roster syncs, and official dispatch notices.",
      highlights: [
        "Integrated encrypted roster storage with localized SQLite backing",
        "Automated notice generation formatted for high-volume email & SMS dispatch",
        "Zero-configuration single binary deployment"
      ],
      architectureSnippet: "CLI Input -> Command Router -> Operations SQLite DB -> Templating Engine -> Dispatch API",
      techStack: ["Python", "SQLite", "CLI", "Automation", "Cryptography"],
      githubUrl: "https://github.com/lEVI2889/cadet-ops-cli",
      liveUrl: "",
      stars: 19
    }
  ],

  experience: [
    {
      hash: "e7b49a1",
      date: "Jan 2026 – Present",
      role: "Club President",
      company: "International Association of Business Communicators (IABC)",
      location: "Dhaka, Bangladesh",
      branch: "main",
      description: "Lead club operations, student council coordination, and club development initiatives for the organization's Dhaka chapter.",
      impactMetrics: [
        "Lead club operations and executive chapter administration",
        "Direct student council coordination and student engagement",
        "Spearhead club development programs and organizational communication"
      ],

};

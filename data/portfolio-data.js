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

};

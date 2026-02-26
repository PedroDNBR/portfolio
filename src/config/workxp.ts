import { Position } from "@/types/position";

export default {
  maxSkillsToShow: 5,
  positions: [
    {
      company: "SENAI Soluções Digitais",
      position: "Unity Developer",
      description:
        "I develop real-time 3D applications and interactive simulators in Unity, including XR workflows. I focus on performance, clean architecture, and delivering reliable features in production environments.",
      responsabilities: [
        "Built real-time 3D applications, interactive experiences, and simulator-style projects across Desktop, Web, Mobile, and XR (VR/AR/MR) using Unity and C#.",
        "Optimized performance through profiling and rendering techniques (e.g., LODs, GPU instancing, multithreading, and real-time optimization workflows).",
        "Maintained and refactored legacy systems to improve stability, scalability, and maintainability.",
        "Collaborated closely with 3D artists/animators to integrate assets and ensure smooth runtime behavior; provided pipeline support using Blender.",
        "Took technical ownership of a major project when team structure changed, coordinating development and ensuring delivery of key milestones.",
      ],
      skills: [
        "C#",
        "Unity",
        "Blender",
      ],
      startDate: "Aug 2024",
      endDate: "Present",
    },
    {
      company: "Independent Game Developer",
      position: "Game Developer",
      description:
        "Indie game developer with 8+ years of personal projects and game jams, focused on gameplay systems, prototyping, AI behaviors, and performance-minded iteration in Unity and Unreal.",
      responsabilities: [
        "Designed and built multiple prototypes and jam projects focused on gameplay systems, combat mechanics, enemy AI behaviors, and strong “game feel”.",
        "Developed reusable systems (state machines, ability/mechanic frameworks, save/load, UI flows, input handling) and iterated quickly through playtesting.",
        "Built multiplayer experiments and networking prototypes (Unity/Unreal), exploring replication, prediction concepts, and real-time gameplay constraints",
        "Documented development through devlogs and playable builds, prioritizing clear presentation and continuous improvement.",
      ],
      skills: [
        "C++",
        "C#",
        "Unreal Engine",
        "Unity",
        "Blender",
        "Photoshop",
      ],
      startDate: "Jun 2016",
      endDate: "Present",
    },
    {
      company: "Hotels at Home",
      position: "Full-Stack Developer",
      description:
        "Full-stack background that strengthened my ability to ship features, integrate systems, and work across complex codebases - skills I bring into game development.",
      responsabilities: [
        "Delivered new features on production systems built on .NET, improving maintainability and reuse across multiple websites.",
        "Helped introduce modern tooling and workflows (e.g., React, Node.js, AWS Lambda) to support new projects.",
        "Lead a team of developers in the creation of new projects.",
        "Built internal automations to reduce manual work and improve team efficiency.",
        "Improved developer onboarding by maintaining clear technical documentation.",
      ],
      skills: [
        "JavaScript",
        ".NET Framework",
        "React.js",
        "Node.js",
        "AWS Lambda",
      ],
      startDate: "Jun 2023",
      endDate: "Jul 2024",
    },
    {
      company: "Tecimob",
      position: "Full-Stack Developer",
      description:
        "Built APIs, real-time integrations, and production systems - experience that sharpened my system design and integration skills for complex interactive projects.",
      responsabilities: [
        "Implemented new features and endpoints for REST APIs, supporting scalable product workflows.",
        "Built real-time notifications using Node.js and Socket.IO.",
        "Developed integrations with Meta services (e.g., Facebook/WhatsApp) and external systems.",
        "Delivered full-stack systems using Laravel and React, collaborating across product and support teams.",
      ],
      skills: ["JavaScript", "PHP", "React.js", "Node.js", "Laravel"],
      startDate: "May 2021",
      endDate: "May 2023",
    },
  ] as Position[],
} as const;

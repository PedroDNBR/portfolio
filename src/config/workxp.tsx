import { Position } from "@/types/position";

export default {
  maxSkillsToShow: 4,
  positions: [
    {
      company: "Hotels at Home",
      position: "Full-Stack Developer",
      description:
        "Hotels at Home is a provider of direct-to-guest retail programs, offering guests a opportunity to shop their favorite room amenities and furnishings from theirs favorite hotels to enjoy long after check out. It also provided hotels with a unique opportunity for more personal engagement with their guests. As a Fullstack Developer, I'm responsible for the creation of new features for our existing sites, and also for the creation of new ones, using our others sites as base to build a new one reusing our existing codebase in .NET.",
      responsabilities: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
      skills: [
        "JavaScript",
        ".NET Framework",
        "React.js",
        "Node.js",
        "AWS Lambdas",
      ],
      startDate: "May 2023",
      endDate: "Present",
    },
  ] as Position[],
} as const;

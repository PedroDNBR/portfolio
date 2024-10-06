import { Position } from "@/types/position";

export default {
  maxSkillsToShow: 5,
  positions: [
    {
      company: "SENAI Soluções Digitais",
      position: "Unity Developer",
      description:
        "SENAI Digital Solutions aims to support small, medium, and large companies in staying technologically up to date and strengthening their presence in national and international markets by offering customized systems in various programming languages.",
      responsabilities: [
        "Develop 3D applications, games, and simulators for Mobile, Desktop, VR, AR, and Mixed Reality platforms.",
        "Utilize Unity and C# for the creation and implementation of projects.",
        "Collaborate with the 3D Modeling and Animation team to ensure seamless integration of assets.",
        "Provide technical support using Blender for 3D modeling and animation tasks.",
      ],
      skills: [
        "C#",
        "Unity",
        "Blender",
      ],
      startDate: "Jun 2023",
      endDate: "Jul 2023",
    },
    {
      company: "Independent Game Developer",
      position: "Game Developer",
      description:
        "Since 2016, I have been passionately studying and creating games. My dedication to game development has driven me to explore and design various genres, such as racing games, first-person shooters (FPS), Souls-like games, and 2D platformers. Over the years, I have gained extensive experience with multiple game development engines and programming languages.",
      responsabilities: [
        "Design and develop prototypes and games across various genres, including racing games, FPS, Souls-like games, and 2D platformers.",
        "Create and implement game mechanics, levels, and features.",
        "Work with a variety of game development engines, including the deprecated Blender Game Engine, Unity, Unreal Engine, and GameMaker Studio.",
        "Utilize extensive experience with Unreal Engine and Unity in numerous projects.",
        "Apply knowledge of multiple programming languages relevant to game development.",
        "Implement complex game systems and optimize performance.",
      ],
      skills: [
        "C++",
        "C#",
        "Unreal Engine",
        "Unity",
        "Blender",
        "GameMaker",
        "Photoshop",
      ],
      startDate: "Jun 2016",
      endDate: "Present",
    },
    {
      company: "Hotels at Home",
      position: "Full-Stack Developer",
      description:
        "Hotels at Home is a provider of direct-to-guest retail programs, offering guests the opportunity to purchase their favorite room amenities and furnishings from their preferred hotels to enjoy long after check-out. The company also provides hotels with a unique opportunity for more personal engagement with their guests.",
      responsabilities: [
        "Create new features for existing sites.",
        "Build new sites by leveraging and reusing the existing codebase in .NET.",
        "Lead a team of developers in the creation of new projects.",
        "Implement new technologies such as ReactJS, NodeJS, and AWS Lambdas.",
        "Implement automations to streamline manual tasks, optimizing company processes.",
        "Maintain up-to-date documentation and ensure it serves as a comprehensive resource for new developers, aiding them in navigating existing projects.",
      ],
      skills: [
        "JavaScript",
        ".NET Framework",
        "React.js",
        "Node.js",
        "AWS Lambda",
      ],
      startDate: "Jun 2023",
      endDate: "Jul 2023",
    },
    {
      company: "Tecimob",
      position: "Full-Stack Developer",
      description:
        "Tecimob is a platform offering websites, CRM, and applications aimed at simplifying the daily operations of real estate professionals by focusing on what truly matters: increasing sales and enhancing relationships.",
      responsabilities: [
        "Create new features for existing RESTful APIs and develop new ones.",
        "Architect and define the overall technical structure of Laravel and Node projects.",
        "Develop integrations with Meta services such as Facebook and WhatsApp.",
        "Utilize NodeJS and the socket.io protocol to deliver real-time notifications.",
        "Create entire new systems using Fullstack Laravel and ReactJS for customer support and customer success.",
      ],
      skills: ["JavaScript", "PHP", "React.js", "Node.js", "Laravel"],
      startDate: "May 2021",
      endDate: "May 2023",
    },
  ] as Position[],
} as const;

import { PROJECT } from "@/enums";
import { ProjectDetail } from "@/interfaces";

export const projectDetails: Record<PROJECT, ProjectDetail> = {
  [PROJECT.SHOPEE_BUBBLE]: {
    id: PROJECT.SHOPEE_BUBBLE,
    title: "Shopee Bubble",
    type: "Professional",
    category: "Puzzle, Cocos-Creator, 2D",
    thumbnail: "/images/projects/shopee-bubble/bubble.jpg",

    studio: "Shopee Indonesia - Game Studio 1",
    platform: "Android, iOS",
    projectLength: "Feb 2022 - Feb 2025 (3 years)",
    brief: "A puzzle bubble shooter game for Shopee e-commerce platform",
    skills: ["Cocos Creator", "Phaser3", "Typescript", "JEST"],
    sections: [
      {
        title: "Summary of Contribution",
        type: "list",
        contents: [
          "Lead the game engineer team for one major version (tournament)",
          "Added new gameplay logic for tournament event",
          "Added bot system for tournament event",
          "Optimized asset workflow and usage in the game",
          'Added physics "Pachinko" mechanic for pinata party event',
          "Worked with FaaS (function as a service) to give a proxy for level auto generation",
          "Added snippets for star collector event",
          "Added fireworks gameplay mechanic",
          "Added fireworks animation with simple particle system",
          "Set UI for group race event scene",
          "Fixed and optimized saga map scrolling issue",
          "Adjusted saga map for level selector scene to provide new level type (boss battle)",
          "Updated pop up template to afford background and header component flexibility",
          "Implemented UI revival pop up for different occassion (multiple revival, boss level)",
          "Implemented boss attack mechanic",
          "Added minor UI components for some events (knockout stage, monster raid)",
          "Added first time user experience (FTUE) for weekly contest and tournament event",
          "Connected UI component for advertisement service for different occassion (treasure quest, boss level)",
          "Set up library usage to afford iOS runtime environtment",
        ],
      },
      {
        title: "Achievements",
        type: "list",
        contents: [
          "Successfully managed assets workflow and reduced loadtime by 2 seconds (15% load time at that time)",
        ],
      },
      {
        title: "Gallery",
        type: "gallery",
        items: [
          { type: "video", src: "/images/projects/shopee-bubble/pzb-bot.mp4" },
          {
            type: "video",
            src: "/images/projects/shopee-bubble/pzb-pinata.mp4",
          },
          {
            type: "video",
            src: "/images/projects/shopee-bubble/pzb-sagamap.mp4",
          },
          { type: "video", src: "/images/projects/shopee-bubble/pzb-tq.mp4" },
          { type: "video", src: "/images/projects/shopee-bubble/pzb-boss.mp4" },
          { type: "image", src: "/images/projects/shopee-bubble/pzb-ko.png" },
        ],
      },
    ],
  },
  [PROJECT.SHOPEE_COCOKI]: {
    id: PROJECT.SHOPEE_COCOKI,
    title: "Shopee Cocoki",
    type: "Professional",
    category: "Puzzle, Cocos-Creator, 2D",
    thumbnail: "/images/projects/shopee-cocoki/cocoki.jpg",

    studio: "Shopee Indonesia - Game Studio 1",
    platform: "Android, iOS",
    projectLength: "Jan 2024 - Dec 2024 (1 year)",
    brief: "",
    sections: [
      {
        title: "Summary of Contribution",
        type: "list",
        contents: [
          "Worked with tournament reward UI components",
          "Integrate atlas assets with the UI components",
        ],
      },
      {
        title: "Gallery",
        type: "gallery",
        items: [
          {
            type: "video",
            src: "/images/projects/shopee-cocoki/tm-milestone.mp4",
          },
        ],
      },
    ],
    skills: ["Cocos Creator", "Typescript"],
  },
  [PROJECT.KLHK_GROWGREEN]: {
    id: PROJECT.KLHK_GROWGREEN,
    title: "Grow Green",
    type: "Professional",
    category: "Tamagotchi, Unity, 2D",
    thumbnail: "/images/projects/klhk-growgreen/growgreentitle.png",

    studio: "Freelance Project",
    platform: "Android, iOS",
    projectLength: "Nov 2024 (1 month)",
    brief:
      "A freelance project for Ministry of Environment and Forestry Event.",
    sections: [
      {
        title: "Features",
        type: "list",
        contents: [
          "Skill check system for growing the plant",
          "Gameplay flow from seed to mature plant",
          "Main scene like main menu and level scene",
        ],
      },
      {
        type: "gallery",
        title: "Galleries",
        items: [
          {
            type: "image",
            src: "/images/projects/klhk-growgreen/growgreenmenu.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-growgreen/growgreenneed.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-growgreen/growgreenskillcheck.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-growgreen/growgreengrowing.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-growgreen/growgreenfinish.png",
          },
        ],
      },
    ],
    skills: ["Unity", "C#"],
  },
  [PROJECT.KLHK_WASPADAHUTAN]: {
    id: PROJECT.KLHK_WASPADAHUTAN,
    title: "Waspada Hutan",
    type: "Professional",
    category: "Point and Click, Unity, 2D",
    thumbnail: "/images/projects/klhk-waspadahutan/waspadahutan.png",
    studio: "Freelance Project",
    platform: "PC",
    projectLength: "Nov 2024 (1 month)",
    brief:
      "A freelance project for Ministry of Environment and Forestry Event.",
    sections: [
      {
        title: "Features",
        type: "list",
        contents: [
          "Input system for touch screen",
          "Spawn system with randomized foes and allies",
          "Score and health system",
          "Difficulty increaase overtime system",
          "Local leaderboard system",
          "Main scene like main menu scene, level scene and leaderboard scene",
        ],
      },
      {
        type: "gallery",
        title: "Galleries",
        items: [
          {
            type: "image",
            src: "/images/projects/klhk-waspadahutan/waspadahutanmain.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-waspadahutan/waspadahutanftue1.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-waspadahutan/waspadahutanftue2.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-waspadahutan/waspadahutanlevel.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-waspadahutan/waspadahutanover.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-waspadahutan/waspadahutanlbgame.png",
          },
          {
            type: "image",
            src: "/images/projects/klhk-waspadahutan/waspadahutanlbmenu.png",
          },
        ],
      },
    ],
    skills: ["Unity", "C#"],
  },
  [PROJECT.ANJIR_CINDUAMATO]: {
    id: PROJECT.ANJIR_CINDUAMATO,
    title: "Cindua Mato",
    type: "Professional",
    category: "Platformer, Unity, 2D",
    thumbnail: "/images/projects/anjir-cinduamato/cinduamato.png",

    studio: "Another Joyful In Rain",
    platform: "PC",
    projectLength: "Mar 2020 - Jun 2020 (4 months)",
    brief: "",
    sections: [
      {
        title: "Summary of Contribution",
        type: "list",
        contents: [
          "Input system",
          "Basic animation",
          "Physics system when combat",
        ],
      },
      {
        type: "gallery",
        title: "Galleries",
        items: [
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatotitle.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatooptions.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatolevels.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatoftue.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatointeract.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatolevelbig.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatojump.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatoblock.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatoattack.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatoslain.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-cinduamato/cinduamatofinish.png",
          },
        ],
      },
    ],
    skills: ["Unity", "C#"],
  },
  [PROJECT.APAYA_PATTOCATTO]: {
    id: PROJECT.APAYA_PATTOCATTO,
    title: "Patto Catto",
    type: "Personal",
    category: "Point & Click, Unity, 2D, Casual",
    thumbnail: "/images/projects/apaya-pattocatto/pattomain.jpg",
    externalLink: "https://sorrowisme.itch.io/patto-catto",

    studio: "Personal Project",
    platform: "Mobile",
    projectLength: "Jan 2021 - May 2021 (5 months)",
    brief: "Pat Cats Through Time!",
    sections: [
      {
        title: "Description",
        type: "text",
        contents: [
          "You’re Pat, a time traveller who has a MASSIVE love for cats. Pet cats as many as you can - whether it is day or night, summer or winter, do it as you like! Look how the world around you changes as cats from different generations come to approach you!",
        ],
      },
      {
        title: "Summary of Contribution",
        type: "list",
        contents: [
          "Input system (differentation of patting and tapping)",
          "Score and spawn system for each cat and dog",
          "Gallery UI and local record system",
        ],
      },
      {
        title: "Achievement",
        type: "text",
        contents: [
          "Marked as highly satisfactory in the game exhibition at the end of university semester",
        ],
      },
      {
        type: "gallery",
        title: "Galleries",
        items: [
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattomaintitle.jpg",
          },
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattojurasic.jpg",
          },
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattoloading.jpg",
          },
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattoleveljurasic.jpg",
          },
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattoegypt.jpg",
          },
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattolevelegypt.jpg",
          },
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattovictoria.jpg",
          },
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattolevelvictoria.jpg",
          },
          {
            type: "image",
            src: "/images/projects/apaya-pattocatto/pattogallery.jpg",
          },
        ],
      },
    ],
    skills: ["Unity", "C#"],
  },
  [PROJECT.INDIE_WHACKAMOLE]: {
    id: PROJECT.INDIE_WHACKAMOLE,
    title: "Two-Player Whack-a-mole",
    type: "Personal",
    category: "Arcade, Multiplayer, Unity, 3D, Prototype",
    thumbnail: "/images/projects/indie-whackamole/wam-init.png",
    studio: "Personal Project",
    platform: "PC",
    projectLength: "Jan 2025 (2 weeks)",
    brief: "",
    sections: [
      {
        title: "Features",
        type: "list",
        contents: [
          "Input system",
          "Hit mechanic using RPC",
          "Score system and update using SmartFoxServer",
          "Server built with room system using SmartFoxServer",
        ],
      },
      {
        type: "gallery",
        title: "Galleries",
        items: [
          {
            type: "image",
            src: "/images/projects/indie-whackamole/wam-wait.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-whackamole/wam-server.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-whackamole/wam-init.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-whackamole/wam-current.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-whackamole/wam-end.png",
          },
        ],
      },
    ],
    skills: ["Unity", "C#", "SmartFoxServer", "Java"],
  },
  [PROJECT.INDIE_WHATDOESITHUMAN]: {
    id: PROJECT.INDIE_WHATDOESITHUMAN,
    title: "What Does It Mean To Be Human?",
    type: "Personal",
    category: "Visual Novel, Multi-ending, Unity, 2D, Casual",
    thumbnail: "/images/projects/indie-human/human-level3intense.png",
    studio: "Personal Project",
    platform: "PC",
    projectLength: "Feb, Aug, Sep 2020 (3 months)",
    brief: "",
    sections: [
      {
        title: "Summary of Contribution (basically all of the game mechanics)",
        type: "list",
        contents: [
          "Input system (follow the cursor)",
          "Simple physics2D collision for scoring",
          "Visual novel dialogue and branching system",
          "Audio and UI management",
        ],
      },
      {
        title: "Achievements",
        type: "list",
        contents: [
          "1st prize in ITB's Pra-Gemastik competition",
          "Submitted as the game developement branch in Gemastik Competition",
        ],
      },
      {
        title: "Summary of Contribution (basically all of the game mechanics)",
        type: "list",
        contents: [
          "Input system (follow the cursor)",
          "Simple physics2D collision for scoring",
          "Visual novel dialogue and branching system",
          "Audio and UI management",
        ],
      },
      {
        type: "gallery",
        title: "Galleries",
        items: [
          {
            type: "image",
            src: "/images/projects/indie-human/human-main.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level1.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level1res.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level1foes.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level2intro.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level2mid.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level2choice.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level3init.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level4intro.png",
          },
          {
            type: "image",
            src: "/images/projects/indie-human/human-level4choice.png",
          },
        ],
      },
    ],
    skills: ["Unity", "C#"],
  },
  [PROJECT.INDIE_ELECTRIC]: {
    id: PROJECT.INDIE_ELECTRIC,
    title: "Electric Lab",
    type: "Personal",
    category:
      "Simulation, Unity, 3D, Electrical Physics, Blender, React, Express.js",
    thumbnail: "/images/projects/indie-electric/1.jpg",
    studio: "Personal Project",
    platform: "PC",
    projectLength: "Aug 2020 - Jun 2021 (1 year)",
    brief: "",
    sections: [
      {
        title: "Features",
        type: "list",
        contents: [
          "Designed and built my own 3D model for simulation",
          "Electric physics calculation for each individual virtual electrical component and as a whole system",
          "Connecting system between each virtual electrical component",
          "API for leaderboard and grading system with Express.JS",
          "Dashboard for the teacher with React",
        ],
      },
      {
        title: "Achievements",
        type: "list",
        contents: [
          "Graded satisfactory as final project",
          "Successfully used as a grading method in experiment section because of COVID 19 pandemic",
        ],
      },
      {
        type: "gallery",
        title: "Galleries",
        items: [
          {
            type: "image",
            src: "/images/projects/indie-electric/1.jpg",
          },
          {
            type: "image",
            src: "/images/projects/indie-electric/2.jpg",
          },
          {
            type: "image",
            src: "/images/projects/indie-electric/3.jpg",
          },
        ],
      },
    ],
    skills: ["Unity", "C#", "React", "Express.js", "Typescript", "MongoDB"],
  },
  [PROJECT.ANJIR_MEYOUDREAM]: {
    id: PROJECT.ANJIR_MEYOUDREAM,
    title: "Me, You & Our Dream",
    type: "Personal",
    category: "Platformer, Visual Novel, Unity, 2D",
    thumbnail: "/images/projects/anjir-meyoudream/myd.png",
    studio: "Another Joyful In Rain",
    platform: "PC",
    projectLength: "Oct 2018 - Nov 2018 (2 months)",
    brief: "",
    sections: [
      {
        title: "Summary of Contribution",
        type: "list",
        contents: [
          "Game mechanic design",
          "Level design",
          "Scene management",
          "Physics system",
        ],
      },
      {
        type: "gallery",
        title: "Galleries",
        items: [
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydmain.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydsetting.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydcs11.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydcs12.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydcs13.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydtutorial1.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydtutorial2.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydtutorial3.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydtutorial4.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydtutorial5.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydlevel.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydcs21.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydcs22.png",
          },
          {
            type: "image",
            src: "/images/projects/anjir-meyoudream/mydcs23.png",
          },
        ],
      },
    ],
    skills: ["Unity", "C#"],
  },
  [PROJECT.INDIE_AUCTIONWEB]: {
    id: PROJECT.INDIE_AUCTIONWEB,
    title: "Auction Web Application",
    type: "Personal",
    category: "Web Application",
    thumbnail: "",
    studio: "Personal Project",
    platform: "Web Browser",
    projectLength: "Feb 2025 (1 week)",
    brief: "",
    sections: [],
    skills: ["NextJS", "React", "Supabase"],
  },
  [PROJECT.INDIE_ROBLOXBRIDGE]: {
    id: PROJECT.INDIE_ROBLOXBRIDGE,
    title: "Build the Bridge",
    type: "Personal",
    category: "Roblox, 3D, Prototype",
    thumbnail: "",
    studio: "Personal Project",
    platform: "Browser, Roblox",
    projectLength: "Jan 2025 (2 weeks)",
    brief: "",
    sections: [],
    skills: ["Lua", "RobloxStudio"],
  },
};

// Extract projects dynamically when needed
export const professionalProjects = Object.values(projectDetails).filter(
  (p) => p.type === "Professional"
);
export const personalProjects = Object.values(projectDetails).filter(
  (p) => p.type === "Personal"
);

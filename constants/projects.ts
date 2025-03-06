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
        contents: [""],
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
    category: "Arcade, Multiplayer, Unity, 3D",
    thumbnail: "",
    studio: "Personal Project",
    platform: "PC",
    projectLength: "Jan 2025 (2 weeks)",
    brief: "",
    sections: [],
    skills: ["Unity", "C#", "SmartFoxServer", "Java"],
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
  [PROJECT.INDIE_DOTASTORE]: {
    id: PROJECT.INDIE_DOTASTORE,
    title: "Dota2 Local Skin Store",
    type: "Personal",
    category: "Web Application, Prototype",
    thumbnail: "",
    studio: "Personal Project",
    platform: "Web Browser",
    projectLength: "Ongoing",
    brief: "",
    sections: [],
    skills: ["NextJS", "React", "Supabase"],
  },
  [PROJECT.INDIE_ELECTRIC]: {
    id: PROJECT.INDIE_ELECTRIC,
    title: "Electric Lab",
    type: "Personal",
    category: "Simulation, Unity, 3D, Electrical Physics",
    thumbnail: "",
    studio: "Personal Project",
    platform: "PC",
    projectLength: "Aug 2020 - Jun 2021 (1 year)",
    brief: "",
    sections: [],
    skills: ["Unity", "C#", "React", "Express.js", "Typescript", "MongoDB"],
  },
  [PROJECT.ANJIR_MEYOUDREAM]: {
    id: PROJECT.ANJIR_MEYOUDREAM,
    title: "Me, You & Our Dream",
    type: "Personal",
    category: "Platformer, Unity, 2D",
    thumbnail: "/images/projects/anjir-meyoudream/myd.png",
    studio: "Another Joyful In Rain",
    platform: "PC",
    projectLength: "Oct 2018 - Nov 2018 (2 months)",
    brief: "",
    sections: [
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

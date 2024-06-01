import { Project } from "@/types/project";

import ttogMenu from "../../../public/images/projects/ttog/ttog_menu.png";
import ttogControls from "../../../public/images/projects/ttog/ttog_controls.png";
import ttogGameplay1 from "../../../public/images/projects/ttog/ttog_gameplay_1.png";
import ttogGameplay2 from "../../../public/images/projects/ttog/ttog_gameplay_2.png";
import ttogGameplay3 from "../../../public/images/projects/ttog/ttog_gameplay_3.png";
import ttogGameplay4 from "../../../public/images/projects/ttog/ttog_gameplay_4.png";
import ttogGameplay5 from "../../../public/images/projects/ttog/ttog_gameplay_5.png";
import ttogGameplay6 from "../../../public/images/projects/ttog/ttog_gameplay_6.png";
import ttogGameplay7 from "../../../public/images/projects/ttog/ttog_gameplay_7.png";
import ttogGameplay8 from "../../../public/images/projects/ttog/ttog_gameplay_8.png";

export default {
  title: "The Tower of Golem",
  excerpt:
    "The Tower of Golem is a game created for the game jam 'game_jaaj5', themed around 'Towers'.",
  coverImage: ttogMenu,
  description: [
    {
      type: "paragraph",
      content: `The Tower of Golem is a game developed for the game jam game_jaaj5, with the theme "Towers." Created over two weeks, the game is not entirely polished but is quite solid.`,
    },
    {
      type: "paragraph",
      content:
        "The game tells the story of an unfinished golem who wanders through an empty land without purpose. One day, he discovers a tower brimming with life. However, upon entering, he finds it is collapsing, and the tower's guardians are in conflict. He must defeat them all to escape.",
    },
    {
      type: "paragraph",
      content:
        "The game features top-down gameplay, an auto-save system, real-time cutscenes, and skills unlocked with each floor conquered. It also has partial gamepad compatibility.",
    },
    {
      type: "paragraph",
      content:
        "Developed in Unity using C#, the game was modeled and animated in Blender, with pixel art created in Photoshop. Unlike my other projects, I did everything for this game myself, including every model, pixel art and animation, except for the jump-back and death animations, which were sourced from Mixamo.",
    },
    {
      type: "paragraph",
      content: "",
    },
    {
      type: "paragraph",
      content: "You can found more details in the video bellow:",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/uG_hNF3rjnQ?si=DHGV-KHw3lTLFFlO&cc_load_policy=1&cc_lang_pref=en",
    },
    { type: "image", src: ttogMenu },
    { type: "image", src: ttogControls },
    { type: "image", src: ttogGameplay1 },
    { type: "image", src: ttogGameplay2 },
    { type: "image", src: ttogGameplay3 },
    { type: "image", src: ttogGameplay4 },
    { type: "image", src: ttogGameplay5 },
    { type: "image", src: ttogGameplay6 },
    { type: "image", src: ttogGameplay7 },
    { type: "image", src: ttogGameplay8 },
  ],
  sourceCodeUrl: "https://github.com/PedroDNBR/The-Tower-Of-Golen",
  downloadUrl: "https://gamejolt.com/games/TheTowerOfGolem/574134",
} as Project;

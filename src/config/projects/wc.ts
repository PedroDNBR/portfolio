import { Project } from "@/types/project";

import wcMenu from "../../../public/images/projects/wc/wc_menu.png";
import wcGraphics from "../../../public/images/projects/wc/wc_graphics.png";
import wcGameplay1 from "../../../public/images/projects/wc/wc_gameplay_1.png";
import wcGameplay2 from "../../../public/images/projects/wc/wc_gameplay_2.png";
import wcGameplay3 from "../../../public/images/projects/wc/wc_gameplay_3.png";
import wcGameplay4 from "../../../public/images/projects/wc/wc_gameplay_4.png";
import wcGameplay5 from "../../../public/images/projects/wc/wc_gameplay_5.png";
import wcGameplay6 from "../../../public/images/projects/wc/wc_gameplay_6.png";
import wcGameplay7 from "../../../public/images/projects/wc/wc_gameplay_7.png";
import wcGameplay8 from "../../../public/images/projects/wc/wc_gameplay_8.png";

export default {
  title: "Wain's Cat",
  slug: "wc",
  excerpt:
    "Wain's Cat is a first-person horror game developed as a final project for the CEDUP IT course in 2019.",
  coverImage: wcMenu,
  description: [
    {
      type: "paragraph",
      content:
        "Wain's Cat is a first-person horror game developed as a final project for the CEDUP IT course in 2019. Built in Unity using C#, the game tells the story of a protagonist struggling to care for his daughter after his wife's death, compounded by new abusive labor laws. Exhausted from work, he has an accident and wakes up in the hospital, only to realize his nightmare is just beginning.",
    },
    {
      type: "paragraph",
      content: `Most of the models are from the Unity asset store, with additional free models sourced from CGTrader and other 3D modeling sites. The animations are from Mixamo, the main character was created using MakeHuman and the story was written by <a href="https://www.linkedin.com/in/orlandomedeirosdasilva/" target="_blank">Orlando</a>.`,
    },
    {
      type: "paragraph",
      content: "You can find more details in the video bellow:",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/R__REV9ko9Q?si=DHGV-KHw3lTLFFlO&cc_load_policy=1&cc_lang_pref=en",
    },
    {
      type: "paragraph",
      content: "Screenshots:",
    },
    { type: "image", src: wcMenu },
    { type: "image", src: wcGraphics },
    { type: "image", src: wcGameplay1 },
    { type: "image", src: wcGameplay2 },
    { type: "image", src: wcGameplay3 },
    { type: "image", src: wcGameplay4 },
    { type: "image", src: wcGameplay5 },
    { type: "image", src: wcGameplay6 },
    { type: "image", src: wcGameplay7 },
    { type: "image", src: wcGameplay8 },
  ],
  downloadUrl: "https://linktr.ee/whac_a_mole",
} as Project;

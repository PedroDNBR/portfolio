import { Project } from "@/types/project";

import chMenu from "../../../public/images/projects/ch/ch_menu.png";
import chControls from "../../../public/images/projects/ch/ch_controls.png";
import chGameplay1 from "../../../public/images/projects/ch/ch_gameplay_1.png";
import chGameplay2 from "../../../public/images/projects/ch/ch_gameplay_2.png";
import chGameplay3 from "../../../public/images/projects/ch/ch_gameplay_3.png";
import chGameplay4 from "../../../public/images/projects/ch/ch_gameplay_4.png";
import chGameplay5 from "../../../public/images/projects/ch/ch_gameplay_5.png";
import chGameplay6 from "../../../public/images/projects/ch/ch_gameplay_6.png";
import chGameplay7 from "../../../public/images/projects/ch/ch_gameplay_7.png";
import chGameplay8 from "../../../public/images/projects/ch/ch_gameplay_8.png";

export default {
  title: "Cedup Hills",
  excerpt:
    "Cedup Hills is a first-person horror game developed for a school project at CEDUP.",
  coverImage: chMenu,
  description: [
    {
      type: "paragraph",
      content: `Cedup Hills is a first-person horror game developed for a school project at CEDUP. The game features our former teacher, <a href="https://www.linkedin.com/in/ranierisantos/" target="_blank">Ranieri</a>, as the main villain, and my friend <a href="https://www.instagram.com/joaolucas_bt/" target="_blank">Vardinho</a> as the protagonist. Players must navigate the eerie halls of Cedup School to swap their exam paper for a higher score while evading the relentless pursuit of the teacher.`,
    },
    {
      type: "paragraph",
      content:
        "The game was developed in Unity using C#. I modeled all the assets in Blender, and some animations were sourced from Mixamo. The dubbing features the real voices of the characters, as all of them were either teachers or classmates at the time.",
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
      src: "https://www.youtube.com/embed/x462b4sc1Xo?si=DHGV-KHw3lTLFFlO&cc_load_policy=1&cc_lang_pref=en",
    },
    {
      type: "paragraph",
      content: "Screenshots:",
    },
    { type: "image", src: chMenu },
    { type: "image", src: chControls },
    { type: "image", src: chGameplay1 },
    { type: "image", src: chGameplay2 },
    { type: "image", src: chGameplay3 },
    { type: "image", src: chGameplay4 },
    { type: "image", src: chGameplay5 },
    { type: "image", src: chGameplay6 },
    { type: "image", src: chGameplay7 },
    { type: "image", src: chGameplay8 },
  ],
  downloadUrl: "https://gamejolt.com/games/CedupHills/450804",
} as Project;

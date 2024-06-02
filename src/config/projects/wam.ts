import { Project } from "@/types/project";

import wamMenu from "../../../public/images/projects/wam/wam_menu.png";
import wamGraphics from "../../../public/images/projects/wam/wam_graphics.png";
import wamGameplay1 from "../../../public/images/projects/wam/wam_gameplay_1.png";
import wamGameplay2 from "../../../public/images/projects/wam/wam_gameplay_2.png";
import wamGameplay3 from "../../../public/images/projects/wam/wam_gameplay_3.png";
import wamGameplay4 from "../../../public/images/projects/wam/wam_gameplay_4.jpg";
import wamGameplay5 from "../../../public/images/projects/wam/wam_gameplay_5.png";
import wamGameplay6 from "../../../public/images/projects/wam/wam_gameplay_6.png";
import wamGameplay7 from "../../../public/images/projects/wam/wam_gameplay_7.png";
import wamGameplay8 from "../../../public/images/projects/wam/wam_gameplay_8.png";

export default {
  title: "Whac a Mole",
  abbreviation: "wam",
  excerpt:
    "Whack a Mole is an arcade-style game created as a test for a job application at SENAI.",
  coverImage: wamMenu,
  description: [
    {
      type: "paragraph",
      content:
        "Whack a Mole is an arcade-style game I created as a test for a job application at SENAI. Developed in just three days, the game is available on three platforms: desktop, mobile, and VR. It replicates the classic arcade whack-a-mole experience and includes a leaderboard to track high scores.",
    },
    {
      type: "paragraph",
      content:
        "I secured second place in the interview process, nearly landing the job. Despite feeling nervous and forgetting to showcase many features during the meeting, I am proud of this game and learned valuable lessons from the experience.",
    },
    {
      type: "paragraph",
      content: `The moles and the arena were provided by SENAI, while the scenario and other models were sourced from various free resources on the internet. Recently, I refined both the VR and mobile versions, significantly enhancing the user experience compared to the initial versions presented during the interview.`,
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
      src: "https://www.youtube.com/embed/ecMTYXdu4eI?si=DHGV-KHw3lTLFFlO&cc_load_policy=1&cc_lang_pref=en",
    },
    {
      type: "paragraph",
      content: "Screenshots:",
    },
    { type: "image", src: wamMenu },
    { type: "image", src: wamGraphics },
    { type: "image", src: wamGameplay1 },
    { type: "image", src: wamGameplay2 },
    { type: "image", src: wamGameplay3 },
    { type: "image", src: wamGameplay4 },
    { type: "image", src: wamGameplay5 },
    { type: "image", src: wamGameplay6 },
    { type: "image", src: wamGameplay7 },
    { type: "image", src: wamGameplay8 },
  ],
  downloadUrl: "https://linktr.ee/whac_a_mole",
} as Project;

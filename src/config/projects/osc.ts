import { Project } from "@/types/project";

import oscMenu from "../../../public/images/projects/osc/osc_menu.png";
import oscControls from "../../../public/images/projects/osc/osc_graphics.png";
import oscGameplay1 from "../../../public/images/projects/osc/osc_gameplay_1.png";
import oscGameplay2 from "../../../public/images/projects/osc/osc_gameplay_2.png";
import oscGameplay3 from "../../../public/images/projects/osc/osc_gameplay_3.png";
import oscGameplay4 from "../../../public/images/projects/osc/osc_gameplay_4.png";
import oscGameplay5 from "../../../public/images/projects/osc/osc_gameplay_5.png";
import oscGameplay6 from "../../../public/images/projects/osc/osc_gameplay_6.png";
import oscGameplay7 from "../../../public/images/projects/osc/osc_gameplay_7.png";
import oscGameplay8 from "../../../public/images/projects/osc/osc_gameplay_8.png";

export default {
  title: "OnlineShooterCpp",
  abbreviation: "osc",
  excerpt:
    "OnlineShooterCpp is a game developed through the Unreal Engine 5 C++ Multiplayer Shooter course.",
  coverImage: oscMenu,
  description: [
    {
      type: "paragraph",
      content:
        "OnlineShooterCpp is a game developed as part of the Unreal Engine 5 C++ Multiplayer Shooter course. It is a third-person shooter featuring three game modes: Free for All, Team Deathmatch, and Capture the Flag. The game was created entirely using free Unreal Engine assets from the unreal's marketplace, with the majority of the coding done in C++, complemented by some Blueprint scripting.",
    },
    {
      type: "paragraph",
      content:
        "The game includes various weapons utilizing both hitscan and projectile firing systems, as well as numerous buff pickups for players to use. It employs a custom multiplayer plugin, which can be integrated into any project, built on the Unreal Online Subsystem with Steam services for session connection and hosting.",
    },
    {
      type: "paragraph",
      content:
        "OnlineShooterCpp incorporates AAA techniques such as Client-Side Prediction and Server-Side Rewind for lag compensation, optimized for low bandwidth and maximum network performance. Additionally, it features an anti-cheat architecture structured with data validation.",
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
      src: "https://www.youtube.com/embed/vR1EUbcwaUs?si=DHGV-KHw3lTLFFlO&cc_load_policy=1&cc_lang_pref=en",
    },
    {
      type: "paragraph",
      content: "Screenshots:",
    },
    { type: "image", src: oscMenu },
    { type: "image", src: oscControls },
    { type: "image", src: oscGameplay1 },
    { type: "image", src: oscGameplay2 },
    { type: "image", src: oscGameplay3 },
    { type: "image", src: oscGameplay4 },
    { type: "image", src: oscGameplay5 },
    { type: "image", src: oscGameplay6 },
    { type: "image", src: oscGameplay7 },
    { type: "image", src: oscGameplay8 },
  ],
  sourceCodeUrl: "https://github.com/PedroDNBR/OnlineShooterCpp",
  downloadUrl:
    "https://drive.google.com/file/d/1N6cOU12BLsj4_wmu9szATQoVl45ySI6i/view",
} as Project;

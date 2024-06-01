import { Project } from "@/types/project";

import nfpMenu from "../../../public/images/projects/nfp/nfp_menu.png";
import nfpWeaponCustomization from "../../../public/images/projects/nfp/nfp_weapon_customization.png";
import nfpGameplay1 from "../../../public/images/projects/nfp/nfp_gameplay_1.png";
import nfpGameplay2 from "../../../public/images/projects/nfp/nfp_gameplay_2.png";
import nfpGameplay3 from "../../../public/images/projects/nfp/nfp_gameplay_3.png";
import nfpGameplay4 from "../../../public/images/projects/nfp/nfp_gameplay_4.png";
import nfpGameplay5 from "../../../public/images/projects/nfp/nfp_gameplay_5.png";
import nfpGameplay6 from "../../../public/images/projects/nfp/nfp_gameplay_6.png";
import nfpGameplay7 from "../../../public/images/projects/nfp/nfp_gameplay_7.png";
import nfpGameplay8 from "../../../public/images/projects/nfp/nfp_gameplay_8.png";

export default {
  title: "Multiplayer FPS Prototype",
  excerpt:
    "Multiplayer FPS Prototype is inspired by Escape from Tarkov and other hardcore shooters. As it currently lacks many features, it is still in the prototype stage.",
  coverImage: nfpMenu,
  description: [
    {
      type: "paragraph",
      content:
        "Multiplayer FPS Prototype is a multiplayer first-person shooter inspired by Escape from Tarkov and other hardcore shooters. Originally a side project for learning, I plan to eventually release it as a complete game. While I enjoy Escape from Tarkov, I find its grinding system too exhausting and felt that Tarkov Arena didn't meet my expectations. Thus, I decided to create my own hardcore shooter with features I love, offering an experience anyone can enjoy without the burden of grinding or completing tasks to use desired weapons.",
    },
    {
      type: "paragraph",
      content:
        "The prototype includes numerous features such as character leaning, weapon customization, procedural recoil, and adjustable-height crouching. Weapon animations utilize inverse kinematics (IK), allowing for versatile use and compatibility with other animations.",
    },
    {
      type: "paragraph",
      content: `Most animations were sourced from Mixamo, with some custom-made, and models were obtained from Mixamo and the AK model from <a href="https://sketchfab.com/3d-models/ak-74-pack-game-asset-29978f495f824173b44a3ba40cb8ebd8" target="_blank">Armored Wave</a>.`,
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
      src: "https://www.youtube.com/embed/5uZ5UQ5rPuc?si=DHGV-KHw3lTLFFlO&cc_load_policy=1&cc_lang_pref=en",
    },
    {
      type: "paragraph",
      content: "Screenshots:",
    },
    { type: "image", src: nfpMenu },
    { type: "image", src: nfpWeaponCustomization },
    { type: "image", src: nfpGameplay1 },
    { type: "image", src: nfpGameplay2 },
    { type: "image", src: nfpGameplay3 },
    { type: "image", src: nfpGameplay4 },
    { type: "image", src: nfpGameplay5 },
    { type: "image", src: nfpGameplay6 },
    { type: "image", src: nfpGameplay7 },
    { type: "image", src: nfpGameplay8 },
  ],
  sourceCodeUrl: "https://github.com/PedroDNBR/fps-multiplayer-prototype",
  downloadUrl:
    "https://drive.google.com/file/d/1TKG97AocYaLV81u6kvMp4nvyATpTm23m/view",
} as Project;

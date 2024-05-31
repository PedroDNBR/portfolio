import { Project } from "@/types/project";

import ttogMenu from "../../../public/images/projects/ttog/ttog_menu.png";
import ttogControls from "../../../public/images/projects/ttog/ttog_controls.png";
import ttogGameplay1 from "../../../public/images/projects/ttog/ttog_gameplay_1.png";

export default {
  title: "The Tower of Golem",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla dolor nec.",
  coverImage: ttogMenu,
  description: [
    {
      type: "video",
      src: "https://www.youtube.com/embed/uG_hNF3rjnQ?si=DHGV-KHw3lTLFFlO&cc_load_policy=1&cc_lang_pref=en",
    },
    {
      type: "paragraph",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec, hendrerit mi. Etiam mauris eros, scelerisque nec facilisis ut, vestibulum sit amet dui. Integer magna elit, eleifend bibendum tincidunt in, tristique eget quam. Maecenas iaculis tempor tortor a venenatis. Etiam gravida mi porttitor diam ultrices malesuada. Phasellus convallis, dolor eget venenatis cursus, turpis erat auctor metus, at tincidunt",
    },
    {
      type: "paragraph",
      content:
        "Maecenas iaculis tempor tortor a venenatis. Etiam gravida mi porttitor diam ultrices malesuada. Phasellus convallis, dolor eget venenatis cursus, turpis erat auctor metus, at tincidunt",
    },
    { type: "image", src: ttogMenu },
    { type: "image", src: ttogControls },
    { type: "image", src: ttogGameplay1 },
    {
      type: "paragraph",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec, hendrerit mi. Etiam mauris eros, scelerisque nec facilisis ut, vestibulum sit amet dui. Integer magna elit, eleifend bibendum tincidunt in, tristique eget quam. Maecenas iaculis tempor tortor a venenatis.",
    },
  ],
  sourceCodeUrl: "https://github.com/PedroDNBR/The-Tower-Of-Golen",
  downloadUrl: "https://gamejolt.com/games/TheTowerOfGolem/574134",
} as Project;

import Image from "next/image";
import { Fragment } from "react";

import { Project } from "@/types/project";
import theTowerOfGolem from "../../public/images/projects/ttog/ttog_menu.png";
import whacAMole from "../../public/images/projects/wam/wam_menu.png";

export default [
  {
    title: "The Tower of Golem",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla dolor nec.",
    coverImage: theTowerOfGolem,
    get description() {
      return (
        <Fragment>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
            lacus ultrices, fringilla dolor nec, hendrerit mi. Etiam mauris
            eros, scelerisque nec facilisis ut, vestibulum sit amet dui. Integer
            magna elit, eleifend bibendum tincidunt in, tristique eget quam.
            Maecenas iaculis tempor tortor a venenatis. Etiam gravida mi
            porttitor diam ultrices malesuada. Phasellus convallis, dolor eget
            venenatis cursus, turpis erat auctor metus, at tincidunt
          </p>
          <p className="paragraph">
            Maecenas iaculis tempor tortor a venenatis. Etiam gravida mi
            porttitor diam ultrices malesuada. Phasellus convallis, dolor eget
            venenatis cursus, turpis erat auctor metus, at tincidunt
          </p>
          <Image src={theTowerOfGolem} alt={this.title} />
          <Image src={theTowerOfGolem} alt={this.title} />
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
            lacus ultrices, fringilla dolor nec, hendrerit mi. Etiam mauris
            eros, scelerisque nec facilisis ut, vestibulum sit amet dui. Integer
            magna elit, eleifend bibendum tincidunt in, tristique eget quam.
            Maecenas iaculis tempor tortor a venenatis.
          </p>
        </Fragment>
      );
    },
    sourceCodeUrl: "https://github.com/PedroDNBR/The-Tower-Of-Golen",
    downloadUrl: "https://gamejolt.com/games/TheTowerOfGolem/574134",
  },
  {
    title: "Whac a Mole",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacus ultrices, fringilla dolor nec. Fusce quis lacus ultrices, fringilla dolor nec.",
    coverImage: whacAMole,
    get description() {
      return (
        <Fragment>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
            lacus ultrices, fringilla dolor nec, hendrerit mi. Etiam mauris
            eros, scelerisque nec facilisis ut, vestibulum sit amet dui. Integer
            magna elit, eleifend bibendum tincidunt in, tristique eget quam.
            Maecenas iaculis tempor tortor a venenatis. Etiam gravida mi
            porttitor diam ultrices malesuada. Phasellus convallis, dolor eget
            venenatis cursus, turpis erat auctor metus, at tincidunt
          </p>
          <p className="paragraph">
            Maecenas iaculis tempor tortor a venenatis. Etiam gravida mi
            porttitor diam ultrices malesuada. Phasellus convallis, dolor eget
            venenatis cursus, turpis erat auctor metus, at tincidunt
          </p>
          <Image src={whacAMole} alt={this.title} />
          <Image src={whacAMole} alt={this.title} />
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
            lacus ultrices, fringilla dolor nec, hendrerit mi. Etiam mauris
            eros, scelerisque nec facilisis ut, vestibulum sit amet dui. Integer
            magna elit, eleifend bibendum tincidunt in, tristique eget quam.
            Maecenas iaculis tempor tortor a venenatis.
          </p>
        </Fragment>
      );
    },
    downloadUrl: "https://gamejolt.com/games/TheTowerOfGolem/574134",
  },
] as Project[];

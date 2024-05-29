import { Fragment } from "react";

export default {
  content: (
    <Fragment>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
        lacus ultrices, fringilla dolor nec, hendrerit mi. Etiam mauris eros,
        <strong>scelerisque nec facilisis</strong> ut, vestibulum sit amet dui.
        Integer magna elit, eleifend bibendum tincidunt in, tristique eget quam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
        lacus ultrices, fringilla dolor nec, hendrerit mi.
      </p>
      <p className="paragraph">
        Maecenas iaculis tempor tortor a venenatis. Etiam{" "}
        <strong>gravida</strong> mi porttitor diam ultrices malesuada. Phasellus
        convallis, dolor eget venenatis cursus, turpis erat auctor metus, at
        tincidunt
      </p>
    </Fragment>
  ),
} as const;

import { Fragment } from "react";

export default {
  presentation: (
    <Fragment>
      {`Hi, I'm`} <strong>{`Pedro Gomes Antunes`}</strong>, {`AKA`}{" "}
      <strong>{`PedroDNBR`}</strong>
    </Fragment>
  ),
  title: (
    <Fragment>
      A <span className="text-red-500">passionate game developer</span> who
      loves to design and develop game-focused applications.
    </Fragment>
  ),
} as const;

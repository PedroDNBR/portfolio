import { FC, memo } from "react";

type SectionHeadingProps = {
  heading: string;
  subheading?: string;
};

const SectionHeading: FC<SectionHeadingProps> = ({ heading, subheading }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{heading}</h2>
      {!!subheading && <p className="text-zinc-500">{subheading}</p>}
    </div>
  );
};

export default memo(SectionHeading);

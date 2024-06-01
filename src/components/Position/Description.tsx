"use client";

import { FC, memo, useState } from "react";
import Responsability from "./Responsability";
import clsx from "clsx";

type DescriptionProps = {
  description: string;
  responsabilities: string[];
};

const Description: FC<DescriptionProps> = ({
  description,
  responsabilities,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className={clsx("relative", !isExpanded && "line-clamp-3")}>
        <p className="paragraph">{description}</p>
        {isExpanded && (
          <ul className="list-none leading-7 mt-4 flex flex-col gap-3">
            {responsabilities.map((responsability, index) => (
              <Responsability key={index}>{responsability}</Responsability>
            ))}
          </ul>
        )}
      </div>
      {!isExpanded && (
        <span className="link" onClick={() => setIsExpanded(true)}>
          Read more
        </span>
      )}
    </div>
  );
};

export default memo(Description);

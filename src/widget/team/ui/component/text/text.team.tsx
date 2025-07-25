import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import sTextTeam from "./text.team.module.scss";
import { useTeamText } from "@/entity/team";

interface TextTeamProps extends HTMLAttributes<HTMLDivElement> {}

export const TextTeam: FC<TextTeamProps> = (props) => {
  const { className, ...rest } = props;
  const { teamText } = useTeamText();
  return (
    <div className={clsx(sTextTeam.root, className)} {...rest}>
      <div className={sTextTeam.inner}>
        {teamText.map((item, idx) => (
          <p key={idx} className={sTextTeam.item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

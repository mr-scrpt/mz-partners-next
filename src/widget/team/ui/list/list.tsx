import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sTeamList from "./list.module.scss";
import { Item } from "./item";
import { useTeamItemList } from "@/entity/team";

interface TeamListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<TeamListProps> = (props) => {
  const { className } = props;
  const { teamItemList } = useTeamItemList();
  return (
    <div className={clsx(sTeamList.root, className)}>
      <div className={sTeamList.inner}>
        <div className={clsx(sTeamList.list)}>
          {teamItemList.map((item, idx) => (
            <Item
              key={idx}
              idx={idx}
              className={sTeamList.item}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

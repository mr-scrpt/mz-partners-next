import { FC, HTMLAttributes, ComponentType } from "react";
import clsx from "clsx";
import sTeamList from "./list.module.scss";
import { useTeamItemList } from "@/entity/team";
import { ItemProps } from "./type";

interface TeamListProps extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<ItemProps>;
}

export const List: FC<TeamListProps> = (props) => {
  const { className, ItemComponent } = props; // Используем ItemComponent или DefaultItem
  const { teamItemList } = useTeamItemList();

  return (
    <div className={clsx(sTeamList.root, className)}>
      <div className={sTeamList.inner}>
        <div className={clsx(sTeamList.list)}>
          {teamItemList.map((item, idx) => (
            <ItemComponent
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

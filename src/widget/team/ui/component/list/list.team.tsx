import {
  FC,
  HTMLAttributes,
  ComponentType,
  createRef,
  ComponentProps,
  useRef,
} from "react";
import clsx from "clsx";
import sTeamList from "./list.team.module.scss";
import { GetTeamDataList } from "@/entity/team";
import { ItemTeamProps } from "./item/type";

type ListTeamProps = ComponentProps<"div"> & {
  ItemComponent: ComponentType<ItemTeamProps>;
  getDataList: GetTeamDataList;
};

export const ListTeam: FC<ListTeamProps> = (props) => {
  const { className, ItemComponent, getDataList } = props;
  const { teamItemList } = getDataList();

  return (
    <div className={clsx(sTeamList.root, className)}>
      <div className={sTeamList.inner}>
        <div className={clsx(sTeamList.list)}>
          {teamItemList.map((item, idx) => {
            return (
              <ItemComponent
                key={idx}
                idx={idx}
                className={sTeamList.item}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

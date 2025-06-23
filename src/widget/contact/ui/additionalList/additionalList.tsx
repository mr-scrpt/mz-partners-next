import { Title } from "@/shared/ui/title";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { useAdditionsList } from "../../vm/useAdditionalList";
import { AdditionalItem } from "./additionalItem";
import sAdditionalList from "./additionalList.module.scss";

interface AdditionalListProps extends HTMLAttributes<HTMLDivElement> {}

export const AdditionalList: FC<AdditionalListProps> = (props) => {
  const { className } = props;
  const { title, listData } = useAdditionsList();
  return (
    <div className={clsx(sAdditionalList.root, className)}>
      <div className={sAdditionalList.inner}>
        <Title
          text={title}
          size="M"
          view="SECONDARY"
          className={sAdditionalList.title}
        />

        <div className={sAdditionalList.list}>
          {listData.map((item) => (
            <AdditionalItem key={item.value} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

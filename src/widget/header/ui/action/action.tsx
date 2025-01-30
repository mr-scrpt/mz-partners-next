import { FC, HTMLAttributes } from "react";

import sAction from "./action.module.scss";
import { LangSwitcher } from "@/shared/ui/langSwitcher";
import { Button } from "@/shared/ui/button";
interface ActionProps extends HTMLAttributes<HTMLDivElement> {}

export const Action: FC<ActionProps> = (props) => {
  return (
    <div className={sAction.action}>
      <div className={sAction.inner}>
        <LangSwitcher />
        <Button size="s">Зворотній зв'язок</Button>
        <Button size="m">Зворотній зв'язок</Button>
        <Button size="l">Зворотній зв'язок</Button>
        <Button size="xl">Зворотній зв'язок</Button>
        <hr />
        <Button variant="primary-inverted" size="s">
          Зворотній зв'язок
        </Button>
        <Button variant="primary-inverted" size="m">
          Зворотній зв'язок
        </Button>
        <Button variant="primary-inverted" size="l">
          Зворотній зв'язок
        </Button>
        <Button variant="primary-inverted" size="xl">
          Зворотній зв'язок
        </Button>
      </div>
    </div>
  );
};

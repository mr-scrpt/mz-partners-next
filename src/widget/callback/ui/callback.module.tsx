import { FC, HTMLAttributes } from "react";
import { CallbackLayout } from "./layout/callback.layout";
import { CallbackHeader } from "./header/callback.header";
import { List } from "./list/list";

interface CallbackModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackModule: FC<CallbackModuleProps> = (props) => {
  return (
    <CallbackLayout HeaderSlot={<CallbackHeader />} ContentSlot={<List />} />
  );
};

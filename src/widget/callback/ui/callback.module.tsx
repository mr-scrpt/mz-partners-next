import { FC, HTMLAttributes } from "react";
import { CallbackLayout } from "./layout/callback.layout";
import { CallbackHeader } from "./header/callback.header";
import { Attention } from "./attention/attention";
import { CallbackForm } from "./callbackForm/callbackForm";

interface CallbackModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackModule: FC<CallbackModuleProps> = (props) => {
  const { className } = props;
  return (
    <CallbackLayout
      className={className}
      HeaderSlot={<CallbackHeader />}
      ContentSlot={<CallbackForm />}
      AttentionSlot={<Attention />}
    />
  );
};

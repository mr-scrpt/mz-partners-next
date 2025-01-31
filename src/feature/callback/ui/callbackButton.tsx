"use client";
import { Button } from "@/shared/ui/button";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes } from "react";
import { useCallBackModal } from "../vm/useCallbackFormModal";

interface CallbackProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackButton: FC<CallbackProps> = (props) => {
  const t = useTranslations("CallBack");
  const { openCallBackModal } = useCallBackModal();
  return (
    <Button size="l" onClick={openCallBackModal}>
      {t("button_text")}
    </Button>
  );
};

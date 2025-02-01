"use client";
import { useModalControl } from "@/shared/lib/modal/modalClient.provider";
import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes, useCallback, useState } from "react";

interface CallbackProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackButton: FC<CallbackProps> = (props) => {
  const t = useTranslations("CallBack");
  const { createModal, closeModal } = useModalControl();

  const openContactSendModal = useCallback(async () => {
    await createModal({
      element: <div>MODAL TEST</div>,
    });
  }, [createModal, closeModal]);
  return (
    <Button size="l" onClick={openContactSendModal}>
      {t("button_text")}
    </Button>
  );
};

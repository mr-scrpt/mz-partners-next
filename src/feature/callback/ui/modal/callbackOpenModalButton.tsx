"use client";
import { useModalControl } from "@/shared/lib/modal/modalClient.provider";
import { Button } from "@/shared/ui/button";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes, useCallback } from "react";
import {
  CALLBACK_FEATURE_NAMESPACE,
  CALLBACK_FEATURE_DICT_FIELD,
} from "../../domain/callback.dict";

interface CallbackProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackOpenModalButton: FC<CallbackProps> = (props) => {
  const t = useTranslations(CALLBACK_FEATURE_NAMESPACE);
  const { createModal, destroyModal } = useModalControl();

  const openContactSendModal = useCallback(async () => {
    await createModal({
      element: <div>MODAL TEST</div>,
    });
  }, [createModal, destroyModal]);
  return (
    <Button size="l" onClick={openContactSendModal}>
      {t(CALLBACK_FEATURE_DICT_FIELD.button_modal_open_text)}
    </Button>
  );
};

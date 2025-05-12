"use client";
import { useModalControl } from "@/shared/lib/modal/modalClient.provider";
import { Button } from "@/shared/ui/button";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes, useCallback } from "react";
import {
  CALLBACK_FEATURE_NAMESPACE,
  CALLBACK_FEATURE_DICT_FIELD,
} from "../../domain/callback.dict";
import { CallbackFormModule } from "../form/callbackFrom.module";

interface CallbackProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackOpenModalButton: FC<CallbackProps> = (props) => {
  const t = useTranslations(CALLBACK_FEATURE_NAMESPACE);
  const { createModal, destroyModal } = useModalControl();

  const openCallbackSendModal = useCallback(async () => {
    await createModal({
      element: <CallbackFormModule />,
    });
  }, [createModal, destroyModal]);

  return (
    <Button size="l" onClick={openCallbackSendModal}>
      {t(CALLBACK_FEATURE_DICT_FIELD.button_modal_open_text)}
    </Button>
  );
};

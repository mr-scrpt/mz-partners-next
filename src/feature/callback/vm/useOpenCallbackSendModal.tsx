"use client";
import { useModalControl } from "@/shared/lib/modal/modalClient.provider";
import { useCallback } from "react";
import { CallbackFormModule } from "../ui/form/callbackFrom.module";

export const useOpenCallbackSendModal = () => {
  const { createModal, destroyModal } = useModalControl();

  const openCallbackSendModal = useCallback(async () => {
    await createModal({
      element: <CallbackFormModule />,
    });
  }, [createModal, destroyModal]);

  return {
    openCallbackSendModal,
  };
};

"use client";
import { useCallback } from "react";
import { CallbackForm } from "../ui/callbackForm";
import { useModalControl } from "@/shared/lib/modal/client";

export const useCallBackModal = () => {
  const { getModal, closeModal } = useModalControl();

  const openCallBackModal = useCallback(async () => {
    await getModal({
      element: <CallbackForm onSuccess={closeModal} />,
    });
  }, [getModal, closeModal]);

  return { openCallBackModal };
};

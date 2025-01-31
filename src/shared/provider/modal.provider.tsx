"use client";
import { Modal } from "@/shared/ui/modal";
import { FC, HTMLAttributes } from "react";
import { ModalProviderClient } from "@/shared/lib/modal/provider/modal.provider";
import { useModalModel } from "../lib/modal";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalProvider: FC<ModalProps> = (props) => {
  const { children } = props;

  const { modalParams, getModal, closeModal } = useModalModel();

  return (
    <ModalProviderClient
      value={{
        getModal,
        closeModal,
      }}
    >
      {children}

      {modalParams && <Modal params={modalParams} />}
    </ModalProviderClient>
  );
};

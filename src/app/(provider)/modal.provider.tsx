"use client";
import {
  ModalParamsUnionType,
  ModalParamsType,
  ModalProviderClient,
} from "@/shared/lib/modal/modalClient.provider";
import { Modal } from "@/shared/ui/modal";
import { FC, HTMLAttributes, useState } from "react";

interface ModalProviderProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalProvider: FC<ModalProviderProps> = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const [modalParams, setModalParams] = useState<ModalParamsUnionType>({
    onClose: () => {},
    onConfirm: () => {},
    element: "",
  });

  const createModal = (params: ModalParamsType) => {
    return new Promise<boolean>((resolve) => {
      setOpen(true);
      setModalParams({
        ...params,
        onConfirm: () => {
          setOpen(false);
          resolve(true);
        },
        onClose: () => {
          setOpen(false);
          resolve(false);
        },
      });
    });
  };

  const destroyModal = () => {
    setOpen(false);
  };

  return (
    <ModalProviderClient
      value={{
        destroyModal,
        createModal,
      }}
    >
      {children}
      <Modal params={modalParams} isOpen={open} />
    </ModalProviderClient>
  );
};

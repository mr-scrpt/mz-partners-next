"use client";
import { FC, HTMLAttributes, useState } from "react";
import { Modal } from "../ui/modal";
import {
  ModalParamsType,
  ModalParamsUnionType,
} from "../lib/modal/modalClient.provider";
import { ModalProviderClient } from "../lib/modal/modalClient.provider";

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

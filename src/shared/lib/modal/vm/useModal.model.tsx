"use client";
import { useState } from "react";
import { ModalParams, ModalProviderParams } from "../domain/modal.type";

export const useModalModel = () => {
  const [modalParams, setModalParams] = useState<ModalProviderParams>();

  const getModal = (params: ModalParams) => {
    return new Promise<boolean>((resolve) => {
      setModalParams({
        ...params,
        onConfirm: () => {
          setModalParams(undefined);
          resolve(true);
        },
        onClose: () => {
          setModalParams(undefined);
          resolve(false);
        },
      });
    });
  };

  const closeModal = () => {
    setModalParams(undefined);
  };

  return {
    modalParams,
    getModal,
    closeModal,
  };
};

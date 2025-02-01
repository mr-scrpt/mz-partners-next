import { ReactNode } from "react";
import { createStrictContext, useStrictContext } from "../react";

export type ModalParamsType = {
  element: ReactNode;
  title?: string;
  description?: string;
  confirmText?: string;
  closeText?: string;
};

export type ModalProviderActionParams = {
  onClose: () => void;
  onConfirm: () => void;
};

export type ModalParamsUnionType = ModalParamsType & ModalProviderActionParams;

export type ModalContextType = {
  destroyModal: () => void;
  createModal: (params: ModalParamsType) => Promise<boolean>;
};

export const modalContext = createStrictContext<ModalContextType>();

export const ModalProviderClient = modalContext.Provider;

export const useModalControl = () => {
  const { destroyModal: closeModal, createModal } =
    useStrictContext(modalContext);

  return { closeModal, createModal };
};

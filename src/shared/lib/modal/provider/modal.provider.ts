import { createStrictContext, useStrictContext } from "../../react";
import { ModalContext } from "../domain/modal.type";

export const modalContext = createStrictContext<ModalContext>();

export const ModalProviderClient = modalContext.Provider;

export const useModalGet = () => {
  const { getModal } = useStrictContext(modalContext);

  return getModal;
};

export const useModalClose = () => {
  const { closeModal } = useStrictContext(modalContext);

  return closeModal;
};

export const useModalControl = () => {
  const { getModal, closeModal } = useStrictContext(modalContext);

  return { getModal, closeModal };
};

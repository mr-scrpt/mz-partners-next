import { ReactNode } from "react";

export type ModalParams = {
  title?: string;
  description?: string;
  element: ReactNode;
};

export type ModalContext = {
  getModal: (params: ModalParams) => Promise<boolean>;
  closeModal: () => void;
};

export type ModalProviderParams = {
  element: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
};

"use client";
import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode, memo } from "react";
import sModal from "./modal.module.scss";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../dialog";
import { Button } from "../../button";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  params: {
    title?: string;
    description?: string;
    element: ReactNode;
    closeText?: string;
    confirmText?: string;
    onClose: () => void;
    onConfirm: () => void;
  };
}

export const Modal: FC<ModalProps> = memo((props) => {
  const { params } = props;
  const {
    title,
    description,
    closeText,
    confirmText,
    onClose,
    onConfirm,
    element,
  } = params;

  return (
    <Dialog open={!!params} onOpenChange={onClose}>
      <DialogContent className={clsx(sModal.modal)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <DialogContent>{element}</DialogContent>
        <DialogFooter>
          {closeText && <Button onClick={onClose}>{closeText}</Button>}
          {confirmText && <Button onClick={onConfirm}>{confirmText}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

Modal.displayName = "Modal";

import { ModalParamsUnionType } from "@/shared/lib/modal/modalClient.provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog/ui/dialog";
import { FC, HTMLAttributes, ReactNode } from "react";
import { Button } from "../../button";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  params: ModalParamsUnionType;
  isOpen: boolean;
}

export const Modal: FC<ModalProps> = ({ params, isOpen }) => {
  const {
    onClose,
    element,
    onConfirm,
    description,
    title,
    closeText,
    confirmText,
  } = params;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div>{element}</div>

        <DialogFooter>
          {closeText && <Button onClick={onClose}>{closeText}</Button>}
          {confirmText && <Button onClick={onConfirm}>{confirmText}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

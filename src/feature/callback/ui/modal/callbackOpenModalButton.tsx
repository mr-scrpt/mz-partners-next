"use client";
import { Button, BUTTON_VARIANT } from "@/shared/ui/button";
import { BUTTON_SIZE } from "@/shared/ui/button/domain/button.type";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes } from "react";
import {
  CALLBACK_FEATURE_DICT_FIELD,
  CALLBACK_FEATURE_NAMESPACE
} from "../../domain/callback.dict";
import { CallbackButtonProvider, useCallbackButtonData } from "../../vm/callbackButton.provider";
import { useOpenCallbackSendModal } from "../../vm/useOpenCallbackSendModal";

interface CallbackOpenModalButtonProps extends HTMLAttributes<HTMLDivElement> { }

type CallbackOpenModalButtonComponent = (
  props: CallbackOpenModalButtonProps,
) => React.ReactElement;

export type callbackButtonContextType = {
  openCallbackSendModal: () => void
}

type CallbackButtonElements = {
  ButtonPrimary: FC<HTMLAttributes<Omit<HTMLButtonElement, "onClick">>>
  ButtonGhosty: FC<HTMLAttributes<Omit<HTMLButtonElement, "onClick">>>
}

type CallbackOpenModalButtonType = CallbackOpenModalButtonComponent & CallbackButtonElements;

export const CallbackOpenModalButton: CallbackOpenModalButtonType = (props) => {
  const { children } = props;
  const { openCallbackSendModal } = useOpenCallbackSendModal();

  return (
    <CallbackButtonProvider value={{ openCallbackSendModal }}>
      <div>{children}</div>
    </CallbackButtonProvider>
  );
};

CallbackOpenModalButton.ButtonPrimary = function ButtonPrimary(props) {
  const { className, ...restProps } = props;
  const { openCallbackSendModal } = useCallbackButtonData();
  const t = useTranslations(CALLBACK_FEATURE_NAMESPACE);

  return (
    <Button
      size={BUTTON_SIZE.L}
      onClick={openCallbackSendModal}
      className={className}
      {...restProps}
    >
      {t(CALLBACK_FEATURE_DICT_FIELD.button_modal_open_text)}
    </Button>
  );
};

CallbackOpenModalButton.ButtonGhosty = function ButtonGhosty(props) {
  const { className, ...restProps } = props;
  const { openCallbackSendModal } = useCallbackButtonData();
  const t = useTranslations(CALLBACK_FEATURE_NAMESPACE);

  return (
    <Button
      size={BUTTON_SIZE.L}
      variant={BUTTON_VARIANT.GHOST}
      onClick={openCallbackSendModal}
      className={className}
      {...restProps}
    >
      {t(CALLBACK_FEATURE_DICT_FIELD.button_modal_open_text)}
    </Button>
  );
};

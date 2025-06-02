"use client";
import { CallbackFormElements } from "@/entity/callback";
import { useCallbackFromSendRequest } from "@/feature/callback";
import { CallbackFormValues } from "@/feature/callback/domain/callback.schema";
import { INPUT_VARIANT } from "@/shared/ui/shadcn/input/type";
import { FC, HTMLAttributes } from "react";
import sCallbackForm from "./callbackForm.module.scss";

interface CallbackFormProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackForm: FC<CallbackFormProps> = (props) => {
  const { isSuccessSend, isErrorSend, isPendingSend, handleCallback } =
    useCallbackFromSendRequest({});
  return (
    <CallbackFormElements<CallbackFormValues>
      handleSubmit={handleCallback}
      classNameInner={sCallbackForm.inner}
    >
      <CallbackFormElements.FieldFirstName
        variant={INPUT_VARIANT.PRIMARY_INVERTED}
      />
      <CallbackFormElements.FieldPhoneNumber
        variant={INPUT_VARIANT.PRIMARY_INVERTED}
      />
      <CallbackFormElements.SubmitButton
        isPending={false}
        variant={INPUT_VARIANT.PRIMARY_INVERTED}
      />
    </CallbackFormElements>
  );
};

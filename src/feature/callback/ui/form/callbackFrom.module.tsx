"use client";
import { CallbackFormElements } from "@/entity/callback";
import { FC, HTMLAttributes } from "react";
import { CallbackFormValues } from "../../domain/callback.schema";

import sCallbackForm from "./callbackForm.module.scss";
interface CallbackFormProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackFormModule: FC<CallbackFormProps> = (props) => {
  return (
    <CallbackFormElements<CallbackFormValues>>
      <div className={sCallbackForm.inner}>
        <CallbackFormElements.FieldFirstName />
        <CallbackFormElements.FieldPhoneNumber />
        <CallbackFormElements.SubmitButton
          isPending={false}
          className={sCallbackForm.button}
        />
      </div>
    </CallbackFormElements>
  );
};

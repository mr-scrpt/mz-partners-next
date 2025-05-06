"use client";
import { CallbackFormElements } from "@/entity/callback";
import { FC, HTMLAttributes } from "react";
import { CallbackFormValues } from "../../domain/callback.schema";

interface CallbackFormProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackFormModule: FC<CallbackFormProps> = (props) => {
  return (
    <CallbackFormElements<CallbackFormValues>>
      <CallbackFormElements.FieldFirstName />
      <CallbackFormElements.FieldPhoneNumber />
      <CallbackFormElements.SubmitButton isPending={false} />
    </CallbackFormElements>
  );
};

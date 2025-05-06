"use client";
import {
  FormField,
  FormItem,
  FormItemCol,
  FormMessage,
} from "@/shared/ui/shadcn/form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { FC, HTMLAttributes, useEffect } from "react";
import {
  DefaultValues,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { ZodTypeAny } from "zod";
import {
  CALLBACK_FORM_FIELDS,
  callbackDefaultFieldsValues,
  callbackFormDefaultSchema,
  CallbackFormDefaultValues,
} from "../../domain/form.schema";
import sCallbackFormElement from "./style/contactFormElement.module.scss";
import {
  ButtonFormSubmitComponentType,
  ButtonFromSubmitType,
} from "@/shared/lib/form";
import { FirstNameField } from "./elements/firstNameField";
import { PhoneField } from "./elements/phoneField";
import { Button } from "@/shared/ui/button";
import { SubmitButtonForm } from "./elements/submitFormButton";

interface CallbackFormElementsProps<T extends CallbackFormDefaultValues>
  extends HTMLAttributes<HTMLFormElement> {
  handleSubmit?: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  schema?: ZodTypeAny;
}

type CallbackFormElementsComponent = <
  T extends CallbackFormDefaultValues = CallbackFormDefaultValues,
>(
  props: CallbackFormElementsProps<T>,
) => React.ReactElement;

type CallbackFormFields = {
  FieldFirstName: FC<HTMLAttributes<HTMLDivElement>>;
  FieldPhoneNumber: FC;
  SubmitButton: ButtonFormSubmitComponentType;
};

type CallbackFormElementsType = CallbackFormElementsComponent &
  CallbackFormFields;

const getDefaultFormValues = <T extends CallbackFormDefaultValues>(
  defaultValues?: DefaultValues<T> | undefined,
): DefaultValues<T> => {
  return {
    ...callbackDefaultFieldsValues,
    ...defaultValues,
  } as DefaultValues<T>;
};

export const CallbackFormElements: CallbackFormElementsType = <
  T extends CallbackFormDefaultValues,
>(
  props: CallbackFormElementsProps<T>,
) => {
  const { defaultValues, handleSubmit: onSubmit, schema, children } = props;

  const form = useForm<T>({
    resolver: zodResolver(schema ?? callbackFormDefaultSchema),
    defaultValues: { ...getDefaultFormValues<T>(defaultValues) },
  });

  useEffect(() => {
    form.reset(getDefaultFormValues<T>(defaultValues));
  }, [defaultValues, form]);

  const handleSubmit = form.handleSubmit(async (data: T) => {
    onSubmit?.(data);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className={sCallbackFormElement.form}>
        <div className={sCallbackFormElement.inner}>
          {children}
          <FormMessage />
        </div>
      </form>
    </FormProvider>
  );
};

CallbackFormElements.FieldFirstName = function FieldFirstName(props) {
  const { className } = props;
  const { control } = useFormContext<CallbackFormDefaultValues>();

  return (
    <FormField
      control={control}
      name={CALLBACK_FORM_FIELDS.firstName}
      render={({ field }) => (
        <FormItemCol className={className}>
          <FirstNameField value={field.value} onChange={field.onChange} />
          <FormMessage />
        </FormItemCol>
      )}
    />
  );
};

CallbackFormElements.FieldPhoneNumber = function FieldPhoneNumber() {
  const { control } = useFormContext<CallbackFormDefaultValues>();

  return (
    <FormField
      control={control}
      name={CALLBACK_FORM_FIELDS.phoneNumber}
      render={({ field }) => (
        <FormItem>
          <PhoneField value={field.value} onChange={field.onChange} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

CallbackFormElements.SubmitButton = function SubmitButton({
  isPending,
  className,
}) {
  return (
    <SubmitButtonForm
      isPending={isPending}
      className={clsx(sCallbackFormElement.submitButton, className)}
    />
  );
};

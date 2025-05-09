"use client";
import { ButtonFormSubmitComponentType } from "@/shared/lib/form";
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
import sCallbackFormElement from "./callbackFromElements.module.scss";
import { FirstNameField } from "./field/firstName.field";
import { PhoneField } from "./field/phone.field";
import { SubmitButtonForm } from "./field/submitForm.field";
import { InputVariant } from "@/shared/ui/shadcn/input/type";
import { ButtonVariant } from "@/shared/ui/button";

interface CallbackFormElementsProps<T extends CallbackFormDefaultValues>
  extends HTMLAttributes<HTMLFormElement> {
  handleSubmit?: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  schema?: ZodTypeAny;
  classNameInner?: string;
}

type CallbackFormElementsComponent = <
  T extends CallbackFormDefaultValues = CallbackFormDefaultValues,
>(
  props: CallbackFormElementsProps<T>,
) => React.ReactElement;

type CallbackFormFields = {
  FieldFirstName: FC<
    HTMLAttributes<HTMLDivElement> & { variant?: InputVariant }
  >;
  FieldPhoneNumber: FC<
    HTMLAttributes<HTMLDivElement> & { variant?: InputVariant }
  >;
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
  const {
    defaultValues,
    handleSubmit: onSubmit,
    schema,
    children,
    classNameInner,
  } = props;

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
        <div className={clsx(sCallbackFormElement.inner, classNameInner)}>
          {children}
          <FormMessage />
        </div>
      </form>
    </FormProvider>
  );
};

CallbackFormElements.FieldFirstName = function FieldFirstName(props) {
  const { className, variant } = props;
  const { control } = useFormContext<CallbackFormDefaultValues>();

  return (
    <FormField
      control={control}
      name={CALLBACK_FORM_FIELDS.firstName}
      render={({ field }) => (
        <FormItemCol className={className}>
          <FirstNameField
            value={field.value}
            onChange={field.onChange}
            variant={variant}
          />
          <FormMessage />
        </FormItemCol>
      )}
    />
  );
};

CallbackFormElements.FieldPhoneNumber = function FieldPhoneNumber(props) {
  const { variant, className } = props;
  const { control } = useFormContext<CallbackFormDefaultValues>();

  return (
    <FormField
      control={control}
      name={CALLBACK_FORM_FIELDS.phoneNumber}
      render={({ field }) => (
        <FormItem>
          <PhoneField
            className={className}
            value={field.value}
            onChange={field.onChange}
            variant={variant}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

CallbackFormElements.SubmitButton = function SubmitButton({
  isPending,
  className,
  variant,
}) {
  return (
    <SubmitButtonForm
      isPending={isPending}
      className={clsx(sCallbackFormElement.submitButton, className)}
      variant={variant}
    />
  );
};

"use client";
import {
  CALLBACK_ENTITY_NAMESPACE,
  CALLBACK_ENTITY_DICT_FIELD,
} from "@/entity/callback/domain/callback.dict";
import { FormControl } from "@/shared/ui/shadcn/form/form";
import Input from "@/shared/ui/shadcn/input/input";
import { InputVariant, INPUT_VARIANT } from "@/shared/ui/shadcn/input/type";
import { useTranslations } from "next-intl";

import { FC, HTMLAttributes } from "react";

interface PhoneFieldProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  variant?: InputVariant;
}

export const PhoneField: FC<PhoneFieldProps> = (props) => {
  const { value, onChange, className, variant } = props;

  const t = useTranslations(CALLBACK_ENTITY_NAMESPACE);
  return (
    <FormControl>
      <Input
        className={className}
        variant={variant ?? INPUT_VARIANT.PRIMARY}
        placeholder={t(CALLBACK_ENTITY_DICT_FIELD.field_phone_placeholder)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
};

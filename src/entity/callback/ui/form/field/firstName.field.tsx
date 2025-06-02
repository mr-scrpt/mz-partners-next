"use client";
import {
  CALLBACK_ENTITY_DICT_FIELD,
  CALLBACK_ENTITY_NAMESPACE,
} from "@/entity/callback/domain/callback.dict";
import { FormControl } from "@/shared/ui/shadcn/form/form";
import Input from "@/shared/ui/shadcn/input/input";
import { INPUT_VARIANT, InputVariant } from "@/shared/ui/shadcn/input/type";
import { useTranslations } from "next-intl";

import { FC, HTMLAttributes } from "react";

interface FirstNameFieldProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  variant?: InputVariant;
}

export const FirstNameField: FC<FirstNameFieldProps> = (props) => {
  const { value, onChange, className, variant } = props;
  const t = useTranslations(CALLBACK_ENTITY_NAMESPACE);

  return (
    <FormControl>
      <Input
        variant={variant ?? INPUT_VARIANT.PRIMARY}
        className={className}
        placeholder={t(CALLBACK_ENTITY_DICT_FIELD.field_first_name_palceholder)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
};

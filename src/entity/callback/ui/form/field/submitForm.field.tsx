"use client";
import {
  CALLBACK_ENTITY_DICT_FIELD,
  CALLBACK_ENTITY_NAMESPACE,
} from "@/entity/callback/domain/callback.dict";
import { Button } from "@/shared/ui/button";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { FC, HTMLAttributes } from "react";

interface SubmitButtonForm
  extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  isPending: boolean;

  className?: string;
}

export const SubmitButtonForm: FC<SubmitButtonForm> = (props) => {
  const { className, isPending } = props;

  const t = useTranslations(CALLBACK_ENTITY_NAMESPACE);
  return (
    <Button
      type="submit"
      variant="primary"
      disabled={isPending}
      size="xl"
      className={clsx(className)}
    >
      {isPending && <span>{t(CALLBACK_ENTITY_DICT_FIELD.status_sending)}</span>}
      {t(CALLBACK_ENTITY_DICT_FIELD.button_submit_text)}
    </Button>
  );
};

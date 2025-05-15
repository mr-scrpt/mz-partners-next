import { NextIntlClientProvider } from "next-intl";

import { getMessages } from "next-intl/server";
import { FC, HTMLAttributes } from "react";

interface LangProviderProps extends HTMLAttributes<HTMLDivElement> {}

export const LangProvider: FC<LangProviderProps> = async (props) => {
  const { children } = props;
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

"use client";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { usePathname, useRouter } from "@/shared/lib/i18n/routing";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { ChangeEvent, FC, HTMLAttributes, useTransition } from "react";

interface LangSwitcherSelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  label: string;
}

export const LangSwitcherSelect: FC<LangSwitcherSelectProps> = (props) => {
  const { children, defaultValue, label, ...rest } = props;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <label
      className={clsx(
        "relative text-gray-400",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
};

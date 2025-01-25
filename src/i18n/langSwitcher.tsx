"use client";

import { useLocale } from "next-intl";
import { ChangeEvent } from "react";
import { setUserLocale } from "./local";
import { Locale } from "./domain/type";

export default function LocalSwitcher() {
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as Locale;
    console.log("output_log:  =>>>", nextLocale);
    setUserLocale(nextLocale);
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="ua">Ukrainian</option>
      </select>
    </label>
  );
}

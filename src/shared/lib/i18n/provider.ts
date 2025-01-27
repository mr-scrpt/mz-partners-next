"use client";
import { createStrictContext, useStrictContext } from "../react";
import { Locale } from "./domain/type";
export const langContext = createStrictContext<Locale>();
export const useLang = () => useStrictContext(langContext);

"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import styles from "./index.module.scss";

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={styles.Label} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

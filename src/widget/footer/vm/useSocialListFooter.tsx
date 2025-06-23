"use client";
import {
  useContactEmailListLink,
  useContactSocialListLink,
} from "@/entity/contact";
import { useIcon } from "@/shared/ui/icon/vm/useIcon";
import { useMemo } from "react";

export const useSocialListFooter = () => {
  const { socialList } = useContactSocialListLink();
  const { emailList } = useContactEmailListLink();
  const { getIcon } = useIcon();

  return useMemo(
    () => ({
      socialListFooter: [
        ...socialList.map((p) => ({
          ...p,
          icon: getIcon(p.shortName),
        })),
        ...emailList.map((p) => ({ ...p, icon: getIcon("EMAIL") })),
      ],
    }),
    [socialList, emailList, getIcon],
  );
};

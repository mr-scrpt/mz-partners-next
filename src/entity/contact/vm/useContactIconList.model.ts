"use client";

import { useIcon } from "@/shared/ui/icon";
import { useMemo } from "react";
import { useContactEmailListLink } from "./useContactEmailListLink.model";
import { useContactSocialListLink } from "./useContactSocialListLink.model";

export const useContactIconList = () => {
  const { socialList } = useContactSocialListLink();
  const { emailList } = useContactEmailListLink();
  const { getIcon } = useIcon();

  return useMemo(
    () => ({
      contactSocilaIconList: [
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

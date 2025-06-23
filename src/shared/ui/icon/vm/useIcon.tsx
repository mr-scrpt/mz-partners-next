import { ICON_LIST, SOCIAL_ICON_MAP } from "../domain/icon.type";

export const useIcon = () => {
  return {
    getIcon: (key: string) =>
      SOCIAL_ICON_MAP[key.toUpperCase()] || ICON_LIST.UNKNOWN,
  };
};

export const LINK_TYPE = {
  EMAIL: "EMAIL",
  URL: "URL",
  PHONE: "PHONE",
} as const;

export type LinkType = (typeof LINK_TYPE)[keyof typeof LINK_TYPE];

export interface LinkConfig {
  key: LinkType;
  formatHref: (value: string) => string;
  formatDisplay: (value: string) => string;
  external: boolean;
}

// Конфигурации с использованием констант
export const LINK_CONFIGS: Record<LinkType, LinkConfig> = {
  [LINK_TYPE.EMAIL]: {
    key: LINK_TYPE.EMAIL,
    formatHref: (value: string) => `mailto:${value}`,
    formatDisplay: (value: string) => value,
    external: false,
  },
  [LINK_TYPE.URL]: {
    key: LINK_TYPE.URL,
    formatHref: (value: string) => value,
    formatDisplay: (value: string) => value,
    external: true,
  },
  [LINK_TYPE.PHONE]: {
    key: LINK_TYPE.PHONE,
    formatHref: (value: string) => `tel:${value.replaceAll(" ", "")}`,
    formatDisplay: (value: string) => value,
    external: false,
  },
};

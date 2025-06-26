import { createElement } from "react";
import {
  BreadcrumbItemText,
  BreadcrumbItemLink,
  BreadcrumbItemButton,
} from "../ui/breadcrubsItems";

interface BreadcrumbItemData {
  title: string;
  route: string;
  isActive: boolean;
}

interface BreadcrumbRenderConfig {
  component: React.ComponentType<any>;
  propsBuilder: (
    item: BreadcrumbItemData,
    baseClassName?: string,
  ) => Record<string, any>;
}

const itemElement = ["link", "text", "button"] as const;
type ItemElementType = (typeof itemElement)[number];

export const useBreadcrumsItemList = () => {
  const renderConfigs: Record<ItemElementType, BreadcrumbRenderConfig> = {
    link: {
      component: BreadcrumbItemText,
      propsBuilder: (item, className) => ({
        className,
        text: item.title,
        children: item.title,
      }),
    },
    text: {
      component: BreadcrumbItemLink,
      propsBuilder: (item, className) => ({
        className,
        href: item.route,
        children: item.title,
      }),
    },
    button: {
      component: BreadcrumbItemButton,
      propsBuilder: (item, className) => ({
        className,
        onClick: () => console.log("Navigate to:", item.route),
        children: item.title,
      }),
    },
  };

  // Коллекция правил выбора конфигурации
  const selectionConfigs: Record<string, ItemElementType> = {
    true: "link",
    false: "text",
    button: "button",
  };

  const selectionRules = {
    getConfigKey: (item: BreadcrumbItemData): ItemElementType =>
      selectionConfigs[item.isActive.toString()],
  };

  const renderBreadcrumbItem = (
    item: BreadcrumbItemData,
    baseClassName?: string,
  ) => {
    const configKey = selectionRules.getConfigKey(item);
    const config = renderConfigs[configKey];
    const props = config.propsBuilder(item, baseClassName);

    return createElement(config.component, props);
  };

  return {
    renderBreadcrumbItem,
    renderConfigs, // Экспортируем для возможности расширения
  };
};

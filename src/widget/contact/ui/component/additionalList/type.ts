import { HTMLAttributes, ComponentType } from "react";

export interface AdditionalListItem {
  value: string;
  title: string;
  link: string;
  linkTitle: string;
}

export interface AdditionsListData {
  title: string;
  listData: AdditionalListItem[];
}

export type GetAdditionalDataList = () => AdditionsListData;

export interface AdditionalItemContactProps
  extends HTMLAttributes<HTMLDivElement> {
  item: AdditionalListItem;
}

export interface AdditionalListContactProps
  extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<AdditionalItemContactProps>;
  getDataList: GetAdditionalDataList;
}

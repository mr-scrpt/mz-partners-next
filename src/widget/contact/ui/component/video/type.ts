import { HTMLAttributes, ComponentType } from "react";

export type GetVideoData = () => { videoId: string };

export interface VideoPropsContact extends HTMLAttributes<HTMLDivElement> {
  videoId: string;
  isShorts?: boolean;
  title?: string;
}

export interface VideoContactProps extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<VideoPropsContact>;
  getData: GetVideoData;
}

import { FC } from "react";
import { VideoContactProps } from "./type";

export const VideoContact: FC<VideoContactProps> = (props) => {
  const { className, ItemComponent, getData } = props;

  const { videoId } = getData();

  return <ItemComponent videoId={videoId} className={className} isShorts />;
};

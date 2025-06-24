import { useAddressVideo } from "@/entity/contact/";
import { YouTubeEmbed } from "@/shared/ui/video/youtubeEmbed";
import { FC, HTMLAttributes } from "react";

interface VideoProps extends HTMLAttributes<HTMLDivElement> {}

export const Video: FC<VideoProps> = (props) => {
  const { className } = props;
  const { videoId } = useAddressVideo();
  return <YouTubeEmbed videoId={videoId} className={className} isShorts />;
};

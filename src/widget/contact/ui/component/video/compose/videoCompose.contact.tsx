import { FC, HTMLAttributes } from "react";
import { VideoContact } from "../video";
import { YouTubeEmbed } from "@/shared/ui/video/youtubeEmbed";
import { useAddressVideo } from "@/entity/contact";

interface VideoComposeContactProps extends HTMLAttributes<HTMLDivElement> {}

export const VideoComposeContact: FC<VideoComposeContactProps> = (props) => {
  return (
    <VideoContact getData={useAddressVideo} ItemComponent={YouTubeEmbed} />
  );
};

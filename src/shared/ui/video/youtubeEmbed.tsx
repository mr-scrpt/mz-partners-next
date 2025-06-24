import { FC, HTMLAttributes } from "react";
import styles from "./youtubeEmbed.module.scss";
import clsx from "clsx";

interface YouTubeEmbedProps extends HTMLAttributes<HTMLDivElement> {
  videoId: string;
  isShorts?: boolean;
  title?: string;
}

export const YouTubeEmbed: FC<YouTubeEmbedProps> = ({
  videoId,
  isShorts = false,
  title = "YouTube video",
  className,
  ...props
}) => {
  const embedUrl = isShorts
    ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
    : `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div
      // className={`${styles.root} ${isShorts ? styles.shorts : styles.regular}`}
      className={clsx(styles.root, className, {
        [styles.shorts]: isShorts,
        [styles.regular]: !isShorts,
      })}
      {...props}
    >
      <div className={styles.inner}>
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.iframe}
        />
      </div>
    </div>
  );
};

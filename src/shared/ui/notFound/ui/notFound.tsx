import { FC, HTMLAttributes } from "react";

interface NotFoundProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
}

export const NotFound: FC<NotFoundProps> = ({
  title,
  text,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-4 ${className}`}
      {...props}
    >
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <p className="text-xl text-gray-600">{text}</p>
      <div className="mt-4">
        <a
          href="/"
          className="rounded-md bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

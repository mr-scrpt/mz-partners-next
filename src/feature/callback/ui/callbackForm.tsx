import { FC, HTMLAttributes } from "react";

interface CallbackFormProps extends HTMLAttributes<HTMLDivElement> {
  onSuccess?: () => void;
}

export const CallbackForm: FC<CallbackFormProps> = (props) => {
  return <div>CallbackForm</div>;
};

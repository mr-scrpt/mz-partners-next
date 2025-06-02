"use client";
import { useState } from "react";

import { createFormDataFromSchema } from "@/shared/lib/form";
import { CallbackFormValues } from "../domain/callback.schema";

interface ContactFormCreateProps {
  onSuccess?: () => void;
  callbackUrl?: string;
}

export const useCallbackFromSendRequest = (props: ContactFormCreateProps) => {
  const { onSuccess } = props;

  const [isPendingSend, setIsPendingSend] = useState(false);
  const [isSuccessSend, setIsSuccessSend] = useState(false);
  const [isErrorSend, setIsErrorSend] = useState(false);

  const handleCallback = async (data: CallbackFormValues) => {
    setIsPendingSend(true);
    try {
      const formData = createFormDataFromSchema(data, {
        // transforms: [
        //   {
        //     field: "positionList",
        //     transform: (value) => value[0]?.label || null,
        //   },
        // ],
        // additionalFields:
        //   process.env.NODE_ENV === "development" ? { MODE: "dev" } : {},
      });

      // const endpoint = getApiUrl(API_ENDPOINTS.callback.send);
      // const response = await fetch(endpoint, {
      //   method: "POST",
      //   body: formData,
      // });
      //
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      console.log("output_log: form send data =>>>", formData, data);

      setIsSuccessSend(true);
      onSuccess?.();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setIsErrorSend(true);
    } finally {
      setIsPendingSend(false);
    }
  };

  return {
    handleCallback,
    isPendingSend,
    isSuccessSend,
    isErrorSend,
  };
};

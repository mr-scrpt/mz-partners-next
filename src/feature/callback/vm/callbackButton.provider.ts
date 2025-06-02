import { createStrictContext, useStrictContext } from "@/shared/lib/react"
import { callbackButtonContextType } from "../ui/modal/callbackOpenModalButton"

export const callbackButtonContext = createStrictContext<callbackButtonContextType>()

export const CallbackButtonProvider = callbackButtonContext.Provider

export const useCallbackButtonData = () => {
  return useStrictContext(callbackButtonContext)
}


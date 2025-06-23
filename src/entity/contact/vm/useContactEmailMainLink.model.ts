import { useContactEmailListLink } from "./useContactEmailListLink.model";

export const useContactEmailMainLink = () => {
  const { emailList } = useContactEmailListLink();
  const [emailMain] = emailList;
  return { emailMain };
};

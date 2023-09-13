import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return '';
    }

    return params.conversationId as string;
  }, [params?.conversationId]);

  const isopen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(() => ({
    isopen,
    conversationId
  }), [isopen, conversationId]);
};

export default useConversation;
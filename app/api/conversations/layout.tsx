import getConversations from "@/app/actions/getConversations";
import getUsers from "@/app/actions/getUsers";
import Sidebar from "@/app/components/sidebar/sidebar";
import ConversationList from "@/app/conversations/components/ConversationList";

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    //// @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList 
          users={users} 
          title="Messages" 
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}
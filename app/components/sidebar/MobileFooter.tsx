'use client';

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { ModeToggle } from "../mode-toggle";
import Avatar from "../Avatar";
import { User } from "@prisma/client";
import SettingsModal from "./SettingsModal";
import { useState } from "react";


interface DesktopSidebarProps {
  currentUser: User
}

const MobileFooter: React.FC<DesktopSidebarProps> = ({
  currentUser
}) => {
  const routes = useRoutes();
  const { isopen } = useConversation();
  const [isOpen, setIsOpen] = useState(false);

  console.log({ currentUser, }, 'TEST')

  if (isopen) {
    return null;
  }

  return (
    <div
      className="
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
       
        border-t-[1px] 
        lg:hidden
      "
    >
      <div className="   
        justify-between 
        w-full 
        bottom-0  
         h-12
         items-center
        flex 
       bg-secondary
       pl-2      
         ">
        <div className="pr-2" onClick={() => setIsOpen(true)}>
          <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <Avatar user={currentUser} />
        </div>

        <ModeToggle />
      </div>

      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}

    </div>
  );
}

export default MobileFooter;
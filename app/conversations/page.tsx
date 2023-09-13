'use client';

import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";

const Home = () => {
  const { isopen } = useConversation();

  return (
    <div className={clsx(
      'lg:pl-80 h-full lg:block', 
      isopen ? 'block' : 'hidden'
    )}>
      <EmptyState />
    </div>
  )
}

export default Home;
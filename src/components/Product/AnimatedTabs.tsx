"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

type Tab = {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
};

type AnimatedTabsProps = {
  tabs: Tab[];
};

function AnimatedTabs({ tabs }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = (idx: number) => {
    setActiveTab(idx);
    window.clearInterval(intervalId);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      const newTab = activeTab < tabs.length - 1 ? activeTab + 1 : 0;
      setActiveTab(newTab);
    }, 5000);

    setIntervalId(id);
    return () => window.clearInterval(id);
  }, [activeTab]);

  return (
    <div className="flex gap-20 justify-between items-center max-w-[1200px]">
      <div className="flex flex-col gap-8">
        {tabs.map((tab, idx) => (
          <button
            className={cn(
              "flex flex-col items-start opacity-50 hover:opacity-75 transition-opacity",
              activeTab === idx && "opacity-100"
            )}
            key={idx}
            onClick={() => handleClick(idx)}
          >
            <span className="flex gap-4 items-center text-lg">
              {tab.icon} {tab.title}
            </span>
            <span className="mt-4">{tab.description}</span>
          </button>
        ))}
      </div>
      <div className="relative">
        <span className="absolute -top-1 left-0 h-1 animate-progress-bar bg-gradient-to-r from-primary to-secondary"></span>
        <Image
          src={tabs[activeTab].image}
          alt="Feature image"
          width={600}
          height={400}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default AnimatedTabs;

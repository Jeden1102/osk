"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
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
  const [isAnimationStopped, setIsAnimationStopped] = useState(false);

  const handleClick = (idx: number) => {
    setIsAnimationStopped(true);
    setActiveTab(idx);
  };

  useEffect(() => {
    if (isAnimationStopped) {
      return () => window.clearInterval(intervalId);
    }
    const id = window.setInterval(() => {
      const newTab = activeTab < tabs.length - 1 ? activeTab + 1 : 0;
      setActiveTab(newTab);
    }, 5000);

    setIntervalId(id);
    return () => window.clearInterval(id);
  }, [activeTab, isAnimationStopped]);

  return (
    <Card className="p-0">
      <CardContent className="flex gap-20 justify-between items-center max-w-[1200px] p-8">
        <div className="hidden md:flex flex-col gap-8">
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
        <div className="hidden md:block relative">
          {!isAnimationStopped && (
            <span className="absolute hidden md:block -top-1 left-0 h-1 animate-progress-bar bg-gradient-to-r from-primary to-secondary"></span>
          )}
          <Image
            src={tabs[activeTab].image}
            alt="Feature image"
            className="rounded-b-md shadow-lg"
            width={600}
            height={400}
            loading="lazy"
          />
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {tabs.map((tab) => (
            <>
              <span className="relative rounded-lg flex items-center justify-center w-10 h-10 border u-border-gray-300">
                {tab.icon}
              </span>
              <p>{tab.title}</p>
              <p className="font-light">{tab.description}</p>
              <Image
                src={tab.image}
                alt="Feature image"
                className="rounded-b-md shadow-lg"
                width={600}
                height={400}
                loading="lazy"
              />
            </>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default AnimatedTabs;

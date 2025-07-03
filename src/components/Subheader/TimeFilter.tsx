"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = ["day", "week", "year"];

export function TimeTabs() {
  return (
    <Tabs defaultValue="day" className="w-fit">
      <TabsList className="bg-b-background border border-border] p-0 rounded-[10px] w-fit">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="px-4 py-1.5 text-sm rounded-[8px] transition-colors
              text-muted-foreground
              data-[state=active]:bg-tab-active
              data-[state=active]:text-white"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

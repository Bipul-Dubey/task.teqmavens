"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CustomTabs({ tabs }: { tabs: string[] }) {
  return (
    <Tabs defaultValue={tabs?.at(0) ?? ""} className="w-fit">
      <TabsList className="bg-b-background border border-border] p-0 rounded-[10px] w-fit">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="px-4 py-1.5 text-sm rounded-[8px] transition-colors
    text-muted-foreground
    data-[state=active]:bg-blue-600
    dark:data-[state=active]:bg-blue-400
    data-[state=active]:text-white"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

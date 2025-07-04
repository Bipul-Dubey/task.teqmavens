"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import AccountDashboard from "./AccountDashboard";

const tabs = [
  "Dashboard",
  "Orders",
  "Address",
  "Notes",
  "Tasks",
  "Contacts",
  "Credit History",
];

export default function AccountDetailTabs() {
  const [activeTab, setActiveTab] = React.useState("Dashboard");

  return (
    <div className="w-full">
      {/* Tab list */}
      <div className="relative z-10 flex gap-1 ">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 text-sm font-medium rounded-t-md border border-border bg-background transition-colors",
                isActive
                  ? "text-[#7B61FF] border-b-transparent bg-b-background"
                  : "text-muted-foreground"
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Container */}
      <div className="relative -mt-px border border-border rounded-md rounded-t-none p-4 bg-b-background">
        <div className="text-sm text-muted-foreground">
          {(() => {
            switch (activeTab) {
              case tabs[0]:
                return <AccountDashboard />;

              default:
                return <div>{activeTab}</div>;
                break;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

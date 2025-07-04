import CategorySelection from "@/components/common/CategorySelection";
import { CustomTabs } from "@/components/common/CustomTabs";
import MonthYearDropdown from "@/components/common/MonthYearPicker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import MonthlyRevenueChart from "./MonthlyBarRevenue";

const AnalyticsGraph = () => {
  return (
    <Card className="w-full bg-background gap-0 rounded-xl border border-border p-0 overflow-hidden">
      <div className="p-0 px-6 flex-wrap flex flex-row items-center justify-between border-b h-12 min-h-fit ">
        <CardHeader className="w-full flex justify-between flex-wrap gap-3 p-0 py-2">
          <CustomTabs tabs={["Revenue", "Orders", "Customers"]} />
          <div className="flex gap-x-2">
            <CategorySelection />
            <MonthYearDropdown />
          </div>
        </CardHeader>
      </div>
      <CardContent className="p-4 h-[500px] scrollbar-hide overflow-auto space-y-4">
        <div className="flex w-full justify-between items-center flex-wrap">
          <CardTitle className="text-2xl font-medium">Revenue</CardTitle>
          <div className="flex gap-x-2 items-center">
            <p className="">Total Revenue:</p>{" "}
            <p className="text-xl font-medium">$89,235.89</p>
          </div>
        </div>
        <MonthlyRevenueChart />
      </CardContent>
    </Card>
  );
};

export default AnalyticsGraph;

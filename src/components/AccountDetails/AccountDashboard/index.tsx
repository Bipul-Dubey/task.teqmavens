import React from "react";
import TopSectionCards from "./TopSectionCards";
import OrderStatus from "./OrderStatus";
import RecentActivities from "./RecentActivities";

const AccountDashboard = () => {
  return (
    <div className="w-full">
      <TopSectionCards />
      <div className="flex gap-4 flex-wrap">
        <OrderStatus />
        <RecentActivities />
      </div>
    </div>
  );
};

export default AccountDashboard;

import React from "react";
import TopSectionCards from "./TopSectionCards";
import OrderStatus from "./OrderStatus";
import RecentActivities from "./RecentActivities";
import RecentOrders from "./RecentOrders";

const AccountDashboard = () => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <TopSectionCards />
      <div className="flex gap-4 flex-wrap">
        <OrderStatus />
        <RecentActivities />
      </div>
      {/* tables */}
      <div>
        <RecentOrders />
      </div>
    </div>
  );
};

export default AccountDashboard;

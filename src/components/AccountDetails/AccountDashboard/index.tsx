import React from "react";
import TopSectionCards from "./TopSectionCards";
import OrderStatus from "./OrderStatus";
import RecentActivities from "./RecentActivities";
import RecentOrders from "./RecentOrders";
import RecentTransactions from "./RecentTransactions";
import TopSellingProducts from "./TopSellingProducts";
import Persons from "./Persons";
import AnalyticsGraph from "./AnalyticsGraph";

const AccountDashboard = () => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <TopSectionCards />
      <div className="space-x-4 space-y-4 flex-wrap lg:flex">
        <OrderStatus />
        <RecentActivities />
      </div>
      {/* tables */}
      <div className="flex flex-col gap-y-4">
        <RecentOrders />
        <RecentTransactions />
        <TopSellingProducts />
        <AnalyticsGraph />
        <Persons />
      </div>
    </div>
  );
};

export default AccountDashboard;

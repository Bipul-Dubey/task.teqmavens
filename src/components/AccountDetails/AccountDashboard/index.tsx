import React from "react";
import TopSectionCards from "./TopSectionCards";
import OrderStatus from "./OrderStatus";

const AccountDashboard = () => {
  return (
    <div className="w-full">
      <TopSectionCards />
      <div className="flex gap-4 flex-wrap">
        <OrderStatus />
        <OrderStatus />
      </div>
    </div>
  );
};

export default AccountDashboard;

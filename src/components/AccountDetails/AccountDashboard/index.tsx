import React from "react";
import TopSectionCards from "./TopSectionCards";
import OrderStatus from "./OrderStatus";

const AccountDashboard = () => {
  return (
    <div className="w-full">
      <TopSectionCards />
      <div>
        <OrderStatus />
      </div>
    </div>
  );
};

export default AccountDashboard;

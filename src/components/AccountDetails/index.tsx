import React from "react";
import { AccountCard } from "./AccountCard";
import { Contact } from "./Contact";
import BusinessDetails from "./BusinessDetails";
import AccountDetailTabs from "./DetailTabs";

const AccountDetails = () => {
  return (
    <div className="p-4 max-w-dvw w-full flex flex-col md:flex-row gap-4">
      {/* Left Side - Sidebar Section */}
      <div className="flex flex-col gap-y-4 w-full md:w-fit">
        <AccountCard />
        <Contact />
        <BusinessDetails />
      </div>

      {/* Right Side - Main Content */}
      <div className="flex-1 min-w-0">
        <AccountDetailTabs />
      </div>
    </div>
  );
};

export default AccountDetails;

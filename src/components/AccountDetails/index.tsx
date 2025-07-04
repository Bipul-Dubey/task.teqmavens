import React from "react";
import { AccountCard } from "./AccountCard";
import { Contact } from "./Contact";
import BusinessDetails from "./BusinessDetails";
import AccountDetailTabs from "./DetailTabs";

const AccountDetails = () => {
  return (
    <div className="p-4 max-w-dvw w-full flex flex-col [@media(min-width:920px)]:flex-row gap-4">
      {/* Left Side - Sidebar Section */}
      <div className="flex flex-col gap-y-4 w-full [@media(min-width:920px)]:w-fit">
        <div className="w-full flex flex-col gap-4 [@media(min-width:760px)]:flex-row [@media(min-width:920px)]:flex-col">
          <AccountCard />
          <Contact />
        </div>
        {/* BusinessDetails always in row */}
        <div className="flex flex-row gap-4">
          <BusinessDetails />
        </div>
      </div>
      {/* Right Side - Main Content */}
      <div className="flex-1 min-w-0">
        <AccountDetailTabs />
      </div>
    </div>
  );
};

export default AccountDetails;

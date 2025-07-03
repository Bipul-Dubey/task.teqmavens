import React from "react";
import { AccountCard } from "./AccountCard";
import { Contact } from "./Contact";
import BusinessDetails from "./BusinessDetails";

const AccountDetails = () => {
  return (
    <div className="p-4 w-full flex flex-col md:flex-row lg:h-[calc(100vh-64px)] lg:flex-row gap-4">
      {/* Left Side - Sidebar Section */}
      <div className="flex flex-col gap-y-4 w-fit">
        <AccountCard />
        <Contact />
        <BusinessDetails />
      </div>

      {/* Right Side - Main Content */}
      <div className="flex-1 w-full bg-red-500">
        {/* Replace with your actual content */}h
      </div>
    </div>
  );
};

export default AccountDetails;

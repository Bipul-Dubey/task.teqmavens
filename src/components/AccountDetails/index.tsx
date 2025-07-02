import React from "react";
import { AccountCard } from "./AccountCard";
import { Contact } from "./Contact";
import BusinessDetails from "./BusinessDetails";

const AccountDetails = () => {
  return (
    <div className="p-4 flex flex-col gap-y-4">
      <AccountCard />
      <Contact />
      <BusinessDetails />
    </div>
  );
};

export default AccountDetails;

import React from "react";
import { CrmBreadcrumb } from "./CrmBreadcrums";
import { TimeTabs } from "./TimeFilter";

const SubHeader = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-b-background">
      <div className="flex h-14 items-center justify-between px-4">
        <CrmBreadcrumb />
        <TimeTabs />
      </div>
    </div>
  );
};

export default SubHeader;

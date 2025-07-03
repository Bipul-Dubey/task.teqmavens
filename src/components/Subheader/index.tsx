import React from "react";
import { CrmBreadcrumb } from "./CrmBreadcrums";
import { TimeTabs } from "./TimeFilter";

const SubHeader = () => {
  return (
    <div className="w-full border-b bg-b-background">
      <div className="flex h-14 min-h-fit items-center justify-between px-4 py-2 flex-wrap gap-2">
        <CrmBreadcrumb />
        <TimeTabs />
      </div>
    </div>
  );
};

export default SubHeader;

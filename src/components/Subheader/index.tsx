import React from "react";
import { CrmBreadcrumb } from "./CrmBreadcrums";
import { CustomTabs } from "../common/CustomTabs";

const SubHeader = () => {
  return (
    <div className="w-full border-b bg-b-light-background">
      <div className="flex h-14 min-h-fit items-center justify-between px-4 py-2 flex-wrap gap-2">
        <CrmBreadcrumb />
        <CustomTabs tabs={["day", "week", "year"]} />
      </div>
    </div>
  );
};

export default SubHeader;

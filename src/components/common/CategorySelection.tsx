import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CategorySelection = () => {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="w-[140px] h-8 text-xs">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        <SelectItem value="fashion">Fashion</SelectItem>
        <SelectItem value="electronics">Electronics</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CategorySelection;

"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const years = ["2023", "2024", "2025"];

export default function MonthYearDropdown() {
  const [selected, setSelected] = React.useState("Jun 2023");

  return (
    <Select value={selected} onValueChange={setSelected}>
      <SelectTrigger className="h-9 rounded-md border border-muted bg-b-background text-sm w-[140px] justify-between px-3">
        <span>{selected}</span>
        <CalendarIcon className="w-4 h-4 ml-2" />
      </SelectTrigger>
      <SelectContent>
        {years.map((year) => (
          <React.Fragment key={year}>
            {months.map((month) => (
              <SelectItem key={`${month} ${year}`} value={`${month} ${year}`}>
                {month} {year}
              </SelectItem>
            ))}
          </React.Fragment>
        ))}
      </SelectContent>
    </Select>
  );
}

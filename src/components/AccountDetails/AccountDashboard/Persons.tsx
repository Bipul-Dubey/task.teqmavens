"use client";

import MonthYearDropdown from "@/components/common/MonthYearPicker";
import { DataTable } from "@/components/Table";
import { ArrowRight } from "lucide-react";

const Persons = () => {
  return (
    <DataTable
      title="Persons"
      maxHeight="h-[300px]"
      showFooter
      rightSlot={<MonthYearDropdown />}
      footer={
        <div className="w-full py-1 flex gap-x-2 items-center justify-center">
          <p className="text-highlight-blue">View 56 more persons</p>
          <div className="bg-highlight-blue rounded-full text-accent-foreground">
            <ArrowRight size={16} />
          </div>
        </div>
      }
      columns={[
        { label: "NAME", key: "name" },
        { label: "EMAIL", key: "email" },
        { label: "CONTACT NUMBER", key: "contact" },
        { label: "ROLE", key: "role" },
      ]}
      rows={[
        {
          name: "Luisa Winters",
          email: "Joneshighman@gmail.com",
          contact: "+1(671) 555-0110",
          role: "Manager",
        },
        {
          name: "Syed Dean",
          email: "Fisherman12@gmail.com",
          contact: "+1(671) 555-0110",
          role: "Worker",
        },
        {
          name: "Hector Sheppard",
          email: "Janecooper@gmail.com",
          contact: "+1(671) 555-0110",
          role: "Manager",
        },
        {
          name: "Freya Perry",
          email: "Savannahbae@yahoo.com",
          contact: "+1(671) 555-0110",
          role: "Worker",
        },
        {
          name: "Ted Garza",
          email: "Janecooper@gmail.com",
          contact: "+1(671) 555-0110",
          role: "Manager",
        },
        {
          name: "Preston Woods",
          email: "Fisherman12@gmail.com",
          contact: "+1(671) 555-0110",
          role: "Worker",
        },
        {
          name: "Nikita Houston",
          email: "Ester123@gmail.com",
          contact: "+1(671) 555-0110",
          role: "Worker",
        },
      ]}
    />
  );
};

export default Persons;

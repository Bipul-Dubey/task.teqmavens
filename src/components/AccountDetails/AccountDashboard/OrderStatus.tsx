import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarDays,
  PackageCheck,
  RotateCcw,
  Send,
  Timer,
  Truck,
  Users,
} from "lucide-react";
import React from "react";
import { OrderStatusPieChart } from "./OrderStatusChart";
import CategorySelection from "@/components/common/CategorySelection";

type OrderProps = {
  icon: React.ReactNode;
  label: string;
  value: number;
};

const Order = ({ icon, label, value }: OrderProps) => {
  return (
    <div className="flex items-center justify-center h-full gap-4 p-4">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
};

const statusItems: OrderProps[] = [
  {
    icon: <Users className="h-5 w-5 text-[#7b61ff]" />,
    label: "All",
    value: 50,
  },
  {
    icon: <Send className="h-5 w-5 text-[#7b61ff]" />,
    label: "New",
    value: 50,
  },
  {
    icon: <Timer className="h-5 w-5 text-[#7b61ff]" />,
    label: "Pending",
    value: 50,
  },
  {
    icon: <Truck className="h-5 w-5 text-[#7b61ff]" />,
    label: "Dispatched",
    value: 50,
  },
  {
    icon: <PackageCheck className="h-5 w-5 text-[#7b61ff]" />,
    label: "Delivered",
    value: 123,
  },
  {
    icon: <RotateCcw className="h-5 w-5 text-[#7b61ff]" />,
    label: "Cancelled",
    value: 50,
  },
];
const years = Array.from({ length: 10 }, (_, i) => `${2025 - i}`);

const OrderStatus = () => {
  return (
    <Card className="w-full gap-0 xl:w-[49.2%] min-w-90 p-0 bg-b-light-background">
      <CardHeader className="p-4 py-2 flex justify-between items-center border-b-2">
        <CardTitle className="text-xl">Order Status</CardTitle>
        <div className="flex gap-x-2">
          <CategorySelection />
          <Select defaultValue="2023">
            <SelectTrigger className="w-[100px] h-9 px-3 text-sm border  bg-background/40 hover:bg-background/60 transition">
              <div className="flex items-center justify-between w-full">
                <SelectValue />
                <CalendarDays className="h-4 w-4 text-foreground ml-2" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex p-0 h-full flex-wrap">
        <div className="grid grid-cols-2 grid-rows-3 w-full md:w-1/2">
          {statusItems.map((item, index) => {
            const isRightCol = index % 2 === 1;
            const isBottomRow = index >= 4;
            const borderClasses = [
              !isRightCol && "border-r-2",
              !isBottomRow && "border-b-2",
              "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div key={index} className={borderClasses}>
                <Order {...item} />
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <OrderStatusPieChart />
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderStatus;

"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
// import { useTheme } from "next-themes";

const data = [
  { month: "Jan", value: 589.12 },
  { month: "Feb", value: 840.2 },
  { month: "Mar", value: 898.0 },
  { month: "Apr", value: 203.0 },
  { month: "May", value: 400.01 },
  { month: "Jun", value: 920.12 },
  { month: "Jul", value: 398.0 },
  { month: "Aug", value: 882.0 },
  { month: "Sep", value: 390.0 },
  { month: "Oct", value: 910.0 },
  { month: "Nov", value: 410.12 },
  { month: "Dec", value: 840.2 },
];

export default function MonthlyRevenueChart() {
  // const { theme } = useTheme();
  const theme = "dark";

  const barColor = theme === "dark" ? "#a78bfa" : "#6366f1"; // purple-400 / indigo-500

  return (
    <div className="w-full">
      <CardContent className="p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis dataKey="month" stroke="currentColor" />
            <YAxis
              tickFormatter={(val) => `$${val.toLocaleString()}`}
              stroke="currentColor"
            />
            <Tooltip
              formatter={(value: number) => `$${value.toFixed(2)}`}
              contentStyle={{
                backgroundColor: theme === "dark" ? "#1f2937" : "#fff",
                borderColor: "#e5e7eb",
              }}
            />
            <Bar
              dataKey="value"
              fill={barColor}
              radius={[4, 4, 0, 0]}
              label={{
                position: "top",
                // formatter: (value: number) => `$${value.toFixed(2)}`,
                fill: "currentColor",
                fontSize: 12,
              }}
            />
          </BarChart>
        </ResponsiveContainer>

        <div className="flex justify-center mt-2 text-sm text-muted-foreground">
          • 2023
        </div>
      </CardContent>
    </div>
  );
}

"use client";

import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import { useTheme } from "next-themes";
import { PieLabelRenderProps } from "recharts";

const data = [
  { name: "New", value: 50, color: "#f87171" }, // Red
  { name: "Pending", value: 50, color: "#fbbf24" }, // Yellow
  { name: "Dispatched", value: 50, color: "#34d399" }, // Green
  { name: "Delivered", value: 50, color: "#818cf8" }, // Purple
  { name: "Cancelled", value: 50, color: "#fb923c" }, // Orange
];

const RADIAN = Math.PI / 180;

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius = 0,
  outerRadius = 0,
  percent,
}: PieLabelRenderProps) => {
  const radius =
    Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-sm font-semibold"
    >
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

export function OrderStatusPieChart() {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const { theme } = useTheme();
  return (
    <Card className="bg-transparent border-0 shadow-none p-0 w-fit">
      <CardContent className="flex items-center justify-center p-1">
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={100}
              innerRadius={70}
              dataKey="value"
              isAnimationActive={false}
              stroke="none"
            >
              {/* Colored slices */}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}

              {/* Center label */}
              <Label
                value={total}
                position="center"
                style={{
                  fill: theme === "dark" ? "white" : "black",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

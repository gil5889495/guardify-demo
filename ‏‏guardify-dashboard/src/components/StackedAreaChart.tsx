import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const COLORS = {
  direct_refund: "#3B82F6",
  credit: "#F97316",
  exchange: "#8B5CF6",
  refund: "#EF4444",
  gift_card: "#10B981",
};

const LABELS = {
  direct_refund: "Direct Refunds",
  credit: "Credits",
  exchange: "Exchanges",
  refund: "Refunds",
  gift_card: "Gift Cards",
};

const areaData = [
  { date: "Nov 10", direct_refund: 20, credit: 45, exchange: 14, refund: 25, gift_card: 29 },
  { date: "Nov 17", direct_refund: 30, credit: 55, exchange: 13, refund: 29, gift_card: 35 },
  { date: "Nov 24", direct_refund: 40, credit: 65, exchange: 10, refund: 25, gift_card: 38 },
];

export default function StackedAreaChart() {
  return (
    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl overflow-hidden relative">
      <CardHeader className="pb-2">
        <CardTitle>Return Trends Over Time</CardTitle>
        <p className="text-sm text-gray-500 mt-1">Stacked area chart</p>
      </CardHeader>

      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={areaData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              {Object.entries(COLORS).map(([key, color]) => (
                <linearGradient key={key} id={`color${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.1} />
                </linearGradient>
              ))}
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
            <XAxis
              dataKey="date"
              stroke="#9ca3af"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={false}
            />
            <YAxis stroke="#9ca3af" tick={{ fill: "#6b7280", fontSize: 12 }} tickLine={false} />

            <RechartsTooltip />
            <RechartsLegend
  verticalAlign="bottom"
  align="center"
  height={36}
  iconType="circle"
  wrapperStyle={{
    marginLeft: "4%", // 🔹 מזיז ימינה את כל ה-Legend ביחס לגרף
  }}
  formatter={(value) => (
    <span className="text-sm font-medium text-gray-700">{LABELS[value]}</span>
  )}
/>


            {Object.keys(COLORS).map((key) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId="1"
                stroke={COLORS[key]}
                fill={`url(#color${key})`}
                name={key}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}


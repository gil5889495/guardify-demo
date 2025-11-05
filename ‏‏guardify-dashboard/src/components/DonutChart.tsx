import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
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

// דוגמת דאטה
const donutData = {
  direct_refund: 25,
  credit: 42,
  exchange: 58,
  refund: 18,
  gift_card: 12,
};

const chartData = Object.entries(donutData).map(([type, count]) => ({
  name: LABELS[type],
  value: count,
  type,
  percentage: ((count / Object.values(donutData).reduce((a, b) => a + b, 0)) * 100).toFixed(1),
}));

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-4 shadow-2xl">
        <p className="font-semibold text-gray-900 mb-1">{payload[0].name}</p>
        <p className="text-sm text-gray-600">
          {payload[0].value} returns ({payload[0].payload.percentage}%)
        </p>
      </div>
    );
  }
  return null;
};

export default function DonutChartWithLegend() {
  return (
    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10" />

      <CardHeader className="pb-2">
        <CardTitle>Return Types Distribution</CardTitle>
        <p className="text-sm text-gray-500 mt-1">Overview of all return methods</p>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="flex items-center gap-6">
          {/* Donut Chart */}
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.type]}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <RechartsTooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend בצד ימין */}
          <div className="flex flex-col justify-center gap-4">
            {chartData.map((entry, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[entry.type] }} />
                <span className="text-sm font-medium text-gray-700">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

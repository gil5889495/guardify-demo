// src/App.tsx
import React from "react";
import DonutChart from "./components/DonutChart";
import StackedAreaChart from "./components/StackedAreaChart";

export default function App() {
  const data = {
    direct_refund: 40,
    credit: 25,
    exchange: 15,
    refund: 10,
    gift_card: 5,
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <DonutChart data={data} />
        <StackedAreaChart />
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

const Chart = () => {
  const data = [
    { name: "behind", x: 36, fill: "red" },
    { name: "In-Progress", x: 42, fill: "yellow" },
    { name: "Completed", x: 76, fill: "green" },
    { name: "white", x: 90, fill: "#f3f4f6" },
  ];

  return (
    <div className="w-[400px] h-[400px] bg-grey-300 flex flex-col flex 1">
    <div className="mt-[50]">
    <RadialBarChart width={400} height={300} data={data}>
      <RadialBar minAngle={15} dataKey="x" />
    </RadialBarChart>
    </div>
    <div className="flex justify-around">
    <div>
    <h1 className="font-bold flex justify-center">76%</h1>
    <p className="text-green-600">Completed</p>
    </div>
    <div>
    <h1 className="font-bold flex justify-center">36%</h1>
    <p className="text-yellow-600">In-Progress</p>
    </div>
    <div>
    <h1 className="font-bold flex justify-center">22%</h1>
    <p className="text-red-600">Behind</p>
    </div>
    </div>
    </div>
  );
};

export default Chart;

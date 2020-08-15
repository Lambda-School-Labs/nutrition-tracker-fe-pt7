import * as React from "react";
import { Chart } from "react-google-charts";

export const BudgetRing = ({ totals, user, size, pH, c1, c2 }) => {
  const total = Math.round(totals);
  const data = [
    ["Budget", "Amount"],
    ["Daily Total", total],
    ["Remaining Budget", user - total],
  ];
  const options = {
    pieHole: pH,
    is3D: false,
    legend: {
      position: "none",
    },
    chartArea: {
      width: size,
      height: size,
    },
    backgroundColor: "none",
    fontSize: 1,
    colors: [c1, "white"],
    pieSliceText: "none",
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width={200}
        height={200}
        data={data}
        options={options}
      />
    </div>
  );
};

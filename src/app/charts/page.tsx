import React from "react";
import RechartLineGraph from "./rechartLine";
import { simplePieData } from "./simplePieData";
import PieChartExample from "./simplePie";

const Scene = () => {
  return (
    <div>
      <RechartLineGraph />
      <div className="min-h-screen">
        <PieChartExample />
      </div>
    </div>
  );
};

export default Scene;

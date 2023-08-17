import React from "react";
import RechartLineGraph from "./rechartLine";
import SimplePie from "./pie";
import SimpleDoughnut from "./doughnut";
import SimplePolarArea from "./polarAreaChart";
import SimpleLineChart from "./lineChart";

const Scene = () => {
  return (
    <div>
      <div className="mx-auto mb-8 flex aspect-square w-full max-w-[500px] flex-col gap-4">
        <h1 className="m-4 text-center">
          Made using Chart.js and React chart.js 2
        </h1>
        <SimplePie />
        <SimpleDoughnut />
        <SimplePolarArea />
        <SimpleLineChart />
      </div>
    </div>
  );
};

export default Scene;

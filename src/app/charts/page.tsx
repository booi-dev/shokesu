import React from "react";
import RechartLineGraph from "./rechartLine";
import SimplePie from "./pie";
import SimpleDoughnut from "./doughnut";
import SimplePolarArea from "./polarAreaChart";
const Scene = () => {
  return (
    <div>
      <div className="mx-auto flex aspect-square w-full max-w-[500px] flex-col gap-4">
        <SimplePie />
        <SimpleDoughnut />
        <SimplePolarArea />
      </div>
    </div>
  );
};

export default Scene;

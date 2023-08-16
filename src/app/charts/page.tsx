import React from "react";
import RechartLineGraph from "./rechartLine";
import SimplePie from "./pie";
import SimpleDoughnut from "./doughnut";
const Scene = () => {
  return (
    <div>
      <RechartLineGraph />
      <SimplePie />
      <div className="aspect-square w-[500px]">
        <SimpleDoughnut />
      </div>
    </div>
  );
};

export default Scene;

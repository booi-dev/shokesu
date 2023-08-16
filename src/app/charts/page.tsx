import React from "react";
import RechartLineGraph from "./rechartLine";
import SimplePie from "./pie";
import SimpleDoughnut from "./doughnut";
const Scene = () => {
  return (
    <div>
      <div className="mx-auto flex aspect-square w-[500px] flex-col gap-4">
        <SimplePie />
        <SimpleDoughnut />
      </div>
    </div>
  );
};

export default Scene;

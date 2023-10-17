"use client";

import { splitArrayIntoChunks } from "@/utils/helpers";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import { useState } from "react";
import Button from "../components/ui/Button";

const listConfig = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
];

const Segment = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const chunksNumber = 4;

  const splittedArr = splitArrayIntoChunks(listConfig, chunksNumber);

  const arrLength = listConfig.length;
  const splittedArrLength = splittedArr.length;

  const handleNext = () => {
    setActiveIdx((prev) => {
      const updateIdx = (prev += 100);
      console.log("next", updateIdx, activeIdx, prev);

      if (updateIdx > chunksNumber * 100) return chunksNumber * 100;
      return updateIdx;
    });
  };

  const handlePrev = () => {
    setActiveIdx((prev) => {
      const updateIdx = (prev -= 100);
      console.log("prev", updateIdx, activeIdx, prev);

      if (updateIdx < 0) return 0;
      return updateIdx;
    });
  };

  return (
    <div className="flex gap-2 bg-green-300 p-4 items-center">
      <Button onClick={handlePrev}>
        <ArrowLeftSquare color="rgb(30 41 59)" size={35} />
      </Button>

      <div className="w-[500px] flex items-center overflow-hidden">
        {splittedArr.map((item, idx) => (
          <div
            key={idx}
            className="h-20 w-full shrink-0 bg-slate-800 flex gap-2 transition-all duration-300"
            style={{
              transform: `translateX(-${activeIdx}%)`,
            }}
          >
            {item.map((i) => (
              <div
                key={i}
                className="p-4 w-1/4 border-4 border-gray-900 bg-slate-700 flex items-center justify-center"
              >
                {i}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button onClick={handleNext}>
        <ArrowRightSquare color="rgb(30 41 59)" size={35} />
      </Button>
    </div>
  );
};

export default Segment;

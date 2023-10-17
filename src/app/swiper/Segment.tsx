"use client";

import { cn, splitArrayIntoChunks } from "@/utils/helpers";
import { useState } from "react";
import Button from "../components/ui/Button";

import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";

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
  const [itemSize, setItemSize] = useState(4);

  //   const itemSize = 4;

  const splittedArr = splitArrayIntoChunks(listConfig, itemSize);
  const translateValue = activeIdx * 100;
  const totalIndexValue = splittedArr.length;
  const itemWidth = `${100 / itemSize}%`;

  const handleNext = () => {
    setActiveIdx((prev) => {
      const updateIdx = prev + 1;
      if (updateIdx > totalIndexValue - 1) return prev;
      return updateIdx;
    });
  };

  const handlePrev = () => {
    setActiveIdx((prev) => {
      const updateIdx = prev - 1;
      if (updateIdx < 0) return 0;
      return updateIdx;
    });
  };

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setItemSize(val);
    // reset activeIndex
    setActiveIdx(0);
  };

  return (
    <div>
      <div className="flex gap-2 justify-center items-center py-4">
        {splittedArr.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "h-4 w-4 rounded-full bg-gray-500 transition-all duration-300",
              activeIdx === idx && "w-8 bg-gray-300"
            )}
          />
        ))}
      </div>
      <div className="flex gap-2 bg-green-300 p-4 items-center">
        <Button
          onClick={handlePrev}
          disabled={translateValue < 0}
          className={cn(translateValue === 0 && "opacity-50")}
        >
          <ArrowLeftSquare color="rgb(30 41 59)" size={35} />
        </Button>

        <div className="w-[600px] flex items-center overflow-hidden">
          {splittedArr.map((item, idx) => (
            <div
              key={idx}
              className=" w-full  shrink-0 bg-slate-800 flex gap-1 transition-all duration-300"
              style={{
                transform: `translateX(-${translateValue}%)`,
              }}
            >
              {item.map((i) => (
                <div
                  key={i}
                  className="p-4 w-full h-[200px] text-5xl border-4 border-gray-900 bg-slate-700 flex items-center justify-center uppercase"
                  style={{ width: itemWidth }}
                >
                  {i}
                </div>
              ))}
            </div>
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={activeIdx >= totalIndexValue}
          className={cn(activeIdx >= totalIndexValue - 1 && "opacity-50")}
        >
          <ArrowRightSquare color="rgb(30 41 59)" size={35} />
        </Button>
      </div>

      <div className="flex items-center mx-auto flex-col justify-center mt-8 w-[400px]">
        <div>{itemSize}</div>
        <input
          type="range"
          min="1"
          max="10"
          value={itemSize}
          onChange={handleSlider}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Segment;

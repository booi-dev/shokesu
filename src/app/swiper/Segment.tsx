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

  const handleSetActiveIndex = (val: number) => {
    setActiveIdx(val);
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
          <button
            key={idx}
            className={cn(
              "h-4 w-4 rounded-full bg-gray-500 transition-all duration-300 hover:scale-105",
              activeIdx === idx && "w-10 bg-gray-300"
            )}
            onClick={() => handleSetActiveIndex(idx)}
          />
        ))}
      </div>
      <div className="flex gap-2 bg-gray-600 p-4 items-center rounded-lg">
        <Button
          onClick={handlePrev}
          disabled={translateValue < 0}
          className={cn(translateValue === 0 && "opacity-40")}
        >
          <ArrowLeftSquare color="rgb(209 213 219)" size={35} />
        </Button>

        <div className="w-[600px] flex items-center overflow-hidden">
          {splittedArr.map((item, idx) => (
            <div
              key={idx}
              className=" w-full p-2 shrink-0 bg-gray-900 flex gap-2 transition-all duration-300"
              style={{
                transform: `translateX(-${translateValue}%)`,
              }}
            >
              {item.map((i) => (
                <div
                  key={i}
                  className="p-4 w-full h-[200px] rounded-lg text-5xl bg-gray-700 flex items-center justify-center uppercase"
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
          className={cn(activeIdx >= totalIndexValue - 1 && "opacity-40")}
        >
          <ArrowRightSquare color="rgb(209 213 219)" size={35} />
        </Button>
      </div>

      <div className="flex items-center mx-auto flex-col justify-center mt-8 w-[400px]">
        <div className="text-2xl">{itemSize}</div>
        <input
          type="range"
          min="1"
          max="10"
          value={itemSize}
          onChange={handleSlider}
          className="w-full mt-2"
        />
      </div>
    </div>
  );
};

export default Segment;

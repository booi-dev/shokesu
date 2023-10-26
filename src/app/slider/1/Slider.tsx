"use client";

import { cn } from "@/utils/helpers";
import { ClassValue } from "clsx";
import React, { createContext, useState } from "react";

type CountContextType = {
  activeIdx: number;
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
};

export const CountContext = createContext<CountContextType>({
  activeIdx: 0,
  setActiveIdx: () => console.log(""),
});

type TSlider = {
  children: React.ReactNode;
  className?: ClassValue;
};

const Slider: React.FC<TSlider> = ({ children, className }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const updateActiveIdx = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <CountContext.Provider value={{ activeIdx, setActiveIdx }}>
      <div className={cn("relative h-full w-full")}>
        <div className={cn(className && className)}>{children}</div>
        <div> {activeIdx}</div>
      </div>
    </CountContext.Provider>
  );
};

export default Slider;

import { cn } from "@/utils/helpers";
import { ClassValue } from "clsx";
import React, { useState } from "react";

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
    <div className={cn("relative h-full w-full", className && className)}>
      {children}
    </div>
  );
};

export default Slider;

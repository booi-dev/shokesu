import { cn } from "@/utils/helpers";
import React from "react";

type SlideProps = {
  children: React.ReactNode;
  totalItemLength: number;
  idx: number;
};

const Slide: React.FC<SlideProps> = ({ children, idx, totalItemLength }) => {
  const BASE_TRANSLATE_VALUE = 1.5;

  const translateValue = BASE_TRANSLATE_VALUE * idx;

  return (
    <div
      className={cn("absolute")}
      style={{
        transform: `translate(${translateValue}rem, -${translateValue}rem)`,
        zIndex: `${totalItemLength - idx}`,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;

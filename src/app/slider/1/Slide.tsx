"use client";

import { cn } from "@/utils/helpers";
import React, { useContext } from "react";
import { CountContext } from "./Slider";

type Props = {
  children: React.ReactNode;
  totalItemLength: number;
  idx: number;
};

const BASE_TRANSLATE_VALUE = 2;

const Slide: React.FC<Props> = (props) => {
  const { children, idx, totalItemLength } = props;

  const { activeIdx, setActiveIdx } = useContext(CountContext);

  const diff = Math.abs(idx - activeIdx);

  const translateValue =
    activeIdx === idx
      ? 0
      : activeIdx > idx
      ? BASE_TRANSLATE_VALUE * diff
      : BASE_TRANSLATE_VALUE * (totalItemLength - diff);

  const zIndex =
    activeIdx === idx
      ? totalItemLength
      : activeIdx > idx
      ? totalItemLength - diff
      : totalItemLength - (totalItemLength - diff);

  return (
    <div
      className={cn(
        "absolute transition-all duration-300",
        activeIdx !== idx && "opacity-100"
      )}
      style={{
        transform: `translate(${translateValue}rem, -${translateValue}rem)`,
        zIndex: zIndex,
      }}
      onClick={() => setActiveIdx(idx)}
    >
      {children}
    </div>
  );
};

export default Slide;

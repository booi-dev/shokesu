"use client";

import { cn } from "@/utils/helpers";
import { ClassValue } from "clsx";
import React, { useContext } from "react";
import { CountContext } from "./stack";

type Props = {
  children: React.ReactNode;
  idx: number;
  className?: ClassValue;
};

const StackItem: React.FC<Props> = (props) => {
  const { children, idx, className } = props;

  const { activeIdx, setActiveIdx, offset, totalItems } =
    useContext(CountContext);

  const diff = Math.abs(activeIdx - idx);

  const translateValue =
    activeIdx === idx
      ? 0
      : activeIdx > idx
      ? offset * (totalItems - diff)
      : offset * diff;

  const zIndex =
    activeIdx === idx
      ? totalItems
      : activeIdx > idx
      ? totalItems - (totalItems - diff)
      : totalItems - diff;

  return (
    <div
      className={cn(
        "absolute transition-all duration-500",
        activeIdx !== idx && "opacity-90 cursor-pointer"
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

export default StackItem;

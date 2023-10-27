"use client";

import { cn } from "@/utils/helpers";
import { ClassValue } from "clsx";
import React, { createContext, useState } from "react";

type CountContextType = {
  activeIdx: number;
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  totalItems: number;
};

export const CountContext = createContext<CountContextType>({
  activeIdx: 0,
  setActiveIdx: () => console.log(""),
  offset: 0,
  totalItems: 0,
});

type TStack = {
  offset: number;
  totalItems: number;
  children: React.ReactNode;
  className?: ClassValue;
};

const Stack: React.FC<TStack> = (props: TStack) => {
  const { children, className, offset, totalItems } = props;

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <CountContext.Provider
      value={{ activeIdx, setActiveIdx, offset, totalItems }}
    >
      <div className={cn("", className && className)}>
        <div className={cn("relative")}>{children}</div>
      </div>
    </CountContext.Provider>
  );
};

export default Stack;

"use client";

import { cn } from "@/utils/helpers";
import { MoveLeft, MoveRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

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

const Scroll = () => {
  const { ref: refFirst, inView: firstInView } = useInView({
    threshold: 0,
  });

  const { ref: refLast, inView: lastInView } = useInView({
    threshold: 0,
  });

  console.log(firstInView, lastInView);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center relative border border-blue-500 w-[700px]">
        <div
          className={cn(
            "bg-white/50 absolute inset-0 right-auto w-16 shrink-0 z-20 flex items-center justify-center transition-all duration-300",
            firstInView && "opacity-0"
          )}
        >
          <MoveLeft color="#000" />
        </div>

        <div className="flex gap-4  justify-between snap-x border border-white p-4 rounded-sm overflow-x-scroll relative">
          {listConfig.map((item, idx) => (
            <div
              key={item}
              className="uppercase bg-gray-300 w-32 shrink-0 aspect-square text-black snap-start"
              ref={
                idx === 0
                  ? refFirst
                  : idx === listConfig.length - 1
                  ? refLast
                  : null
              }
            >
              {item}
            </div>
          ))}
        </div>

        <div
          className={cn(
            "bg-white/50 absolute inset-0 left-auto w-16 shrink-0 z-20 flex items-center justify-center transition-all duration-300",
            lastInView && "opacity-0"
          )}
        >
          <MoveRight color="#000" />
        </div>
      </div>
    </div>
  );
};

export default Scroll;

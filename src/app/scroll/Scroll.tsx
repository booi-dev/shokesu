"use client";

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
      <div>
        <div className="bg-red-500 w-32 h-32 shrink-0" />
        <div className="flex gap-4 w-[600px] justify-between snap-x border border-white p-4 rounded-sm overflow-x-scroll relative">
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
      </div>
    </div>
  );
};

export default Scroll;

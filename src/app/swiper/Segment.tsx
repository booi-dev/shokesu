"use client";

import { splitArrayIntoChunks } from "@/utils/helpers";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import Button from "../components/ui/Button";

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

const splittedArr = splitArrayIntoChunks(listConfig, 4);

const handleNext = () => {
  console.log("next");
};

const Segment = () => {
  return (
    <div className="flex gap-2 bg-green-300 p-4 items-center">
      <Button>
        <ArrowLeftSquare color="rgb(30 41 59)" size={35} />
      </Button>

      {splittedArr.map((item, idx) => (
        <div key={idx} className="h-20 w-20 bg-slate-800"></div>
      ))}

      <Button onClick={handleNext}>
        <ArrowRightSquare color="rgb(30 41 59)" size={35} />
      </Button>
    </div>
  );
};

export default Segment;

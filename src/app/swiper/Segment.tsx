import { splitArrayIntoChunks } from "@/utils/helpers";

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

const Segment = () => {
  return (
    <div className="flex gap-2 bg-green-200 p-4">
      {splittedArr.map((item, idx) => (
        <div key={idx} className="h-20 w-20 bg-slate-800"></div>
      ))}
    </div>
  );
};

export default Segment;

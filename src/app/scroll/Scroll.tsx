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
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-4 w-[600px] justify-between snap-x border border-white p-4 rounded-sm overflow-x-scroll">
        {listConfig.map((item) => (
          <div
            key={item}
            className="uppercase bg-gray-300 p-16 text-black  snap-start"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;

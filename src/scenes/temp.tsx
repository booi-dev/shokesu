import React from "react";

const Temp = () => {
  return (
    <div>
      {[...Array(12)].map((_, key) => (
        <div key={key} className="aspect-square w-[100px]" />
      ))}
    </div>
  );
};

export default Temp;

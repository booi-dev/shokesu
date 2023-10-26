import React from "react";

type TSlider = {
  children: React.ReactNode;
};

const Slider: React.FC<TSlider> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export default Slider;

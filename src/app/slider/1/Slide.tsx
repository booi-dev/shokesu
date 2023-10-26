import React from "react";

type SlideProps = {
  children: React.ReactNode;
};

const Slide: React.FC<SlideProps> = ({ children }) => {
  return <div className="absolute w-[400px] h-[400px]">{children}</div>;
};

export default Slide;

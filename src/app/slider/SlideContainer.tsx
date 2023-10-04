import React from "react";

type TSlideContainer = {
  children: React.ReactNode;
};

const SlideContainer: React.FC<TSlideContainer> = ({ children }) => {
  return <div>{children}</div>;
};

export default SlideContainer;

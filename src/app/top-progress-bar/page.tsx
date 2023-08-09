"use client";

import React from "react";

const Scene = () => {
  const progressBar = React.useRef<HTMLDivElement | null>(null);

  // Set the width to "100%" directly without using a reference
  const setProgressBarWidth = React.useCallback(() => {
    if (progressBar.current) {
      progressBar.current.style.width = `${
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100
      }%`;
      requestAnimationFrame(setProgressBarWidth);
    }
  }, []);

  // Call the function to set the width
  React.useEffect(() => {
    setProgressBarWidth();
  }, [setProgressBarWidth]);

  return (
    <div className=" items-center  gap-4 pt-6">
      <div
        ref={progressBar}
        className="fixed top-0 h-2 bg-gradient-to-r from-red-500 to-blue-500"
      ></div>
      <div className="flex flex-col items-center justify-center gap-2">
        {[...Array(18)].map((_, key) => (
          <div key={key} className="flex gap-2 [&>div]:bg-teal-600">
            <div className="aspect-square w-[200px]" />
            <div className="aspect-square w-[200px]" />
            <div className="aspect-square w-[200px]" />
            <div className="aspect-square w-[200px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scene;

"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";

const ResizableDiv: React.FC = () => {
  const [width, setWidth] = useState<number>(250);
  const [draggerLeft, setDraggerLeft] = useState(100); // Initial width in pixels
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsResizing(true);
    // setStartX(e.clientX);
    e.currentTarget.style.transition = "none";
    // console.log("mouse down");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isResizing) return;

    const offsetX = e.clientX - startX;
    const newWidth = width + offsetX;
    const neu = draggerLeft + offsetX;

    // setWidth(newWidth);
    console.log(e.clientX);
    setDraggerLeft(offsetX);

    console.log("mouse move");
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isResizing) {
      setIsResizing(false);
      e.currentTarget.style.transition = "left 0.3s ease"; // Add smooth transition
    }

    // console.log("mouse up");
  };

  const handleMouseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const offsetX = e.clientX - startX;
    const newWidth = width + offsetX;

    setWidth(newWidth);
  };

  //   const handleMouseLeave = () => {
  //     setIsResizing(false);
  //     console.log("mouse leave");
  //   };

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerPos = containerRef.current.getBoundingClientRect();
      setStartX(containerPos.x);
      console.log(containerPos.x);
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        ref={containerRef}
        className=" aspect-square w-[500px] bg-green-200"
        onMouseUp={handleMouseUp}
        // onClick={handleMouseClick}
      >
        <div className="relative h-full w-full bg-green-400" style={{ width }}>
          <button
            className="absolute -right-[1.2rem] top-1/2 h-full w-[40px] origin-center -translate-x-1/2 -translate-y-1/2 bg-red-500"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            // onMouseUp={handleMouseUp}
            style={{ left: draggerLeft }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ResizableDiv;

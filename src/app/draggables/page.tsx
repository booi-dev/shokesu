"use client";

import React, { useState } from "react";
import Image from "next/image";

const ResizableDiv: React.FC = () => {
  const [width, setWidth] = useState<number>(250); // Initial width in pixels
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsResizing(true);
    setStartX(e.clientX);
    e.currentTarget.style.transition = "none";
    console.log("mouse down");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isResizing) return;

    const offsetX = e.clientX - startX;
    const newWidth = width + offsetX;

    setWidth(newWidth);

    console.log("mouse move");
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isResizing) {
      setIsResizing(false);
      e.currentTarget.style.transition = "left 0.3s ease"; // Add smooth transition
    }

    console.log("mouse up");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" aspect-square w-[500px] bg-green-200">
        <div className="relative h-full w-full bg-green-400" style={{ width }}>
          <button
            className="absolute -right-4 top-1/2 -translate-y-1/2"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <Image
              src="/icons/drag-vertical.svg"
              width={30}
              height={30}
              alt="Resizable Button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResizableDiv;

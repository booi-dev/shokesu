"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/helpers";

// const img1 =
//   "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600";
// const img2 =
//   "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600";

const ResizableDiv: React.FC = () => {
  const [containerRect, setContainerRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [dragButtonRect, setdragButtonRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const [width, setWidth] = useState(100);
  const [draggerLeft, setDraggerLeft] = useState(100); // Initial width in pixels
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsResizing(true);
    e.currentTarget.style.transition = "none";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isResizing) return;

    const offsetX = e.clientX - containerRect.x;
    const buttonWidth = dragButtonRect.width;

    if (
      e.clientX <= containerRect.x + buttonWidth / 2 ||
      e.clientX >= containerRect.x + containerRect.width - buttonWidth / 2
    )
      return;

    setDraggerLeft(offsetX);
    setWidth(offsetX);
  };

  const handleMouseUp = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (isResizing) {
      setIsResizing(false);
      e.currentTarget.style.transition = "left 0.3s ease"; // Add smooth transition
    }
  };

  const handleMouseLeave = () => {
    setIsResizing(false);
    console.log("mouse leave");
  };

  // useEffect(() => {
  //   setWidth(containerRect.x + containerRect.width / 2);
  //   setDraggerLeft(containerRect.x + containerRect.width / 2);
  // }, [containerRect]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerPos = containerRef.current.getBoundingClientRect();
      setContainerRect({
        x: containerPos.x,
        y: containerPos.y,
        width: containerPos.width,
        height: containerPos.height,
      });
      setWidth(containerPos.x + containerPos.width / 2);
      setDraggerLeft(containerPos.x + containerPos.width / 2);
    }
  }, []);

  useLayoutEffect(() => {
    if (dragButtonRef.current) {
      const dragButtonPos = dragButtonRef.current.getBoundingClientRect();
      setdragButtonRect({
        x: dragButtonPos.x,
        y: dragButtonPos.y,
        width: dragButtonPos.width,
        height: dragButtonPos.height,
      });
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        ref={containerRef}
        className={cn(
          "aspect-square w-[500px] bg-slate-900",
          "bg-[url('https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600')] object-cover"
        )}
        onMouseUp={handleMouseUp}
      >
        <div
          className="relative h-full w-full bg-slate-800/50  "
          style={{ width }}
        >
          <button
            ref={dragButtonRef}
            className={cn(
              "absolute -right-[1.2rem] top-1/2 h-full w-[40px] origin-center -translate-x-1/2 -translate-y-1/2 bg-red-500",
              isResizing && "opacity-70"
            )}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ left: draggerLeft }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ResizableDiv;

"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";

const ResizableDiv: React.FC = () => {
  const [width, setWidth] = useState<number>(250);
  const [draggerLeft, setDraggerLeft] = useState(100); // Initial width in pixels
  const [isResizing, setIsResizing] = useState<boolean>(false);

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

  //   useEffect(()=> {
  //     setWidth()

  //   }, [])

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerPos = containerRef.current.getBoundingClientRect();
      setContainerRect({
        x: containerPos.x,
        y: containerPos.y,
        width: containerPos.width,
        height: containerPos.height,
      });
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
        className=" aspect-square w-[500px] bg-slate-700"
        onMouseUp={handleMouseUp}
        // onClick={handleMouseClick}
      >
        <div className="relative h-full w-full bg-slate-800" style={{ width }}>
          <button
            ref={dragButtonRef}
            className="absolute -right-[1.2rem] top-1/2 h-full w-[40px] origin-center -translate-x-1/2 -translate-y-1/2 bg-red-500"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ left: draggerLeft }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ResizableDiv;

// src/components/HorizontalLine.js
import React, { useState } from "react";
import "./HorizontalLine.css";

const HorizontalLine = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialPosition, setInitialPosition] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    setIsDragging(true);
    setStartX(e.clientX);
    setInitialPosition(target.getBoundingClientRect().left);
    target.style.transition = "none";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const target = e.currentTarget as HTMLDivElement;

    const offsetX = e.clientX - startX;
    const newPosition = initialPosition + offsetX;

    target.style.left = `${newPosition}px`;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const target = e.currentTarget as HTMLDivElement;
    setIsDragging(false);
    target.style.transition = "left 0.3s ease"; // Add smooth transition
  };

  return (
    <div
      className="horizontal-line"
      id="draggable-line"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ></div>
  );
};

export default HorizontalLine;

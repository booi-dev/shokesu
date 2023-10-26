"use client";

import { cn } from "@/utils/helpers";
import useWindowIsResize from "@/utils/hooks/useWindowIsResize";
import { ClassValue } from "clsx";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type TProps = {
  topImageURL: string;
  bottomImageURL: string;
  topImageAlt?: string;
  bottomImageAlt?: string;
  className?: ClassValue;
};

const ComparerTwo = (props: TProps) => {
  const {
    topImageURL,
    bottomImageURL,
    topImageAlt = "top image camparison",
    bottomImageAlt = "bottom image comparison",
    className,
  } = props;

  const isWindowResize = useWindowIsResize(200);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [containerRect, setContainerRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const [topImageWidth, setTopImageWidth] = useState(400);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const handleTopImageWidthResizing = (
    e: MouseEvent | TouchEvent,
    type: "mouse" | "touch"
  ) => {
    if (type === "mouse" && e instanceof MouseEvent) {
      const offsetX = e.clientX - containerRect.x;
      setTopImageWidth(offsetX);
    }

    if (type === "touch" && e instanceof TouchEvent) {
      const offsetX = e.touches[0].pageX;
      setTopImageWidth(offsetX);
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsResizing(true);
    handleTopImageWidthResizing(e, "mouse");
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (!e.touches) return;
    setIsResizing(true);
    handleTopImageWidthResizing(e, "touch");
  };

  const handleMouseMove = (e: MouseEvent) => {};

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("touchstart", handleTouchStart);

    container.addEventListener("mousemove", handleMouseDown);

    /* eslint-disable-next-line */
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const containerPos = containerRef.current.getBoundingClientRect();
    setContainerRect({
      x: containerPos.x,
      y: containerPos.y,
      width: containerPos.width,
      height: containerPos.height,
    });
    setTopImageWidth(containerPos.width / 2);
  }, [isWindowResize]);

  return (
    <div ref={containerRef} className={cn("relative", className && className)}>
      <div className="relative h-full " style={{ width: topImageWidth }}>
        <Image
          fill
          src={topImageURL}
          alt={topImageAlt}
          sizes="400px"
          className="absolute inset-0 object-cover z-10"
        />
      </div>

      <Image
        fill
        src={bottomImageURL}
        alt={bottomImageAlt}
        sizes="400px"
        className="absolute inset-0 object-cover"
      />
    </div>
  );
};

export default ComparerTwo;

"use client";

import { useInView } from "react-intersection-observer";

const Observer = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return <div ref={ref} className="bg-red-500 w-32 shrink-0" />;
};

export default Observer;

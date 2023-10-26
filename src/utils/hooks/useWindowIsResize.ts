import { useEffect, useState } from "react";

function useWindowIsResize(delay = 300) {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      if (!isResizing) {
        setIsResizing(true);
      }

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsResizing(false);
      }, delay);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
    /* eslint-disable-next-line */
  }, [delay]);

  return isResizing;
}

export default useWindowIsResize;

import { useCallback, useEffect, useState } from "react";

type windowSize = {
  width: undefined | number;
  height: undefined | number;
};

const useWindowSize = () => {
  const HEIGHT = window.innerHeight;
  const DOC = document.documentElement;

  const [windowSize, setWindowSize] = useState<windowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    heightUpdate();
    handleWindowResize();
    window.addEventListener("resize", heightUpdate);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", heightUpdate);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const heightUpdate = useCallback(() => {
    DOC.style.setProperty("--app-height", `${HEIGHT}px`);
  }, [HEIGHT]);

  const handleWindowResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [window.innerHeight, window.innerWidth]);

  return windowSize;
};

export default useWindowSize;

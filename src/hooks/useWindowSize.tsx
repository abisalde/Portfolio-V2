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
  const handleWindowResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const heightUpdate = useCallback(() => {
    DOC.style.setProperty("--app-height", `${HEIGHT}px`);
  }, [HEIGHT, DOC.style]);

  useEffect(() => {
    heightUpdate();
    handleWindowResize();
    window.addEventListener("resize", heightUpdate);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", heightUpdate);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize, heightUpdate]);

  return windowSize;
};

export default useWindowSize;

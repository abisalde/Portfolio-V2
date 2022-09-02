import * as React from "react";
import lottie from "lottie-web";

/**
 * ? Local Files
 */
import Mobile from "@assets/lottiefiles/mobile-code.json";

const MobileImage: React.FC = () => {
  const animation = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (animation.current) {
      lottie.loadAnimation({
        container: animation.current as HTMLDivElement,
        animationData: Mobile,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }
  }, []);
  return (
    <>
      <div ref={animation} className="w-full h-full flex justify-center items-center" />
    </>
  );
};

export default MobileImage;

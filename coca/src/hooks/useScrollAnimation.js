import { useEffect, useState } from "react";
import { useSpring } from "react-spring";

const useCustomAnimation = (options) => {
  const { from, to, delay, duration, id, config } = options;
  const [isVisible, setIsVisible] = useState(false);

  const animation = useSpring({
    from: from,
    to: isVisible ? to : from,
    delay: delay || 0,
    config: {
      duration: duration || 1000,
      ...config,
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isElementVisible =
          rect.top <=
          (window.innerHeight * 0.6 ||
            document.documentElement.clientHeight * 0.6);
        if (isElementVisible && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    // const checkInitialVisibility = () => {
    //   const element = document.getElementById(id);
    //   if (element) {
    //     const rect = element.getBoundingClientRect();
    //     const isElementVisible =
    //       rect.top <=
    //       (window.innerHeight * 0.5 ||
    //         document.documentElement.clientHeight * 0.5);
    //     if (isElementVisible) {
    //       setIsVisible(true);
    //     }
    //   }
    // };

    // checkInitialVisibility();
    handleScroll(); //проверяет видимость элементов на странице при первоначальной загрузке.
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, id]);
  if (window.innerWidth >= 1050) {
    return animation;
  } else {
    return null;
  }
};

export default useCustomAnimation;

import { useState } from "react";

export const usePizzaSize = () => {
  const [activeIndex, setActiveIndex] = useState(30);

  const onBtnclick = (size) => {
    setActiveIndex(size);
  };

  return { onBtnclick, activeIndex };
};

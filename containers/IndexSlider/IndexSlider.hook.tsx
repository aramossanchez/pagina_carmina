import { useRef } from "react";

export function UseIndexSlider() {

  const sliderRef = useRef<HTMLDivElement>(null);

  const setScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const setScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return { sliderRef, setScrollLeft, setScrollRight }
}
import style from './MenuTop.module.css';
import { useState, useEffect } from 'react';

export function MenuTop() {

  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${scrolled > 0 ? style.menu_top_down : 'py-10 ease-in-out duration-300'} 'w-full flex flex-row items-center justify-end gap-32 z-20 relative bg-white pr-32 '`}>
      <div className="text-black cursor-pointer hover:text-primaryColor font-medium">INICIO</div>
      <div className="text-black cursor-pointer hover:text-primaryColor font-medium">CONÓCEME</div>
      <div className="text-black cursor-pointer hover:text-primaryColor font-medium">¿NECESITAS AYUDA?</div>
      <div className="cursor-pointer py-2 px-5 bg-primaryColor text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg">¿HABLAMOS?</div>
    </div>
  )
}
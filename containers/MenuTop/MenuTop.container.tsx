import style from './MenuTop.module.css';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export function MenuTop() {

  const [scrolled, setScrolled] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='w-full flex flex-row justify-center items-center fixed z-30 h-14 text-xs min-[1023px]:bg-transparent bg-gray-100'>
        <div className='min-[1023px]:hidden block cursor-pointer'>
          {menuOpen ?
          <IconX onClick={() => setMenuOpen(false)} />
          :
          <IconMenu2 onClick={() => setMenuOpen(true)} />
          }
        </div>
        <div className="min-[1023px]:hidden block w-auto cursor-pointer py-2 px-5 bg-primaryColor text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg absolute right-5">¿HABLAMOS?</div>
      </div>
      <div className={`
      ${scrolled > 0 ? style.menu_top_down : 'py-10 ease-in-out duration-300'}
      ${menuOpen ? style.menu_top_down : style.menu_top_down_closed}
      flex items-center justify-end
      'min-[1023px]:w-full w-full
      min-[1023px]:flex-row flex-col
      min-[1023px]:gap-32 gap-10
      min-[1023px]:z-20 z-30
      min-[1023px]:relative fixed
      min-[1023px]:top-0 top-14
      min-[1023px]:bg-white bg-whiteColorTransparent
      min-[1023px]:pr-32 p-0 '`
      }>
        <div className="text-textColor cursor-pointer hover:text-primaryColor font-medium">INICIO</div>
        <div className="text-textColor cursor-pointer hover:text-primaryColor font-medium">CONÓCEME</div>
        <div className="text-textColor cursor-pointer hover:text-primaryColor font-medium">¿NECESITAS AYUDA?</div>
        <div className="min-[1023px]:flex hidden cursor-pointer py-2 px-5 bg-primaryColor text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg">¿HABLAMOS?</div>
      </div>
    </>
  )
}
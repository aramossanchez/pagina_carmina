import style from './MenuTop.module.css';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { basePath } from '../../config/config';
import Link from 'next/link';

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
      <div className='w-full flex flex-row justify-center items-center fixed z-30 h-14 text-xs min-[1023px]:bg-transparent bg-primaryColor4'>
        <Image
          src={`${basePath}images/logo.png`}
          width={50}
          height={50}
          alt="Imagen del Logo"
          className='
          absolute left-12
          min-[1023px]:hidden block
          '
        />
        <div className='min-[1023px]:hidden block cursor-pointer'>
          {menuOpen ?
            <IconX onClick={() => setMenuOpen(false)} />
            :
            <IconMenu2 onClick={() => setMenuOpen(true)} />
          }
        </div>
        <div className="min-[1023px]:hidden block w-auto cursor-pointer py-2 px-5 bg-primaryColor1 text-primaryColor5 hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg absolute right-5">
          ¿HABLAMOS?
        </div>
      </div>
      <div className={`
      ${scrolled > 0 ? style.menu_top_down : 'py-2 ease-in-out duration-300'}
      ${menuOpen ? style.menu_top_down : style.menu_top_down_closed}
      flex items-center justify-between fixed z-30
      'min-[1023px]:w-full w-full
      min-[1023px]:flex-row flex-col
      min-[1023px]:top-0 top-14
      min-[1023px]:bg-primaryColor4 bg-primaryColor5
      min-[1023px]:pr-20 p-0 '
      min-[1023px]:text-sm text-xs`
      }>
        <Image
          src={`${basePath}images/logo.png`}
          width={100}
          height={100}
          alt="Picture of the author"
          className={`
          ${scrolled > 0 ? 'h-[50px] w-[50px]' : 'h-[100px] w-[100px]'}
          ease-in duration-150
          min-[1281px]:ml-[20vw] min-[1023px]:ml-[7vw] ml-0
          min-[1023px]:flex hidden
          `}
        />
        <div className={`
        ${menuOpen ? 'gap-10' : 'gap-0'}
        flex items-center
        min-[1023px]:flex-row flex-col
        min-[1280px]:gap-28 min-[1023px]:gap-20
        `}>
          <a href={`${basePath}#Inicio`} onClick={() => setMenuOpen(false)}>
            <span className='text-textColor cursor-pointer hover:text-primaryColor1 font-medium"'>
              INICIO
            </span>
          </a>
          <Link href={'/conoceme'}>
            <div className="text-textColor cursor-pointer hover:text-primaryColor1 font-medium">CONÓCEME</div>
          </Link>
          <Link href={'/necesitas_ayuda'}>
            <div className="text-textColor cursor-pointer hover:text-primaryColor1 font-medium">¿NECESITAS AYUDA?</div>
          </Link>
          <div className="min-[1023px]:flex hidden cursor-pointer py-2 px-5 bg-primaryColor1 text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg">¿HABLAMOS?</div>
        </div>
      </div>
    </>
  )
}
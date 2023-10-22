import style from './MenuTop.module.css';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { basePath } from '../../config/config';
import { ButtonComponent } from '@/components/Button.component';
import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

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
      {/* PARTE MOVIL */}
      <div className={'w-full flex flex-row justify-center items-center fixed z-20 h-14 text-xs min-[1023px]:bg-transparent bg-primaryColor3'}>
        <Image
          src={`${basePath}images/logo.png`}
          width={100}
          height={100}
          alt="Imagen del Logo"
          className='
          absolute left-2
          min-[1023px]:hidden block
          '
        />
        <div className='min-[1023px]:hidden block cursor-pointer'>
          {menuOpen ?
            <IconX onClick={() => setMenuOpen(false)} color='white' />
            :
            <IconMenu2 onClick={() => setMenuOpen(true)} color='white' />
          }
        </div>
        <div className="min-[1023px]:hidden block absolute right-5">
          <ButtonComponent text='¿Hablamos?' />
        </div>
      </div>
      {/* PARTE PC */}
      <div className={`
      ${scrolled > 0 ? style.menu_top_down : 'py-2 ease-in-out duration-300'}
      ${menuOpen ? style.menu_top_down : style.menu_top_down_closed}
      ${AlataFont.className}
      flex items-center justify-between fixed z-20
      min-[1023px]:w-full w-full
      min-[1023px]:flex-row flex-col
      min-[1023px]:top-0 top-14
      min-[1023px]:bg-primaryColor3 bg-primaryColor3Soft
      min-[1023px]:pr-5 p-0 '
      min-[1023px]:text-sm text-xs`
      }>
        <Image
          src={`${basePath}images/logo.png`}
          width={100}
          height={100}
          alt="Picture of the author"
          className={`
          ${scrolled > 0 ? 'h-[45px] w-[170px]' : 'h-[60px] w-[200px]'}
          ease-in duration-150
          min-[1281px]:ml-[3vw] min-[1023px]:ml-[3vw] ml-0
          min-[1023px]:flex hidden
          `}
        />
        <div className={`
        ${menuOpen ? 'gap-10' : 'gap-0'}
        flex items-center text-semibold
        min-[1023px]:flex-row flex-col
        min-[1023px]:justify-end justify-start
        min-[1290px]:gap-10 min-[1023px]:gap-8
        min-[1290px]:text-[14px] min-[1146px]:text-[13px] min-[1023px]:text-[11px]
        `}>
          <a href={`${basePath}#Inicio`} onClick={() => setMenuOpen(false)}>
            <span className='text-textColor2 cursor-pointer hover:text-text-textColor2 font-medium"'>
              INICIO
            </span>
          </a>
          <a href={`${basePath}#Servicios`} onClick={() => setMenuOpen(false)}>
            <span className='text-textColor2 cursor-pointer hover:text-text-textColor2 font-medium"'>
            SERVICIOS
            </span>
          </a>
          <a href={`${basePath}#Dudas`} onClick={() => setMenuOpen(false)}>
            <span className='text-textColor2 cursor-pointer hover:text-text-textColor2 font-medium"'>
            DUDAS
            </span>
          </a>
          <a href={`${basePath}#Redes`} onClick={() => setMenuOpen(false)}>
            <span className='text-textColor2 cursor-pointer hover:text-text-textColor2 font-medium"'>
              REDES
            </span>
          </a>
          <div className='min-[1023px]:flex hidden'>
            <ButtonComponent text='¿HABLAMOS?' />
          </div>
        </div>
      </div>
    </>
  )
}
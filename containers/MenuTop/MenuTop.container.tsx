import style from './MenuTop.module.css';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { basePath } from '../../config/config';
import { ButtonComponent } from '@/components/Button.component';
import { Alata } from 'next/font/google';
import { UseMenuTop } from './MenuTop.hook';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function MenuTop() {

  const { scrolled, menuOpen, setMenuOpen } = UseMenuTop();

  return (
    <>
      {/* PARTE MOVIL */}
      <div className={'w-full flex flex-row justify-center items-center fixed z-30 h-14 text-xs min-[1023px]:bg-transparent bg-primaryColor3'}>
        <Image
          src={`${basePath}images/logo.png`}
          width={100}
          height={100}
          alt='Logo'
          className='
          absolute left-2 h-[40px] w-[68px]
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
        <a href={`${basePath}#Contacto`} onClick={() => setMenuOpen(false)} className='min-[1023px]:hidden block absolute right-5'>
          <ButtonComponent text='¿HABLAMOS?' />
        </a>
      </div>
      {/* PARTE PC */}
      <div className={`
        ${scrolled > 0 ? style.menu_top_down : 'py-2 ease-in-out duration-300'}
        ${menuOpen ? style.menu_top_down : style.menu_top_down_closed}
        ${AlataFont.className}
        flex items-center justify-between fixed z-50
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
          alt='Logo'
          className={`
          ${scrolled > 0 ? 'h-[45px] w-[76px]' : 'h-[58px] w-[100px]'}
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
            <span className='text-textColor2 cursor-pointer hover:text-secondaryColor1 font-medium'>
              INICIO
            </span>
          </a>
          <a href={`${basePath}#Servicios`} onClick={() => setMenuOpen(false)}>
            <span className='text-textColor2 cursor-pointer hover:text-secondaryColor1 font-medium'>
              SERVICIOS
            </span>
          </a>
          <a href={`${basePath}#Dudas`} onClick={() => setMenuOpen(false)}>
            <span className='text-textColor2 cursor-pointer hover:text-secondaryColor1 font-medium'>
              DUDAS
            </span>
          </a>
          <a href={`${basePath}#Redes`} onClick={() => setMenuOpen(false)}>
            <span className='text-textColor2 cursor-pointer hover:text-secondaryColor1 font-medium'>
              REDES
            </span>
          </a>
          <a href={`${basePath}#Contacto`} onClick={() => setMenuOpen(false)} className='min-[1023px]:hidden block'>
            <span className='text-textColor2 cursor-pointer hover:text-secondaryColor1 font-medium'>
              CONTACTO
            </span>
          </a>
          <a href={`${basePath}#Contacto`} onClick={() => setMenuOpen(false)} className='min-[1023px]:flex hidden'>
            <ButtonComponent text='¿HABLAMOS?' />
          </a>
        </div>
      </div>
      {/* CAPA INVISIBLE PARA PODER CERRAR MENU TOP AL CLICKAR FUERA DE ÉL */}
      <div className={`
        bg-transparent z-20 h-[100vh] fixed top-0 w-[100vw]
        min-[1023px]:hidden block
        ${menuOpen ? 'block' : 'hidden'}
      `}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  )
}
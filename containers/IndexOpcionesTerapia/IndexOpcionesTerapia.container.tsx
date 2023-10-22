import data from '../../data/TherapyOptions.json';
import { TherapyOptionsComponent } from '@/components/TherapyOption.component';
import { ButtonComponent } from '@/components/Button.component';
import { basePath } from '../../config/config';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function IndexOpcionesTerapiaContainer() {

  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollYMobile, setScrollYMobile] = useState<number>(0);

  useEffect(() => {
    const knowScrollHeight = () => {
      setScrollY((window.scrollY) / 9);
      setScrollYMobile((window.scrollY / 25) - 150);
    };
    window.addEventListener('scroll', knowScrollHeight);
    return () => {
      window.removeEventListener('scroll', knowScrollHeight);
    };
  }, []);

  return (
    <section id='Servicios' className='w-full relative'>
      <article className='w-full flex flex-col items-center gap-9 bg-primaryColor5 py-20'>
        <div className='flex flex-row gap-x-40 gap-y-16 justify-center flex-wrap items-start px-10'>
          {data.map((item) => {
            return (
              <TherapyOptionsComponent key={`therapy-option-${item.id}`} image={item.image} text={item.text} />
            )
          })}

        </div>
      </article>
      <article className='w-full flex flex-col items-center gap-9 py-7 overflow-hidden relative'>
        <div className='flex flex-col items-center justify-around gap-5 px-10 w-full z-20'>
          <span className='text-lg text-center'>¿Prefieres que valoremos cual es la mejor opción en tu caso?</span>
          <ButtonComponent text='Formulario 1ª visita' />
        </div>
        <div className='absolute z-10 bg-primaryColor2 w-full top-0 h-full'>
          {/* IMÁGENES PC */}
          <Image
            src={`${basePath}images/blob.svg`}
            width={600}
            height={600}
            alt="Forma en fondo"
            className='absolute left-[10vw] w-[30vw] h-[30vw]'
            style={{ top: `-${scrollY}px` }}
          />
          <Image
            src={`${basePath}images/blob2.svg`}
            width={800}
            height={800}
            alt="Forma en fondo"
            className='absolute right-[-20vw] w-[70vw] h-[70vw]'
            style={{ top: `-${scrollY}px` }}
          />
          {/* IMÁGENES MÓVIL */}
          <Image
            src={`${basePath}images/blob.svg`}
            width={600}
            height={600}
            alt="Forma en fondo"
            className={`
            absolute left-[10vw] w-[30vw] h-[30vw]
            min-[1023px]:hidden block
            `}
            style={{ top: `-${scrollYMobile}px` }}
          />
          <Image
            src={`${basePath}images/blob2.svg`}
            width={800}
            height={800}
            alt="Forma en fondo"
            className={`
            absolute right-[-20vw] w-[70vw] h-[70vw]
            min-[1023px]:hidden block
            `}
            style={{ top: `-${scrollYMobile}px` }}
          />
        </div>
      </article>
    </section>
  )
}
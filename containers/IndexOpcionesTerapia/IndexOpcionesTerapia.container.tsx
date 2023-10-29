import data from '../../data/TherapyOptions.json';
import { TherapyOptionsComponent } from '@/components/TherapyOption.component';
import { ButtonComponent } from '@/components/Button.component';
import { SecondaryButtonComponent } from '@/components/SecondaryButton.component';
// import { basePath } from '../../config/config';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

export function IndexOpcionesTerapiaContainer() {

  // const [scrollY, setScrollY] = useState<number>(0);
  // const [scrollYMobile, setScrollYMobile] = useState<number>(0);

  // useEffect(() => {
  //   const knowScrollHeight = () => {
  //     setScrollY((window.scrollY) / 9);
  //     setScrollYMobile((window.scrollY / 25) - 150);
  //   };
  //   window.addEventListener('scroll', knowScrollHeight);
  //   return () => {
  //     window.removeEventListener('scroll', knowScrollHeight);
  //   };
  // }, []);

  return (
    <section id='Servicios' className='w-full relative'>
      <article className='w-full flex flex-col items-center gap-9 bg-primaryColor1 py-20'>
        <div className='flex flex-row gap-x-40 gap-y-16 justify-center flex-wrap items-start px-10'>
          {data.map((item) => {
            return (
              <TherapyOptionsComponent key={`therapy-option-${item.id}`} image={item.image} text={item.text} />
            )
          })}

        </div>
      </article>
      <article className='w-full flex flex-col items-center gap-9 py-7 overflow-hidden relative bg-primaryColor1'>
        <div className='flex flex-col items-center justify-around gap-5 px-10 w-full z-10'>
          <span className='text-lg text-center text-textColor1'>Si no tienes claro cual es el mejor formato para tí, rellena este formulario y podremos decidirlo juntas/os</span>
          <SecondaryButtonComponent text='FORMULARIO 1ª VISITA' />
        </div>
      </article>
    </section>
  )
}
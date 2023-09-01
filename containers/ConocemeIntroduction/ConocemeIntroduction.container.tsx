import Image from 'next/image'
import style from './ConocemeIntroduction.module.css'
import { basePath } from '../../config/config';

export function ConocemeIntroduction() {
  return (
    <section className='w-full relative flex flex-col items-center'>
      <div className='
      w-full
      min-[1023px]:pt-40 pt-28
      '>
        <div className={`
          min-[1023px]:text-2xl min-[767px]:text-xl min-[400px]:text-lg text-[16px]
          min-[1023px]:
          w-full flex flex-col items-center justify-center mb-4 px-10`}>
          <span className="text-center">¡TE INVITO A QUE CONOZCAS MÁS SOBRE MÍ!</span>
        </div>
        <div className='
        bg-slate-100 w-full flex flex-row items-center justify-center
        '>
          <div className='
            flex items-start justify-center pt-10 pb-16
            min-[1023px]:w-[1000px] w-[87%]
            min-[1023px]:flex-row flex-col
            min-[1023px]:gap-0 gap-5
          '>
            <div className='
                flex flex-col items-start h-full
                min-[1023px]:w-6/12 w-full
              '>
              <div className='
                  flex flex-row items-center
                '>
                <Image
                  src={`${basePath}images/logo.png`}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className='w-[100px] h-[100px]'
                />
                <div className={`${style.title}
                    min-[1023px]:text-4xl min-[767px]:text-3xl min-[400px]:text-2xl text-[22px]
                    w-full flex flex-col items-start justify-center
                  `}>
                  <span className="
                      text-left
                      min-[1023px]:text-2xl min-[767px]:text-xl min-[400px]:text-lg text-[16px]
                    ">
                    LO QUE LLEVO EN LA
                  </span>
                  <span className="text-left">MOCHILA</span>
                </div>
              </div>
              <div className='flex flex-col gap-5 mt-9'>
                <span>· Licenciada en Psicología <span className='text-[14px]'>(Universidad Valencia)</span></span>
                <span>· COLEGIADA Nº CM02049</span>
                <span>· Máster en Neuropsicología Clínica <span className='text-[14px]'>(ISEP)</span></span>
                <span>· Experta en Acompañamiento psicológico Integrativo ante Patología y Dolor Crónico <span className='text-[14px]'>(AEPSIS)</span></span>
                <span>· Experta en Intervención Integrativa del Duelo <span className='text-[14px]'>(AEPSIS)</span></span>
                <span>· Experta en Psicogerontología <span className='text-[14px]'>(Universidad Rey Juan Carlos)</span></span>
                <span>· Formada en Psicoterapia Integradora en Trauma <span className='text-[14px]'>(Escuela de Psicología Eva Molero)</span></span>
              </div>
            </div>
            <div className={`${style.imagen_conoceme_container}
              relative mt-16 flex flex-col items-center 
              min-[1023px]:w-6/12 w-full
            `}>
              <Image
                src={`${basePath}images/conoceme_intro.jpg`}
                width={350}
                height={550}
                alt="Picture of the author"
                className="
                  border-[8px] border-white z-20 relative
                  min-[1023px]:w-[350px] w-[250px]
                  min-[1023px]:h-[440px] h-[340px]
                "/>
              <div className="
                absolute top-0 bg-primaryColor1 z-10
                min-[1023px]:left-20 left-6/12
                min-[1023px]:w-[350px] w-[250px]
                min-[1023px]:h-[440px] h-[340px]
              ">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
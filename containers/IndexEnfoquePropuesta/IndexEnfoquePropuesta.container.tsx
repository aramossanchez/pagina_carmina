import { TitleComponent } from '@/components/Title.component';
import { TextWithCheckComponent } from '@/components/TextWithCheck.component';
import data from '../../data/TextWithCheck.data.json';
import { basePath } from '../../config/config';
import Image from 'next/image';

export function IndexEnfoquePropuestaContainer() {

  return (
    <section id='Enfoque' className='w-full relative'>
      <div className='
      flex items-start justify-center gap-3 bg-whiteColor pt-20 py-20
      min-[1023px]:flex-row flex-col
      min-[1023px]:gap-y-0 gap-y-8
      '>
        <article className='
        border-r-2 border-primaryColor2 px-10 flex flex-col gap-3
        min-[1023px]:w-[500px] w-full
        min-[1023px]:justify-start justify-center
        min-[1023px]:items-start items-center
        '>
          <TitleComponent title='ENFOQUE Y PROPUESTA'/>
          <span>Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. </span>
        </article>
        <article className='
        px-10 relative pt-2 flex flex-row
        min-[1023px]:w-[500px] w-full
        min-[1023px]:justify-start
        min-[568px]:justify-center justify-start
        '>
          <Image
            src={`${basePath}images/enfoque-propuesta-1.jpg`}
            width={250}
            height={250}
            alt="Enfoque propuesta imagen 1"
            className='
            relative border-2 border-whiteColor shadow-customStrong z-20 saturate-[0.8]
            min-[468px]:w-[300px] w-[50vw]
            min-[468px]:h-[300px] h-[50vw]
            '
          />
          <Image
            src={`${basePath}images/enfoque-propuesta-2.jpg`}
            width={250}
            height={250}
            alt="Enfoque propuesta imagen 1"
            className='
            absolute border-2 border-whiteColor shadow-customStrong top-[35%] z-10 saturate-[0.6]
            min-[1023px]:left-[30%] right-[10vw]
            min-[468px]:w-[300px] w-[50vw]
            min-[468px]:h-[300px] h-[50vw]
            '
          />
        </article>
      </div>
      <div className='w-full py-10 bg-primaryColor1 flex flex-row justify-center text-textColor1'>
        <TitleComponent title='¡PERMÍTEME ACOMPAÑARTE!' /> 
      </div>
    </section>
  )
}
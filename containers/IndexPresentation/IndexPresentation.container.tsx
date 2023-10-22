import style from './IndexPresentation.module.css';
import { basePath } from '../../config/config';
import Image from 'next/image';
import { TitleComponent } from '@/components/Title.component';

export function IndexPresentationContainer() {

  return (
    <section id='Inicio' className='w-full relative bg-primaryColor1'>
      <div className="flex flex-col w-full relative items-center pb-20" >
        {/* IMAGEN DE FONDO CON FRASE IMPORTANTE */}
        <div
          className='
            w-full flex flex-row items-center justify-end h-[500px] bg-no-repeat bg-cover
            min-[768px]:pr-20 pr-0
          '
          style={{backgroundImage: `url("${basePath}images/index_presentacion_fondo.jpg")`}}>
          <div className='
            flex flex-col pt-10 gap-3
            min-[768px]:w-auto w-full
            min-[768px]:items-start items-center
          '>
            <span className='
              text-textColor2 min-[768px]:px-0 px-5
              min-[768px]:text-left text-center
              min-[1440px]:text-4xl min-[1280px]:text-3xl text-2xl
              '>NEUROPSICOLOGÍA Y PSICOLOGÍA CLÍNICA</span>
            <span className='text-textColor2 min-[768px]:px-0 px-5 min-[768px]:text-left text-center min-[1440px]:text-3xl min-[1280px]:text-2xl text-xl'>(RE) CONECTAR CONTIGO... ES POSIBLE</span>
          </div>
        </div>
        {/* FOTO Y TEXTO */}
        <div className={`
        w-full flex relative ${style.container_subsection_presentation}
        min-[1023px]:justify-start justify-center
        min-[1023px]:flex-row flex-col
        min-[1023px]:items-start items-center
        min-[1023px]:w-[1000px] w-full
        `}>
          <Image
          src={`${basePath}images/index_presentacion.png`}
          width={400}
          height={550}
          alt="Foto presentación"
          className='
            border-4 border-secondaryColor2 shadow-customStrong left-0
            min-[1023px]:top-[-150px] top-0
            min-[1023px]:order-1 order-2
            min-[1023px]:absolute relative
            min-[450px]:w-[400px] w-[325px]
            min-[450px]:h-[600px] h-[525px]
          '
        />
          <div className='
            flex flex-col pt-20 gap-3
            min-[1023px]:pb-0 pb-20
            min-[1023px]:pr-10 pr-0
            min-[1023px]:pl-[450px] pl-0
            min-[1023px]:items-start items-center
            min-[1023px]:order-2 order-1
          '>
            <TitleComponent title='TE DOY LA BIENVENIDA A ESTE ESPACIO' />
            <span className='text-xl'>Subtítulo de ejemplo</span>
            <span className='max-w-[700px] text-lg'>Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. </span>
            <span className='max-w-[700px] text-lg'>Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. </span>
          </div>
        </div>
      </div>
    </section>
  )
}
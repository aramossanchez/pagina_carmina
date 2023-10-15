import style from './IndexPresentation.module.css';
import { basePath } from '../../config/config';
import Image from 'next/image';

export function IndexPresentation() {

  return (
    <section className='w-full relative'>
      <div className="flex flex-col w-full relative items-center pb-20" >
        <div className='
          w-full flex flex-row items-center justify-end h-[500px] bg-no-repeat bg-cover
          min-[768px]:pr-20 pr-0
        ' style={{backgroundImage: `url("${basePath}images/index_presentacion_fondo.jpg")`}}>
          <div className='
            flex flex-col pt-10 gap-3
            min-[768px]:w-auto w-full
            min-[768px]:items-start items-center
          '>
            <span className='text-whiteColor min-[768px]:px-0 px-5
            min-[768px]:text-left text-center w-full min-[1440px]:text-4xl min-[1280px]:text-3xl text-2xl'>NEUROPSICOLOGÍA Y PSICOLOGÍA CLÍNICA</span>
            <span className='text-whiteColor min-[768px]:px-0 px-5 min-[768px]:text-left text-center min-[1440px]:text-3xl min-[1280px]:text-2xl text-xl'>(RE) CONECTAR CONTIGO... ES POSIBLE</span>
          </div>
        </div>
        <div className={`w-full flex flex-row items-start justify-start ${style.container_subsection_presentation}`}>
          <div className='
            flex flex-col pt-20 gap-3 pr-10
            min-[1023px]:pb-0 pb-20
          '>
            <span className='text-2xl'>TE DOY LA BIENVENIDA A ESTE ESPACIO</span>
            <span className='text-xl'>Subtítulo de ejemplo</span>
            <span className='max-w-[700px] text-lg'>Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. </span>
            <span className='max-w-[700px] text-lg'>Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. Texto de ejemplo. </span>
          </div>
        </div>
        <Image
          src={`${basePath}images/index_presentacion.png`}
          width={400}
          height={550}
          alt="Foto presentación"
          className={`
            border-2 border-whiteColor ${style.photo_presentation}
            min-[1023px]:top-[325px] top-0
            min-[1023px]:absolute relative
            min-[1023px]:left-[10vw] left-0
            min-[450px]:w-[400px] w-[325px]
            min-[450px]:h-[600px] h-[525px]
          `}
        />
      </div>
    </section>
  )
}
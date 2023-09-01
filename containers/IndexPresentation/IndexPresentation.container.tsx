import style from './IndexPresentation.module.css';
import { basePath } from '../../config/config';

export function IndexPresentation() {

  return (
    <section className='w-full relative'>
      <div className="flex flex-row items-end justify-center w-full absolute z-20">
        <div className="
        flex flex-col h-full min-h-[65vh] items-start justify-center text-primaryColor5 font-bold w-full
        min-[1023px]:pt-48 pt-0
        min-[1023px]:ml-10 ml-5
        ">
          <span className='
            min-[1280px]:text-4xl min-[1023px]:text-3xl min-[767px]:text-2xl text-[17px]
          '
          >
            Te ofrezco
          </span>
          <span className='
          min-[1280px]:text-7xl min-[1023px]:text-4xl min-[767px]:text-3xl min-[400px]:text-3xl text-[28px]
          min-[1023px]:mt-1 mt-0
          font-medium'
          >
            <span className='text-primaryColor2 bg-primaryColor5 rounded-xl px-2'>LA BRÚJULA</span>
          </span>
          <span className='
          min-[1280px]:text-4xl min-[1023px]:text-3xl min-[767px]:text-2xl text-[17px]
          min-[1023px]:mt-5 mt-0
          min-[1023px]:mb-1 mb-[0px]
          '
          >
            El camino y el ritmo
          </span>
          <span className='
          min-[1280px]:text-7xl min-[1023px]:text-4xl min-[767px]:text-3xl min-[400px]:text-3xl text-[28px]
          font-medium'
          >
            <span className='text-primaryColor2 bg-primaryColor5 rounded-xl px-2'>LO ELIJES TÚ</span>
          </span>
          <span className='
          min-[1280px]:text-2xl min-[1023px]:text-sm min-[767px]:text-xl text-[15px]
          min-[1280px]:w-4/12 min-[1023px]:w-5/12 w-9/12
          min-[1280px]:mt-10 min-[1023px]:mt-8 min-[767px]:mt2 mt-5
          bg-primaryColor2Soft rounded-xl px-2'
          >
            UN ESPACIO DONDE SENTIRTE ESCUCHAD@, COMPRENDID@ Y RESPETAD@
          </span>
        </div>
      </div>
      {/* ESTE ES EL DIV QUE SIRVE COMO COLOR DE DIFUMINACIÓN AL VÍDEO */}
      <div className={`${style.color_front_video_container} z-10 bg-whiteColor relative opacity-70`}></div>
      <div className={`${style.video_container} relative z-[3]`}>
        <video autoPlay muted loop>
          <source src={`${basePath}videos/flores.mp4`} type="video/mp4" />
          <div className={`${style.color_front_video_container} z-10 bg-whiteColor relative opacity-70`}></div>
        </video>
      </div>
    </section>
  )
}
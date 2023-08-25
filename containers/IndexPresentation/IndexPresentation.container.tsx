import style from './IndexPresentation.module.css';
import {basePath} from '../../config/config';

export function IndexPresentation() {

  return (
    <section className='w-full relative'>
      <div className="flex flex-row w-full absolute z-20 text-white">
        <div className="min-[1023px]:w-6/12 w-0"></div>
        <div className="
        min-[1980px]:w-4/12 min-[1900px]:w-5/12 min-[1023px]:w-5/12 w-full
        flex flex-col h-full min-h-[65vh] items-center justify-center text-primaryColor"
        >
          <span className='
          min-[1280px]:text-7xl min-[767px]:text-6xl min-[400px]:text-5xl text-[42px]
          font-medium'
          >Carmina Zamora</span>
          <span className='
          min-[1280px]:text-4xl min-[767px]:text-2xl text-[18px]
          mt-6'
          >Divulgación · Psicología · Neurociencia</span>
        </div>
      </div>
      {/* ESTE ES EL DIV QUE SIRVE COMO COLOR DE DIFUMINACIÓN AL VÍDEO */}
      <div className={`${style.color_front_video_container} z-10 bg-whiteColor relative opacity-70`}></div>
      <div className={`${style.video_container} relative z-[3]`}>
        <video autoPlay muted loop>
          <source src={`${basePath}videos/vela.mp4`} type="video/mp4" />
          <div className={`${style.color_front_video_container} z-10 bg-whiteColor relative opacity-70`}></div>
        </video>
      </div>
    </section>
  )
}
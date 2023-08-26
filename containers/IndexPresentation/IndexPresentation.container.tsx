import style from './IndexPresentation.module.css';
import { basePath } from '../../config/config';

export function IndexPresentation() {

  return (
    <section className='w-full relative'>
      <div className="flex flex-row items-end justify-center w-full absolute z-20 text-white">
        <div className="
        flex flex-col h-full min-h-[65vh] items-center justify-center text-primaryColor font-bold w-full
        ">
          <span className='
          min-[1280px]:text-9xl min-[767px]:text-6xl min-[400px]:text-5xl text-[42px]
          font-medium opacity-50'
          >
            Carmina Zamora
          </span>
          <span className='
          min-[1280px]:text-4xl min-[767px]:text-2xl text-[18px]
          mt-6 opacity-50'
          >
            Divulgación · Psicología · Neurociencia
          </span>
          <span className="w-auto cursor-pointer py-2 px-5 bg-primaryColor text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg mt-10">
            Quiero pedir cita
          </span>
        </div>
      </div>
      {/* ESTE ES EL DIV QUE SIRVE COMO COLOR DE DIFUMINACIÓN AL VÍDEO */}
      <div className={`${style.color_front_video_container} z-10 bg-whiteColor relative opacity-70`}></div>
      <div className={`${style.video_container} relative z-[3]`}>
        <video autoPlay muted loop>
          <source src={`${basePath}videos/loto.mp4`} type="video/mp4" />
          <div className={`${style.color_front_video_container} z-10 bg-whiteColor relative opacity-70`}></div>
        </video>
      </div>
    </section>
  )
}
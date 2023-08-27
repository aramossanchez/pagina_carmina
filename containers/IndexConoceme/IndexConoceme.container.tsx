import Image from "next/image"
import style from './IndexConoceme.module.css'
import { basePath } from '../../config/config';

export function IndexConoceme() {
  return (
    <section className='w-full relative flex flex-col items-center bg-slate-100'>
      <div className='
      flex
      min-[1023px]:flex-row flex-col
      min-[1023px]:w-[1000px] w-[87%]
      '>
        <div className={`${style.imagen_conoceme_container}
         relative mt-28 mb-20 flex flex-col items-center
        min-[1023px]:w-4/12 w-full
         `}>
          <Image
            src={`${basePath}images/conoceme.jpg`}
            width={350}
            height={550}
            alt="Picture of the author"
            className="
            border-[8px] border-white z-20 relative
            min-[1023px]:left-16 left-0
            min-[1023px]:w-[350px] w-[250px]
            min-[1023px]:h-[440px] h-[340px]
            "/>
          <div className="
          absolute top-0 bg-primaryColor z-10
          min-[1023px]:left-16 left-6/12
          min-[1023px]:w-[350px] w-[250px]
          min-[1023px]:h-[440px] h-[340px]
          "></div>
        </div>
        <div className="
        min-[1023px]:w-8/12 w-full
        min-[1023px]:pl-40 pl-0
        flex flex-col items-center py-5 text-justify justify-center
        ">
          <div className={`${style.title}
          min-[1023px]:mt-20
          min-[1023px]:text-4xl  min-[767px]:text-3xl min-[400px]:text-2xl text-[22px]
          w-full flex flex-row items-center justify-start mb-7`}>
            <span className="text-left">¡CONÓCEME UN POCO MÁS!</span>
          </div>
          <div className="w-full flex flex-row items-center justify-start mb-7">
          <hr className="w-3/12 border-b-[1px] border-greyColor" />
          </div>
          <span className="min-[1023px]:text-xl  min-[767px]:text-xl min-[400px]:text-lg text-[16px] font-medium mb-2">
            Natural de Albacete y una enamorada de los pequeños detalles, la naturaleza y el yoga.
          </span>
          <span className="min-[1023px]:text-xl  min-[767px]:text-xl min-[400px]:text-lg text-[16px] mb-2">
            Tuve la gran suerte (ahora lo siento así), de necesitar ayuda psiquiátrica y psicológica a muy corta edad. Ahí descubrí todo lo que puede ayudar, un buen acompañamiento.
          </span>
          <span className="min-[1023px]:text-xl  min-[767px]:text-xl min-[400px]:text-lg text-[16px] mb-2">
            Fue así como descubrí que mi misión sería la de ayudar a otras personas a afrontar los momentos más difíciles de sus vidas, porque todos merecemos reconectar con nosotr@s mism@s, y tener una vida plena que nos permita seguir avanzando.
          </span>
          <span className="w-auto cursor-pointer py-2 px-5 bg-primaryColor text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg mt-10">
            Te invito a saber más sobre mi
          </span>
        </div>
      </div>
    </section>
  )
}
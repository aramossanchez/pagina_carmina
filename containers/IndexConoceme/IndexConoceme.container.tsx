import Image from "next/image"
import style from './IndexConoceme.module.css'
import { basePath } from '../../config/config';

export function IndexConoceme() {
  return (
    <section className='w-full relative flex flex-col items-center'>
      <hr className="bg-primaryColor border-r-[1px] border-greyColor w-3/12 mt-10 mb-20"/>
      <div className='
      flex
      min-[1023px]:flex-row flex-col
      min-[1023px]:w-[1000px] w-[87%]
      '>
        <div className={`${style.imagen_conoceme_container}
         relative mb-10 flex flex-col items-center
        min-[1023px]:w-4/12 w-full
         `}>
          <Image
            src={`${basePath}images/conoceme.jpg`}
            width={350}
            height={550}
            alt="Picture of the author"
            className="
            border-[8px] border-slate-100 z-20 relative
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
        flex flex-col items-center  py-5 text-justify
        ">
          <span className="min-[1023px]:text-xl  min-[767px]:text-xl min-[400px]:text-lg text-[16px]">
            Mi nombre es Carmina. Y la unión que tengo con la psicología nace desde la más tierna infancia. Donde descubrí que un buen acompañamiento puede ayudarte a sanar y aceptar aquello que necesitas para continuar. Fue ahí donde decidí ser yo quien acompañara.
          </span>
          <span className="w-auto cursor-pointer py-2 px-5 bg-primaryColor text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg mt-10">
            Cotillea un poco más
          </span>
        </div>
      </div>
    </section>
  )
}
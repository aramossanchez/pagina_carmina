import Image from "next/image"
import style from './IndexTerapia.module.css'
import { basePath } from '../../config/config';

export function IndexTerapia() {
  return (
    <section className='w-full relative flex flex-col items-center'>
      <div className="
      rounded-lg flex bg-primaryColorSoft mt-20 mb-20 py-10 gap-5 items-center
      min-[1023px]:px-16 px-0
      min-[1023px]:w-[1000px] w-[87%]
      min-[1023px]:flex-row flex-col
      ">
        <div className="
       flex flex-col items-end justify-center border-primaryColor pr-5 
        min-[1023px]:w-5/12  w-8/12
        min-[1023px]:h-3/6 h-auto
        min-[1023px]:border-r-[1px] border-r-[0px]
        min-[1023px]:border-b-[0px] border-b-[1px]
        min-[1023px]:pr-5 pb-5 
        ">
          <span className="
          italic
          min-[1023px]:text-2xl  min-[767px]:text-2xl min-[400px]:text-xl min-[348px]:text-lg text-lg
          ">
            La terapia,
          </span>
          <span className="
          italic
          min-[1023px]:text-2xl  min-[767px]:text-2xl min-[400px]:text-xl min-[348px]:text-lg text-lg
          ">
            como acompañamiento
          </span>
          <div className="mt-5 cursor-pointer py-2 px-5 bg-primaryColor text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg">
            ¡Me interesa!
          </div>
        </div>
        <div className={`${style.terapia_text_with_quotes}
        flex flex-col gap-3
        min-[1023px]:w-7/12 w-10/12
        `}>
          <Image
            src={`${basePath}images/comillas.svg`}
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <span className="
           text-justify
            min-[1023px]:text-xl  min-[767px]:text-xl min-[400px]:text-lg text-[16px]
          ">
            Hace más de 8 años que mantengo un método muy sencillo en las terapias. Yo aporto las estrategias, reflexiones y guías necesarias. Tú practicas, decides y transformas.
          </span>
          <span className="
           text-justify
            min-[1023px]:text-xl  min-[767px]:text-xl min-[400px]:text-lg text-[16px]
          ">
            Si estuviésemos perdidas en un bosque oscuro, yo te ayudaría a saber dónde se encuentran los puntos cardinales. La dirección siempre, siempre, la decides tú.
          </span>
          <div className="w-full flex flex-row justify-end">
            <Image
              src={`${basePath}images/comillas.svg`}
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
import Image from "next/image"
import style from './Necesitas_ayudaTerapia.module.css'
import { basePath } from '../../config/config';
import { StepsTerapiaComponent } from "@/components/StepsTerapia.component";

export function Necesitas_ayudaTerapia() {
  return (
    <section className='w-full relative flex flex-col items-center pt-40'>
      {/* IMAGEN DE FONDO */}
      <div className="absolute top-0 left-0 w-full h-full z-10 opacity-25">
        <Image
          src={`${basePath}images/fondo_indexTerapia.jpg`}
          width={50}
          height={50}
          alt="Imagen de fondo"
          className="w-full h-full"
        />
      </div>
      {/* TARJETA */}
      <div className={`${style.terapia_container}
      rounded-lg flex mt-20 mb-20 py-10 gap-5  shadow-greyColor bg-primaryColor4 z-20
      min-[1023px]:items-start items-center
      min-[1023px]:px-16 px-0
      min-[1023px]:w-[1000px] w-[87%]
      min-[1023px]:flex-row flex-col
      `}>
        <div className="
          flex flex-col items-end justify-center border-primaryColor1 pr-5 
          min-[1023px]:w-5/12  w-9/12
          min-[1023px]:h-3/6 h-auto
          min-[1023px]:border-r-[1px] border-r-[0px]
          min-[1023px]:border-b-[0px] border-b-[1px]
          min-[1023px]:pr-5 pb-5 
          min-[1023px]:mt-[82px]
        ">
          <span className="
          min-[1023px]:text-xl min-[767px]:text-2xl min-[438px]:text-lg min-[348px]:text-sm text-sm
          ">
            LA TERAPIA,
          </span>
          <span className="
          bg-primaryColor2 text-primaryColor5 text-right px-2 rounded-lg
          min-[1023px]:text-xl min-[767px]:text-2xl min-[438px]:text-lg min-[348px]:text-sm text-sm
          ">
            COMO ACOMPAÑAMIENTO
          </span>
          <div className='
            flex-col justify-start items-center relative h-full
            min-[1023px]:flex hidden pt-40
          '>
            <Image
              src={`${basePath}images/linea_curva.svg`}
              width={800}
              height={1500}
              alt="Picture of the author"
              className='h-[450px] w-[100%]'
            />
            <StepsTerapiaComponent text='Evaluación' top='177px' left='65px' />
            <StepsTerapiaComponent text='Objetivos' top='255px' left='130px' />
            <StepsTerapiaComponent text='Entrenamiento' top='330px' left='62px' />
            <StepsTerapiaComponent text='Recuperación' top='403px' left='130px' />
            <StepsTerapiaComponent text='Seguimientos' top='468px' left='59px' />
          </div>
        </div>
        <div className={`${style.terapia_text_with_quotes}
        flex flex-col items-center gap-6
        min-[1023px]:w-7/12 w-10/12
        `}>
          <div className={`${style.title}
            min-[1023px]:mt-20
            min-[1023px]:text-2xl min-[767px]:text-xl min-[400px]:text-lg text-[17px]
            flex flex-row items-center justify-start mb-3`
          }>
            <span className="text-center w-full">¡LA RUTA QUE TE PROPONGO!</span>
          </div>
          <span className="
           min-[1023px]:text-xl  min-[767px]:text-lg min-[400px]:text-[17px] text-[15px]
          ">
            Mis intervenciones comienzan, dedicando espacio y tiempo a lo que para mí, es el aspecto fundamental: la conexión y confianza mutua, ofreciendo un espacio seguro donde poder comenzar.
          </span>
          <span className="
           min-[1023px]:text-xl  min-[767px]:text-lg min-[400px]:text-[17px] text-[15px]
          ">
            Realizaremos un proceso de evaluación, para establecer un punto de partida. Dedicaré espacio a explicarte, ayudarte a entender y ofrecer información sobre qué nos ha traído hasta aquí y cómo podemos empezar a transformarlo. ¡Este es el mayor momento de crecimiento y autodescubrimiento personal!
          </span>
          <span className="
           min-[1023px]:text-xl  min-[767px]:text-lg min-[400px]:text-[17px] text-[15px]
          ">
            Y como siempre digo, mi propuesta consiste en acompañarte para <span className="text-medium"> empoderarte</span> hacia los cambios necesarios hasta conseguir llegar al momento que ya no me necesites para seguir cuidándote.
          </span>
          <span className="
           min-[1023px]:text-xl  min-[767px]:text-lg min-[400px]:text-[17px] text-[15px]
          ">
            En ese momento, con mucho cariño y amor, decidiremos en conjunto finalizar la intervención y establecer pequeños seguimientos si fuesen necesarios.
          </span>
          <span className="
           w-full
           min-[1023px]:text-xl  min-[767px]:text-lg min-[400px]:text-[17px] text-[15px]
          ">
            ¿Qué te parece?
          </span>
          <span className="w-auto cursor-pointer py-2 px-5 mb-10 bg-primaryColor1 text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg mt-10">
            SABER MÁS
          </span>
        </div>
      </div>
    </section>
  )
}
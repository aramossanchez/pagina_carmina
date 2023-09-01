import Image from 'next/image'
import { basePath } from '../../config/config';

export function IndexIntroduction() {
  return (
    <section className='w-full relative flex flex-col items-center bg-primaryColor5'>
      <div className='
    min-[1023px]:w-[1000px] w-[87%]
    min-[1023px]:pr-0 pr-[1%]
    min-[1023px]:text-xl  min-[767px]:text-lg min-[400px]:text-sm text-sm
    text-center mt-7 flex flex-col gap-3'
      >
        <div className={`
          min-[1023px]:mt-20
          min-[1023px]:text-2xl min-[767px]:text-xl min-[400px]:text-[19px] text-[17px]
          w-full flex flex-col items-center justify-center mb-4`}>
          <span className="text-center">¡BIENVENID@! SOY CARMINA.</span>
          <span className="text-center">TU NEUROPSICÓLOGA EXPERTA EN PSICOLOGÍA CLÍNICA, DOLOR CRÓNICO Y DAÑO NEUROLÓGICO.</span>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <hr className="w-[100px] border-b-[1px] border-slate-100" />
          <Image
            src={`${basePath}images/logo.png`}
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <hr className="w-[100px] border-b-[1px] border-slate-100" />
        </div>
        <span className='font-medium'>
          Llegar hasta aquí, implica que estás dispuest@ a dar el paso más importante hacia tu sanación. El primero.
        </span>
        <span>
          Posiblemente tengas dudas, y créeme, es normal, incluso quizá puedes dudar si soy yo la profesional que necesitas para emprender este camino. Por eso permíteme dedicar este espacio para que me conozcas a mí y a mi manera de acompañar.
        </span>
        <div className='
          min-[1023px]:text-2xl  min-[767px]:text-xl min-[400px]:text-lg text-lg
          text-primaryColor1 font-bold italic mb-16 mt-10
        '>
          &#34;Empecemos a sanar, como si tu vida dependiera de ello&#34;
        </div>
      </div>
    </section>
  )
}
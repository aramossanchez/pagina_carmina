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
          <span className="text-center">¡QUIERO DARTE LA BIENVENIDA!</span>
          <span className="text-center">SOY TU NEUROPSICÓLOGA EXPERTA EN PSICOLOGÍA CLÍNICA,</span>
          <span className="text-center">DOLOR CRÓNICO Y DAÑO NEUROLÓGICO.</span>
        </div>
        <div className='flex flex-row items-center justify-center gap-2 mb-5'>
          <hr className="w-[100px] border-b-[1px] border-slate-100" />
          <Image
            src={`${basePath}images/logo.png`}
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <hr className="w-[100px] border-b-[1px] border-slate-100" />
        </div>
        <div className='flex flex-col gap-9 text-left'>
          <span>
            Mi nombre es Carmina Zamora, y me dedico a acompañar desde hace casi 10 años, a personas que se encuentran<span className='font-medium'> transitando procesos emocionales complicados
            </span>
            , a causa de problemas de salud tanto<span className='font-medium'> neurológicos, oncológicos, quirúrgicos</span>
            , que cursen con<span className='font-medium'> dolor</span>
            , o relacionados con cambios y/o<span className='font-medium'> pérdidas</span>
            , que están impactando enormemente en su estado de ánimo.
          </span>
          <span>
            He podido comprobar, como a menudo, la recuperación ante una situación complicada se centra exclusivamente en el aspecto físico, descuidando en muchos casos aquellas consecuencias y secuelas emocionales que están apareciendo tanto en la propia persona, como en su círculo cercano de apoyo.
          </span>
          <span>
            Si has llegado hasta aquí, implica que estás valorando si dar el paso más importante hacia tu recuperación. El primero. Y por ello, si me lo permites, me gustaría acompañarte. Quiero conocerte, que me conozcas y mostrarte una nueva manera de enfocar este camino, que en ocasiones nos toca transitar
          </span>
        </div>
        <div className='my-10'>
          <span className="w-auto cursor-pointer py-2 px-5 mb-10 bg-primaryColor1 text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg mt-10">
            Quiero conocer tus Servicios
          </span>
        </div>
        <div className='
          min-[1023px]:text-xl  min-[767px]:text-lg min-[400px]:text-sm text-sm
          text-primaryColor1 font-bold italic mb-16
        '>
          &#34;Te propongo un reto: comencemos a sanar, como si tu vida dependiera de ello&#34;
        </div>
      </div>
    </section>
  )
}
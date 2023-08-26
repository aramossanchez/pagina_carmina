import style from './IndexIntroduction.module.css';

export function IndexIntroduction() {
  return (
    <section className='w-full relative flex flex-col items-center'>
      <div className='
    min-[1023px]:w-[1000px] w-[87%]
    min-[1023px]:pr-0 pr-[1%]
    min-[1023px]:text-2xl  min-[767px]:text-xl min-[400px]:text-lg text-lg
    text-center mt-20 flex flex-col gap-3'
      >
        <div className='
      font-semibold
      min-[400px]:mb-10 mb-5
      min-[1023px]:text-3xl  min-[767px]:text-2xl min-[400px]:text-xl text-xl'
        >
          Si estás leyendo esto, quiero darte la bienvenida. ¡Te felicito!
        </div>
        <div className=' text-justify'>Quiere decir que has decidido ir más allá. Dar un paso en adelante
        hacia tu bienestar.
        Y aunque posiblemente tengas dudas, buscar apoyo y acompañamiento
        es un gran medio para conseguirlo.</div>
        <div className='text-justify'>Hay momentos en nuestra vida, en los que de repente somos conscientes
        de haber perdido algo indispensable para nuestro bienestar. El <strong className='text-greyColor'>equilibrio.</strong>
        Puede que sientas haber perdido la ilusión, sentirte perdida/o o
        desesperanza. Puede que exista un motivo que identifiques como
        causante de este problema, o puede que no lo tengas tan claro.
        Sea cual sea la razón que te invita a iniciar este proceso de transformación,
        será escuchada, atendida y sanada.</div>
        <div className='text-justify min-[400px]:mb-10 mb-5'>En eso consiste el <strong className='text-greyColor'>acompañamiento</strong>.</div>

        <div className='
      min-[1023px]:text-3xl text-2xl
      text-primaryColor font-bold italic mb-10 '>&#34;Empecemos a sanar, como si tu vida dependiera de ello&#34;</div>
      </div>
    </section>
  )
}
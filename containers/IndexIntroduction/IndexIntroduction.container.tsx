import style from './IndexIntroduction.module.css';

export function IndexIntroduction() {
  return (
    <section className='w-full relative flex flex-col items-center'>
    <div className='
    min-[1023px]:w-[1000px] w-[95%]
    min-[1023px]:pr-0 pr-[1%]
    min-[1023px]:text-2xl  min-[767px]:text-xl text-sm
    text-center mt-20  flex flex-col gap-3'>
      <div className='
      min-[1023px]:text-3xl text-2xl
      text-primaryColor font-bold italic mb-10 '>&#34;Empecemos a sanar, como si tu vida dependiera de ello&#34;</div>
      <div>Si has llegado hasta aquí, muy posiblemente te encuentres</div>
      <div> en uno de esos momentos vitales, en los que tu ilusión,</div>
      <div> ganas y energía están profundamente alteradas.</div>
      <div className='mt-10'>Posiblemente ya tengas identificada la razón principal</div>
      <div> o incluso ese sea otro de los motivos</div>
      <div className=' mb-10'> por los que necesitas comenzar este  camino.</div>
      <div>Para <span className=' text-primaryColor font-bold 
      min-[1023px]:text-2xl  min-[767px]:text-xl text-sm'>encontrarte</span></div>
      <div>Para <span className=' text-primaryColor font-bold 
      min-[1023px]:text-2xl  min-[767px]:text-xl text-sm'>comprenderte</span></div>
      <div>Para <span className=' text-primaryColor font-bold 
      min-[1023px]:text-2xl  min-[767px]:text-xl text-sm'>ayudarte</span></div>
      <div>Para <span className=' text-primaryColor font-bold 
      min-[1023px]:text-2xl  min-[767px]:text-xl text-sm'>re-conectarte</span></div>
    </div>
    </section>
  )
}
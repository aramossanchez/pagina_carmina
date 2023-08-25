import style from './IndexIntroduction.module.css';

export function IndexIntroduction() {
  return (
    <section className='w-full relative flex flex-col items-center'>
    <div className='w-[1000px] text-center mt-20 text-2xl flex flex-col gap-3'>
      <div className='text-primaryColor font-bold italic text-3xl mb-10 '>&#34;Empecemos a sanar, como si tu vida dependiera de ello&#34;</div>
      <div>Si has llegado hasta aquí, muy posiblemente te encuentres</div>
      <div> en uno de esos momentos vitales, en los que tu ilusión,</div>
      <div> ganas y energía están profundamente alteradas.</div>
      <div className='mt-10'>Posiblemente ya tengas identificada la razón principal</div>
      <div> o incluso ese sea otro de los motivos</div>
      <div className=' mb-10'> por los que necesitas comenzar este  camino.</div>
      <div>Para <span className=' text-primaryColor font-bold text-2xl'>encontrarte</span></div>
      <div>Para <span className=' text-primaryColor font-bold text-2xl'>comprenderte</span></div>
      <div>Para <span className=' text-primaryColor font-bold text-2xl'>ayudarte</span></div>
      <div>Para <span className=' text-primaryColor font-bold text-2xl'>re-conectarte</span></div>
    </div>
    </section>
  )
}
import style from './IndexPresentation.module.css';

export function IndexPresentation() {
  return (
    <section className='w-full relative'>
      <div className='w-full flex flex-row items-center justify-end gap-32 pr-32 py-10 z-20 relative bg-white'>
        <div className="text-black cursor-pointer hover:text-primaryColor font-medium">INICIO</div>
        <div className="text-black cursor-pointer hover:text-primaryColor font-medium">CONÓCEME</div>
        <div className="text-black cursor-pointer hover:text-primaryColor font-medium">¿NECESITAS AYUDA?</div>
        <div className="cursor-pointer py-2 px-5 bg-primaryColor text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg">¿HABLAMOS?</div>
      </div>
      <div className="flex flex-row w-full absolute z-20 text-white">
        <div className="w-6/12"></div>
        <div className="w-4/12 flex flex-col h-full min-h-[80vh] items-center justify-center text-primaryColor">
          <span className='text-7xl font-medium'>Carmina Zamora</span>
          <span className='text-4xl mt-6'>Divulgación · Psicología · Neurociencia</span>
        </div>
      </div>
      <div className={`${style.color_front_video_container} z-10 bg-whiteColor relative opacity-70`}></div>
      <div className={`${style.video_container} relative z-[3]`}>
        <video autoPlay muted loop>
          <source src="/videos/vela.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
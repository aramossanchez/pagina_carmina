export function StepsTerapiaComponent({text = 'Texto', top = '0px', left = '0px'}) {
  return (
    <div className={`
      absolute flex flex-row items-center gap-1
      top-[${top}] left-[${left}]
    `}>
      <div className='w-[15px] h-[15px] rounded-full bg-primaryColor2'></div>
      <span className='text-xl'>{text}</span>
    </div>
  )
}
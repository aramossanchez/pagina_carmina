export function ErrorMessageComponent({ text = ''}) {

  return (
    <span className='text-[14px] font-bold text-textColorError'>
      {text}
    </span>
  )
}
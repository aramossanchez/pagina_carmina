export function ButtonComponent({ text = '', onclick = () => {}}) {

  return (
    <span
      className='cursor-pointer py-1 px-5 bg-primaryColor1 text-textColor1 hover:opacity-80 font-semibold ease-in-out duration-[0.25seg] shadow-normalButton transition-opacity active:scale-[99%] active:shadow-pressedButton'
      onClick={onclick}
    >
      {text}
    </span>
  )
}
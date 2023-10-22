export function ButtonComponent({ text = ''}) {

  return (
    <span className="cursor-pointer py-1 px-5 bg-primaryColor1 text-textColor1 hover:bg-greyColor font-semibold ease-in-out duration-300">
      {text}
    </span>
  )
}
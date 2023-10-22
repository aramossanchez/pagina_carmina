export function ButtonComponent({ text = ''}) {

  return (
    <span className="border-[1px] border-textColor1 cursor-pointer py-1 px-5 bg-secondaryColor1 text-textColor1 hover:bg-greyColor font-semibold ease-in-out duration-300">
      {text}
    </span>
  )
}
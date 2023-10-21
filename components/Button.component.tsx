export function ButtonComponent({ text = ''}) {

  return (
    <span className="cursor-pointer py-2 px-5 bg-primaryColor1 text-white hover:bg-greyColor font-medium ease-in-out duration-300 rounded-lg">
      {text}
    </span>
  )
}
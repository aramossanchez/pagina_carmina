import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import style from './FrequentDoubtComponent.module.css';

export function FrequentDoubtComponent({ title = '', text = '' }) {

  const [openedOption, setOpenedOption] = useState(false);

  return (
    <div className='flex flex-col'>
      <div
        className='flex flex-row items-center gap-2 cursor-pointer bg-primaryColor1 p-2'
        onClick={() => setOpenedOption(!openedOption)}
      >
        <div className='rounded-full p-[1px] bg-primaryColor2'>
          {!openedOption ?
            <IconPlus size={15} className={`${style.animated_icon} text-textColor1`} />
            :
            <IconMinus size={15} className={`${style.animated_icon} text-textColor1`} />
          }
        </div>
        <span className='text-textColor1'>{title}</span>
      </div>
      <div className={`${openedOption ? style.container_opened : style.container_closed} bg-primaryColor2`}>
        <span className={`${openedOption ? style.openedOption : style.closedOption}`}>{text}</span>
      </div>
      <div></div>
    </div>
  )
}
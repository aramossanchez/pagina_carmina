import { IconCheck } from '@tabler/icons-react';

export function TextWithCheckComponent({ text = '' }) {

  return (
    <div className='
    flex flex-row items-center gap-4 
    min-[1023px]:w-[450px] w-[300px]
    '>
      <div className='p-1 rounded-full bg-whiteColor'>
        <IconCheck className='text-secondaryColor1' size={20} />
      </div>
      <div className='text-[16px]'>{text}</div>
    </div>
  )
}
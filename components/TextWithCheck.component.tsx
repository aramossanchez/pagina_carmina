import { IconCheck } from '@tabler/icons-react';

export function TextWithCheckComponent({ text = '' }) {

  return (
    <div className='
    flex flex-row items-center gap-4 
    min-[1023px]:w-[450px] w-[300px]
    '>
      <div className='p-3 rounded-full bg-whiteColor'>
        <IconCheck />
      </div>
      <div className='min-[1023px]:text-[16px] text-[14px]'>{text}</div>
    </div>
  )
}
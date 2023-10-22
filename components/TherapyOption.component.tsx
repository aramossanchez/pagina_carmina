import { basePath } from '../config/config';
import Image from 'next/image';

export function TherapyOptionsComponent({ image = '', text = ''}) {

  return (
    <div className='flex flex-col gap-3 items-center justify-center w-[125px]'>
      <div className='border-2 border-secondaryColor2 rounded-full p-5 shadow-customSoft'>
        <Image
          src={`${basePath}images/${image}`}
          width={100}
          height={100}
          alt="Icono online"
        />
      </div>
      <span className='text-center'>{text}</span>
    </div>
  )
}
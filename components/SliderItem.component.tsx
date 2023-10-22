import Link from 'next/link';
import { basePath } from '../config/config';
import Image from 'next/image';

export function SliderItemComponent({ image = '', text = '', link = '' }) {

  return (
    <Link href={link} className='flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105 ease-in-out duration-200 transition-all'>
      <div className='
        mx-5
        min-[1023px]:h-[250px] h-[200px]
        min-[1023px]:min-w-[250px] min-w-[200px]
      '>
        <Image
          src={`${basePath}images/${image}`}
          width={250}
          height={250}
          alt="Foto de slider"
          className={`
            border-2 border-whiteColor shadow-customStrong
            min-[1023px]:h-[250px] h-[200px]
            min-[1023px]:w-[250px] w-[200px]
          `}
        />
      </div>
      <span className='text-textColor2'>{text}</span>
    </Link>
  )
}
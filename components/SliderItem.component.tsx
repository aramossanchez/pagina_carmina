import Link from 'next/link';
import { basePath } from '../config/config';
import Image from 'next/image';
import { SliderButtonComponent } from './SliderButton.component';

export function SliderItemComponent({ image = '', text = '', resume = '', link = '' }) {

  return (
    <Link href={link} target='_blank' className='flex flex-col items-center justify-center gap-4 cursor-pointer mx-5'>
      <div className='
        bg-whiteColor flex flex-col justify-center items-center rounded-lg
        min-[1023px]:h-[400px] h-[360px]
        min-[1023px]:min-w-[250px] min-w-[200px]
      '>
        <div
          className='
          flex flex-col items-center justify-center bg-primaryColor1 rounded-lg
          min-[1023px]:min-w-[250px] min-w-[200px]
          min-[1023px]:h-[200px] h-[150px]
        '>
          <Image
            src={`${basePath}images/${image}`}
            width={250}
            height={250}
            alt={`neuropsicología neurorehabilitacion psicología valencia online laneuronamina ${text}`}
            className={`
              border-2 border-whiteColor shadow-customSoft saturate-[0.8] rounded-full
              min-[1023px]:h-[150px] h-[100px]
              min-[1023px]:w-[150px] w-[100px]
            `}
          /></div>
        <span className='font-bold p-1 text-center text-titleColor'>{text}</span>
        <hr className='w-[100px] border-t-4 border-primaryColor3' />
        <span className='text-sm p-1 pb-10 text-center'>{resume}</span>
        <div className='flex-grow'></div>
        <div className='mb-5'>
          <SliderButtonComponent text='VER MÁS' />
        </div>
      </div>
    </Link>
  )
}
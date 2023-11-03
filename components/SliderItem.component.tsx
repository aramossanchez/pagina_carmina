import Link from 'next/link';
import { basePath } from '../config/config';
import Image from 'next/image';
import { SecondaryButtonComponent } from './SecondaryButton.component';
import { ButtonComponent } from './Button.component';

export function SliderItemComponent({ image = '', text = '', resume = '', link = '' }) {

  return (
    <Link href={link} target='_blank' className='flex flex-col items-center justify-center gap-4 cursor-pointer mx-5'>
      <div className='
        bg-whiteColor flex flex-col justify-center items-center rounded-lg
        min-[1023px]:h-[400px] h-[425px]
        min-[1023px]:min-w-[250px] min-w-[200px]
      '>
        <div
          className='
          h-[200px] flex flex-col items-center justify-center bg-primaryColor1 rounded-lg
          min-[1023px]:min-w-[250px] min-w-[200px]
        '>
          <Image
            src={`${basePath}images/${image}`}
            width={250}
            height={250}
            alt={`Foto de slider ${text}`}
            className={`
              border-2 border-whiteColor shadow-customSoft saturate-[0.8] rounded-full h-[150px] w-[150px]
            `}
          /></div>
        <span className='font-bold p-1 text-center'>{text}</span>
        <hr className='w-[100px] border-t-4 border-primaryColor3' />
        <span className='text-sm p-1 pb-10 text-center'>{resume}</span>
        <div className='flex-grow'></div>
        <div className='mb-5'>
          <ButtonComponent text='VER MÁS' />
        </div>
      </div>
    </Link>
  )
}
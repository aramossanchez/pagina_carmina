import Link from 'next/link';
import Image from 'next/image';
import { basePath } from '../../config/config';

export function IndexFooterContainer() {

  return (
    <section className='w-full py-8 bg-primaryColor3 sticky bottom-0 z-[-2]'>
      <div className='w-full flex flex-col items-center justify-center gap-4 text-textColor2'>
        <Image
          src={`${basePath}images/logo.png`}
          width={100}
          height={100}
          alt="Picture of the author"
          className='h-[60px] w-[200px]'
        />
        <div className='flex flex-row gap-5 items-center px-2 flex-wrap justify-center'>
          <Link href={'/'} className='underline'>
            Política de Privacidad
          </Link>
          <Link href={'/'} className='underline'>
            Política de Cookies
          </Link>
          <Link href={'/'} className='underline'>
            Aviso Legal
          </Link>
        </div>
        <span className='text-center px-2'>2023 - Carmina Zamora. Todos los derechos reservados.</span>
      </div>
    </section>
  )
}
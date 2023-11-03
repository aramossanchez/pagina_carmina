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
          alt='Logo'
          className='h-[116px] w-[200px] my-10'
        />
        <div className='flex flex-row gap-5 items-center px-2 flex-wrap justify-center'>
          <Link href={'/politica-privacidad'} className='underline'>
            Política de Privacidad
          </Link>
          <Link href={'/aviso-legal'} className='underline'>
            Aviso Legal
          </Link>
        </div>
        <div className='flex  items-center justify-center gap-y-2
          min-[768px]:flex-row flex-col
        '>
          <span className='text-center px-2'><strong>Dirección de correo:</strong> info@carminazamora.com</span>
          <span className='text-center px-2'><strong>Tlf de contacto:</strong> 613041566</span>
        </div>
        <span className='text-center px-2'>2023 - Carmina Zamora. Todos los derechos reservados.</span>
      </div>
    </section>
  )
}
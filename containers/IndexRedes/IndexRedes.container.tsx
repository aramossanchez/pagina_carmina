import { TitleComponent } from '@/components/Title.component';
import { basePath } from '../../config/config';
import Image from 'next/image';
import { SubtitleComponent } from '@/components/Subtitle.component';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandSpotify } from '@tabler/icons-react';
import Link from 'next/link';

export function IndexRedesContainer() {

  return (
    <section id='Redes' className='w-full relative py-20 bg-primaryColor1'>
      <div
        className='w-full h-full absolute opacity-10 top-0'
        style={{
          backgroundImage: `url(${basePath}images/index_redes_background.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className='w-full flex flex-row justify-center'>
        <TitleComponent title='REDES Y MEDIOS DE COMUNICACIÓN' />
      </div>
      <div className='
        flex justify-center pt-10 gap-y-10
        min-[1023px]:flex-row flex-col
        min-[1023px]:items-start items-center
      '>
        <article className='
          flex flex-col gap-3 px-5
          min-[1023px]:items-start items-center
          min-[1023px]:w-[550px] w-full
        '>
          <SubtitleComponent title='Me apasiona la divulgación...' />
          <span>Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. </span>
          <span>Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. </span>
          <span>Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. </span>
          <div className='flex flex-row gap-3 items-center z-20'>
            <Link href={'/'} target='_blank' className='cursor-pointer hover:scale-105 duration-200 ease-in-out transition-all'>
              <IconBrandInstagram size={50} className='text-secondaryColor2' />
            </Link>
            <Link href={'/'} target='_blank' className='cursor-pointer hover:scale-105 duration-200 ease-in-out transition-all'>
              <IconBrandLinkedin size={50} className='text-secondaryColor2' />
            </Link>
          </div>
        </article>
        <article className='min-[1023px]:w-[400px] w-full flex flex-row justify-center'>
          <Image
            src={`${basePath}images/index_redes.png`}
            width={400}
            height={550}
            alt="Foto redes y medios de comunicación"
            className={`
            border-4 border-secondaryColor2 shadow-customStrong
            min-[450px]:w-[400px] w-[325px]
            min-[450px]:h-[600px] h-[525px]
          `}
          />

        </article>
      </div>
    </section>
  )
}
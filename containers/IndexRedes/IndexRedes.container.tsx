import { TitleComponent } from '@/components/Title.component';
import { basePath } from '../../config/config';
import Image from 'next/image';
import { SubtitleComponent } from '@/components/Subtitle.component';
import { IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import Link from 'next/link';

export function IndexRedesContainer() {

  return (
    <section id='Redes' className='w-full relative py-20 bg-whiteColor'>
      <div
        className='w-full h-full absolute opacity-10 top-0'
      // style={{
      //   backgroundImage: `url(${basePath}images/index_redes_background.png)`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
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
          <span>Hace tiempo descubrí, que las redes sociales y los medios de comunicación, me permitían seguir ayudando a otras personas, enseñando las partes más científicas de la psicología, de una manera sencilla y fácilmente comprensible por todos y todas.  </span>
          <span>Para ello, intento seguir tres máximas, que me ayudan a mantener una línea coherente conmigo misma: </span>
          <ul>
            <li>Responsabilidad: Me aseguro que el contenido publicado sea de calidad y basado en evidencia científica.  </li>
            <li>Valores: Para mí, ser congruente y coherente con mis principios, es esencial en mis participaciones.  </li>
            <li>Naturalidad: Tal como me muestro, es como soy. La sencillez, serenidad y consciencia social, forman parte de mi esencia personal.   </li>
          </ul>
          <div className='flex flex-row gap-3 items-center z-10'>
            <Link href={'/'} target='_blank' className='cursor-pointer hover:scale-105 duration-200 ease-in-out transition-all'>
              <IconBrandInstagram size={50} className='text-secondaryColor1' />
            </Link>
            <Link href={'/'} target='_blank' className='cursor-pointer hover:scale-105 duration-200 ease-in-out transition-all'>
              <IconBrandLinkedin size={50} className='text-secondaryColor1' />
            </Link>
          </div>
        </article>
        <article className='min-[1023px]:w-[400px] w-full flex flex-row justify-center'>
          <Image
            src={`${basePath}images/index_redes.jpg`}
            width={400}
            height={550}
            alt="Foto redes y medios de comunicación"
            className={`
            border-2 border-whiteColor shadow-customStrong saturate-[0.8]
            min-[450px]:w-[400px] w-[325px]
            min-[450px]:h-[525px] h-[450px]
          `}
          />

        </article>
      </div>
    </section>
  )
}
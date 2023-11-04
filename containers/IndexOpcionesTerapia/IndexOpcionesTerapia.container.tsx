import dataRaw from '../../data/TherapyOptions.json';
import { TherapyOptionsComponent } from '@/components/TherapyOption.component';
import { SecondaryButtonComponent } from '@/components/SecondaryButton.component';
import { SubtitleComponent } from '@/components/Subtitle.component';
import Link from 'next/link';
import { basePath } from '@/config/config';

export function IndexOpcionesTerapiaContainer() {

  const data: { id: number, image: string, text: string }[] = dataRaw;

  return (
    <section id='Servicios' className='w-full relative'>
      <article className='w-full flex flex-col items-center gap-9 bg-primaryColor1 pt-20'>
        <div className='flex flex-row gap-x-40 gap-y-16 justify-center flex-wrap items-start px-10'>
          {data.map((item) => {
            return (
              <TherapyOptionsComponent key={`therapy-option-${item.id}`} image={item.image} text={item.text} />
            )
          })}
        </div>
      </article>
      <article className='w-full flex flex-col items-center gap-9 pt-10 pb-20 overflow-hidden relative bg-primaryColor1'>
        <div className='flex flex-col items-center justify-around gap-10 px-10 w-full z-10'>
          <SubtitleComponent title='Si no tienes claro cual es el mejor formato para ti, rellena este formulario y podremos decidirlo juntas/os' />
          <a href={`${basePath}#Contacto`}>
            <SecondaryButtonComponent text='ESCRÍBEME' />
          </a>
        </div>
      </article>
    </section>
  )
}
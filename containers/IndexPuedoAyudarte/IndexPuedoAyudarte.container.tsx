import { TitleComponent } from '@/components/Title.component';
import { TextWithCheckComponent } from '@/components/TextWithCheck.component';
import dataRaw from '../../data/TextWithCheck.data.json';

export function IndexPuedoAyudarteContainer() {

  const data: {id: number, text: string}[] = dataRaw;

  return (
    <section id='Puedo_Ayudarte' className='w-full relative py-20 bg-primaryColor4'>
      <article className='w-full flex flex-col items-center gap-9'>
        <div className='px-2 flex flex-col justify-center'>
        <TitleComponent title='¿VIVES ALGUNO DE ESTOS MOMENTOS? HABLEMOS.' />
        </div>
        <div className='
        flex flex-start flex-wrap justify-center px-5 gap-y-8 gap-x-6
        min-[1023px]:w-[1024px] w-[90%]
        '>
          {data.map((item) => {
            return (
              <TextWithCheckComponent key={item.id} text={item.text}/>
            )
          })}
        </div>
      </article>
    </section>
  )
}
import { TitleComponent } from '@/components/Title.component';
import { TextWithCheckComponent } from '@/components/TextWithCheck.component';
import data from '../../data/TextWithCheck.data.json';

export function IndexPuedoAyudarteContainer() {

  return (
    <section id='Puedo_Ayudarte' className='w-full relative py-20 bg-primaryColor4'>
      <article className='w-full flex flex-col items-center gap-9'>
        <TitleComponent title='¿EN QUÉ PUEDO AYUDARTE?' />
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
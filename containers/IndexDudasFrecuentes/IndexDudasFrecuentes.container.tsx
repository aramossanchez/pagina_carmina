import { TitleComponent } from '@/components/Title.component';
import data from '../../data/FrequentDoubt.data.json';
import { FrequentDoubtComponent } from '@/components/FrequentDoubtComponent/FrequentDoubt.component';

export function IndexDudasFrecuentesContainer() {

  return (
    <section id='Dudas' className='w-full relative py-20 bg-primaryColor4'>
      <div className='
        flex w-full justify-center gap-9
        min-[1023px]:flex-row flex-col
        min-[1023px]:items-start items-center
      '>
        <article className='
          flex flex-col gap-3 px-5
          min-[1023px]:w-[500px] w-[90%]
        '>
          <TitleComponent title='DUDAS FRECUENTES SOBRE TERAPIA ONLINE' />
          <span>Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. </span>
          <span>Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. </span>
        </article>
        <article className='
          min-[1023px]:pr-5 pr-0
          min-[550px]:w-[500px] w-full 
        '>
          {data.map((item) => {
            return (
              <FrequentDoubtComponent key={`${item.id}-doubt`} title={item.title} text={item.text} />
            )
          })}
        </article>
      </div>
    </section>
  )
}
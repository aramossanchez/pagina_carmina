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
          <TitleComponent title='DUDAS FRECUENTES SOBRE LA TERAPIA' />
          <span>Estoy convencida que la distancia física no ha de ser un impedimento para acompañar a las personas en su proceso de (re)conexión personal.  </span>
          <span>Por ello, quiero ponerlo muy fácil. para realizar una intervención conmigo, solamente necesitarás un espacio confortable para tí, que te permita la tranquilidad, confianza e intimidad que necesitas. Además por supuesto, de un dispositivo (ordenador o tablet, preferentemente), a través del cual, podamos realizar la videollamada con una correcta conexión a internet. ¡Todo lo que suceda a partir de ahí, corre de nuestra cuenta!</span>
        </article>
        <article className='
          min-[1023px]:pr-5 pr-0
          min-[550px]:w-[500px] w-[95%] 
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
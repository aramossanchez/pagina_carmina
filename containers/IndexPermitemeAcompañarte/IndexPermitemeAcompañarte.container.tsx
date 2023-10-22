import data from '../../data/AllowAccompany.data.json';
import { AllowAccompanyComponent } from '@/components/AllowAccompany.component';

export function IndexPermitemeAcompañarteContainer() {

  return (
    <section id='Acompañamiento' className='w-full relative bg-primaryColor5 min-[1000px]:pt-0 pt-10'>
      {data.map((item) => {
        return (
          <AllowAccompanyComponent key={`allow-accompany-${item.id}`} title={item.title} subtitle={item.subtitle} image={item.image} checks={item.checks} button={item.button} orientation={item.orientation} />
        )
      })}
    </section>
  )
}
import { ButtonComponent } from '@/components/Button.component';
import dataRaw from '../../data/AllowAccompany.data.json';
import { AllowAccompanyComponent } from '@/components/AllowAccompany.component';

export function IndexPermitemeAcompañarteContainer() {

  const data: {id: number, title: string, image: string, text: string, orientation: string}[] = dataRaw;

  return (
    <section id='Acompañamiento' className='w-full relative bg-whiteColor min-[1000px]:pt-0 pt-10'>
      {data.map((item) => {
        return (
          <AllowAccompanyComponent key={`allow-accompany-${item.id}`} title={item.title} image={item.image} text={item.text} orientation={item.orientation} />
        )
      })}
    </section>
  )
}
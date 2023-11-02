import { ButtonComponent } from '@/components/Button.component';
import data from '../../data/AllowAccompany.data.json';
import { AllowAccompanyComponent } from '@/components/AllowAccompany.component';

export function IndexPermitemeAcompañarteContainer() {

  return (
    <section id='Acompañamiento' className='w-full relative bg-whiteColor min-[1000px]:pt-0 pt-10'>
      {data.map((item) => {
        return (
          <AllowAccompanyComponent key={`allow-accompany-${item.id}`} title={item.title} image={item.image} text={item.text} orientation={item.orientation} />
        )
      })}
      <div className='py-20 w-full flex flex-row justify-center items-center'>
        <ButtonComponent text='MÁS INFORMACIÓN' />
      </div>
    </section>
  )
}
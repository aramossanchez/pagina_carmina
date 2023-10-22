import data from '../../data/SliderItem.data.json';
import style from './IndexSliderContainer.module.css'
import { SliderItemComponent } from '@/components/SliderItem.component';
import { useRef } from 'react';
import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled } from '@tabler/icons-react';

export function IndexSliderContainer() {

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section id='Mis_Sitios' className='w-full relative py-10 bg-secondaryColor1'>
      <div className='flex flex-row justify-center'>
        <article ref={sliderRef} className={`
          ${style.container_slider} flex flex-row items-center justify-start overflow-x-scroll py-5
          min-[1023px]:max-w-[1000px] max-w-full
          min-[1023px]:relative
        `}>
          <div
            className={`
              z-20 cursor-pointer p-[1px] rounded-full bg-primaryColor1
              min-[1023px]:sticky absolute
              min-[1023px]:left-0 left-2
            `}
            onClick={() => handleScrollLeft()}
          >
            <IconArrowBadgeLeftFilled className='text-secondaryColor1' />
          </div>
          {data.map((item) => {
            return (
              <SliderItemComponent key={`${item.id}-item-slider`} image={item.image} text={item.text} />
              )
            })}
          <div
            className={`
              z-20 cursor-pointer p-[1px] rounded-full bg-primaryColor1
              min-[1023px]:sticky absolute
              min-[1023px]:right-0 right-2
            `}
            onClick={() => handleScrollRight()}
          >
            <IconArrowBadgeRightFilled className='text-secondaryColor1' />
          </div>
        </article>
      </div>
    </section>
  )
}
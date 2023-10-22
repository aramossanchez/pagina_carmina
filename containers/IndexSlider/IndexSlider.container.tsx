import data from '../../data/SliderItem.data.json';
import style from './IndexSliderContainer.module.css'
import { basePath } from '../../config/config';
import Image from 'next/image';
import { SliderItemComponent } from '@/components/SliderItem.component';
import { ReactElement, useRef } from 'react';
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
    <section className='w-full relative py-10 bg-primaryColor3'>
      <div className='flex flex-row justify-center'>
        <article ref={sliderRef} className={`
          ${style.container_slider} relative flex flex-row items-center justify-start overflow-x-scroll py-5
          min-[1023px]:max-w-[1000px] max-w-full
        `}>
          <div className='sticky left-0 z-20 cursor-pointer p-1 rounded-full bg-whiteColor border-2 border-textColor' onClick={() => handleScrollLeft()}>
            <IconArrowBadgeLeftFilled />
          </div>
          {data.map((item) => {
            return (
              <SliderItemComponent key={`${item.id}-item-slider`} image={item.image} text={item.text} />
              )
            })}
          <div className='sticky right-0 z-20 cursor-pointer p-1 rounded-full bg-whiteColor border-2 border-textColor' onClick={() => handleScrollRight()}>
            <IconArrowBadgeRightFilled />
          </div>
        </article>
      </div>
    </section>
  )
}
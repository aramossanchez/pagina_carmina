import dataRaw from '../../data/SliderItem.data.json';
import style from './IndexSliderContainer.module.css'
import { SliderItemComponent } from '@/components/SliderItem.component';
import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled } from '@tabler/icons-react';
import { UseIndexSlider } from './IndexSlider.hook';

export function IndexSliderContainer() {

  const data: {id: number, image: string, text: string, link: string}[] = dataRaw;

  const { sliderRef, setScrollLeft, setScrollRight } = UseIndexSlider();

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
            onClick={() => setScrollLeft()}
          >
            <IconArrowBadgeLeftFilled className='text-secondaryColor1' />
          </div>
          {data.map((item) => {
            return (
              <SliderItemComponent key={`${item.id}-item-slider`} image={item.image} text={item.text} link={item.link} />
              )
            })}
          <div
            className={`
              z-20 cursor-pointer p-[1px] rounded-full bg-primaryColor1
              min-[1023px]:sticky absolute
              min-[1023px]:right-0 right-2
            `}
            onClick={() => setScrollRight()}
          >
            <IconArrowBadgeRightFilled className='text-secondaryColor1' />
          </div>
        </article>
      </div>
    </section>
  )
}
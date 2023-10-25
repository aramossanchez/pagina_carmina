import { SubtitleComponent } from '@/components/Subtitle.component';
import { IconCheck } from '@tabler/icons-react';
import { basePath } from '../config/config';
import { ButtonComponent } from './Button.component';

export function AllowAccompanyComponent({ title = '', image = '', text = '', orientation = 'left' }) {

  return (
    <article className='
    w-full flex items-center justify-center
    min-[1000px]:flex-row flex-col
    '>
      <div className={`
      min-h-[250px] px-5 py-5 flex flex-col items-center justify-center gap-5
      ${orientation === 'right' ? 'min-[1000px]:order-2 order-1' : 'min-[1000px]:order-1'}
      min-[500px]:w-[500px] w-full
      `}>
        <SubtitleComponent title={title} />
        <div className='flex flex-col items-start'>
          <span>{text}</span>
        </div>
      </div>
      <div className={`
      min-h-[250px] px-10 py-5 flex flex-col items-center justify-center gap-5 relative
      ${orientation === 'right' ? 'min-[1000px]:order-1 order-2' : 'min-[1000px]:order-2'}
      min-[500px]:w-[500px] w-full
      `}>
        <SubtitleComponent title={title} />
        <div className='flex flex-col items-start'>
          <span>{text}</span>
        </div>
        <div
          className='absolute w-full h-full bg-greyColor'
          style={{
            backgroundImage: `url(${basePath}images/${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'saturate(0.8)'
          }}
        >
        </div>
      </div>
    </article>
  )
}
import { TitleComponent } from '@/components/Title.component';
import { SubtitleComponent } from '@/components/Subtitle.component';
import data from '../../data/ContactData.json';
import style from './IndexFormularioContacto.module.css';
import { useState } from 'react';
import { SecondaryButtonComponent } from '@/components/SecondaryButton.component';
import Image from 'next/image';
import { basePath } from '../../config/config';

export function IndexFormularioContactoContainer() {

  const [selectedCenter, setSelectedCenter] = useState(0);

  return (
    <section id='Contacto' className='w-full relative py-20 bg-primaryColor1'>
      <article className='w-full flex flex-col items-center gap-9'>
        <div className='px-2 flex flex-col justify-center'>
          <TitleComponent title='CONTACTO' />
        </div>
        <div className='
          flex flex-col gap-y-3
          min-[1023px]:w-[1000px] w-[95%]
        '>
          <span>Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. </span>
          <span>Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. Texto de prueba. </span>
          <span>Texto de prueba.Texto de prueba.Texto de prueba.Texto de prueba.</span>
        </div>
        <div className='
          flex gap-x-3 gap-y-20 justify-between mt-10
          min-[1023px]:w-[1000px] w-full
          min-[1023px]:flex-row flex-col
          min-[1023px]:items-start items-center
        '>
          <div className='
            flex flex-col gap-y-5 items-center
            min-[500px]:w-[450px] w-[95vw]
            min-[1023px]:order-1 order-2
          '>
            <SubtitleComponent title='Puedes encontrarme en:' />
            <div className='flex flex-row flex-wrap gap-x-3 gap-y-4 justify-center'>
              {data.map((center) => {
                return (
                  <div key={`center-${center.id}`} className='flex flex-col items-center'>
                    <span className={`
                      w-[90%] h-[2px] duration-200 ease-in-out  ${selectedCenter === center.id ? 'bg-primaryColor3' : 'bg-whiteColor'}
                    `}></span>
                    <span
                      onClick={() => setSelectedCenter(center.id)}
                      className={`${selectedCenter === center.id ? 'border-primaryColor3' : ''}
                      cursor-pointer px-3 py-1 duration-200 ease-in-out 
                    `}
                    >
                      {center.name}
                    </span>
                    <span className={`
                      w-[90%] h-[2px] duration-200 ease-in-out  ${selectedCenter === center.id ? 'bg-primaryColor3' : 'bg-whiteColor'}
                    `}></span>
                  </div>
                )
              })}
            </div>
            {data.map((center) => {
              return (
                <div
                  style={{ backgroundImage: `url("${basePath}images/mapa${center.id}.png")`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                  className={`
                  ${selectedCenter === center.id ? 'block' : 'hidden'}
                  ${style.with_animation}
                  h-[350px] bg-primaryColor3 relative
                  min-[500px]:w-[450px] w-[95vw]
                `}>
                  <a href={center.maps_url} target='_blank' className='absolute top-5 left-4 flex flex-col items-start gap-1 bg-white px-3 py-1 shadow-customSoft'>
                    <span className='text-[14px] font-bold'>{center.direction}</span>
                    <span className='text-[13px] text-blue-500'>Ampliar el mapa</span>
                  </a>
                </div>
              )
            })}

            {data.map((center) => {
              return (
                <div
                  key={`data-center-${center.id}`}
                  className={`
                    ${selectedCenter === center.id ? 'block' : 'hidden'}
                    ${style.with_animation}
                    flex flex-col gap-2 items-center
                  `}>
                  <span>Dirección: {center.direction}</span>
                  <span>Tlf de contacto: {center.tlf}</span>
                </div>
              )
            })}
          </div>
          <div className='
            flex flex-col gap-y-5 items-center
            min-[500px]:w-[450px] w-[95vw]
            min-[1023px]:order-2 order-1
          '>
            <SubtitleComponent title='Formulario de contacto' />
            <div className='w-full flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-semibold'>Nombre:</span>
                <input type="text" className='border-2 border-primaryColor1 py-[4px] px-2 outline-none focus:outline focus:border-2 focus:border-primaryColor3' />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-semibold'>Teléfono:</span>
                <input type="text" className='border-2 border-primaryColor1 py-[4px] px-2 outline-none focus:outline focus:border-2 focus:border-primaryColor3' />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-semibold'>Email:</span>
                <input type="text" className='border-2 border-primaryColor1 py-[4px] px-2 outline-none focus:outline focus:border-2 focus:border-primaryColor3' />
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-sm font-semibold'>Consulta:</span>
                <textarea className='min-h-[150px] max-h-[250px] border-2 border-primaryColor1 py-[4px] px-2 outline-none focus:outline focus:border-2 focus:border-primaryColor3'></textarea>
              </div>
            </div>
            <div className='mt-5'>
              <SecondaryButtonComponent text='ENVIAR' />
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
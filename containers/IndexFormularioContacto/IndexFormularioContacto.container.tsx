import { TitleComponent } from '@/components/Title.component';
import { SubtitleComponent } from '@/components/Subtitle.component';
import dataRaw from '../../data/ContactData.json';
import style from './IndexFormularioContacto.module.css';
import { SecondaryButtonComponent } from '@/components/SecondaryButton.component';
import { ErrorMessageComponent } from '@/components/ErrorMessage.component';
import { basePath } from '../../config/config';
import Link from 'next/link';
import { UseIndexFormularioContacto } from './IndexFormularioContacto.hook';
import { InputFormComponent } from '@/components/InputForm/InputForm.component';

export function IndexFormularioContactoContainer() {

  const data: { id: number, name: string, direction: string, tlf: string, maps_url: string }[] = dataRaw;

  const { selectedCenter, setSelectedCenter, validationError, form, setFieldOfForm, validateForm } = UseIndexFormularioContacto();

  return (
    <section id='Contacto' className='w-full relative py-20 bg-primaryColor1'>
      <article className='w-full flex flex-col items-center gap-9'>
        <div className='px-2 flex flex-col justify-center'>
          <TitleComponent title='CONTACTO' />
        </div>
        <div className='
          flex flex-col gap-y-3
          min-[1023px]:w-[1000px] w-[90%]
        '>
          <span className='text-center'>Si quieres comenzar a sentirte mejor, y te has decidido a iniciar una terapia, puedes ponerte en contacto conmigo contándome brevemente cuál es tu situación actual y en qué necesitas ayuda. </span>
          <span className='text-center'>Rellena el siguiente formulario, y me pondré en contacto contigo, ¡lo más brevemente posible!</span>
        </div>
        <div className='
          flex gap-x-3 gap-y-32 justify-between mt-10
          min-[1023px]:w-[1000px] w-full
          min-[1023px]:flex-row flex-col
          min-[1023px]:items-start items-center
        '>
          <div className='
            flex flex-col gap-y-5 items-center
            min-[500px]:w-[450px] w-[90vw]
            min-[1023px]:order-1 order-2
          '>
            <div className='min-[1023px]:normal-case uppercase'>
              <SubtitleComponent title='Puedes encontrarme en:' />
            </div>
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
                <div key={`center-${center.id}`}>
                  <div
                    style={{ backgroundImage: `url("${basePath}images/mapa${center.id}.png")`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                    className={`
                      ${selectedCenter === center.id ? 'block' : 'hidden'}
                      ${style.with_animation}
                      h-[350px] bg-primaryColor3 relative
                      min-[500px]:w-[450px] w-[90vw]
                    `}>
                    <a href={center.maps_url} target='_blank' className='absolute top-5 left-4 flex flex-col items-start gap-1 bg-white px-3 py-1 shadow-customSoft'>
                      <span className='text-[14px] font-bold'>{center.direction}</span>
                      <span className='text-[13px] text-blue-400'>Ampliar el mapa</span>
                    </a>
                  </div>
                  <div
                    className={`
                      ${selectedCenter === center.id ? 'block' : 'hidden'}
                      ${style.with_animation}
                      flex flex-col gap-2 items-center
                    `}>
                    <span>Dirección: {center.direction}</span>
                    <span>Tlf de contacto: {center.tlf}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='
            flex flex-col gap-y-5 items-center
            min-[500px]:w-[450px] w-[85vw]
            min-[1023px]:order-2 order-1
          '>
            <div className='min-[1023px]:normal-case uppercase'>
              <SubtitleComponent title='Formulario de contacto' />
            </div>
            {/* FORMULARIO */}
            <div className='w-full flex flex-col gap-3'>
              {/* 3 INPUTS */}
              <InputFormComponent label='Nombre' errorMessage='El nombre debe tener al menos 3 caracteres' form={form} validationError={validationError} formProperty='name' setFieldOfForm={setFieldOfForm} />
              <InputFormComponent label='Teléfono' errorMessage='El número de teléfono debe tener al menos 9 números' form={form} validationError={validationError} formProperty='phone' setFieldOfForm={setFieldOfForm} />
              <InputFormComponent label='Correo electrónico' errorMessage='El correo electrónico debe ser una dirección válida' form={form} validationError={validationError} formProperty='email' setFieldOfForm={setFieldOfForm} />
              {/* TEXTAREA */}
              <div className='flex flex-col gap-2'>
                <span className='text-sm font-semibold'>Consulta:</span>
                <textarea
                  className={`${validationError.text ? 'border-textColorError focus:border-textColorError' : 'border-primaryColor1 focus:border-primaryColor3'} min-h-[150px] max-h-[250px] border-2 py-[4px] px-2 outline-none focus:outline`}
                  value={form.text}
                  onChange={(e) => setFieldOfForm('text', e.target.value)}
                ></textarea>
                {validationError.text &&
                  <ErrorMessageComponent text='La consulta debe tener al menos 3 caracteres' />
                }
              </div>
            </div>
            <div className='w-full flex flex-row items-start justify-start'>
              <span className='text-[13px]'>* Todos los campos deben estar rellenados correctamente, y debe ser aceptada la política de protección de datos.</span>
            </div>
            {/* CHECK DE ACEPTAR TEXTO LEGAL */}
            <div className='w-full flex flex-row justify-start'>
              <label className={style.checkbox_container}>
                <input
                  className={style.custom_checkbox}
                  defaultChecked={form.checked}
                  type='checkbox'
                  onClick={() => setFieldOfForm('checked', !form.checked)}
                />
                <span className={style.checkmark}></span>
              </label>
              <div className='flex flex-row items-center gap-1'>
                <span>Acepto la</span>
                <Link href='/politica-privacidad' target='_blank' className='text-primaryColor3 underline'>
                  política de protección de datos
                </Link>
              </div>
            </div>
            {validationError.checked &&
              <div className='w-full flex flex-row justify-start'>
                <ErrorMessageComponent text='Debes aceptar la política de protección de datos' />
              </div>
            }
            <div className='mt-5'>
              <SecondaryButtonComponent text='ENVIAR' onclick={() => { validateForm(form) }} />
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
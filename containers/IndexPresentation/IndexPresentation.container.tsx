import style from './IndexPresentation.module.css';
import { basePath } from '../../config/config';
import Image from 'next/image';
import { TitleComponent } from '@/components/Title.component';
import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function IndexPresentationContainer() {

  return (
    <section id='Inicio' className='w-full relative bg-whiteColor'>
      <div className="flex flex-col w-full relative items-center pb-20" >
        {/* IMAGEN DE FONDO CON FRASE IMPORTANTE */}
        <div
          className='
            w-full flex flex-row items-center h-[500px] bg-no-repeat bg-cover
            min-[1023px]:pr-20 pr-0
            min-[1023px]:justify-end justify-center
          '
          style={{backgroundImage: `url("${basePath}images/index_presentacion_fondo.jpg")`}}>
          <div className='
            flex flex-col pt-10 gap-3 items-center
            min-[1023px]:w-auto w-full
          '>
            <span className={`${AlataFont.className}
              text-textColor1 min-[768px]:px-1 px-5 bg-[#ffffff94] py-2
              min-[768px]:text-left text-center
              min-[1440px]:text-4xl min-[1280px]:text-3xl min-[768px]:text-2xl text-lg
              `}>(RE) CONECTAR CONTIGO... ES POSIBLE</span>
            <span className='text-textColor1 min-[768px]:px-0 px-5 min-[768px]:text-left text-center min-[1440px]:text-xl min-[768px]:text-lg text-sm'>NEUROPSICOLOGÍA Y PSICOLOGÍA CLÍNICA</span>
          </div>
        </div>
        {/* FOTO Y TEXTO */}
        <div className={`
        w-full flex relative ${style.container_subsection_presentation}
        min-[1023px]:justify-start justify-center
        min-[1023px]:flex-row flex-col
        min-[1023px]:items-start items-center
        min-[1023px]:w-[1000px] w-full
        `}>
          <Image
          src={`${basePath}images/index_presentacion.jpg`}
          width={400}
          height={550}
          alt="Foto presentación"
          className='
            border-2 border-whiteColor shadow-customStrong left-0 saturate-[0.8]
            min-[1023px]:top-[-150px] top-0
            min-[1023px]:order-1 order-2
            min-[1023px]:absolute relative
            min-[450px]:w-[400px] min-[374px]:w-[325px] w-[290px]
            min-[450px]:h-[600px] min-[374px]:h-[500px] h-[450px]
          '
        />
          <div className='
            flex flex-col pt-20 gap-3
            min-[1023px]:pb-0 pb-20
            min-[1023px]:pr-10 pr-0
            min-[1023px]:pl-[450px] pl-0
            min-[1023px]:items-start items-center
            min-[1023px]:order-2 order-1
          '>
            <TitleComponent title='¡TE DOY LA BIENVENIDA!' />
            <span className='max-w-[700px] text-lg'>Mi nombre es Carmina Zamora, psicóloga especialista en neuropsicología clínica, con casi 10 años de experiencia en el acompañamiento de personas con problemas del estado de ánimo, procesos de aceptación y pérdidas, así como rehabilitación en lesiones neurológicas.  </span>
            <span className='max-w-[700px] text-lg'>Mi pasión por el ser humano y la neurociencia, me ha permitido conocer en profundidad el origen de nuestros pensamientos y emociones más profundas, entendiendo cómo se manifiestan tanto en nuestro cuerpo como en nuestra conducta. Ya que es en ese descubrimiento personal, 
            donde nace la transformación. </span>
            <span className='max-w-[700px] text-lg'>Me gusta definirme como una persona apasionada por lo que hace, cercana, creativa y con una gran conciencia social. Algo que no puedo (ni quiero) separar de mi labor como terapeuta, ya que me ayuda a mantener un gran rigor y respeto por las personas a quienes acompaño. </span>
          </div>
        </div>
      </div>
    </section>
  )
}
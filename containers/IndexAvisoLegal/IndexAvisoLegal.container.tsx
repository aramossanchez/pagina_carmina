import Link from 'next/link';
import { LegalH1Component } from '@/components/TitlesForLegalText/LegalH1';

export function IndexAvisoLegalContainer() {

  return (
    <section id='Inicio' className='w-full relative bg-whiteColor'>
      <div className='w-full flex flex-col items-center justify-start pb-20'>
        <article className='
          flex flex-col items-start gap-2
          min-[1023px]:w-[1000px] w-[92%]
        '>
          <header className='flex flex-row items-center gap-1 mt-28 w-full'>
            <Link href='/' className='underline text-primaryColor3'>
              Inicio
            </Link>
            <span>/ Aviso Legal</span>
          </header>
          <LegalH1Component title='AVISO LEGAL' />
          <hr className='w-6/12 border-t-2 border-primaryColor3 h-0 mb-5' />
          <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web , le informa de lo siguiente:
          </p>
          <ol className='
            list-disc
            min-[1023px]:pl-20 pl-[10vw]
          '>
            <li className='py-1'>Denominación social: Carmina Zamora Fernández</li>
            <li className='py-1'>NIF: 74521470K</li>
            <li className='py-1'>Domicilio: C/ Serra Martes, 7, puerta 7, 46015 - Valencia (Valencia)</li>
          </ol>
          <p>
            Con los límites establecidos en la ley, Carmina Zamora Fernández no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones que contienen sus páginas web.
          </p>
          <p>
            Los contenidos e información no vinculan a Carmina Zamora Fernández ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido con carácter informativo y divulgativo.
          </p>
          <p>
            Las páginas de Internet de Carmina Zamora Fernández pueden contener enlaces (links) a otras páginas de terceras partes que Carmina Zamora Fernández no puede controlar. Por lo tanto, Carmina Zamora Fernández no puede asumir responsabilidades por el contenido que pueda aparecer en páginas de terceros.
          </p>
          <p>
            Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este website son propiedad exclusiva de Carmina Zamora Fernández o sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o parcial, deberá contar con el consentimiento expreso de Carmina Zamora Fernández.
          </p>
          <p>
            Asimismo, para acceder a algunos de los servicios que Carmina Zamora Fernández ofrece a través del sitio web, deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos le informamos que, mediante la cumplimentación de los presentes formularios, sus datos personales quedarán incorporados y serán tratados en los ficheros de Carmina Zamora Fernández con el fin de poderle prestar y ofrecer nuestros servicios así como para informarle de las mejoras del sitio Web.
          </p>
          <p>
            Le informamos también de que tendrá la posibilidad en todo momento de ejercer los derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad de sus datos de carácter personal, de manera gratuita mediante email a: carminazamorafernandez@gmail.com o en la dirección: C/ Serra Martes, 7, puerta 7, 46015 - Valencia (Valencia).
          </p>
        </article>
      </div>
    </section>
  )
}
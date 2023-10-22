"use client"

import { IndexConoceme } from '@/containers/IndexConoceme/IndexConoceme.container'
import { IndexDudasFrecuentesContainer } from '@/containers/IndexDudasFrecuentes/IndexDudasFrecuentes.container'
import { IndexEnfoquePropuestaContainer } from '@/containers/IndexEnfoquePropuesta/IndexEnfoquePropuesta.container'
import { IndexIntroduction } from '@/containers/IndexIntroduction/IndexIntroduction.container'
import { IndexOpcionesTerapiaContainer } from '@/containers/IndexOpcionesTerapia/IndexOpcionesTerapia.container'
import { IndexPermitemeAcompañarteContainer } from '@/containers/IndexPermitemeAcompañarte/IndexPermitemeAcompañarte.container'
import { IndexPresentationContainer } from '@/containers/IndexPresentation/IndexPresentation.container'
import { IndexPuedoAyudarteContainer } from '@/containers/IndexPuedoAyudarte/IndexPuedoAyudarte.container'
import { IndexRedesContainer } from '@/containers/IndexRedes/IndexRedes.container'
import { IndexSliderContainer } from '@/containers/IndexSlider/IndexSlider.container'
import { MenuTop } from '@/containers/MenuTop/MenuTop.container'

export default function Index() {
  return (
    <main className='w-[100vw] h-[100vh]'>
      <MenuTop />
      <IndexPresentationContainer />
      <IndexPuedoAyudarteContainer />
      <IndexOpcionesTerapiaContainer />
      <IndexEnfoquePropuestaContainer />
      <IndexPermitemeAcompañarteContainer />
      <IndexDudasFrecuentesContainer />
      <IndexRedesContainer />
      <IndexSliderContainer />
      {/* <IndexIntroduction />
      <IndexConoceme /> */}
    </main>
  )
}

"use client"

import { IndexConoceme } from '@/containers/IndexConoceme/IndexConoceme.container'
import { IndexIntroduction } from '@/containers/IndexIntroduction/IndexIntroduction.container'
import { IndexOpcionesTerapiaContainer } from '@/containers/IndexOpcionesTerapia/IndexOpcionesTerapia.container'
import { IndexPresentationContainer } from '@/containers/IndexPresentation/IndexPresentation.container'
import { IndexPuedoAyudarteContainer } from '@/containers/IndexPuedoAyudarte/IndexPuedoAyudarte.container'
import { MenuTop } from '@/containers/MenuTop/MenuTop.container'

export default function Index() {
  return (
    <main className='w-[100vw] h-[100vh]'>
      <MenuTop />
      <IndexPresentationContainer />
      <IndexPuedoAyudarteContainer />
      <IndexOpcionesTerapiaContainer />
      {/* <IndexIntroduction />
      <IndexConoceme /> */}
    </main>
  )
}

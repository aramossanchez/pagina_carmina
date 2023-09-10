"use client"

import { ConocemeIntroduction } from '@/containers/ConocemeIntroduction/ConocemeIntroduction.container'
import { IndexConexion } from '@/containers/ConocemeConexion/ConocemeConexion.container'
import { MenuTop } from '@/containers/MenuTop/MenuTop.container'
import { Necesitas_ayudaTerapia } from '@/containers/Necesitas_ayudaTerapia/Necesitas_ayudaTerapia.container'

export default function Conoceme() {
  return (
    <main className='w-[100vw] h-[100vh]'>
      <MenuTop />
      <Necesitas_ayudaTerapia />
    </main>
  )
}

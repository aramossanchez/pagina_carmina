"use client"

import { ConocemeIntroduction } from '@/containers/ConocemeIntroduction/ConocemeIntroduction.container'
import { MenuTop } from '@/containers/MenuTop/MenuTop.container'

export default function Conoceme() {
  return (
    <main className='w-[100vw] h-[100vh]'>
      <MenuTop />
      <ConocemeIntroduction />
    </main>
  )
}

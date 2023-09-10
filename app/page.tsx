"use client"

import { IndexConoceme } from '@/containers/IndexConoceme/IndexConoceme.container'
import { IndexIntroduction } from '@/containers/IndexIntroduction/IndexIntroduction.container'
import { IndexPresentation } from '@/containers/IndexPresentation/IndexPresentation.container'
import { MenuTop } from '@/containers/MenuTop/MenuTop.container'

export default function Index() {
  return (
    <main className='w-[100vw] h-[100vh]'>
      <MenuTop />
      <IndexPresentation />
      <IndexIntroduction />
      <IndexConoceme />
    </main>
  )
}

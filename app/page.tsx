"use client"

import { IndexIntroduction } from '@/containers/IndexIntroduction/IndexIntroduction.container'
import { IndexPresentation } from '@/containers/IndexPresentation/IndexPresentation.container'

export default function Index() {
  return (
    <main className='w-[100vw] h-[100vh]'>
      <IndexPresentation />
      <IndexIntroduction />
    </main>
  )
}

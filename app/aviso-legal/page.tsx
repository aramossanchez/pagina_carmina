"use client"

import { IndexAvisoLegalContainer } from '@/containers/IndexAvisoLegal/IndexAvisoLegal.container';
import { MenuTop } from '@/containers/MenuTop/MenuTop.container';

import { Cardo } from 'next/font/google';

const CardoFont = Cardo({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Index() {
  return (
    <main className={`${CardoFont.className} w-[100vw] h-[100vh]`}>
      <MenuTop />
      <IndexAvisoLegalContainer />
    </main>
  )
}

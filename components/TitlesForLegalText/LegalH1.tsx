import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function LegalH1Component({ title = '' }) {

  return (
    <h1 className={`${AlataFont.className} mt-5 text-3xl text-left text-textColor1`}>{title}</h1>
  )
}
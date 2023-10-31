import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function LegalH2Component({ title = '' }) {

  return (
    <h2 className={`${AlataFont.className} my-5 text-2xl text-center text-textColor1`}>{title}</h2>
  )
}
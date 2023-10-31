import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function LegalH3Component({ title = '' }) {

  return (
    <h3 className={`${AlataFont.className} my-3 text-lg text-center text-textColor1`}>{title}</h3>
  )
}
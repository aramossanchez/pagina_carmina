import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function LegalH4Component({ title = '' }) {

  return (
    <h4 className={`${AlataFont.className} my-3 text-[15px] text-left text-textColor1`}>{title}</h4>
  )
}
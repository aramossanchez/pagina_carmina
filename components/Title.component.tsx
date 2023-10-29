import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function TitleComponent({ title = '' }) {

  return (
    <span className={`${AlataFont.className} text-2xl text-center px-2`}>{title}</span>
  )
}
import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function TitleComponent({ title = '' }) {

  return (
    <h2 className={`${AlataFont.className} text-2xl text-center text-titleColor`}>{title}</h2>
  )
}
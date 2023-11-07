import { Alata } from 'next/font/google';

const AlataFont = Alata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function SubtitleComponent({ title = '' }) {

  return (
    <h3 className={`${AlataFont.className} text-xl text-center text-subtitleColor`}>{title}</h3>
  )
}
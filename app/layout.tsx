import type { Metadata } from 'next';
import { basePath } from '../config/config';

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: 'Carmina Zamora - Neuropsicología y Psicología clínica',
  description: '(RE) CONECTAR CONTIGO... ES POSIBLE - NEUROPSICOLOGÍA Y PSICOLOGÍA CLÍNICA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Carmina Zamora - Neuropsicología y Psicología clínica</title>
        <link rel="icon" href={`${basePath}images/logo.ico`} sizes="any" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body>{children}</body>
    </html>
  )
}
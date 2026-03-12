import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HSTECH | Maquinado CNC y piezas industriales',
  description:
    'HSTECH fabrica componentes y piezas mecánicas para maquinaria y equipos industriales en Querétaro y CDMX. Maquinado CNC, ingeniería inversa, urgencias y fabricación sobre plano o muestra.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

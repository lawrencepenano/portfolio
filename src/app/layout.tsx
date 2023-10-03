import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './themeProvider'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lawrence Peñano - Portfolio',
  description: 'Thiss is my portfiolio created using NextJS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div
           className={
            classNames(
                "flex flex-col", 
                "bg-primary",
            )
          }>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

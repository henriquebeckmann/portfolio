'use client'
import { ThemeProvider } from 'next-themes'

import { Navbar, Footer, Container } from '@/components'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="bg-slate-200 text-zinc-800 dark:bg-zinc-800 dark:text-slate-200">
        <ThemeProvider enableSystem={true} attribute="class">
          <Container as="main" sx="max-w-3xl">
            <Navbar />
            {children}
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}

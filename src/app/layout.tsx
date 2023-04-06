import { Container } from '@/components/Container'
import './globals.css'
import { Footer } from '@/components'

export const metadata = {
  title: 'Henrique Beckmann - Homepage',
  description: 'Personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="bg-slate-200 text-zinc-800 dark:bg-zinc-800 dark:text-slate-200">
        <Container as="main">
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}

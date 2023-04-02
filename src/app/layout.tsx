import './globals.css'

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
        {children}
      </body>
    </html>
  )
}

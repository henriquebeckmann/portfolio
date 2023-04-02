export function Container({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <main
      className="max-w-3xl mx-auto px-8"
    >
      {children}
    </main>
  )
}

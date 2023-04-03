export function Center({
  children,
  sx,
}: {
    children: React.ReactNode,
    sx?: string,
  }) {
  return (
    <div
      className={`flex justify-center ${sx}`}
    >
      {children}
    </div>
  )
}

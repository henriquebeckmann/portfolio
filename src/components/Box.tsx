export function Box({
  children,
  sx,
}: {
    children: React.ReactNode,
    sx?: string,
  }) {
  return (
    <div
      className={`bg-slate-300 dark:bg-zinc-700 rounded-lg p-3 ${sx}`}
    >
      {children}
    </div>
  )
}

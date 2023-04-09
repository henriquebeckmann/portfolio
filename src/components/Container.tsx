export function Container({
  children,
  as = "div",
  sx = "",
}: {
    children: React.ReactNode,
    as?: "div" | "main",
    sx?: string,
  }) {
  const styles = `mx-auto px-4 ${sx}`

  if (as === "main") {
    return (
      <main
        className={styles}
      >
        {children}
      </main>
    )
  }

  return (
    <div
      className={styles}
    >
      {children}
    </div>
  )
}

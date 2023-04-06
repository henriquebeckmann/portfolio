export function Container({
  children,
  as = "div",
}: {
    children: React.ReactNode,
    as?: "div" | "main"
  }) {
  const styles = "max-w-3xl mx-auto px-4 sm:max-w-xl"

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

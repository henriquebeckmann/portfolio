export function Title({
  children,
  variant,
}: {
    children: React.ReactNode,
    variant?: string
  }) {

  const variantType = (variant: string) => {
    switch (variant) {
      case 'big': return (
        "text-3xl"
      )
      case 'underline': return (
        "text-xl my-4 underline underline-offset-8 decoration-4 decoration-slate-300 dark:decoration-zinc-700"
      )
      default: return (
        "text-lg"
      )
    }
  }

  return (
    <h3
      className={`font-bold ${variantType(String(variant))}`}
    >
      {children}
    </h3>


  )
}

export function Social({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <a
        href="#"
        className="flex items-center gap-2 px-4 py-2 rounded-md
        font-semibold hover:text-slate-200
        hover:bg-violet-600 duration-100
        "
      >
        {children}
      </a>
    </div>
  )
}

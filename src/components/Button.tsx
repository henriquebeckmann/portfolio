import Link from 'next/link';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/works"
      className="flex items-center gap-2 px-4 py-2 rounded-md
        font-bold text-slate-200
        bg-violet-500 hover:bg-violet-600
        duration-100"
    >
      {children}
    </Link>
  );
}

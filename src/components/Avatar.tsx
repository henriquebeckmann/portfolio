import Image from "next/image";

export function Avatar({ src, alt="" }: { src: string, alt?: string }) {
  return (
    <Image width={96} height={96} className="w-24 h-24 rounded-full border-4 border-slate-300 dark:border-zinc-700" src={src} alt={alt} />
  )
}

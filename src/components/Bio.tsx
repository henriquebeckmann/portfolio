export function Bio({
  date,
  description
}: {
    date: string,
    description: string
  }) {
  return (
    <div className="flex gap-2">
      <span className="font-bold">{date}</span>
      <p>{description}</p>
    </div>
  )
}

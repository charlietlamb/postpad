export default function DashboardTitle({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="title-size font-bold font-base">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

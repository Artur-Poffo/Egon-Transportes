interface SectionTitleProps {
  text: string
}

export function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="h-20 flex items-center gap-6 mb-14">
      <div className="w-4 h-full bg-orange-500" />
      <h1 className="text-3xl text-orange-400 font-mono uppercase tracking-widest font-bold">
        {text}
      </h1>
    </div>
  )
}

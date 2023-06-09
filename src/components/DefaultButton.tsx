interface DefaultButtonProps {
  text: string
}

export function DefaultButton({ text }: DefaultButtonProps) {
  return (
    <button className="w-full py-2 px-4 bg-orange-500 rounded font-bold text-zinc-100 hover:bg-orange-400 transition-colors">
      {text}
    </button>
  )
}

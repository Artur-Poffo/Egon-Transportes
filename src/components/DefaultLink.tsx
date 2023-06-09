interface DefaultLinkProps {
  text: string
  linkTo: string
}

export function DefaultLink({ linkTo, text }: DefaultLinkProps) {
  return (
    <a
      href={linkTo}
      className="underline decoration-orange-500 hover:text-orange-500 transition-colors"
    >
      {text}
    </a>
  )
}

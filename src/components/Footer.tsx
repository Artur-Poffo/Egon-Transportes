import SocialMediaLinks from './SocialMediaLinks'

export function Footer() {
  return (
    <footer className="w-full py-4 absolute bottom-0 flex items-center justify-center gap-4">
      <span className="text-sm text-zinc-500">@Egon-Transportes</span>
      <SocialMediaLinks />
    </footer>
  )
}

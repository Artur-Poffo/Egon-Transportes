import SocialMediaLinks from './SocialMediaLinks'

export function Header() {
  return (
    <header className="hidden md:flex backdrop-blur-md p-4 w-screen fixed top-0 items-center justify-around z-50">
      <a href={'/#home'}>
        {' '}
        <h1 className="text-2xl text-orange-500 font-mono uppercase tracking-wider">
          Egon Transportes
        </h1>
      </a>

      <nav className="flex items-center gap-6">
        <ul className="flex gap-2">
          <li className="opacity-80 hover:opacity-100 transition-opacity">
            <a href={'/#home'}>Home</a>
          </li>
          <li className="opacity-80 hover:opacity-100 transition-opacity">
            <a href={'/#about'}>Sobre</a>
          </li>
          <li className="opacity-80 hover:opacity-100 transition-opacity">
            <a href={'/#info'}>Informações</a>
          </li>
          <li className="opacity-80 hover:opacity-100 transition-opacity">
            <a href={'/#contact'}>Contato</a>
          </li>
        </ul>

        <SocialMediaLinks />
      </nav>
    </header>
  )
}

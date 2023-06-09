'use client'

import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export default function SocialMediaLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={'https://www.instagram.com/egon_transportes/'}
        className="text-xl text-orange-400"
      >
        <InstagramLogo />
      </Link>
      <Link
        href={'https://wa.me/47991044953'}
        className="text-xl text-orange-400"
      >
        <WhatsappLogo />
      </Link>
    </div>
  )
}

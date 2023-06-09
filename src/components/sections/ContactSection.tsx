import Image from 'next/image'
import Link from 'next/link'
import ContactIllustration from '../../../public/contact-illustration.svg'
import { DefaultLink } from '../DefaultLink'
import { SectionTitle } from '../SectionTitle'

export function ContactSection() {
  return (
    <section id="contact" className="pb-10">
      <SectionTitle text="Contato" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="max-w-xl">
          <h3 className="text-2xl text-zinc-100 font-mono">
            Entre em contato com a gente através do{' '}
            <DefaultLink
              text="Instagram"
              linkTo="https://www.instagram.com/egon_transportes/"
            />{' '}
            ou direto pelo{' '}
            <DefaultLink text="WhatsApp" linkTo="https://wa.me/47991044953" />!
          </h3>
        </div>

        <Link href={'https://storyset.com/online'}>
          <Image
            src={ContactIllustration}
            alt=""
            width={500}
            height={500}
            className="p-0 m-0"
          />
        </Link>
      </div>
    </section>
  )
}

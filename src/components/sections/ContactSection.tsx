import Image from 'next/image'
import Link from 'next/link'
import ContactIllustration from '../../../public/contact-illustration.svg'
import { ContentWrapper } from '../ContentWrapper'
import { DefaultLink } from '../DefaultLink'
import { SectionTitle } from '../SectionTitle'
import { SubTitle } from '../SubTitle'

export function ContactSection() {
  return (
    <section id="contact" className="pb-10">
      <SectionTitle text="Contato" />

      <ContentWrapper>
        <div className="max-w-xl">
          <SubTitle>
            Entre em contato com a gente através do{' '}
            <DefaultLink
              text="Instagram"
              linkTo="https://www.instagram.com/egon_transportes/"
            />{' '}
            ou direto pelo{' '}
            <DefaultLink text="WhatsApp" linkTo="https://wa.me/47991044953" />!
          </SubTitle>
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
      </ContentWrapper>
    </section>
  )
}

import Image from 'next/image'
import PerfilImage from '../../../public/Perfil-Image.png'
import { ContentWrapper } from '../ContentWrapper'
import { DefaultLink } from '../DefaultLink'
import { SectionTitle } from '../SectionTitle'
import { SubTitle } from '../SubTitle'

export function AboutSection() {
  return (
    <section id="about" className="pb-16">
      <SectionTitle text="Sobre" />

      <ContentWrapper>
        <div className="flex flex-col gap-2 max-w-xl">
          <SubTitle>Um pouco mais sobre nós...</SubTitle>
          <p>
            Somos uma empresa que realiza fretes e mudanças. Coletas e entregas
            na região de Blumenau e proximidades, mas também oferecemos nossos
            serviços para outros estados. Somos recentes no mercado, porém já
            com muita dedicação e responsabilidade em realizar nossos trabalhos.
            Atendemos particulares, empresas, malharias etc. Para mais
            informações de serviços que prestamos acesse a seção de{' '}
            <DefaultLink text="informações" linkTo="/#info" /> ou entre em{' '}
            <DefaultLink text="contato" linkTo="/#contact" />.
          </p>
        </div>

        <Image
          src={PerfilImage}
          alt="Fotografia do dono da empresa ao lado de um caminhão"
          className="w-[500px] h-[400px] object-cover rounded"
        />
      </ContentWrapper>
    </section>
  )
}

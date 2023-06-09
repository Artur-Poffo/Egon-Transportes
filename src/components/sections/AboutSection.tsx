import Image from 'next/image'
import PerfilImage from '../../../public/Perfil-Image.png'
import { DefaultLink } from '../DefaultLink'
import { SectionTitle } from '../SectionTitle'

export function AboutSection() {
  return (
    <section id="about" className="pb-16">
      <SectionTitle text="Sobre" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col gap-2 max-w-xl">
          <h3 className="text-2xl text-zinc-100 font-mono">
            Um pouco mais sobre nós...
          </h3>
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
      </div>
    </section>
  )
}

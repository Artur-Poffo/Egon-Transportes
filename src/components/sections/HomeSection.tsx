import Image from 'next/image'
import Link from 'next/link'
import TruckImage from '../../../public/home-truck.svg'
import { DefaultButton } from '../DefaultButton'

export function HomeSection() {
  return (
    <section
      className="pb-6 flex flex-col lg:flex-row items-center justify-center lg:justify-around"
      id="home"
    >
      <div className="flex flex-col gap-2 max-w-lg">
        <h1 className="text-3xl text-orange-400 font-bold">
          Egon Transportes a empresa de transportes e fretes perfeita para você!
        </h1>
        <p className="mb-2">
          Somos uma pequena empresa que realiza transportes e fretes na cidade
          de Blumenau e região
        </p>
        <Link href={'https://wa.me/47991044953'} className="w-full">
          <DefaultButton text="Fazer Orçamento" />
        </Link>
      </div>

      <Link href="https://storyset.com/work">
        <Image
          className="m-0 p-0"
          width={500}
          height={500}
          src={TruckImage}
          alt="Ilustração de um caminhão de frete"
        />
      </Link>
    </section>
  )
}

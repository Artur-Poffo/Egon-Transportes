import Image from 'next/image'
import { SectionTitle } from '../SectionTitle'
import { SubTitle } from '../SubTitle'

// IMAGES
import TruckPerfilImage from '../../../public/InfoSection/caminhao.jpg'
import PalletizedLoad from '../../../public/InfoSection/carga-paletizada.jpg'
import Disposal from '../../../public/InfoSection/descarte.jpg'
import AtTheBorder from '../../../public/InfoSection/fronteira.jpg'
import Shift from '../../../public/InfoSection/mudança.jpg'

export function InfoSection() {
  return (
    <section id="info" className="pb-16">
      <SectionTitle text="Informações" />

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-28">
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col gap-2 max-w-4xl">
            <SubTitle>Caminhão:</SubTitle>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsum
              quibusdam voluptatum amet consectetur in accusantium ipsa
              consequatur odio alias error tempore, distinctio veniam tempora.
              Expedita non harum omnis obcaecati!
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-4xl">
            <SubTitle>Motorista:</SubTitle>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsum
              quibusdam voluptatum amet consectetur in accusantium ipsa
              consequatur odio alias error tempore, distinctio veniam tempora.
              Expedita non harum omnis obcaecati!
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-4xl">
            <SubTitle>Serviços:</SubTitle>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsum
              quibusdam voluptatum amet consectetur in accusantium ipsa
              consequatur odio alias error tempore, distinctio veniam tempora.
              Expedita non harum omnis obcaecati!
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-center lg:justify-normal flex-wrap">
          <Image
            src={TruckPerfilImage}
            alt=""
            width={300}
            className="w-[250px] h-[250px] object-cover rounded"
          />
          <Image
            src={AtTheBorder}
            alt=""
            width={300}
            className="w-[250px] h-[250px] object-cover rounded"
          />
          <Image
            src={PalletizedLoad}
            alt=""
            width={300}
            className="w-[250px] h-[250px] object-cover rounded"
          />
          <Image
            src={Disposal}
            alt=""
            width={300}
            className="w-[250px] h-[250px] object-cover rounded"
          />
          <Image
            src={Shift}
            alt=""
            width={300}
            className="w-[250px] h-[250px] object-cover rounded"
          />
        </div>
      </div>
    </section>
  )
}

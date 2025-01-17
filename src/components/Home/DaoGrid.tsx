import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'
import panvalaLogo from '../../../public/images/logo/panvalaLogo.svg'
import TECLogo from '../../../public/images/logo/TEClogo.svg'
import EVMLogo from '../../../public/images/logo/EVMLogo.svg'
import GivethLogo from '../../../public/images/logo/GivethLogo.svg'
import CSLogo from '../../../public/images/logo/CSlogo.svg'
import TSLogo from '../../../public/images/logo/TSLogo.svg'
import Image from 'next/image'
import aguila from '../../../public/images/aguila.png'

export function DaoGrid() {
  const daos = {
    firstRow: [
      {
        name: 'Panvala',
        image: panvalaLogo,
        url: 'https://www.panvala.com/',
      },
      {
        name: 'TEC',
        image: TECLogo,
        url: 'https://tecommons.org/',
      },
    ],
    secoundRow: [
      {
        name: 'EVM Crispr',
        image: EVMLogo,
        url: 'https://evmcrispr.blossom.software/#/',
      },
      {
        name: 'Giveth',
        image: GivethLogo,
        url: 'https://giveth.io/',
      },
    ],
    thirdRow: [
      {
        name: 'The Commons Stack',
        image: CSLogo,
        url: 'https://commonsstack.org/',
      },
      {
        name: 'Trusted Seed',
        image: TSLogo,
        url: 'https://trustedseed.org/',
      },
    ],
  }
  return (
    <div className="h-grid-line relative">
      <div className="sm:hidden block z-50 absolute top-5 right-5 w-32">
        <Image src={aguila} alt="making magic happen" />
      </div>
      <div className="grid grid-col-3 md:grid-cols-5 gap-[1px] vignette">
        <div className="hidden md:block bg-neutral-900 h-16 col-span-2"></div>
        <div className="hidden md:block bg-neutral-900 h-16"></div>
        <div className="hidden md:block bg-neutral-900 h-16"></div>
        <div className="hidden md:block bg-neutral-900"></div>
        <div className="bg-neutral-900 pt-8 w-full col-span-2 row-span-3 z-10 pr-10">
          <Title>
            <span className="md:text-4xl dao-md:text-6xl xl:text-7xl">We</span>
            <span className="md:text-4xl  dao-md:text-6xl xl:text-7xl">
              support
            </span>
            <span className="md:text-4xl  dao-md:text-6xl xl:text-7xl">
              DAO&apos;S
            </span>
          </Title>
          <Subtitle paddingBottom={true} paddingTop={true}>
            <span className="max-w-[440px] ">
              that create greater value for the society, and anticipate to build
              a brighter future for the Decentralized Web.
            </span>
          </Subtitle>
        </div>
        {daos.firstRow.map((dao) => {
          return (
            <div
              key={dao.name}
              className="flex items-center justify-center bg-neutral-900 z-10 h-full"
            >
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        <div className="hidden md:block bg-neutral-900"></div>
        {daos.secoundRow.map((dao) => {
          return (
            <div
              key={dao.name}
              className="flex items-center justify-center bg-neutral-900 z-10 h-full"
            >
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        <div className="hidden md:block bg-neutral-900"></div>
        {daos.thirdRow.map((dao) => {
          return (
            <div
              key={dao.name}
              className="flex items-center justify-center bg-neutral-900 z-10 h-full"
            >
              <a
                href={dao.url}
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <Image src={dao.image} alt={dao.name} />
              </a>
            </div>
          )
        })}
        <div className="hidden md:block bg-neutral-900"></div>
        <div className="hidden md:block bg-neutral-900 h-16 col-span-2"></div>
        <div className="hidden md:block bg-neutral-900 h-16"></div>
        <div className="hidden md:block bg-neutral-900 h-16"></div>
        <div className="hidden md:block bg-neutral-900"></div>
      </div>
    </div>
  )
}

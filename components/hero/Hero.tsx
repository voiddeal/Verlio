import HeroInfoCards from "../hero-info-cards/HeroInfoCards"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-black h-full">
      {/* Hero Image */}
      <div className="relative w-dvw h-dvh">
        <Image
          id="hero-img"
          // src="/hero/hero-image-default.jpg"
          src="/hero/hero-image.jpg"
          width={1920}
          height={1080}
          quality={100}
          alt="hero-image"
          className="grayscale-[30%] w-full h-full object-cover "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="absolute w-full h-full top-0 md:flex justify-between">
        <h1 className="w-fit m-auto mt-[13dvh] text-white">
          <span className="text-[10rem] leading-[11rem] monsieur-la-doulaise-regular">
            Verlio
          </span>
          <br />
          <span className="text-2xl leading-none capitalize">RESTAURANT</span>
        </h1>
        <HeroInfoCards />
      </div>
      {/* <Image
        src={"/verlio.png"}
        width={500}
        height={500}
        alt="verlio logo"
        className="w-32 absolute bottom-0 right-0 m-2"
      /> */}
    </div>
  )
}

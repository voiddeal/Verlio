import Heading from "@/components/Heading"
import FirstStep from "@/components/reservation/first-step/FirstStep"
import SecondStep from "@/components/reservation/second-step/SecondStep"
import Image from "next/image"

export default function ReservationsPage() {
  return (
    <main className="relative">
      <header className="relative">
        <Image
          src={"/reservation.jpeg"}
          fill
          alt="image"
          className="object-cover object-bottom"
          priority
        />
        <Heading heading="Reservation at Verlio" />
      </header>
      <section className="pb-16 px-4 bg-black bg-opacity-5">
        <FirstStep />
        <SecondStep />
      </section>
    </main>
  )
}

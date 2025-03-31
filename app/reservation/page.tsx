import Heading from "@/components/Heading"
import FirstStep from "@/components/reservation/first-step/FirstStep"
import SecondStep from "@/components/reservation/second-step/SecondStep"

export default function ReservationsPage() {
  return (
    <main className="relative">
      <header>
        <Heading heading="Reservation at Verlio" />
      </header>
      <section className="pb-16 px-4 bg-black bg-opacity-5">
        <FirstStep />
        <SecondStep />
      </section>
    </main>
  )
}

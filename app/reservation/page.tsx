import FirstStep from "@/components/reservation/first-step/FirstStep"
import SecondStep from "@/components/reservation/second-step/SecondStep"

export default function ReservationsPage() {
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-[url('/food-pattern-light.jpg')] bg-repeat bg-cover bg-center opacity-5 -z-10"></div>
      <div className="pb-16 px-4 bg-black bg-opacity-5">
        <h2 className="text-3xl pt-32 pb-10 text-center">
          Reservation at Verlio
        </h2>
        <div>
          <FirstStep />
          <SecondStep />
        </div>
      </div>
    </div>
  )
}

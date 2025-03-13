import ReservationFirstStep from "@/components/reservation-form/ReservationFirstStep"
import ReservationSecondStep from "@/components/ReservationSecondStep"

export default function ReservationsPage() {
  return (
    <div>
      <h2 className="text-3xl">Reservation at Verlio</h2>
      <div>
        <ReservationFirstStep />
        <ReservationSecondStep />
      </div>
    </div>
  )
}

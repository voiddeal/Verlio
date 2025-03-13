import DateSelectDropdown from "./DateSelectDropdown"
import HourSelectDropdown from "./HourSelectDropdown"
import PartySelectDropdown from "./PartySelectDropdown"
import "./styles/reservations-page.css"

export default function ReservationFirstStep() {
  return (
    <div className="px-4 w-fit m-auto bg-orange-100">
      <h3 id="reservation-form" className="py-2 border-b border-gray-300">
        1. Date & Time
      </h3>
      <div
        className="flex gap-x-4 py-6"
        aria-labelledby="reservation-form"
        role="form"
      >
        <PartySelectDropdown />
        <DateSelectDropdown />
        <HourSelectDropdown />
      </div>
    </div>
  )
}

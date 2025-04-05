import OccasionInput from "./OccasionInput"
import SubmitButton from "./SubmitButton"
import FirstName from "./FirstNameInput"
import SecondName from "./SecondNameInput"
import EmailInput from "./EmailInput"
import RequestInput from "./RequestInput"
import TelField from "./tel/TelField"

export default function ReservationForm() {
  return (
    <>
      <form
        className="flex flex-col gap-y-6"
        aria-labelledby="reservation-form-second-step"
        id="reservation-form"
      >
        <FirstName />
        <SecondName />
        <TelField />
        <EmailInput />
        <OccasionInput />
        <RequestInput />

        <div>
          <div className="flex mb-2 mt-4">
            <input
              type="checkbox"
              id="notifications"
              className="w-5 h-5 self-start mt-1"
            />
            <label htmlFor="notifications" className="pl-2 font-normal">
              Yes, I want to get text updates and reminders about my
              reservations.*
            </label>
          </div>
          <div className="flex mt-2 mb-4">
            <input
              type="checkbox"
              id="newsletter"
              className="w-5 h-5 self-start mt-1"
            />
            <label htmlFor="newsletter" className="pl-2">
              Sign me up to receive dining offers and news from this restaurant
              by email.
            </label>
          </div>
        </div>
        <SubmitButton />
      </form>
    </>
  )
}

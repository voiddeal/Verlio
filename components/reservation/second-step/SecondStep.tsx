import CountdownTimer from "@/components/CountdownTimer"
import Form from "./Form"
import BackToFirstStepButton from "./BackToFirstStepButton"
import LockOverlay from "../LockOverlay"
import { FaArrowTurnUp } from "react-icons/fa6"

export default function SecondStep() {
  return (
    <div className="relative my-4" id="reservation-second-step">
      <LockOverlay originStep={2} />
      <BackToFirstStepButton />
      <div className="bg-sky-100 py-2 my-4 text-center">
        <p>
          Due to limited availability, we can hold a table for you for 5
          minutes.
        </p>
        <CountdownTimer />
      </div>
      <div className="py-6">
        <h4 className="text-xl py-4 font-semibold">
          <span>Things To Know </span>
          <FaArrowTurnUp className="inline rotate-180 -scale-x-100 ml-2" />
        </h4>
        <div>
          <h6 className="font-semibold">Important dining information</h6>
          <p>
            We have a 15 minute grace period. Please call us if you are running
            later than 15 minutes after your reservation time.
          </p>
          <br />
          <p>
            We may contact you about this reservation, so please ensure your
            email and phone number are up to date.
          </p>
          <br />
          <p>
            Your table will be reserved for 1 hour 45 minutes for parties of up
            to 2; 2 hours for parties of up to 4; and 2 hours 30 minutes for
            parties of 5+.
          </p>
          <br />
          <p>
            Please let us know of any allergies or dietary requirements at time
            of booking.
          </p>
          <br />
          <p>
            Should you wish to speak to our reservation team please call daily
            between 9am - 5pm.
          </p>
        </div>
        <br />
        <div>
          <h6 className="font-semibold">A note from the restaurant</h6>
          <p>
            Your reservation is booked for indoors. We do not allow any outside
            food. For groups of 6 or more, your bill will be presented as one,
            with an automatic 20% gratuity.
          </p>
        </div>
      </div>
      <h3 id="reservation-form-second-step" className="py-2 text-xl font-bold">
        2. Your Details
      </h3>
      <Form />
      <p className="text-sm">
        By selecting “Confirm Reservation” you are agreeing to the terms and
        conditions of the Verlio User Agreement and Privacy Policy.
      </p>
      <br />
      <p className="text-sm">
        *Message & data rates may apply. You can opt out of receiving text
        messages at any time in your account setting or by replying STOP.
      </p>
      <br />
      <p className="text-sm">
        Certain U.S. consumers may have additional data rights, which can be
        exercised by clicking Do Not Sell or Share My Personal Information.
      </p>
    </div>
  )
}

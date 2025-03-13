"use client"

import { useAppSelector } from "@/redux/hooks"
import formattedDate from "@/utils/formattedDate"
import { CiCalendar } from "react-icons/ci"
import { TbClockHour3 } from "react-icons/tb"
import { GoPerson } from "react-icons/go"

export default function ReservationSecondStep() {
  const { date, hour, party } = useAppSelector((state) => state.reservationInfo)
  const handleOccasionChange = (value, element) => {
    if (value === "none") {
      element.selectedIndex = 0
    } else {
    }
  }

  return (
    <div className="px-4">
      <div className="bg-sky-100 py-2 my-4">
        <p> Due to limited availability, we can hold this table for you for</p>
        <strong> {"?"} Minutes</strong>
      </div>
      <div className="border-b border-gray-300 py-6">
        <h4 className="text-xl pb-2">Verlio</h4>
        <div>
          <div className="flex items-center gap-x-1">
            <CiCalendar />
            <p>{formattedDate(date)}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <TbClockHour3 />
            <p>{hour?.toLowerCase()}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <GoPerson />
            <p>{party} People</p>
          </div>
        </div>
      </div>
      <div className="py-6">
        <h4 className="text-lg py-3 font-bold">Things To Know</h4>
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
        </div>
        <div className="py-3">
          <h6 className="font-semibold">A note from the restaurant</h6>
          <p>
            Your reservation is booked for indoors. We do not allow any outside
            food. For groups of 6 or more, your bill will be presented as one,
            with an automatic 20% gratuity.
          </p>
        </div>
      </div>
      <form className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            placeholder="First Name"
            className="border p-3"
            required
          />
          <span>First name is required.</span>
        </div>
        <input type="text" placeholder="Last Name" className="border p-3" />
        <div className="flex">
          <select name="" id="" className="border p-3"></select>
          <input
            type="tel"
            placeholder="Phone number"
            className="border p-3 w-full"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <input
            type="email"
            placeholder="Email"
            className="border p-3"
            required
          />
          <span>Email is required.</span>
        </div>
        <select
          name="occasion"
          aria-label="Select an occasion (optional)"
          className="border p-3 w-fit"
          onChange={(e) =>
            handleOccasionChange(e.currentTarget.value, e.currentTarget)
          }
        >
          <option hidden>Select an occasion (optional)</option>
          <option label="None" value="none">
            None
          </option>
          <option label="Birthday" value="birthday">
            Birthday
          </option>
          <option label="date" value="date">
            Date
          </option>
          <option label="Anniversary" value="anniversary">
            Anniversary
          </option>
          <option label="Special Occasion" value="special-occasion">
            Special Occasion
          </option>
          <option label="Business Meal" value="business-meal">
            Business Meal
          </option>
        </select>
        <input
          type="text"
          name="specialRequests"
          aria-label="Add a special request (optional)"
          placeholder="Add a special request (optional)"
          className="border p-3"
        />
        <div>
          <div className="p-3 flex items-start">
            <input type="checkbox" id="notifications" className="h-full" />
            <label htmlFor="notifications" className="pl-2 h-full">
              Yes, I want to get text updates and reminders about my
              reservations.*
            </label>
          </div>
          <div className="p-3">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
              Sign me up to receive dining offers and news from this restaurant
              by email.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full text-center bg-slate-300 cursor-pointer py-2 my-4"
        >
          Confirm Reservation
        </button>
      </form>
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

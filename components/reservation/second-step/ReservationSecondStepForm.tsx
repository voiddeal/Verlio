import Form from "next/form"

export default function ReservationSecondStepForm() {
  const resserveTable = (formdata: FormData) => {
    const name = formdata.get("fname")
    console.log(name)
  }

  const handleOccasionChange = (value: string, element: HTMLSelectElement) => {
    if (value === "none") {
      element.selectedIndex = 0
    } else {
    }
  }

  return (
    <Form
      action={resserveTable}
      className="flex flex-col gap-y-4"
      aria-labelledby="reservation-form-second-step"
    >
      <div className="flex flex-col gap-y-1">
        <input
          name="fname"
          type="text"
          placeholder="First Name"
          className="border p-3"
          required
        />
        <span>First name is required.</span>
      </div>
      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        className="border p-3"
      />
      <div className="flex">
        <select name="" id="" className="border p-3"></select>
        <input
          type="tel"
          name="tel"
          placeholder="Phone number"
          className="border p-3 w-full"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <input
          type="email"
          name="email"
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
            Sign me up to receive dining offers and news from this restaurant by
            email.
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full text-center bg-slate-300 cursor-pointer py-2 my-4"
      >
        Confirm Reservation
      </button>
    </Form>
  )
}

import OccasionInput from "./OccasionInput"
import TelInput from "./TelInput"

export default function Form() {
  const resserveTable = async (formdata: FormData) => {
    "use server"
    const fname = formdata.get("fname")
    const lname = formdata.get("lname")
    const tel = formdata.get("tel")
    const email = formdata.get("email")
    const occasion = formdata.get("occasion")
    const specialRequest = formdata.get("specialRequest")
  }

  return (
    <form
      action={resserveTable}
      className="flex flex-col gap-y-6"
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
        <small>First name is required.</small>
      </div>
      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        className="border p-3"
      />
      <TelInput />
      <div className="flex flex-col gap-y-1">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3"
          required
        />
        <small>Email is required.</small>
      </div>
      <OccasionInput />
      <input
        type="text"
        name="specialRequest"
        aria-label="Add a special request (optional)"
        placeholder="Add a special request (optional)"
        className="border p-3"
      />
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
            Sign me up to receive dining offers and news from this restaurant by
            email.
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full text-center cursor-pointer py-4 text-xl bg-theme-blue-dark/100 text-white mb-8 hover:bg-theme-blue-default/100"
      >
        Confirm Reservation
      </button>
    </form>
  )
}

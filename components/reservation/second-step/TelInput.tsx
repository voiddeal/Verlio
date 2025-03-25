import { Country } from "@/types/api"
import TelInputSelect from "./TelInputSelect"

export default async function TelInput() {
  const countries: Country[] = await fetch(
    "https://www.apicountries.com/countries"
  ).then((res) => res.json())

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex">
        <TelInputSelect countries={countries} />
        <input
          type="tel"
          name="tel"
          placeholder="Phone number"
          className="border p-3 w-full"
          required
        />
      </div>
      <small>Phone number is required.</small>
    </div>
  )
}

import { Country } from "@/types/api"
import TelCountrySelect from "./TelCountrySelect"
import TelInput from "./TelInput"

export default async function TelField() {
  const countries: Country[] = await fetch(
    "https://www.apicountries.com/countries"
  ).then((res) => res.json())

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex">
        <TelCountrySelect countries={countries} />
        <TelInput />
      </div>
      <small>Phone number is required.</small>
    </div>
  )
}

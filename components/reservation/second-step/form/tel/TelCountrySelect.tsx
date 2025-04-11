"use client"

import { Country } from "@/types/api"
import Image from "next/image"
import { useState } from "react"

interface Props {
  countries: Country[]
}

export default function TelCountrySelect({ countries }: Props) {
  const [image, setImage] = useState<string>("https://flagcdn.com/ca.svg")
  const countryOptions = countries?.map((country) => {
    const { name, callingCodes, flag } = country
    return (
      <option value={flag} key={name}>
        {`${name} +${callingCodes[0]}`}
      </option>
    )
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setImage(e.currentTarget.value)
    e.currentTarget.selectedIndex = 0
  }

  return (
    <div className="flex bg-white border cursor-pointer relative">
      <Image
        src={image}
        width={32}
        height={32}
        alt="country flag"
        className="w-8 cursor absolute inset-y-0 left-2 m-auto"
      />
      <select
        className="w-20 outline-none cursor-pointer z-10 bg-transparent"
        aria-required="true"
        name="phoneNumberCountryId"
        aria-label="Choose Country Code"
        onChange={handleChange}
      >
        <option value="" hidden></option>
        {countryOptions}
      </select>
    </div>
  )
}

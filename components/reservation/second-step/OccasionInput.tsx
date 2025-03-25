"use client"

export default function OccasionInput() {
  const handleOccasionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.currentTarget
    const value = e.currentTarget.value
    if (value === "none") {
      target.selectedIndex = 0
    }
  }

  return (
    <select
      name="occasion"
      aria-label="Select an occasion (optional)"
      className="border p-3 w-fit"
      onChange={handleOccasionChange}
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
  )
}

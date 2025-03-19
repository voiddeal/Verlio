interface DateFormatterResult {
  iso: string
  display: string
}

const timeZone = "America/Vancouver"

const isoDate = new Intl.DateTimeFormat("en-CA", {
  timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})
const displayDate = new Intl.DateTimeFormat("en-CA", {
  timeZone,
  weekday: "long",
  day: "2-digit",
  month: "long",
})

export default function dateFormatter(
  date: Date = new Date()
): DateFormatterResult {
  const iso = isoDate.format(date)
  const display = displayDate.format(date)

  return {
    iso,
    display,
  }
}

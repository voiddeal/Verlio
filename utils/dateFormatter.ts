interface DateFormatterResult {
  iso: string
  display: string
  hours: number
  minutes: number
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

const hour = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
})

const minute = new Intl.DateTimeFormat("en-US", {
  minute: "2-digit",
})

export default function dateFormatter(
  date: Date = new Date()
): DateFormatterResult {
  const iso = isoDate.format(date)
  const display = displayDate.format(date)
  const hours = hour.format(date)
  const minutes = minute.format(date)

  return {
    iso,
    display,
    hours: parseInt(hours),
    minutes: parseInt(minutes),
  }
}

export default function formattedDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    timeZone: "America/Vancouver",
    weekday: "long",
    day: "2-digit",
    month: "long",
  })
}

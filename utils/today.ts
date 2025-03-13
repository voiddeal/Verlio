export default function today() {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Vancouver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

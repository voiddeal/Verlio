import dateFormatter from "@/utils/dateFormatter"

export default function today(): string {
  const { display, iso } = dateFormatter()
  return iso + " | " + display
}

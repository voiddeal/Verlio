export interface Chefs {
  name: string
  role: string
  img: string
  socials: { [key: string]: string }
}

export interface ReservationInfo {
  party: string
  date: string
  hour: string | undefined
  fname: string | undefined
  lname: string | undefined
  tel: string | undefined
  email: string | undefined
  request: string | undefined
  occasion:
    | "none"
    | "birthday"
    | "date"
    | "anniversary"
    | "special-occasion"
    | "business-meal"
}

export interface PortalProps {
  children: React.ReactNode
  containerId?: string // optional ID for the container element
}

import ContactCard from "../info-cards/contact-card/ContactCard"
import HoursCard from "../info-cards/hours-card/HoursCard"
import LocationCard from "../info-cards/location-card/LocationCard"
import "./hero-info-cards.css"
export default function HeroInfoCards() {
  return (
    <div className="w-60 h-96 bg-black bg-opacity-40 backdrop-blur-lg text-white hidden md:flex flex-col justify-evenly">
      <ContactCard />
      <HoursCard />
      <LocationCard />
    </div>
  )
}

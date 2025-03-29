import ContactCard from "./ContactCard"
import HoursCard from "./HoursCard"
import LocationCard from "./LocationCard"

export default function InfoCards() {
  return (
    <div className="bg-black bg-opacity-40 backdrop-blur-lg text-white hidden md:flex flex-col justify-evenly w-fit">
      <ContactCard />
      <HoursCard />
      <LocationCard />
    </div>
  )
}

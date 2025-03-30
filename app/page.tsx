import Hero from "@/components/hero/Hero"
import FeaturedMeals from "@/components/FeaturedMeals"
import HealthyTable from "@/components/HealthyTable"
import Blogs from "@/components/Blogs"
import HowItWorks from "./reservation/HowItWorks"
import Experience from "@/components/experience/Experience"
import Chefs from "@/components/Chefs"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Experience />
      <Chefs />
      <FeaturedMeals />
      <Blogs />
      <HowItWorks />
      <HealthyTable />
    </main>
  )
}

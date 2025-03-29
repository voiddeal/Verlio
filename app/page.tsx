import Hero from "@/components/hero/Hero"
import FeaturedMeals from "@/components/FeaturedMeals"
import HealthyTable from "@/components/HealthyTable"
import Blogs from "@/components/Blogs"
import HowItWorks from "./reservation/HowItWorks"
import Experience from "@/components/experience/Experience"
import Chefs from "@/components/Chefs"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute w-full h-full bg-[url('/food-pattern-light.jpg')] bg-repeat bg-contain bg-center opacity-5 -z-20"></div>
      <Hero />
      <Experience />
      <FeaturedMeals />
      <Chefs />
      <Blogs />
      <HowItWorks />
      <HealthyTable />
    </main>
  )
}

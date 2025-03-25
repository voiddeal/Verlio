import Hero from "@/components/hero/Hero"
import Records from "@/components/Records"
import FeaturedMeals from "@/components/FeaturedMeals"
import EatOurFood from "@/components/eat-our-food/EatOurFood"
import Gallery from "@/components/Gallery"
import Blogs from "@/components/Blogs"
import HowItWorks from "./reservation/HowItWorks"
import Experience from "@/components/experience/Experience"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute w-full h-full bg-[url('/food-pattern-light.jpg')] bg-repeat bg-contain bg-center opacity-10 -z-10"></div>
      <Hero />
      <Records />
      <Experience />
      <FeaturedMeals />
      <EatOurFood />
      <Blogs />
      <Gallery />
      <HowItWorks />
    </main>
  )
}

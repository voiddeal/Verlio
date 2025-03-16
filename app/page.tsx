import FeaturedMeals from "@/components/FeaturedMeals"
import Hero from "@/components/hero/Hero"
import EatOurFood from "@/components/eat-our-food/EatOurFood"
import Gallery from "@/components/Gallery"
import Blogs from "@/components/Blogs"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <EatOurFood />
      <FeaturedMeals />
      <Blogs />
      <Gallery />
    </main>
  )
}

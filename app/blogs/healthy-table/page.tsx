import Heading from "@/components/Heading"
import Image from "next/image"

export default function HealthyTableBlogPost() {
  return (
    <main>
      <header className="relative">
        <Image
          src={"/healthy-table.jpg"}
          fill
          alt="healthy-table"
          className="object-cover"
        />
        <Heading heading="Healthy Table" />
      </header>
      <article className="px-8 py-16 text-primary-default">
        <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6 mb-10"></div>
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Elevate Your Dining Experience with Healthier Choices
          </h2>
          <p className="text-xl text-gray-600">
            Discover the joy of dining that satisfies both your taste buds and
            your body.
          </p>
        </header>
        <section className="leading-7">
          <p className="mb-6">
            In a world where dining often prioritizes speed over nutrition,
            Verlio stands out as a beacon of health-conscious eating. Every meal
            we serve is a testament to our commitment to using the freshest,
            most responsibly sourced ingredients to craft dishes that don&#39;t
            just fill your plate—they nourish your body and soul.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
          <p className="mb-6">
            At Verlio, we believe that food is more than fuel—it&#39;s an
            experience. From the moment ingredients are carefully selected, to
            the last touch of seasoning on your plate, every detail is infused
            with care. Our chefs strive to create dishes that strike the perfect
            balance between indulgent flavors and health benefits.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc ml-6 mb-6">
            <li className="mb-2">
              A variety of menus featuring fresh, seasonal produce.
            </li>
            <li className="mb-2">
              Dishes crafted with ethically sourced ingredients.
            </li>
            <li className="mb-2">
              Options tailored for diverse dietary needs.
            </li>
            <li className="mb-2">
              A relaxed atmosphere for dining and connecting.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="mb-6">
            Choosing Verlio means embracing a healthier lifestyle without
            compromising on flavor. Our dedication to excellence ensures that
            every bite you take is one you’ll savor. We want every guest to
            leave not just satisfied, but inspired to continue making choices
            that improve their well-being.
          </p>
          <p className="mb-6">
            So, why wait? Make a reservation today and discover how healthier
            choices can elevate your dining experience. At Verlio, we’re not
            just serving food—we’re redefining what it means to dine well.
          </p>
        </section>
        <div className="w-10/12 mx-auto bg-[url('/linebreak-2.png')] bg-contain bg-center bg-no-repeat h-6 mt-10"></div>
      </article>
    </main>
  )
}

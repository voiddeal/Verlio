import Image from "next/image"
import pic from "@/public/eat-our-food.png"
import "./eat-our-food.css"

export default function EatOurFood() {
  return (
    <div className="flex items-center justify-evenly py-10 px-4 bg-yellow-100">
      <div>
        <ol className="list-disc text-2xl">
          <li>Top Quality Ingredient</li>
          <li>Cooked By Best Cooks</li>
          <li>100% Natural</li>
          <li>Secret Recipes!</li>
          <li>AND MORE!</li>
        </ol>
      </div>
      <div
        // id="eat-our-food-image-container"
        className="relative animate-spin [animation-duration:250s]"
      >
        <Image src={pic} width={300} alt="food picture" />
      </div>
    </div>
  )
}

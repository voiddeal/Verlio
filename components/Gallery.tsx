import Image from "next/image"
import person from "@/public/gallery/woman-eating.jpg"
import pic1 from "@/public/gallery/food-pic-2.jpg"
import pic2 from "@/public/gallery/food-pic-4.jpg"
import pic3 from "@/public/gallery/food-pic-5.jpg"

export default function Gallery() {
  return (
    <div className="flex justify-center w-full py-14 bg-yellow-400 bg-opacity-40">
      <div className="flex flex-col gap-y-4 justify-center items-start w-6/12 px-10">
        <h3 className="text-3xl">
          A healthier way now has a seat at the table.
        </h3>
        <div>
          <small>Food is Just Half of the experience!</small>
          <br />
          <small>Discover the Unique Ambiance of Verlio!</small>
        </div>
        <div>
          <div>
            <p>Whatever you taste, we have something for everyone.</p>
          </div>
          <div>
            <p>We gratly care for our customers's experience</p>
          </div>
          <div>
            <p>We are very good!</p>
          </div>
        </div>
        <button type="button" className="border border-black px-2">
          See More
        </button>
      </div>
      <div className="w-fit h-fit relative flex justify-center items-center">
        <Image
          src={person}
          width={200}
          height={200}
          alt="woman eating food"
          className="rounded-xl z-10 border-2 border-white"
        />
        <Image
          src={pic1}
          width={80}
          height={80}
          alt="food picture"
          className="rounded-xl absolute -bottom-6 -right-8 z-20 border-2 border-white"
        />
        <Image
          src={pic3}
          width={80}
          height={80}
          alt="food picture"
          className="rounded-xl absolute -bottom-10 -left-8 z-20 border-2 border-white"
        />
        <Image
          src={pic2}
          width={80}
          height={80}
          alt="food picture"
          className="rounded-xl absolute -top-8 -left-12 border-2 border-white"
        />
      </div>
      {/* <div className="w-80 h-full relative flex justify-center items-center">
        <div className="absolute m-auto inset-0 w-fit h-fit">
          <Image
            src={person}
            width={200}
            height={200}
            alt="woman eating food"
            className="rounded-xl"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-fit h-fit">
          <Image
            src={pic1}
            width={100}
            height={100}
            alt="food picture"
            className="rounded-xl"
          />
        </div>
        <div className="absolute bottom-5 -left-5 w-fit h-fit">
          <Image
            src={pic3}
            width={100}
            height={100}
            alt="food picture"
            className="rounded-xl"
          />
        </div>
        <div className="absolute top-0 -left-10 w-fit h-fit -z-10">
          <Image
            src={pic2}
            width={100}
            height={100}
            alt="food picture"
            className="rounded-xl"
          />
        </div>
      </div> */}
    </div>
  )
}

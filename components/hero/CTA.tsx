import Link from "next/link"

export default function CTA() {
  const context = [
    ["Reserve", "/reservation"],
    ["Menus", "/menu"],
    ["Takeout", ""],
  ]

  const CTAElements = context.map(([text, href]) => {
    return (
      <Link key={href} href={href}>
        <button
          type="button"
          className="w-40 py-4 bg-paper hover:bg-paperHover text-white cursor-pointer disabled:bg-paper/85 disabled:text-gray-600 disabled:cursor-not-allowed text-lg"
          disabled={text === "Takeout"}
        >
          {text}
        </button>
      </Link>
    )
  })

  return (
    <div className="absolute top-14 right-8 hidden lg:flex gap-x-1 w-fit ml-auto z-[100]">
      {CTAElements}
    </div>
  )
}

import scrollYTracker from "@/utils/scrollYTracker"
import Link from "next/link"

export default function TopNavBG() {
  const y = scrollYTracker()

  return (
    <div
      className={`absolute w-full top-0 bg-[#e4b257] transition-transform -z-10 duration-300 ${
        y > 100 ? "translate-y-0" : "-translate-y-[100%]"
      }`}
    >
      <div className="px-4 py-3 cursor-pointer w-fit ml-auto">
        <Link
          href="/"
          className="text-stone-100 hover:text-theme-default block text-2xl"
        >
          Verlio
        </Link>
      </div>
    </div>
  )
}

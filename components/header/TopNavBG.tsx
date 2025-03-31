import useScrollTracker from "@/utils/useScrollTracker"
import Link from "next/link"

export default function TopNavBG() {
  const y = useScrollTracker()

  return (
    <div
      className={`fixed w-dvw top-0 bg-[#e4b257] transition-transform -z-10 duration-300 ${
        y > 400 ? "translate-y-0" : "-translate-y-[100%]"
      }`}
    >
      <div className="py-3 cursor-pointer w-fit ml-auto">
        <Link
          href="/"
          className="pr-8 text-stone-100 hover:text-theme-default text-2xl"
        >
          Verlio
        </Link>
      </div>
    </div>
  )
}

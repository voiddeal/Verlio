import Vibe from "./Vibe"
import Taste from "./Taste"
import Records from "../Records"
// import Carrot from "./Carrot"

export default function Experience() {
  return (
    <div className="relative w-11/12 sm:w-5/6 md:w-2/3 mx-auto mb-10 mt-80 flex flex-col md:gap-y-32">
      <Vibe />
      {/* <Carrot /> */}
      <Taste />
      <Records />
    </div>
  )
}

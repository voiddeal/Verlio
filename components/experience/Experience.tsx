import Vibe from "./Vibe"
import Taste from "./Taste"
import Carrot from "./Carrot"

export default function Experience() {
  return (
    <div className="relative w-11/12 sm:w-5/6 md:w-2/3 mx-auto my-12">
      <Vibe />
      <Carrot />
      <Taste />
    </div>
  )
}

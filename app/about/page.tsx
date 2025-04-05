import Heading from "@/components/Heading"
import { FaGithub } from "react-icons/fa6"

export default function About() {
  return (
    <main>
      <header>
        <Heading heading="Verlio" />
      </header>
      <div className="ml-auto w-fit px-4 pt-8 flex gap-x-4 items-center">
        <a href="" className="">
          لینک نسخه دپلوی شده
        </a>
        <a href="https://github.com/voiddeal/Verlio" target="_blank">
          <FaGithub size={50} />
        </a>
      </div>
      <article className="py-8 px-4 my-10" dir="rtl">
        <section lang="fa">
          <p>
            سایت رستورانی Verlio طراحی شده با تمرکز بر UI ،UX، فولدر استراکچر
            مرتب و کد خوانا با قابلیت استفاده مجدد.
          </p>
          <ul className="list-inside list-disc">
            <li>امکان مشاهده انواع منو و جزئیات هر غذا</li>
            <li>امکان رزرو کردن میز</li>
            <li>وبلاگ پیچ</li>
            <li>گالری</li>
          </ul>
        </section>
        <br />
        <section>
          <h2>ابزار های اصلی استفاده شده :</h2>
          <ul className="list-inside list-disc">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Redux Toolkit</li>
            <li>Tailwind</li>
            <li>SASS</li>
          </ul>
        </section>
        <br />
        <section>
          <h2>ابزار های جزئی :</h2>
          <ul className="list-inside list-disc">
            <li>react-slick</li>
            <li>slick-carousel</li>
            <li>react-spinners</li>
            <li>react-intersection-observer</li>
            <li>react-redux</li>
            <li>react-icons</li>
            <li>react-countup</li>
          </ul>
        </section>
      </article>
    </main>
  )
}

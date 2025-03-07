import Link from "next/link"
import Image from "next/image"
import { secondaryPortfolios } from "@/constants/portfolios"

export default function Home() {
  return (
    <div className="flex flex-col space-y-20">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12">
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm Fiqri.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
          I'm a game engineer with a passion for technology, education, and
            storytelling. I build scalable software, share knowledge through
            teaching, and craft engaging visuals through video editing and
            esports broadcasting.
          </p>
          <p className="text-xl text-gray-300 max-w-2xl">
          When I'm not working, I’m exploring new tech, gaming, or seeking
          fresh inspiration from the world around me.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/software-engineering"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              View Projects
            </Link>
            <a
              href="https://drive.google.com/file/d/1LGky7Fij7WLj_PVYp8K7MlDopCOXDZWo/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <Image src="/images/abouts/profpic.jpg" alt="Profile" width={250} height={250} className="rounded-full" priority />
        </div>
      </div>

      {/* Other Skills Section */}
      {/* <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Other Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {secondaryPortfolios.map((portfolio) => (
            <Link
              key={portfolio.title}
              href={portfolio.href}
              className={`px-6 py-3 ${portfolio.bgColor} ${portfolio.hoverColor} text-white rounded-md hover:opacity-90 transition-colors`}
            >
              {portfolio.title}
            </Link>
          ))}
        </div>
      </section> */}
    </div>
  )
}


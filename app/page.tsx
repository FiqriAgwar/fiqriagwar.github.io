import Link from "next/link"
import { secondaryPortfolios } from "@/constants/portfolios"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">I'm Fiqri</h1>
        <p className="text-xl mb-8 max-w-2xl">
          A software engineer who loves to explore.
        </p>
        <Link
          href="/software-engineering"
          className="px-6 py-3 bg-blue-600 text-white dark:text-gray-100 rounded-md transition-colors inline-block mb-12 hover:bg-blue-700"
        >
          View Software Engineering Portfolio
        </Link>
      </div>
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Other Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {secondaryPortfolios.map((portfolio) => (
            <Link
            key={portfolio.title}
            href={portfolio.href}
            className={`px-6 py-3 bg-blue-600 text-white dark:text-gray-100 rounded-md transition-colors inline-block mb-12 ${portfolio.color}`}
          >
            {portfolio.title}
          </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


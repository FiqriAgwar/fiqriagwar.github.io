import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-gray-100 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            Aliffiqri Agwar
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/software-engineering" className="hover:text-blue-400 transition-colors">
                Software Engineering
              </Link>
            </li>
            <li>
              <Link href="/teaching-lecturing" className="hover:text-blue-400 transition-colors">
                Teaching & Lecturing
              </Link>
            </li>
            <li>
              <Link href="/video-editing" className="hover:text-blue-400 transition-colors">
                Video Editing
              </Link>
            </li>
            <li>
              <Link href="/esports-broadcasting" className="hover:text-blue-400 transition-colors">
                Esports Broadcasting
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation


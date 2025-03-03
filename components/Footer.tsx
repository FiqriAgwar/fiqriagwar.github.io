const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Aliffiqri Agwar. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/aliffiqri-agwar/" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/FiqriAgwar" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


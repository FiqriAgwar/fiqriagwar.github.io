"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            Hi, I'm Fiqri
          </Link>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4 items-center">
              <li>
                <Link
                  href="/software-engineering"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Software Engineering
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
                >
                  Other Portfolios <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isOpen && (
                  <ul className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50">
                    <li>
                      <Link
                        href="/teaching-lecturing"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Teaching & Lecturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/video-editing"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Video Editing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/esports-broadcasting"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Esports Broadcasting
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

interface DescriptionItem {
  text: string
  subitems?: string[]
}

interface TimelineItem {
  title: string
  company: string
  companyLogo: string | null
  period: string
  description: DescriptionItem[]
  externalLink?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="relative border-l border-gray-700 ml-3">
      {items.map((item, index) => (
        <div key={index} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full -left-6 ring-8 ring-gray-900 overflow-hidden">
            {item.companyLogo ? (
              <Image
                src={item.companyLogo || "/placeholder.svg"}
                alt={item.company}
                width={48}
                height={48}
                className="object-cover"
              />
            ) : (
              <Image
                src="/default-company-logo.svg"
                alt="Default Company Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            )}
          </span>
          <div className="ml-8">
            <h3 className="flex items-center mb-1 text-lg font-semibold text-2x1">
              {item.title} 
            </h3>
            <h4 className="flex items-center mb-1 text-sm font-semibold text-2x1">
              {item.company ?? ""}
            </h4>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{item.period}</time>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => toggleItem(index)}
                className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
              >
                {expandedItems.includes(index) ? (
                  <>
                    <ChevronUp className="mr-1" size={16} />
                    Hide Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-1" size={16} />
                    Show Details
                  </>
                )}
              </button>
              {item.externalLink && (
                <Link
                  href={item.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-600 transition-colors"
                >
                  <ExternalLink className="mr-1" size={16} />
                  View Portfolio
                </Link>
              )}
            </div>
            {expandedItems.includes(index) && (
              <ul className="mt-4 mb-4 text-base font-normal text-gray-300 list-disc">
                {item.description.map((descItem, descIndex) => (
                  <li key={descIndex} className="mb-2">
                    {descItem.text}
                    {descItem.subitems && (
                      <ul className="mt-1 ml-4 list-circle">
                        {descItem.subitems.map((subitem, subIndex) => (
                          <li key={subIndex} className="text-sm text-gray-400">
                            {subitem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}


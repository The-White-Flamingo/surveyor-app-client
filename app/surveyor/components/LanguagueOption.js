"use client";
import Image from "next/image";

export default function LanguagueOption() {
  return (
    <div className="flex items-center gap-2 cursor-pointer select-none hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
  {/* Flag */}
  <Image
    src={"https://flagcdn.com/w40/us.png"}
    alt="US Flag"
    width={50}
    height={50}
    className="w-6 h-6 rounded-sm object-cover" // Replaces .flag-icon
  />

  {/* Language text */}
  <span className="text-sm font-medium text-gray-800">Eng (US)</span>

  {/* Dropdown arrow */}
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="text-gray-600"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</div>
  )
}

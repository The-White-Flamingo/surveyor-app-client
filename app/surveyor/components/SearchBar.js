"use client";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-4 max-sm:hidden"> {/* Replaced .header-actions */}
        <div className="relative flex items-center"> {/* Replaced .search-box */}
            <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-3 pointer-events-none text-gray-500"
            aria-hidden="true"
            >
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" />
            </svg>
            <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
        </div>
    </div>
  )
}

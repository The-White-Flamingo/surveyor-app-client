"use client";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
        <div className="flex items-center justify-center w-10 h-10 bg-orange-600 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
        </div>
        <span className="text-xl font-bold text-gray-900">Surveyor Panel</span>
    </div>
  )
}

"use client";

export default function SidebarLogo() {
  return (
    <div className="p-4 mt-auto border-t border-gray-200 bg-gray-50">
        <div className="bg-linear-to-br from-orange-500 to-pink-600 rounded-2xl p-4 text-white shadow-lg">
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white/20 backdrop-blur-sm rounded-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            </svg>
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold mb-2">Surveys Pro</h3>
            <p className="text-sm opacity-90 mb-5 leading-relaxed">
            Get access to all features on talentwho
            </p>

            {/* Button */}
            <button className="w-full py-3 font-semibold text-orange-600 bg-white rounded-xl hover:bg-orange-50 transition shadow-md">
            Get Pro
            </button>
        </div>
    </div>
  )
}

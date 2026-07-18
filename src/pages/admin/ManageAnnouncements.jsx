import React from 'react'

function ManageAnnouncements() {
  return (
<div className="min-h-[70vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border-t-8 border-yellow-500 p-8 text-center">

        {/* Icon */}
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-blue-900 text-yellow-400 mb-6">
          <Construction size={40} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-900 mb-3">
          Feature Coming Soon
        </h1>

        {/* Message */}
        <p className="text-gray-600 leading-relaxed mb-6">
          This section of the Bridgeview University portal is currently under
          development. We're working hard to bring you this feature soon.
          Thank you for your patience.
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
          <Clock3 size={18} />
          In Development
        </div>

        {/* Decorative line */}
        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500">
            Bridgeview University Admissions Portal
          </p>
        </div>
      </div>
    </div>
  )
}

export default ManageAnnouncements
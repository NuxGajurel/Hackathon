'use client';

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-[#48C78E] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#3B4D5E]">
            Emergency <span className="text-[#48C78E] italic">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6A7C8E] max-w-3xl mx-auto">
            Get immediate help during medical emergencies
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-[#48C78E] text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Hotline</h2>
            <a href="tel:114" className="text-4xl md:text-5xl font-bold mb-4 block hover:text-green-100 transition-colors">
              114
            </a>
            <p className="text-xl mb-6">Available 24/7 for medical emergencies</p>
            <button className="px-8 py-4 bg-white text-[#48C78E] rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105">
              Call Now
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl border-2 border-[#E6F7F0] hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-[#3B4D5E]">First Aid Guide</h3>
            <p className="text-[#6A7C8E] mb-4">
              Step-by-step instructions for common emergency situations
            </p>
            <button className="px-4 py-2 bg-[#E6F7F0] text-[#48C78E] rounded-lg font-medium hover:bg-[#48C78E] hover:text-white transition-colors">
              View Guide
            </button>
          </div>

          <div className="p-6 bg-white rounded-2xl border-2 border-[#E6F7F0] hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-[#3B4D5E]">Nearest Hospital</h3>
            <p className="text-[#6A7C8E] mb-4">
              Find the closest medical facility to your location
            </p>
            <button className="px-4 py-2 bg-[#E6F7F0] text-[#48C78E] rounded-lg font-medium hover:bg-[#48C78E] hover:text-white transition-colors">
              Locate
            </button>
          </div>

          <div className="p-6 bg-white rounded-2xl border-2 border-[#E6F7F0] hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-[#3B4D5E]">Emergency Contacts</h3>
            <p className="text-[#6A7C8E] mb-4">
              Save important emergency contact numbers for quick access
            </p>
            <button className="px-4 py-2 bg-[#E6F7F0] text-[#48C78E] rounded-lg font-medium hover:bg-[#48C78E] hover:text-white transition-colors">
              View Contacts
            </button>
          </div>

          <div className="p-6 bg-white rounded-2xl border-2 border-[#E6F7F0] hover:shadow-xl transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -mr-8 -mt-8 z-0 group-hover:bg-red-100 transition-colors"></div>
            <h3 className="text-xl font-bold mb-3 text-[#3B4D5E] relative z-10">Track Ambulance</h3>
            <p className="text-[#6A7C8E] mb-4 relative z-10">
              Live tracking for nearby ambulances with ETA.
            </p>
            <a href="/ambulance" className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors relative z-10">
              Start Tracking
            </a>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#3B4D5E]">In Case of Emergency</h3>
          <ul className="space-y-3 text-[#6A7C8E]">
            <li className="flex items-start">
              <span className="text-[#48C78E] mr-3">•</span>
              <span>Stay calm and assess the situation</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span>Call 114 immediately for medical emergencies</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span>Provide clear location and details about the emergency</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span>Follow first aid instructions while waiting for help</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span>Keep emergency contacts readily available</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

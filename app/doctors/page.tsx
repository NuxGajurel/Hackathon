'use client';

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#3B4D5E]">
            Find <span className="text-[#48C78E] italic">Doctors</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6A7C8E] max-w-3xl mx-auto">
            Locate healthcare providers and medical professionals near you
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by location or specialty..."
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 bg-white text-[#3B4D5E] focus:outline-none focus:border-[#48C78E]"
              />
              <button className="px-8 py-4 bg-[#48C78E] text-white rounded-full font-semibold hover:bg-[#3db07d] transition-all">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#48C78E] rounded-full flex items-center justify-center text-white text-xl font-bold">
                DR
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-[#3B4D5E]">Dr. Ram Shrestha</h3>
                <p className="text-[#6A7C8E]">General Practitioner</p>
              </div>
            </div>
            <p className="text-[#6A7C8E] mb-4">
              Bagmati Province • 5+ years experience
            </p>
            <button className="w-full px-4 py-2 bg-[#E6F7F0] text-[#48C78E] rounded-lg font-medium hover:bg-[#48C78E] hover:text-white transition-colors">
              Contact
            </button>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#48C78E] rounded-full flex items-center justify-center text-white text-xl font-bold">
                DR
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Dr. Sunita Thapa</h3>
                <p className="text-slate-600 dark:text-slate-400">Pediatrician</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Bagmati Province • 8+ years experience
            </p>
            <button className="w-full px-4 py-2 bg-[#E6F7F0] text-[#48C78E] rounded-lg font-medium hover:bg-[#48C78E] hover:text-white transition-colors">
              Contact
            </button>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#48C78E] rounded-full flex items-center justify-center text-white text-xl font-bold">
                DR
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Dr. Hari Bhandari</h3>
                <p className="text-slate-600 dark:text-slate-400">Emergency Medicine</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Bagmati Province • 10+ years experience
            </p>
            <button className="w-full px-4 py-2 bg-[#E6F7F0] text-[#48C78E] rounded-lg font-medium hover:bg-[#48C78E] hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#6A7C8E] mb-4">More doctors available in your area</p>
          <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-semibold hover:border-[#48C78E] hover:text-[#48C78E] transition-colors">
            Load More
          </button>
        </div>
      </main>
    </div>
  );
}

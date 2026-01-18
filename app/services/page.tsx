'use client';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#3B4D5E]">
            Healthcare <span className="text-[#48C78E] italic">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6A7C8E] max-w-3xl mx-auto">
            Comprehensive healthcare services designed for rural communities in Nepal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Service Cards */}
          <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#E6F7F0] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#3B4D5E]">Health Records</h3>
            <p className="text-[#6A7C8E]">
              Maintain your health records digitally for easy access and sharing with healthcare providers.
            </p>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#E6F7F0] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Appointment Booking</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Schedule appointments with healthcare providers in your area conveniently.
            </p>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#E6F7F0] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Health Education</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Access educational resources about common health issues and preventive care.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#E6F7F0] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Telemedicine</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Consult with healthcare professionals remotely using low-bandwidth telemedicine services.
            </p>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#E6F7F0] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Health Monitoring</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Track your vital signs and health metrics over time with simple monitoring tools.
            </p>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#E6F7F0] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Community Support</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Connect with community health workers and volunteers in your area.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#3B4D5E]">
            About <span className="text-[#48C78E] italic">SaralSewa</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6A7C8E] max-w-3xl mx-auto">
            Also known as Hamro Sewa - Bringing healthcare closer to rural Nepal
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3B4D5E]">Our Mission</h2>
            <p className="text-lg text-[#6A7C8E] leading-relaxed mb-4">
              SaralSewa (Hamro Sewa) is an AI-powered healthcare management system designed specifically for rural areas of Nepal. 
              We aim to bridge the healthcare gap by providing accessible, affordable, and efficient healthcare solutions to communities 
              that face challenges with connectivity, literacy, and access to medical facilities.
            </p>
            <p className="text-lg text-[#6A7C8E] leading-relaxed">
              Our platform is built with low-bandwidth optimization in mind, ensuring that even users with limited internet connectivity 
              can access critical healthcare services and information when they need it most.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-[#3B4D5E]">Mobile-First Design</h3>
            <p className="text-[#6A7C8E]">
              Optimized for mobile devices, ensuring accessibility on smartphones commonly used in rural areas.
            </p>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Low Bandwidth</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Designed to work efficiently even with slow internet connections, making it accessible to everyone.
            </p>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Multilingual Support</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Available in Nepali and English, with Nepali as the default language for better accessibility.
            </p>
          </div>

          <div className="p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">AI-Powered</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Leveraging AI technology to provide intelligent healthcare recommendations and assistance.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#3B4D5E] text-center">Built With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-lg font-semibold text-[#3B4D5E]">Next.js</p>
              <p className="text-sm text-[#6A7C8E]">App Router</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">TypeScript</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Type Safety</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">Supabase</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Backend</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">AI Integration</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Hugging Face</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#3B4D5E]">Get in Touch</h2>
          <p className="text-lg text-[#6A7C8E] mb-6">
            We're here to help improve healthcare access in rural Nepal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/emergency"
              className="px-8 py-4 bg-[#48C78E] text-white rounded-full font-semibold hover:bg-[#3db07d] transition-all"
            >
              Emergency Help
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-white border-2 border-gray-200 text-[#3B4D5E] rounded-full font-semibold hover:border-[#48C78E] hover:text-[#48C78E] transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

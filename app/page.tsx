export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="w-full border-b border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Godawari Hacks
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Projects
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome to Godawari Hacks
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions and creating amazing projects. 
            Join us on this journey of creativity and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold text-lg border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Fast & Efficient</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Built with cutting-edge technology to deliver high performance and optimal user experience.
            </p>
          </div>

          <div className="p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Modern Design</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Beautiful, responsive design that works seamlessly across all devices and screen sizes.
            </p>
          </div>

          <div className="p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Secure & Reliable</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Built with security best practices and reliable infrastructure to keep your data safe.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us today and start building something amazing. The future is in your hands.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p className="mb-4">&copy; 2024 Godawari Hacks. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

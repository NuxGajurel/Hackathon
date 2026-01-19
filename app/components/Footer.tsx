export default function Footer() {
  return (
    <footer className="bg-[#3B4D5E] text-white py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#48C78E]">SaralSewa</h3>
            <p className="text-gray-300 text-sm">
              AI-powered healthcare for rural Nepal. Connecting communities with quality healthcare services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-[#48C78E] transition">Home</a></li>
              <li><a href="/services" className="hover:text-[#48C78E] transition">Services</a></li>
              <li><a href="/doctors" className="hover:text-[#48C78E] transition">Find Doctors</a></li>
              <li><a href="/emergency" className="hover:text-[#48C78E] transition">Emergency</a></li>
              <li><a href="/admin/dashboard" className="hover:text-[#48C78E] transition border-t border-gray-600 pt-2 mt-2 inline-block">Admin Dashboard</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-[#48C78E] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#48C78E] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#48C78E] transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#48C78E] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Emergency: <a href="tel:114" className="text-[#48C78E] hover:underline">114</a></li>
              <li>Email: info@saralsewa.com</li>
              <li>Bagmati Province, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 SaralSewa (Hamro Sewa). All rights reserved. Designed for rural communities in Nepal.</p>
        </div>
      </div>
    </footer>
  );
}

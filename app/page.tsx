import Image from "next/image";
import Footer from "./components/Footer";

// Using placeholder paths - replace with actual images in public/images/ folder
const SENImage = "/images/la.jpg";
const Doctor = "/images/lala.jpg";
const Doctor2 = "/images/la2.jpg";
const LImage = "/images/l.jpg";
export default function Home() {
  const left = [
    {
      name: "SEMH Specialist",
      top: "10%",
      left: "12%",
      color: "bg-[#E65C4F]",
      img: SENImage,
    },
    {
      name: "Hearing Therapist",
      top: "40%",
      left: "0%",
      color: "bg-[#F3A447]",
      img: SENImage,
    },
    {
      name: "Psychologist",
      top: "70%",
      left: "15%",
      color: "bg-[#5D89BA]",
      img: SENImage,
    },
  ];

  const right = [
    {
      name: "Speech Therapist",
      top: "12%",
      right: "15%",
      color: "bg-[#7AA4C3]",
      img: SENImage,
    },
    {
      name: "Counsellor",
      top: "42%",
      right: "2%",
      color: "bg-[#D8524E]",
      img: SENImage,
    },
    {
      name: "Autism Specialist",
      top: "72%",
      right: "12%",
      color: "bg-[#F6BA5A]",
      img: SENImage,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] overflow-hidden font-sans">
      <main className="relative max-w-6xl mx-auto px-6 pt-12 text-center">
        {/* --- HEADER SECTION --- */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3B4D5E] tracking-tight">
          Care Anytime,{" "}
            <span className="text-[#48C78E] font-normal italic">
              Anywhere
            </span>
          </h1>
          <p className="text-lg text-[#6A7C8E] px-4 max-w-2xl mx-auto font-light leading-relaxed">
          AI-powered healthcare connecting students, teachers, and specialists smarter, faster, and easier.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button className="px-7 py-2.5 bg-[#48C78E] text-white rounded-md font-semibold text-sm shadow-sm hover:opacity-90 transition">
              How it works
            </button>
            <button className="px-7 py-2.5 border border-gray-200 text-[#6A7C8E] rounded-md font-semibold text-sm hover:bg-gray-50 transition">
              Book a demo
            </button>
          </div>
        </div>

        {/* --- VISUAL SECTION --- */}
        <div className="relative h-[580px] w-full max-w-5xl mx-auto">
          {/* SVG Connectors (Z-index 0) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            viewBox="0 0 1000 500"
          >
            <path
              d="M220 100 Q 350 150 480 250"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              fill="none"
            />
            <path
              d="M120 220 Q 300 240 480 250"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              fill="none"
            />
            <path
              d="M250 400 Q 350 350 480 250"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              fill="none"
            />
            <path
              d="M780 120 Q 650 160 520 250"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              fill="none"
            />
            <path
              d="M880 250 Q 700 250 520 250"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              fill="none"
            />
            <path
              d="M750 410 Q 650 360 520 250"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              fill="none"
            />
          </svg>

          {/* LEFT AVATARS */}
          {left.map((p, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center group z-10"
              style={{ top: p.top, left: p.left }}
            >
              <div
                className={`w-20 h-20 ${p.color} p-1 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-md overflow-hidden transform hover:scale-105 transition duration-300`}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover grayscale brightness-110"
                />
              </div>
              <p className="mt-2 text-[11px] font-light text-[#6A7C8E] lowercase tracking-wide">
                {p.name}
              </p>
            </div>
          ))}

          {/* RIGHT AVATARS */}
          {right.map((p, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center group z-10"
              style={{ top: p.top, right: p.right }}
            >
              <div
                className={`w-20 h-20 ${p.color} p-1 rounded-[60%_40%_30%_70%/50%_40%_70%_60%] shadow-md overflow-hidden transform hover:scale-105 transition duration-300`}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover grayscale brightness-110"
                />
              </div>
              <p className="mt-2 text-[11px] font-light text-[#6A7C8E] lowercase tracking-wide">
                {p.name}
              </p>
            </div>
          ))}

          {/* CENTER LAPTOP (Z-index 20) */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="relative transform rotate-[-6deg] scale-100 drop-shadow-2xl">
              {/* Laptop Body Mockup */}
              <div className="w-[440px] h-[300px] bg-white border-[10px] border-[#F1F5F9] rounded-2xl p-1 shadow-inner">
                <div className="w-full h-full bg-[#E2E8F0] rounded-lg overflow-hidden relative">
                  {/* Main Image (The Specialist) */}
                  <div className="absolute inset-0">
                    <Image
                      src={LImage}
                      alt="Specialist on call"
                      fill
                      className="object-cover"
                    />
                    {/* Overlay to mimic video call UI */}
                    <div className="absolute top-3 left-3 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500 opacity-80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-80" />
                      <div className="w-2 h-2 rounded-full bg-green-500 opacity-80" />
                    </div>
                  </div>

                  {/* Small Picture-in-Picture (The Pupil/User) */}
                  <div className="absolute bottom-3 right-3 w-28 h-20 bg-white rounded-md shadow-xl p-0.5 border border-white/20 overflow-hidden">
                    <div className="w-full h-full relative rounded overflow-hidden">
                      <Image
                        src={SENImage}
                        alt="User"
                        fill
                        className="object-cover brightness-90 grayscale-[0.2]"
                      />
                    </div>
                  </div>

                  {/* Call Controls Bar (Bottom Center) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <div className="w-4 h-4 rounded-full bg-white/30" />
                    <div className="w-4 h-4 rounded-full bg-red-500" />
                    <div className="w-4 h-4 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>

              {/* Laptop Base Shadow/Edge */}
              <div className="w-[450px] h-3 bg-[#CBD5E1] rounded-b-3xl -ml-[5px] opacity-50" />
            </div>
          </div>

          {/* Small decorative dot pattern in background */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:12px_12px] opacity-40 z-0" />
        </div>
      </main>

      {/* CHAT BUBBLE */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-14 h-14 bg-[#48C78E] rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        
      </div>
      {/* --- TRUST & STATS SECTION --- */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-12">
          {[
            { label: "Active Specialists", value: "500+" },
            { label: "Schools Supported", value: "120+" },
            { label: "Consultations", value: "10k+" },
            { label: "Parent Rating", value: "4.9/5" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-[#3B4D5E]">{stat.value}</p>
              <p className="text-sm text-[#6A7C8E] uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- ABOUT US / MIDDLE SECTION --- */}
<section className="mt-32 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 text-left">
  
  {/* Left Side: Image with Decorative Blobs */}
  <div className="relative w-full md:w-1/2 flex justify-center">
    {/* Decorative Background Shape */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#E6F7F0] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-50 z-0" />
    
    <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform md:-rotate-2">
      <Image
        src={Doctor2} 
        alt="Specialist Care"
        fill
        className="object-cover"
      />
    </div>

    {/* Small floating "extra" images or badges (optional, as seen in the dental ref) */}
    <div className="absolute -bottom-6 -right-4 w-32 h-32 border-8 border-white rounded-full overflow-hidden shadow-lg z-20 hidden md:block">
       <Image src={Doctor} fill className="object-cover" alt="Detail" />
    </div>
  </div>

  {/* Right Side: Text & Features */}
  <div className="w-full md:w-1/2 space-y-6">
    <div className="space-y-2">
      <span className="text-[#48C78E] font-semibold tracking-wider uppercase text-sm">
        More About Us
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-[#3B4D5E] leading-tight">
        The Best <span className="text-[#48C78E]">Healthcare</span> <br />
        That You Can Trust
      </h2>
    </div>

    <p className="text-[#6A7C8E] leading-relaxed">
      We provide professional healthcare services tailored to student needs. 
      Our team of specialists is dedicated to ensuring every individual receives 
      the personalized attention and support they deserve.
    </p>

    {/* Checklist Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
      {[
        "Modern Equipment",
        "Easy Online Appointment",
        "Comfortable Clinic",
        "Always Monitored",
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="flex-shrink-0 w-5 h-5 bg-[#48C78E] rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[#3B4D5E] font-medium text-sm">{item}</span>
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-4 pt-6">
      <button className="px-8 py-3 bg-[#48C78E] text-white rounded-md font-bold shadow-md hover:bg-[#3db07d] transition">
        Learn More
      </button>
      <button className="px-8 py-3 border border-gray-200 text-[#6A7C8E] rounded-md font-bold hover:bg-gray-50 transition">
        Book Now
      </button>
    </div>
  </div>
</section>
{/* --- TESTIMONIALS / REVIEWS SECTION --- */}
<section className="py-24 bg-[#F8FAFC]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16 space-y-4">
      <span className="text-[#48C78E] font-bold tracking-widest uppercase text-xs">
        Testimonials
      </span>
      <h2 className="text-4xl font-bold text-[#3B4D5E]">
        What Our <span className="text-[#48C78E]">Clients</span> Say
      </h2>
      <p className="text-[#6A7C8E] max-w-xl mx-auto">
        Don’t just take our word for it—hear from the teachers and parents 
        who use our platform every day.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Sarah Jenkins",
          role: "Headteacher",
          content: "The speed at which we can now connect students with SEMH specialists is life-changing for our staff.",
          rating: 5
        },
        {
          name: "Dr. James Wilson",
          role: "Clinical Lead",
          content: "A seamless interface that respects clinical privacy while making healthcare accessible to schools.",
          rating: 5
        },
        {
          name: "Emma Thompson",
          role: "Parent",
          content: "Finally, a way to get my son the support he needs without the 6-month waiting list. Incredible service!",
          rating: 5
        }
      ].map((review, i) => (
        <div 
          key={i} 
          className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:transform hover:-translate-y-2 transition duration-300"
        >
          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#F6BA5A] fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-[#6A7C8E] italic leading-relaxed mb-6">
            "{review.content}"
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
               <Image 
                src={SENImage} 
                alt={review.name} 
                fill 
                className="object-cover grayscale"
              />
            </div>
            <div>
              <h4 className="text-[#3B4D5E] font-bold text-sm">{review.name}</h4>
              <p className="text-[#48C78E] text-xs font-medium">{review.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Footer from "../components/Footer";

// Using actual image paths from public/images/ folder
const SENImage = "/images/lala.jpg";
const Doctor = "/images/lala.jpg";
const Doctor2 = "/images/la2.jpg";

export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Trust & Safety",
      description: "Your health data is encrypted and protected with industry-leading security standards.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Network",
      description: "Connect with certified hospital doctors and medical specialists from leading hospitals across Nepal.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Access",
      description: "Get immediate consultations with hospital doctors without long waiting lists. Connect with specialists in minutes, not months.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Evidence-Based",
      description: "All our services are grounded in clinical research and best practices.",
    },
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Medical Officer",
      specialty: "Senior Consultant, General Medicine",
      image: Doctor,
    },
    {
      name: "Rajesh Kumar",
      role: "Technology Director",
      specialty: "Healthcare Platform Innovation",
      image: Doctor2,
    },
    {
      name: "Dr. Anita Thapa",
      role: "Clinical Operations Lead",
      specialty: "Specialist Network Coordinator",
      image: SENImage,
    },
  ];

  const milestones = [
    { year: "2020", title: "Founded", description: "Started with a vision to connect patients with hospital doctors across Nepal" },
    { year: "2021", title: "Hospital Partnerships", description: "Partnered with 50+ hospitals and medical institutions" },
    { year: "2022", title: "AI Integration", description: "Launched AI-powered symptom checker and medical consultation chatbot" },
    { year: "2023", title: "National Expansion", description: "Expanded doctor network across all provinces of Nepal" },
    { year: "2024", title: "10k+ Consultations", description: "Reached milestone of 10,000+ successful patient-doctor consultations" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" id="hero-3d-section">
        {/* 3D Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-[#48C78E]/15 rounded-full blur-3xl"
            style={{ animation: 'orbit3d 20s linear infinite' }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#3db07d]/15 rounded-full blur-3xl"
            style={{ animation: 'orbit3d 25s linear infinite reverse' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#48C78E]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            style={{ animation: 'pulse3d 8s ease-in-out infinite' }}
          ></div>
        </div>

        {/* Floating 3D Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#48C78E]/30 rounded-full"
            style={{ animation: 'floatShape 12s ease-in-out infinite' }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-6 h-6 bg-[#3db07d]/30 rounded-full"
            style={{ animation: 'floatShape 15s ease-in-out infinite 2s' }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#48C78E]/25 rounded-full"
            style={{ animation: 'floatShape 10s ease-in-out infinite 4s' }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8" style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}>
            <div
              className="inline-block px-5 py-2.5 text-[#48C78E] font-semibold text-sm uppercase tracking-wider transform transition-all duration-500 hover:scale-105"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'depth3d 12s ease-in-out infinite',
                backfaceVisibility: 'hidden'
              }}
            >
              About Hamro Swastra
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-[#3B4D5E] leading-tight transform transition-all duration-500"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'depth3d 14s ease-in-out infinite',
                backfaceVisibility: 'hidden'
              }}
            >
              Connecting Patients with
              <span
                className="block text-[#48C78E] mt-2 transform transition-all duration-500 hover:scale-105"
                style={{
                  display: 'inline-block',
                  transformStyle: 'preserve-3d',
                  animation: 'depth3d 14s ease-in-out infinite 0.2s',
                  backfaceVisibility: 'hidden'
                }}
              >
                Expert Doctors
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-[#6A7C8E] leading-relaxed max-w-2xl mx-auto font-light transform transition-all duration-500"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'fadeInUp3d 1.2s ease-out, depth3dSubtle 16s ease-in-out infinite 1.2s',
                backfaceVisibility: 'hidden'
              }}
            >
              Your trusted healthcare platform connecting you with qualified hospital doctors
              and specialists across Nepal through AI-powered solutions.
            </p>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes depth3d {
            0%, 100% {
              transform: translateZ(0px) rotateX(0deg) rotateY(0deg);
            }
            25% {
              transform: translateZ(25px) rotateX(1deg) rotateY(1deg);
            }
            50% {
              transform: translateZ(15px) rotateX(0deg) rotateY(-1deg);
            }
            75% {
              transform: translateZ(30px) rotateX(-1deg) rotateY(1deg);
            }
          }

          @keyframes depth3dSubtle {
            0%, 100% {
              transform: translateZ(0px) rotateX(0deg);
            }
            50% {
              transform: translateZ(10px) rotateX(0.5deg);
            }
          }

          @keyframes fadeInUp3d {
            from {
              opacity: 0;
              transform: translateY(20px) translateZ(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0) translateZ(0);
            }
          }

          @keyframes orbit3d {
            0% {
              transform: rotateZ(0deg) translateX(100px) rotateZ(0deg) translateZ(0px);
            }
            25% {
              transform: rotateZ(90deg) translateX(100px) rotateZ(-90deg) translateZ(50px);
            }
            50% {
              transform: rotateZ(180deg) translateX(100px) rotateZ(-180deg) translateZ(0px);
            }
            75% {
              transform: rotateZ(270deg) translateX(100px) rotateZ(-270deg) translateZ(50px);
            }
            100% {
              transform: rotateZ(360deg) translateX(100px) rotateZ(-360deg) translateZ(0px);
            }
          }

          @keyframes pulse3d {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1) translateZ(0px);
              opacity: 0.3;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.5) translateZ(100px);
              opacity: 0.6;
            }
          }

          @keyframes floatShape {
            0%, 100% {
              transform: translateY(0px) translateX(0px) translateZ(0px) rotateZ(0deg);
            }
            25% {
              transform: translateY(-30px) translateX(20px) translateZ(50px) rotateZ(90deg);
            }
            50% {
              transform: translateY(-20px) translateX(-20px) translateZ(30px) rotateZ(180deg);
            }
            75% {
              transform: translateY(-40px) translateX(15px) translateZ(60px) rotateZ(270deg);
            }
          }

          #hero-3d-section h1:hover {
            transform: translateZ(40px) rotateY(3deg) !important;
            transition: transform 0.4s ease;
          }

          #hero-3d-section h1 span:hover {
            transform: translateZ(50px) rotateY(2deg) scale(1.02) !important;
            transition: transform 0.4s ease;
          }
        `}} />
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#48C78E] font-semibold tracking-wider uppercase text-sm">
                Our Mission
              </span>
              <h2 className="text-4xl font-bold text-[#3B4D5E]">
                Connecting Patients with Expert Doctors
              </h2>
              <p className="text-lg text-[#6A7C8E] leading-relaxed">
                We believe every patient deserves access to quality healthcare from certified hospital
                doctors, regardless of location or background. Our platform connects patients directly
                with experienced medical professionals and hospitals to create a seamless healthcare experience.
              </p>
              <p className="text-lg text-[#6A7C8E] leading-relaxed">
                By leveraging AI technology and our network of hospital doctors and specialists, we're
                reducing wait times from months to minutes and making expert medical care accessible
                to everyone across Nepal.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-[#E6F7F0] rounded-3xl -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={Doctor2}
                  alt="Healthcare Mission"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="relative order-2 md:order-1">
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#E6F7F0] rounded-3xl -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={Doctor}
                  alt="Our Vision"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <span className="text-[#48C78E] font-semibold tracking-wider uppercase text-sm">
                Our Vision
              </span>
              <h2 className="text-4xl font-bold text-[#3B4D5E]">
                A Healthier Future for All
              </h2>
              <p className="text-lg text-[#6A7C8E] leading-relaxed">
                We envision a Nepal where every patient has immediate access to expert hospital doctors
                and specialists, where medical consultations are convenient and accessible, and where
                families feel confident in receiving quality healthcare services.
              </p>
              <p className="text-lg text-[#6A7C8E] leading-relaxed">
                Through continuous innovation and partnerships with hospitals and medical institutions,
                we're building a comprehensive healthcare network that serves patients across the nation
                with professionalism and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#48C78E] font-semibold tracking-wider uppercase text-sm">
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold text-[#3B4D5E]">
              Our Core Values
            </h2>
            <p className="text-lg text-[#6A7C8E] max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#E6F7F0] rounded-xl flex items-center justify-center text-[#48C78E] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#3B4D5E] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#6A7C8E] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#48C78E] font-semibold tracking-wider uppercase text-sm">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-[#3B4D5E]">
              Milestones & Growth
            </h2>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#48C78E] to-[#3db07d] hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#48C78E] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1 bg-[#F8FAFC] p-6 rounded-xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-[#3B4D5E] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[#6A7C8E] text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#48C78E] font-semibold tracking-wider uppercase text-sm">
              Meet Our Team
            </span>
            <h2 className="text-4xl font-bold text-[#3B4D5E]">
              Leadership & Expertise
            </h2>
            <p className="text-lg text-[#6A7C8E] max-w-2xl mx-auto">
              Our diverse team brings together experienced hospital doctors, medical specialists,
              technology innovation, and a passion for connecting patients with quality healthcare.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#3B4D5E] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#48C78E] font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-[#6A7C8E] text-sm">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-[#48C78E] to-[#3db07d] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-white/90">
              Numbers that reflect our commitment to connecting patients with quality healthcare
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Hospital Doctors" },
              { value: "120+", label: "Partner Hospitals" },
              { value: "10k+", label: "Patient Consultations" },
              { value: "4.9/5", label: "Patient Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#F8FAFC] rounded-3xl p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-[#48C78E] font-semibold tracking-wider uppercase text-sm">
                  Trust & Compliance
                </span>
                <h2 className="text-3xl font-bold text-[#3B4D5E]">
                  Your Privacy & Security Matter
                </h2>
                <p className="text-[#6A7C8E] leading-relaxed">
                  We take data protection seriously. All health information is encrypted,
                  stored securely, and never shared without explicit consent. We comply with
                  healthcare data protection regulations and maintain the highest standards
                  of privacy and security.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                    <span className="text-sm font-semibold text-[#3B4D5E]">HIPAA Compliant</span>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                    <span className="text-sm font-semibold text-[#3B4D5E]">End-to-End Encryption</span>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                    <span className="text-sm font-semibold text-[#3B4D5E]">Certified Specialists</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#48C78E]/20 to-[#3db07d]/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white p-8 rounded-2xl border-2 border-[#48C78E]/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#E6F7F0] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3B4D5E]">Secure Data Storage</h4>
                        <p className="text-sm text-[#6A7C8E]">Bank-level encryption</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#E6F7F0] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3B4D5E]">Privacy First</h4>
                        <p className="text-sm text-[#6A7C8E]">Your data stays private</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#E6F7F0] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#48C78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3B4D5E]">Regular Audits</h4>
                        <p className="text-sm text-[#6A7C8E]">Third-party security reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3B4D5E] to-[#2a3a47] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Connect with Expert Doctors?
          </h2>
          <p className="text-xl text-white/90">
            Join thousands of patients who trust our platform to connect them with qualified hospital doctors and specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#48C78E] text-white rounded-lg font-semibold text-lg hover:bg-[#3db07d] transition shadow-lg">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition border border-white/20">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

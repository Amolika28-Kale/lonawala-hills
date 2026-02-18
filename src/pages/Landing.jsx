import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Menu, X, MapPin, ShieldCheck, TreePine, Phone, Mail, Clock, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ctsData = [
    { no: "CTS 110", area: "10 Acres 29 Guntha", tag: "Major Parcel" },
    { no: "CTS 115", area: "15 Guntha", tag: "Premium Plot" },
    { no: "CTS 111", area: "16 R", tag: "Green Zone" },
  ];

  return (
    <div className="font-['Poppins'] text-gray-900 scroll-smooth bg-white">
      
<nav className="fixed top-0 w-full z-[100] backdrop-blur-xl bg-gradient-to-r from-green-950/80 via-green-900/70 to-green-950/80">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    {/* Logo Section */}
    <div className="flex items-center gap-3">
   

      <div className="leading-tight">
        <h1 className="text-white font-semibold text-lg tracking-wide">
          Lonavala Hills
        </h1>
        <p className="text-yellow-500 text-xs tracking-[0.3em] uppercase">
          Retreat
        </p>
      </div>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-10 text-white/90 font-medium text-sm">
      <a href="#about" className="hover:text-yellow-400 transition">
        About
      </a>
      <a href="#amenities" className="hover:text-yellow-400 transition">
        Amenities
      </a>
      <a href="#location" className="hover:text-yellow-400 transition">
        Location
      </a>
      <a href="#contact" className="hover:text-yellow-400 transition">
        Contact
      </a>
      <Link to="/gallery" className="hover:text-yellow-400 transition">
        Documents
      </Link>

      {/* Enquire Button */}
      <a
        href="#contact"
        className="bg-yellow-500 text-green-950 px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition-all"
      >
        Enquire Now
      </a>
    </div>

    {/* Mobile Toggle */}
    <button
      className="md:hidden text-white"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-green-950 text-white px-6 pb-6 pt-2 space-y-4 shadow-2xl">
      <a href="#about" className="block">About</a>
      <a href="#amenities" className="block">Amenities</a>
      <a href="#location" className="block">Location</a>
      <a href="#contact" className="block">Contact</a>
      <Link to="/gallery" className="block">Documents</Link>
      <a
        href="#contact"
        className="block bg-yellow-500 text-green-950 text-center py-3 rounded-xl font-semibold"
      >
        Enquire Now
      </a>
    </div>
  )}
</nav>


      {/* HERO SECTION */}
{/* HERO SECTION - Updated with Nature Image */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110" 
          style={{ 
            backgroundImage: "url('https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2FFeature%20image.jpg%2FFeature%20image-1723464058752.jpg&w=2048&q=75')" 
          }} 
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Adjusted overlay for better visibility */}

        <div className="relative z-10 px-6 max-w-5xl">
          <p className="text-yellow-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
            Premium Plotted Development • Lonavala, Maharashtra
          </p>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-6">
            Invest in Nature. <br />
            <span className="italic font-light text-yellow-400">Live in Peace.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Premium Hill View Plots in Lonavala — Where Nature Meets Luxury Living.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#contact" className="bg-yellow-500 text-green-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl">
              Enquire Now
            </a>
            <Link to="/gallery" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-950 transition-all">
              View Documents
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white border-t border-white/20 pt-10">
            <div><p className="text-yellow-400 font-bold text-xl">RERA</p><p className="text-xs text-gray-300">Approved Project</p></div>
            <div><p className="text-yellow-400 font-bold text-xl">Clear</p><p className="text-xs text-gray-300">Title Property</p></div>
            <div className="col-span-2 md:col-span-1"><p className="text-yellow-400 font-bold text-xl">2 Hrs</p><p className="text-xs text-gray-300">From Mumbai</p></div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown className="text-white/50" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-yellow-500/10 rounded-3xl rotate-2 transition-transform group-hover:rotate-0"></div>
               <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/5b/db/9e/the-town-of-lonavala.jpg" alt="Lonavala View" className="rounded-2xl relative z-10 shadow-2xl object-cover h-[500px] w-full" />
              
            </div>
            <div>
              <p className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4">About the Project</p>
              <h2 className="text-4xl md:text-5xl font-serif text-green-900 mb-6 leading-tight">Lonavala Hills Retreat <br/><span className="text-gray-400 font-light italic">Premium Plots</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Lonavala Hills Retreat is a premium plotted development surrounded by lush green mountains and peaceful natural surroundings. The project offers clear title property with excellent connectivity to Mumbai and Pune — an unparalleled opportunity to own land amidst nature's finest canvas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-700 shrink-0" />
                  <p className="text-sm font-semibold text-gray-700">Clear Title Property</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-700 shrink-0" />
                  <p className="text-sm font-semibold text-gray-700">Scenic Hill Views</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-700 shrink-0" />
                  <p className="text-sm font-semibold text-gray-700">Excellent Connectivity</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-700 shrink-0" />
                  <p className="text-sm font-semibold text-gray-700">Gated Community</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTS LAND DETAILS SECTION */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {ctsData.map((item, i) => (
              <div key={i} className="border border-gray-100 p-8 rounded-3xl bg-gray-50 hover:bg-green-900 transition-all group">
                <p className="text-yellow-600 font-bold text-xs uppercase mb-2 group-hover:text-yellow-400">{item.tag}</p>
                <h3 className="text-2xl font-serif text-green-900 group-hover:text-white">{item.no}</h3>
                <p className="text-xl font-light text-gray-500 group-hover:text-gray-300">{item.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <section id="amenities" className="bg-green-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">World-Class Amenities</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Everything You Need</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Thoughtfully designed amenities that complement your premium living experience in the hills.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "24/7 Security", desc: "Round-the-clock professional security personnel" },
              { title: "Internal Roads", desc: "Well-laid CC / BT internal road network" },
              { title: "Water & Electricity", desc: "Bore well water supply & electricity connection" },
              { title: "Street Lights", desc: "Solar-powered street lighting throughout" },
              { title: "Gated Entrance", desc: "Premium gated entry with intercom system" },
              { title: "Near Express Highway", desc: "Just minutes from Mumbai-Pune Expressway" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                <h4 className="text-yellow-500 text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-600 font-bold uppercase text-sm mb-4">Prime Location</p>
              <h2 className="text-4xl md:text-5xl font-serif text-green-900 mb-8">Location Advantages</h2>
              <div className="space-y-8">
                {[
                  { t: "Near Mumbai-Pune Expressway", d: "Quick & easy access via the expressway, reducing travel time significantly." },
                  { t: "10 Min from Lonavala Market", d: "All daily necessities, restaurants, and shops within a short drive." },
                  { t: "Surrounded by Nature Points", d: "Adjacent to renowned resorts, scenic viewpoints, and trekking trails." },
                  { t: "Growing Real Estate Hub", d: "Rapidly appreciating micro-market with strong investment potential." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-green-900 text-white rounded-xl flex items-center justify-center shrink-0 font-bold">{i+1}</div>
                    <div>
                      <h4 className="font-bold text-lg text-green-950 mb-1">{item.t}</h4>
                      <p className="text-gray-600 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2">
                <MapPin className="text-green-800" size={16} /> Lonavala, Maharashtra, India
              </div>
             <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60515.36259021873!2d73.37614086937512!3d18.7888746002167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8010987498f55%3A0x8058a567acc8c23f!2sLonavala%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Lonavala Hills Retreat Location"
  ></iframe>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-yellow-600 font-bold uppercase text-sm mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-serif text-green-900 mb-6">Enquire Now</h2>
            <p className="text-gray-600 text-lg mb-10">Reach out to our team for site visits, pricing details, or any queries about the project.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center"><Phone className="text-green-900" /></div>
                <div><p className="text-gray-400 text-xs font-bold uppercase">Phone / WhatsApp</p><p className="font-bold">+91 99999 99999</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center"><Mail className="text-green-900" /></div>
                <div><p className="text-gray-400 text-xs font-bold uppercase">Email</p><p className="font-bold">info@lonavalaretreats.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center"><Clock className="text-green-900" /></div>
                <div><p className="text-gray-400 text-xs font-bold uppercase">Office Hours</p><p className="font-bold">Mon–Sat: 9 AM – 7 PM</p></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-serif text-green-950 mb-6 italic">We'd love to hear from you</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name *" className="w-full p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-900 transition-all outline-none" />
              <input type="tel" placeholder="Phone Number *" className="w-full p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-900 transition-all outline-none" />
              <textarea placeholder="Message" rows="4" className="w-full p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-green-900 transition-all outline-none" />
              <button className="w-full bg-green-900 text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-all flex items-center justify-center gap-2">
                Send Enquiry via WhatsApp <Phone size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-950 text-white pt-20 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-2xl font-bold mb-6 italic">Lonavala Hills <br/><span className="text-yellow-500">Retreat</span></h2>
              <p className="text-gray-400 text-sm leading-relaxed">Premium hill view plotted development in the scenic hills of Lonavala, Maharashtra.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-yellow-500 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Project</a></li>
                <li><a href="#amenities" className="hover:text-white transition">Amenities</a></li>
                <li><a href="#location" className="hover:text-white transition">Location</a></li>
                <li><Link to="/gallery" className="hover:text-white transition">Documents & Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-yellow-500 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-2"><Phone size={16} className="text-yellow-500" /> +91 99999 99999</li>
                <li className="flex gap-2"><Mail size={16} className="text-yellow-500" /> info@lonavalaretreats.com</li>
                <li className="flex gap-2"><MapPin size={16} className="text-yellow-500" /> Lonavala, Maharashtra, India – 410401</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">© 2026 Lonavala Hills Retreat. All rights reserved.</p>
            <p className="text-yellow-500 font-bold text-xs tracking-widest">RERA APPROVED | CLEAR TITLE PROPERTY</p>
          </div>
        </div>
</footer>
      {/* STICKY WHATSAPP */}
      <a href="https://wa.me/919999999999" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-2xl z-[200] flex items-center gap-2 hover:scale-110 transition-transform">
        <Phone size={20} fill="white" /> WhatsApp Us
      </a>
    </div>
  );
}
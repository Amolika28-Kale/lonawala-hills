import { Download, FileText, Video, ImageIcon, PlayCircle, ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function GalleryPage() {
  // Logic & Content preserved exactly
const documents = [
  { name: "Municipal Council Certificate", file: "/doc/doc1.pdf" },
  { name: "Online Free E-Search Report", file: "/doc/doc2.pdf" },
  { name: "Mutation Entry Record", file: "/doc/doc3.pdf" },
  { name: "Record of Rights Document", file: "/doc/doc4.pdf" },
  { name: "Lonavala Property Information", file: "/doc/doc5.pdf" },
];


  const images = Array.from({ length: 17 }, (_, i) => `${i + 1}.jpeg`);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-green-100">
      
      {/* ================= HEADER ================= */}
      <header className="bg-green-900 pt-16 pb-24 px-6 text-center relative overflow-hidden">
        {/* Abstract background shapes for premium feel */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-white transition-colors mb-8 text-sm font-medium tracking-wide group">
             <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Overview
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Project <span className="text-yellow-500 italic font-light">Resources</span>
          </h1>
          <p className="text-green-100/70 max-w-2xl mx-auto text-lg">
            Explore the scenic beauty of Lonavala Hills Retreat and download official documentation.
          </p>
        </div>
      </header>

      {/* ================= DOCUMENTS SECTION ================= */}
      <section className="py-16 px-6 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8 ml-2">
            <div className="h-8 w-1.5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-green-950 uppercase tracking-widest">Legal Vault</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl border border-gray-100 p-5 flex items-center justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 text-green-900 p-4 rounded-2xl group-hover:bg-green-900 group-hover:text-yellow-400 transition-colors">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 leading-tight group-hover:text-green-950">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Official PDF</p>
                  </div>
                </div>

                <a
  href={doc.file}
  target="_blank"
  rel="noopener noreferrer"
  download
  className="bg-gray-50 text-gray-400 hover:bg-yellow-500 hover:text-green-950 p-3 rounded-2xl transition-all active:scale-90"
>
  <Download size={20} />
</a>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PHOTO GALLERY ================= */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {images.map((img, i) => (
    <div
      key={i}
      className="group relative overflow-hidden rounded-3xl shadow-xl bg-green-900/40"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={`/gallery/${img}`}
          alt={`Lonavala Property View ${i + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-semibold text-sm tracking-wide">
          View Image
        </span>
      </div>
    </div>
  ))}
</div>


      {/* ================= VIDEO SECTION ================= */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              HD Walkthrough
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-green-900">Project Video</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] p-4 md:p-8">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="relative rounded-[2rem] overflow-hidden group shadow-inner">
                <video
                  controls
                  className="w-full aspect-video block object-cover"
                >
                  <source src="/videos/project.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
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
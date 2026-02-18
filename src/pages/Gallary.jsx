import { Download, FileText, Video, ImageIcon, ArrowLeft, MapPin, Landmark } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function GalleryPage() {
  const documents = [
    { name: "Municipal Council Certificate", file: "/doc/doc1.pdf" },
    { name: "Online Free E-Search Report", file: "/doc/doc2.pdf" },
    { name: "Mutation Entry Record", file: "/doc/doc3.pdf" },
    { name: "Record of Rights Document", file: "/doc/doc4.pdf" },
    { name: "Lonavala Property Information", file: "/doc/doc5.pdf" },
  ];

  const ctsDetails = [
    { number: "110", area: "10 Acer 29 Guntha" },
    { number: "115", area: "15 Guntha" },
    { number: "111", area: "16 R" },
  ];

  const images = Array.from({ length: 17 }, (_, i) => `${i + 1}.jpeg`);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-green-100 pb-20">
      
      {/* ================= HEADER ================= */}
      <header className="bg-green-900 pt-16 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-white transition-colors mb-8 text-sm font-medium tracking-wide group">
             <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Overview
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Project <span className="text-yellow-500 italic font-light">Resources</span>
          </h1>
          <p className="text-green-100/70 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Download official documentation, site photos, and HD project walkthroughs.
          </p>
          
          {/* GOOGLE MAPS LINK */}
          <a 
            href="https://maps.app.goo.gl/DpnUy2zemu6LJC6x7?g_st=aw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full backdrop-blur-md transition-all font-semibold"
          >
            <MapPin size={18} className="text-yellow-500" />
            View on Google Maps
          </a>
        </div>
      </header>

      {/* ================= LAND DETAILS & DOCUMENTS ================= */}
      <section className="py-16 px-6 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CTS NUMBERS CARD */}
          <div className="lg:col-span-1 bg-white rounded-3xl border border-gray-100 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="text-yellow-500" size={24} />
              <h2 className="text-xl font-bold text-green-950 uppercase tracking-tight">CTS Number</h2>
            </div>
            <div className="space-y-4">
              {ctsDetails.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="font-bold text-green-900">{item.number}:</span>
                  <span className="text-gray-600 font-medium">{item.area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DOCUMENTS GRID */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 ml-2">
              <div className="h-8 w-1.5 bg-yellow-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-green-950 uppercase tracking-widest">Legal Vault</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documents.map((doc, i) => (
                <div key={i} className="group bg-white rounded-3xl border border-gray-100 p-5 flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-50 text-green-900 p-4 rounded-2xl group-hover:bg-green-900 group-hover:text-yellow-400 transition-colors">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-900 leading-tight truncate w-32 md:w-full">{doc.name}</h3>
                      <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Official PDF</p>
                    </div>
                  </div>
                  <a href={doc.file} download className="bg-gray-50 text-gray-400 hover:bg-yellow-500 hover:text-green-950 p-3 rounded-2xl transition-all active:scale-90 shadow-sm">
                    <Download size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHOTO GALLERY ================= */}
      <section className="py-20 px-6 bg-green-950">
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
           <div>
              <div className="flex items-center gap-2 mb-2">
                <ImageIcon className="text-yellow-500" size={18} />
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">Site Images</span>
              </div>
              <h2 className="text-4xl font-black text-white">Photo Gallery</h2>
           </div>
           <p className="text-green-100/50 text-sm">Hover or tap on images to download</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2rem] shadow-xl bg-green-900/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`/gallery/${img}`}
                  alt={`Property View ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay with Download Button */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                <span className="text-white text-xs font-bold uppercase tracking-widest">Site View {i+1}</span>
                <a 
                  href={`/gallery/${img}`} 
                  download={`Site-Photo-${i+1}.jpeg`}
                  className="bg-yellow-500 text-green-950 px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg hover:bg-white"
                >
                  <Download size={18} /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              HD Media
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-8">Project Walkthrough</h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] p-4 md:p-8">
                <div className="relative rounded-[2rem] overflow-hidden group shadow-inner ring-1 ring-gray-100">
                  <video controls className="w-full aspect-video block object-cover">
                    <source src="/videos/project.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              
              <div className="mt-10">
                <a 
                  href="/videos/project.mp4" 
                  download="Lonavala-Hills-Retreat-Video.mp4"
                  className="inline-flex items-center gap-3 bg-green-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-yellow-500 hover:text-green-950 transition-all active:scale-95"
                >
                  <Download size={22} /> Download Full HD Video
                </a>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
import { Link } from "react-router-dom";
import React from 'react';
import { CheckCircle2, ArrowRight, FileText, Image as ImageIcon } from 'lucide-react';
// Swiper (Slider) settings
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Landing() {
  // New Premium Nature/Lonavala style images
  const sliderImages = [
    "https://images.unsplash.com/photo-1618805714320-f8825019c1be?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uYXZhbGElMkMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    "https://static.thehosteller.com/hostel/images/Feature%20image.jpg/Feature%20image-1723464058752.jpg",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1589286875480-743411b84f53?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9uYXZhbGElMkMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
  ];

  return (
    <div className="font-['Poppins'] text-gray-900 bg-white selection:bg-green-100">
      
      {/* ================= ABOUT SECTION (TOP) ================= */}
      <section id="about" className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
 
          
          <h1 className="text-4xl md:text-6xl font-serif text-green-950 mb-6 leading-tight">
            Lonavala Hills Retreat <br/>
            <span className="text-yellow-600 italic font-light">Escape to Serenity</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Experience the perfect blend of luxury and nature. Our premium plots offer breathtaking views of the Sahyadri mountains, providing a peaceful sanctuary for you and your family to build your dream vacation home.
          </p>
          
     
        </div>
      </section>

      {/* ================= SLIDER SECTION ================= */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Decorative element */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-green-800 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={true}
                className="h-[350px] md:h-[550px] w-full"
              >
                {sliderImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <img src={img} className="w-full h-full object-cover" alt={`Lonavala Scenery ${index + 1}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* ================= VIEW ALL DOCUMENTS TAB/BUTTON ================= */}
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full max-w-md p-1 bg-gray-100 rounded-2xl flex items-center mb-8">
               <div className="flex-1 text-center py-3 bg-white rounded-xl shadow-sm font-bold text-green-900 flex items-center justify-center gap-2">
                 <ImageIcon size={18} /> Project Gallery
               </div>
               <Link to="/gallery" className="flex-1 text-center py-3 text-gray-500 font-medium hover:text-green-900 transition-colors flex items-center justify-center gap-2">
                 <FileText size={18} /> Documents
               </Link>
            </div>

            <Link 
              to="/gallery" 
              className="group bg-green-950 text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-yellow-500 hover:text-green-950 transition-all shadow-xl hover:shadow-yellow-500/20 active:scale-95"
            >
              View All Documents & Media
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            
          </div>
        </div>
      </section>

    
    </div>
  );
}
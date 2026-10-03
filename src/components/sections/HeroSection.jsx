import React from "react";
import { ShoppingBasket, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { generateEnquiryWhatsAppURL } from "../../utils/whatsapp";

export default function HeroSection() {
  const waUrl = generateEnquiryWhatsAppURL();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-white to-[#fefce8] pt-6 pb-16 sm:pt-10 sm:pb-20">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-200/30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-yellow-200/30 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Fresh Fruits • Janakpuri
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-5 text-balance">
              <span className="sr-only">Dwivedi Fruit Shop – Fresh Fruits in Janakpuri: </span>
              Freshness You Can<br />
              <span className="text-green-600">Taste</span> Every Day.
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-2 max-w-lg mx-auto lg:mx-0">
              Fresh, hand-picked fruits available daily at Dwivedi Fruit Shop, Chhoti Subji Mandi, Janakpuri.
            </p>
            <p className="text-gray-500 text-sm mb-2">
              Visit our shop or order directly on WhatsApp.
            </p>
            <p className="text-green-700 text-sm font-medium mb-8" lang="hi">
              जनकपुरी में ताज़े फल की दुकान — रोज़ ताज़ा, सही दाम में 🍎
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#shop"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg shadow-green-200 hover:shadow-green-300 transition-all active:scale-95 text-base"
              >
                <ShoppingBasket className="w-5 h-5" />
                Shop Fresh Fruits
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-700 font-bold px-7 py-3.5 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all active:scale-95 text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order on WhatsApp
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start">
              {["Fresh Daily", "Premium Quality", "Local Shop", "Easy WhatsApp Ordering"].map((point) => (
                <div key={point} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Fruit visual */}
          <div className="relative flex items-center justify-center h-72 sm:h-96 lg:h-[500px]">
            {/* Main fruit basket image */}
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-yellow-50 flex items-center justify-center shadow-2xl shadow-green-100/60">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=85"
                  alt="Fresh fruit assortment — apples, mangoes, oranges, grapes and more"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                  onError={(e) => { e.target.src = "https://placehold.co/400x400/f0fdf4/22c55e?text=🍎"; }}
                />
              </div>
            </div>

            {/* Floating fruit chips */}
            <FloatingChip emoji="🍎" top="10%" left="5%" delay="0" label="Apple" />
            <FloatingChip emoji="🥭" top="15%" right="2%" delay="0.5s" label="Mango" />
            <FloatingChip emoji="🍇" bottom="20%" left="3%" delay="1s" label="Grapes" />
            <FloatingChip emoji="🍌" bottom="15%" right="5%" delay="1.5s" label="Banana" />
            <FloatingChip emoji="🍊" top="45%" left="-2%" delay="0.8s" label="Orange" />
            <FloatingChip emoji="🍑" top="50%" right="-2%" delay="0.3s" label="Peach" />

            {/* Fresh tag */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-5 py-2.5 flex items-center gap-3 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-xs text-gray-500 leading-none">Fresh from the market.</p>
                <p className="text-sm font-bold text-gray-900 leading-none mt-0.5">Ready for your basket.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ emoji, top, left, right, bottom, delay, label }) {
  const style = {
    top, left, right, bottom,
    animationDelay: delay,
  };
  return (
    <div
      className="absolute z-20 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center text-xl animate-float"
      style={style}
      aria-label={label}
      role="img"
    >
      {emoji}
    </div>
  );
}

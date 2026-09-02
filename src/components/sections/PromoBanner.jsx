import React from "react";
import { generateEnquiryWhatsAppURL } from "../../utils/whatsapp";

export default function PromoBanner() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-green-600 rounded-3xl px-6 sm:px-12 py-10 sm:py-14 text-center text-white">
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10" aria-hidden="true" />
          <div className="absolute -bottom-14 -right-8 w-48 h-48 rounded-full bg-white/10" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-6 h-6 rounded-full bg-yellow-300/40 animate-float" aria-hidden="true" />
          <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-white/30 animate-float-delay-1" aria-hidden="true" />

          {/* Fruit emojis */}
          <span className="absolute top-4 left-8 text-3xl animate-float hidden sm:block" aria-hidden="true">🍎</span>
          <span className="absolute top-4 right-8 text-3xl animate-float-delay-1 hidden sm:block" aria-hidden="true">🥭</span>
          <span className="absolute bottom-4 left-16 text-2xl animate-float-delay-2 hidden sm:block" aria-hidden="true">🍇</span>
          <span className="absolute bottom-4 right-16 text-2xl animate-float-delay-3 hidden sm:block" aria-hidden="true">🍌</span>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3">
              Fresh Fruits. Local Shop. Easy Ordering.
            </h2>
            <p className="text-green-100 text-sm sm:text-base max-w-xl mx-auto mb-7">
              Skip the complicated checkout. Choose your fruits and send your order directly to Dwivedi Fruit Shop on WhatsApp.
            </p>
            <a
              href={generateEnquiryWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-green-700 font-bold px-8 py-3.5 rounded-2xl hover:bg-green-50 transition-all shadow-lg active:scale-95 text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start Your Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

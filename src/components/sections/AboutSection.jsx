import React from "react";
import { MAPS_HREF } from "../../utils/whatsapp";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-green-100">
              <img
                src="/shop.jpeg"
                alt="Fresh fruits displayed at a market stall"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.target.src = "https://placehold.co/600x400/f0fdf4/22c55e?text=Fresh+Fruits"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-5 -right-3 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-green-50">
              <span className="text-3xl" aria-hidden="true">🍎</span>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-none">Fresh Daily</p>
                <p className="text-gray-500 text-xs mt-0.5">Janakpuri, New Delhi</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 text-balance">
              Your Neighbourhood<br /><span className="text-green-600">Fruit Shop</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At <strong className="text-gray-900">Dwivedi Fruit Shop</strong>, we believe buying fresh fruits should be simple. Explore the fruits currently available at our Janakpuri shop, choose what you need, and send us your order directly through WhatsApp.
              </p>
              <ul className="space-y-2">
                {[
                  "No complicated checkout.",
                  "No account required.",
                  "Just fresh fruits and easy ordering.",
                ].map((line) => (
                  <li key={line} className="flex items-center gap-2 font-medium text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Visit Our Shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

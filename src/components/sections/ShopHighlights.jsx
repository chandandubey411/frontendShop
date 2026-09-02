import React from "react";
import { CalendarDays, Star, MessageCircle, MapPin } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    color: "bg-green-100 text-green-600",
    title: "Fresh Every Day",
    desc: "Hand-picked fresh fruits available daily at our Janakpuri shop.",
  },
  {
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
    title: "Premium Selection",
    desc: "Indian seasonal favourites as well as premium imported fruits.",
  },
  {
    icon: MessageCircle,
    color: "bg-emerald-100 text-emerald-600",
    title: "Easy WhatsApp Orders",
    desc: "Select your fruits and send your order in seconds on WhatsApp.",
  },
  {
    icon: MapPin,
    color: "bg-orange-100 text-orange-600",
    title: "Visit Us in Janakpuri",
    desc: "Located at Chhoti Subji Mandi, Janakpuri, New Delhi.",
  },
];

export default function ShopHighlights() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex flex-col items-start gap-3 bg-gray-50 hover:bg-green-50 rounded-3xl p-6 border border-gray-100 hover:border-green-100 transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${f.color} transition-transform group-hover:scale-110`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

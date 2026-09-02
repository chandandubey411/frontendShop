import React from "react";
import { Leaf, Star, ShoppingBag, MessageCircle, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    color: "bg-green-100 text-green-600",
    title: "Fresh Selection",
    desc: "Fresh fruits sourced regularly. What you see is what you get — fresh and ready.",
  },
  {
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
    title: "Quality First",
    desc: "We focus on quality and freshness. No compromises on what reaches your home.",
  },
  {
    icon: ShoppingBag,
    color: "bg-orange-100 text-orange-600",
    title: "Wide Variety",
    desc: "Everyday fruits, seasonal favourites and premium selections — all in one place.",
  },
  {
    icon: MessageCircle,
    color: "bg-emerald-100 text-emerald-600",
    title: "Easy Ordering",
    desc: "Order directly through WhatsApp. No registration, no complicated checkout.",
  },
  {
    icon: MapPin,
    color: "bg-blue-100 text-blue-600",
    title: "Local & Trusted",
    desc: "Serving customers from Chhoti Subji Mandi, Janakpuri for years.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
            Why Janakpuri Chooses<br /><span className="text-green-600">Dwivedi Fruit Shop</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-gray-50 hover:bg-green-50 rounded-3xl p-6 border border-gray-100 hover:border-green-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${r.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

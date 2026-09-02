import React from "react";
import { Leaf, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { generateEnquiryWhatsAppURL, CALL_HREF, MAPS_HREF } from "../../utils/whatsapp";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#seasonal", label: "Seasonal Fruits" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
          {/* Col 1 – Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">
                <img src="/logo.png"/>
              </div>
              <div className="leading-none">
                <span className="block font-bold text-white text-base">Dwivedi</span>
                <span className="block text-green-400 text-[10px] font-semibold tracking-widest uppercase">Fruit Shop</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Fresh fruits for Janakpuri. Visit us at Chhoti Subji Mandi for the best selection of seasonal and everyday fruits.
            </p>
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-green-400 flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={CALL_HREF} className="flex items-start gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  +91 99108 50024
                </a>
              </li>
              <li>
                <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Chhoti Subji Mandi, Janakpuri,<br/>New Delhi – 110058
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 – Order */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Order</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={generateEnquiryWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={CALL_HREF} className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </li>
              <li>
                <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2026 Dwivedi Fruit Shop. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with freshness 🍎</p>
        </div>
      </div>
    </footer>
  );
}

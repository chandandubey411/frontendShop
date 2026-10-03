import React from "react";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { MAPS_HREF, CALL_HREF, generateEnquiryWhatsAppURL } from "../../utils/whatsapp";

export default function LocationSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase mb-3">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Visit <span className="text-green-600">Dwivedi Fruit Shop</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-video lg:aspect-auto lg:h-80">
            <iframe
              title="Dwivedi Fruit Shop location on Google Maps"
              src="https://maps.google.com/maps?q=Chhoti+Subji+Mandi,+Janakpuri,+New+Delhi,+Delhi+110058&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 text-xl mb-4">Dwivedi Fruit Shop</h3>
              <address className="not-italic space-y-3">
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">10/16, Chhoti Subji Mandi,</p>
                    <p>Janakpuri,</p>
                    <p>New Delhi, Delhi – 110058</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <a href={CALL_HREF} className="hover:text-green-600 transition-colors">+91 99108 50024</a>
                </div>
              </address>
              <div className="mt-3 space-y-1">
                <p className="text-xs text-gray-500 font-medium" lang="hi">
                  जनकपुरी में ताज़े फल की दुकान · फल वाला जनकपुरी
                </p>
                <p className="text-xs text-gray-400" lang="hi">
                  आम, सेब, केला, अंगूर — रोज़ सुबह ताज़ी खेप आती है
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CALL_HREF}
                  className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-700 hover:text-green-700 font-semibold py-3 rounded-2xl transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={generateEnquiryWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 font-semibold py-3 rounded-2xl border-2 border-green-100 hover:border-green-200 transition-all active:scale-95"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

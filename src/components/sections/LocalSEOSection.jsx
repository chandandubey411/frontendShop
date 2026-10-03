import React from "react";
import { generateEnquiryWhatsAppURL } from "../../utils/whatsapp";

const hindiKeywords = [
  { hi: "फल की दुकान जनकपुरी", en: "Fruit Shop Janakpuri" },
  { hi: "ताज़े फल दिल्ली", en: "Fresh Fruits Delhi" },
  { hi: "आम कहाँ मिलेगा", en: "Where to get Mangoes" },
  { hi: "सस्ते फल जनकपुरी", en: "Affordable Fruits Janakpuri" },
  { hi: "फल वाला जनकपुरी", en: "Fruit Seller Janakpuri" },
  { hi: "Janakpuri mein fruit shop", en: "Fruit Shop near Janakpuri" },
  { hi: "Aam kahan milega", en: "Fresh Mangoes nearby" },
  { hi: "Subji Mandi Janakpuri", en: "Chhoti Subji Mandi" },
];

const faqs = [
  {
    q: "Janakpuri mein sabse acchi fruit shop kaunsi hai?",
    qhi: "जनकपुरी में सबसे अच्छी फल की दुकान कौनसी है?",
    a: "Dwivedi Fruit Shop at Chhoti Subji Mandi, Janakpuri is known for the freshest fruits, best prices, and easy WhatsApp ordering. Open daily 7 AM – 10 PM.",
  },
  {
    q: "Kya WhatsApp pe order kar sakte hain?",
    qhi: "क्या WhatsApp पे फल का ऑर्डर कर सकते हैं?",
    a: "Haan! Seedha WhatsApp pe message karein — +91 99108 50024. No app, no signup needed. Bilkul aasan.",
  },
  {
    q: "Aam, Seb, Angoor kab milte hain?",
    qhi: "आम, सेब, अंगूर कब मिलते हैं?",
    a: "Humari dukaan mein season ke hisaab se sabhi tarah ke fresh fruits milte hain — Aam, Seb, Kela, Angoor, Papita aur bahut kuch. Roz subah nayi khaep aati hai.",
  },
  {
    q: "Dwivedi Fruit Shop ka address kya hai?",
    qhi: "द्विवेदी फ्रूट शॉप का पता क्या है?",
    a: "Chhoti Subji Mandi, Janakpuri, New Delhi – 110058. Google Maps pe 'Dwivedi Fruit Shop' search karein ya neeche ka map use karein.",
  },
];

export default function LocalSEOSection() {
  const waUrl = generateEnquiryWhatsAppURL();

  return (
    <section
      id="local-info"
      className="py-16 bg-gradient-to-br from-green-50 via-white to-yellow-50"
      aria-label="Local fruit shop information in Hindi and English"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase mb-3">
            स्थानीय जानकारी · Local Info
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            जनकपुरी का{" "}
            <span className="text-green-600">भरोसेमंद फल वाला</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Janakpuri's most trusted fruit shop — Dwivedi Fruit Shop, Chhoti Subji Mandi
          </p>
        </div>

        {/* ── Hindi keyword chips ── */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12" aria-label="Popular local search terms">
          {hindiKeywords.map(({ hi, en }) => (
            <span
              key={hi}
              className="inline-flex flex-col items-center bg-white border border-green-100 rounded-2xl px-4 py-2 shadow-sm hover:shadow-md hover:border-green-300 transition-all cursor-default"
              title={en}
            >
              <span className="text-sm font-semibold text-gray-800" lang="hi">{hi}</span>
              <span className="text-[10px] text-gray-400 mt-0.5">{en}</span>
            </span>
          ))}
        </div>

        {/* ── Hindi trust strip ── */}
        <div className="bg-green-600 rounded-3xl px-6 py-5 mb-12 flex flex-wrap gap-6 justify-around items-center text-white shadow-lg shadow-green-200">
          {[
            { emoji: "🕖", hi: "रोज़ खुला 7 AM – 10 PM", en: "Open Daily" },
            { emoji: "🥭", hi: "रोज़ ताज़े फल आते हैं", en: "Fresh stock daily" },
            { emoji: "📲", hi: "WhatsApp पे ऑर्डर करें", en: "Easy WhatsApp order" },
            { emoji: "📍", hi: "छोटी सब्जी मंडी, जनकपुरी", en: "Chhoti Subji Mandi" },
          ].map(({ emoji, hi, en }) => (
            <div key={hi} className="flex items-center gap-3 min-w-[160px]">
              <span className="text-2xl">{emoji}</span>
              <div>
                <p className="font-bold text-sm leading-none" lang="hi">{hi}</p>
                <p className="text-green-200 text-xs mt-0.5">{en}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Hindi/Hinglish FAQ ── */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            अक्सर पूछे जाने वाले सवाल{" "}
            <span className="text-gray-400 font-normal text-lg">· FAQs</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map(({ q, qhi, a }) => (
              <div
                key={q}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-gray-900 text-sm" lang="hi">{qhi}</p>
                <p className="text-gray-400 text-xs italic mb-2">{q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center">
          <p className="text-gray-500 mb-4 text-sm" lang="hi">
            ताज़े फल चाहिए? अभी WhatsApp करें! 🍎
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-green-200 hover:shadow-green-300 transition-all active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp pe Order Karein
          </a>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { products } from "../../data/products";
import { formatCurrency } from "../../utils/currency";
import { generateSingleProductWhatsAppURL } from "../../utils/whatsapp";
import { useCart } from "../../context/CartContext";
import { ShoppingBasket } from "lucide-react";

const SEASONAL_IDS = [1, 6, 9, 15, 21, 22, 23, 24, 25, 26, 29];

const SEASONAL_BADGE_MAP = {
  1: "Season Favourite",
  6: "Fresh Arrival",
  9: "Limited Season",
  15: "Season Favourite",
  21: "Fresh Arrival",
  22: "Season Favourite",
  23: "Fresh Arrival",
  24: "Season Favourite",
  25: "Limited Season",
  26: "Limited Season",
  29: "Season Favourite",
};

export default function SeasonalSection({ onAddToCart }) {
  const { addItem } = useCart();
  const seasonalProducts = products.filter((p) => SEASONAL_IDS.includes(p.id) && p.available);

  return (
    <section id="seasonal" className="py-16 bg-gradient-to-br from-green-50 to-yellow-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase mb-3">
            🌿 Season Special
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Season's <span className="text-green-600">Fresh Picks</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Limited-season fruits at their peak freshness. Available while in season.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {seasonalProducts.map((product) => {
            const seasonBadge = SEASONAL_BADGE_MAP[product.id] || "Seasonal";
            return (
              <SeasonalCard
                key={product.id}
                product={product}
                seasonBadge={seasonBadge}
                onAdd={() => { addItem(product); onAddToCart?.(product); }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SeasonalCard({ product, seasonBadge, onAdd }) {
  const badgeColor =
    seasonBadge === "Season Favourite" ? "bg-yellow-100 text-yellow-800" :
    seasonBadge === "Fresh Arrival"    ? "bg-green-100 text-green-800" :
    "bg-orange-100 text-orange-800";

  return (
    <div className="bg-white rounded-3xl border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group flex flex-col">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 card-img-wrap">
        <span className={`absolute top-2 left-2 z-10 text-[9px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
          {seasonBadge}
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => { e.target.src = `https://placehold.co/200x200/f0fdf4/22c55e?text=${encodeURIComponent(product.emoji || "🍎")}`; }}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-xs leading-tight mb-0.5">{product.name}</h3>
        {product.nameHindi && <p className="text-[10px] text-gray-400 mb-1">{product.nameHindi}</p>}
        <div className="flex items-center gap-1 mb-2">
          {product.price !== null ? (
            <>
              <span className="text-sm font-bold text-gray-900">{formatCurrency(product.price)}</span>
              <span className="text-[10px] text-gray-400">{product.unit}</span>
            </>
          ) : (
            <span className="text-xs text-amber-600 font-medium">Price on WhatsApp</span>
          )}
        </div>
        <button
          onClick={onAdd}
          className="mt-auto w-full flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white text-[11px] font-semibold py-2 rounded-xl transition-all active:scale-95"
          aria-label={`Add ${product.name} to basket`}
        >
          <ShoppingBasket className="w-3 h-3" />
          Add
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { useCart } from "../../context/CartContext";
import { generateCartWhatsAppURL } from "../../utils/whatsapp";
import { X, Trash2, ShoppingBasket, Plus, Minus, MessageCircle } from "lucide-react";
import { formatCurrency } from "../../utils/currency";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, total, hasNullPrice, itemCount } = useCart();

  const whatsappURL = generateCartWhatsAppURL(items);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer — right side on desktop, bottom sheet on mobile */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your Fruit Basket"
        className="fixed z-50 bg-white flex flex-col
          bottom-0 left-0 right-0 max-h-[92dvh] rounded-t-3xl animate-slide-in-up
          sm:top-0 sm:right-0 sm:bottom-0 sm:left-auto sm:w-96 sm:max-h-full sm:rounded-none sm:rounded-l-3xl sm:animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBasket className="w-5 h-5 text-green-600" />
            <h2 className="font-bold text-gray-900 text-lg">Your Fruit Basket</h2>
            {itemCount > 0 && (
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                {itemCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
                aria-label="Clear cart"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <ShoppingBasket className="w-10 h-10 text-green-300" />
              </div>
              <p className="text-gray-500 font-medium">Your basket is empty</p>
              <p className="text-gray-400 text-sm mt-1">Browse our fresh fruits and add them here.</p>
              <button
                onClick={closeCart}
                className="mt-5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Browse Fruits
              </button>
            </div>
          ) : (
            items.map((item) => {
              const { product, quantity } = item;
              const lineTotal = product.price !== null ? product.price * quantity : null;
              return (
                <div
                  key={product.id}
                  className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-xl flex-shrink-0 bg-white"
                    loading="lazy"
                    onError={(e) => { e.target.src = "https://placehold.co/56x56/f0fdf4/22c55e?text=🍎"; }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{product.name}</p>
                    {product.nameHindi && (
                      <p className="text-xs text-gray-400 truncate">{product.nameHindi}</p>
                    )}
                    <p className="text-xs text-gray-500">{product.unit}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      {/* Qty controls */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-colors"
                          aria-label={`Decrease quantity of ${product.name}`}
                        >
                          <Minus className="w-3 h-3 text-gray-600" />
                        </button>
                        <span className="w-5 text-center text-sm font-semibold text-gray-900">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
                          aria-label={`Increase quantity of ${product.name}`}
                        >
                          <Plus className="w-3 h-3 text-white" />
                        </button>
                      </div>
                      <div className="text-right">
                        {lineTotal !== null ? (
                          <p className="text-sm font-bold text-gray-900">{formatCurrency(lineTotal)}</p>
                        ) : (
                          <p className="text-xs text-amber-600 font-medium">Price on WhatsApp</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="p-1.5 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                    aria-label={`Remove ${product.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Estimated Total</span>
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">{formatCurrency(total)}</span>
                {hasNullPrice && (
                  <p className="text-xs text-amber-600">+ items with price on WhatsApp</p>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center">
              Final price and availability will be confirmed on WhatsApp.
            </p>
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 text-base"
              aria-label="Place order on WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Place Order on WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  );
}

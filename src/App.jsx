import React, { useState, useCallback } from "react";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartDrawer from "./components/ui/CartDrawer";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import MobileBottomNav from "./components/ui/MobileBottomNav";
import Toast from "./components/ui/Toast";

import HeroSection from "./components/sections/HeroSection";
import ShopHighlights from "./components/sections/ShopHighlights";
import ProductGrid from "./components/ui/ProductGrid";
import SeasonalSection from "./components/sections/SeasonalSection";
import PromoBanner from "./components/sections/PromoBanner";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import AboutSection from "./components/sections/AboutSection";
import LocationSection from "./components/sections/LocationSection";
import CTASection from "./components/sections/CTASection";

function AppInner() {
  const [toast, setToast] = useState(null);
  const [navSearch, setNavSearch] = useState("");

  const handleAddToCart = useCallback((product) => {
    setToast(`${product.emoji || "🍎"} ${product.name} added to your basket!`);
  }, []);

  const handleSearch = useCallback((query) => {
    setNavSearch(query);
    if (query) {
      // Scroll to shop section
      const shopEl = document.getElementById("shop");
      if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />
      <main className="flex-1 pb-16 sm:pb-0">
        <HeroSection />
        <ShopHighlights />
        <ProductGrid externalSearch={navSearch} onAddToCart={handleAddToCart} />
        <SeasonalSection onAddToCart={handleAddToCart} />
        <PromoBanner />
        <WhyChooseUs />
        <AboutSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />

      {/* Overlays */}
      <CartDrawer />
      <FloatingWhatsApp />
      <MobileBottomNav />

      {/* Toast */}
      {toast && (
        <Toast
          message={toast}
          onDone={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}

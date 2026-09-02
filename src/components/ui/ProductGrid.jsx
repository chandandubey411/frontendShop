import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "../../data/products";
import ProductCard from "./ProductCard";

const SORT_OPTIONS = [
  { value: "popular", label: "Popular" },
  { value: "price-asc",  label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function ProductGrid({ externalSearch = "", onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");

  // Sync external search (from navbar)
  useEffect(() => {
    if (externalSearch !== undefined) setSearch(externalSearch);
  }, [externalSearch]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.nameHindi && p.nameHindi.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (sort === "price-asc") {
      list = [...list].sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
      });
    } else if (sort === "price-desc") {
      list = [...list].sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return b.price - a.price;
      });
    }

    return list;
  }, [activeCategory, search, sort]);

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase mb-3">
            Today's Fresh Picks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Fresh Fruits <span className="text-green-600">Available Today</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Choose your favourites and order directly through WhatsApp.
          </p>
        </div>

        {/* Filters row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 flex-1 max-w-sm">
            <Search className="w-4 h-4 text-gray-400 ml-3 flex-shrink-0" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fruits..."
              className="bg-transparent text-sm px-3 py-2.5 outline-none flex-1 text-gray-700 placeholder-gray-400"
              aria-label="Search fruits"
            />
            {search && (
              <button onClick={() => setSearch("")} className="pr-3 text-gray-400 hover:text-gray-600" aria-label="Clear search">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50 text-gray-700 outline-none cursor-pointer hover:border-green-300 transition-colors"
              aria-label="Sort products"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar" role="tablist" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={activeCategory === cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? "bg-green-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-gray-500 font-medium">No fruits found.</p>
            <p className="text-gray-400 text-sm mt-1">Try a different search term or category.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              className="mt-5 bg-green-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              Show All Fruits
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}

        <p className="text-center text-gray-400 text-xs mt-8">
          Showing {filtered.length} of {products.length} fruits
        </p>
      </div>
    </section>
  );
}

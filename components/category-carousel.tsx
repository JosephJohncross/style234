"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "All Products" },
  { id: "fashion", label: "Fashion Designs" },
  { id: "beauty", label: "Beauty Products" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "luxury", label: "Luxury E" },
];

export function CategoryCarousel() {
  const [activeCategory, setActiveCategory] = useState("fashion");

  return (
    <div className="w-full flex items-center justify-between gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        {/* Category Pills */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap 
              transition-colors duration-200
              ${
                activeCategory === category.id
                  ? "bg-[#029338] text-white"
                  : "bg-white text-[#595959] border border-gray-200 hover:border-[#029338] hover:text-[#029338]"
              }
            `}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* View All Button */}
      <Button
        variant="ghost"
        className="text-[#029338] text-sm md:text-base font-medium whitespace-nowrap hover:bg-green-50 flex-shrink-0"
      >
        View All
        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
      </Button>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

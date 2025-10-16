import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, Star } from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { CategoryCarousel } from "@/components/category-carousel";
import { ProductGrid } from "@/components/product-grid";
import { ExquisiteCollections } from "@/components/exquisite-collections";
import { BeautyProduct } from "@/components/beauty-product";
import { Testimonials } from "@/components/testimonials";
import { WearTheStory } from "@/components/wear-the-story";

export default function Home() {
  return (
    <>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      <div className="max-w-xs relative sm:max-w-sm md:max-w-screen-md mx-auto py-10 border bg-white border-gray-200 shadow-lg -translate-y-44 md:-translate-y-8 rounded-[3rem] px-6 z-[10000] font-ubuntu">
        <div className="text-center ">
            <p className="text-primary md:text-[64px] md:leading-[78px] text-[38.4px] leading-[48px] font-bold">Our Product Collection</p>
            <p className="mt-3 text-[#737373] text-[12px] leading-[19px] md:text-[19px] md:leading-[32px]">Discover authentic fashion, beauty, and accessories handcrafted by Africa&#39;s finest creators where heritage meets contemporary style.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container max-w-screen-md mx-auto px-4 -mt-24 md:mt-16 mb-8 md:mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search any product"
            className="w-full px-12 py-4 border border-gray-200 rounded-full text-base text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#029338] focus:border-transparent"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Collections Preview */}
      <section className="container md:px-10 mx-auto px-4 md:py-16 md:pt-6">
        <h3 className="text-left mb-6 font-medium text-[20px] text-[#595959] md:text-[30.28px]">Recent Collections</h3>

        {/* Category Carousel */}
        <div className="mb-8">
          <CategoryCarousel />
        </div>

        {/* Product Grid */}
        <ProductGrid />
      </section>

      {/* Exquisite Collections */}
      <ExquisiteCollections />

      {/* BeautyProducts */}
      <BeautyProduct/>

      {/* Testimonials */}
      <Testimonials />

      {/* Wear the Story */}
      <WearTheStory />
    </>
  );
}

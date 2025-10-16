"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const collections = [
  {
    id: "african-dreams",
    title: "Where African Dreams Meet Couture",
    description: "Celebrate the artistry of Africa where tradition inspires modern elegance.",
    desktopImage: "/images/products/fashion1.svg",
    mobileImage: "/images/products/fashion1-mobile.svg",
    buttonText: "Explore Collection",
  },
  {
    id: "heritage-couture",
    title: "Where Heritage Meets Couture",
    description: "Discover Africa's timeless stories woven into every stitch and design.",
    desktopImage: "/images/products/fashion2.svg",
    mobileImage: "/images/products/fashion2-mobile.svg",
    buttonText: "Explore Collection",
  },
  {
    id: "crafted-africa",
    title: "Where Dreams Are Crafted in Africa",
    description: "Fashion, beauty, and artistry born from passion, rooted in culture.",
    desktopImage: "/images/products/fashion3.svg",
    mobileImage: "/images/products/fashion3-mobile.svg",
    buttonText: "Explore Collection",
  },
];

export function ExquisiteCollections() {
  return (
    <section className="py-16 md:py-20 md:px-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h3 className="text-left mb-6 font-medium text-[20px] text-[#595959] md:text-[30.28px]">Explore Our Exquisite Collections</h3>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Large Left Card - African Dreams */}
          <div className="md:row-span-2 relative overflow-hidden group cursor-pointer">
            <div 
              className="relative h-[500px] md:h-full md:min-h-[800px] bg-cover bg-right md:bg-none"
              style={{
                backgroundImage: `url(${collections[0].mobileImage})`
              }}
            >
                {/* Desktop Image */}
                <img
                  src={collections[0].desktopImage}
                  alt={collections[0].title}
                  className="hidden md:block w-full h-full object-cover"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0" />

                <div className="absolute top-0 flex flex-col justify-between h-full left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 text-white md:w-1/2">
                    <div className="max-w-44 md:max-w-full">
                      <h3 className="text-lg sm:text-xl text-[#595959] md:text-2xl lg:text-3xl font-medium mb-2 md:mb-3 leading-tight">
                        {collections[0].title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#595959] mb-3 sm:mb-4 md:mb-6 leading-snug">
                        {collections[0].description}
                      </p>
                    </div>

                  <Button className="bg-black hover:bg-black/90 text-white rounded-none px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-xs sm:text-sm md:text-base font-medium group-hover:bg-black/80 transition-colors w-fit">
                    {collections[0].buttonText}
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
            </div>
          </div>

          {/* Top Right Card - Heritage Couture */}
          <div className="relative overflow-hidden group cursor-pointer">
            <div 
              className="relative h-[250px] md:h-full bg-cover bg-right md:bg-none"
              style={{
                backgroundImage: `url(${collections[1].mobileImage})`
              }}
            >
              {/* Desktop Image */}
              <img
                src={collections[1].desktopImage}
                alt={collections[1].title}
                className="hidden md:block w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0" />

              <div className="absolute h-full top-0 flex flex-col justify-between left-0 right-0 p-4 sm:p-6 md:p-6 lg:p-8 text-white md:w-1/2">
                <div className="max-w-44 md:max-w-full">
                  <h3 className="text-lg sm:text-xl text-[#595959] md:text-2xl lg:text-3xl font-medium mb-2 md:mb-3 leading-tight">
                    {collections[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#595959] mb-3 sm:mb-4 md:mb-6 leading-snug">
                    {collections[1].description}
                  </p>
                </div>

                <Button className="bg-black hover:bg-black/90 text-white rounded-none px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 text-xs sm:text-sm font-medium group-hover:bg-black/80 transition-colors w-fit">
                  {collections[1].buttonText}
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Right Card - Crafted in Africa */}
          <div className="relative overflow-hidden group cursor-pointer">
            <div 
              className="relative h-[250px] md:h-full bg-cover bg-right md:bg-none"
              style={{
                backgroundImage: `url(${collections[2].mobileImage})`
              }}
            >
              {/* Desktop Image */}
              <img
                src={collections[2].desktopImage}
                alt={collections[2].title}
                className="hidden md:block w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0" />

              <div className="absolute h-full top-0 flex flex-col justify-between left-0 right-0 p-4 sm:p-6 md:p-6 lg:p-8 text-white md:w-1/2">
                  <div className="max-w-44 md:max-w-full">
                    <h3 className="text-lg sm:text-xl text-white md:text-2xl lg:text-3xl font-medium mb-2 md:mb-3 leading-tight">
                      {collections[1].title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-white font-normal mb-3 sm:mb-4 md:mb-6 leading-snug">
                      {collections[1].description}
                    </p>
                  </div>

                <Button className="bg-black hover:bg-black/90 text-white rounded-none px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 text-xs sm:text-sm font-medium group-hover:bg-black/80 transition-colors w-fit">
                  {collections[2].buttonText}
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

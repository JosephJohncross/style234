"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    id: 1,
    src: "/images/story/person-1.jpg",
    alt: "African fashion model 1",
    delay: "0s",
  },
  {
    id: 2,
    src: "/images/story/person-2.jpg",
    alt: "African fashion model 2",
    delay: "0.3s",
  },
  {
    id: 3,
    src: "/images/story/person-3.jpg",
    alt: "African fashion model 3",
    delay: "0.6s",
  },
];

export function WearTheStory() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="">
            <h2 className="text-left font-medium text-[20px] text-[#595959] md:text-[30.28px]">Wear the Story. Live the Culture.</h2>
            <p className="text-base  md:text-lg text-[#595959] mb-3 sm:mb-4 md:mb-6 leading-snug max-w-md mt-4">
              Shop authentic African-made fashion, beauty, and lifestyle products today.
            </p>
            <Button className="bg-[#029338] hover:bg-[#027a2f] text-white px-8 py-6 text-base md:text-lg font-medium rounded-none group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Images with Animation - V Shape */}
          <div className="relative h-[320px] md:h-[400px] flex items-center justify-center gap-4 md:gap-6">
            {/* Image 1 - Left Top */}
            <div className="">
              <div className=" rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/story/photo1.svg" alt="Model 1" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Image 2 - Center Bottom (V shape) */}
            <div className=" mt-16 md:mt-20">
              <div className=" rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/story/photo2.svg" alt="Model 2" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Image 3 - Right Top */}
            <div className="">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/story/photo3.svg" alt="Model 3" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

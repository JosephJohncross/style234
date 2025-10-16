"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  quote: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia M.",
    image: "/images/testimonials/testimonial-1.png",
    quote: "Every piece I've bought feels like wearable art. The craftsmanship and attention to detail are exceptional you can feel the soul of Africa in every stitch.",
    verified: true,
  },
  {
    id: 2,
    name: "Amara O.",
    image: "/images/testimonials/testimonial-1.png",
    quote: "Absolutely stunning designs! The quality is unmatched and I always receive compliments. Truly authentic African fashion at its finest.",
    verified: true,
  },
  {
    id: 3,
    name: "James K.",
    image: "/images/testimonials/testimonial-1.png",
    quote: "I love supporting African artisans and this platform makes it so easy. The pieces are unique, well-made, and shipped quickly.",
    verified: true,
  },
  {
    id: 4,
    name: "Fatima A.",
    image: "/images/testimonials/testimonial-1.png",
    quote: "The beauty products are incredible! Natural ingredients, beautiful packaging, and they actually work. I'm a customer for life.",
    verified: true,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 600);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 600);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 600);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-[#E8F5E9]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-[24px] leading-[32px] md:leading-[45.4px] md:text-[32px] font-bold text-center text-[#029338] mb-12 md:mb-16">
          See what our users are saying
        </h2>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          {/* Testimonial Content */}
          <div 
            className={`text-center transition-opacity duration-700 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* User Image with Arrows */}
            <div className="flex items-center justify-center gap-10 md:gap-14 mb-6">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#029338] transition-colors" />
              </button>

              {/* User Image */}
              <div className="relative inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#029338] transition-colors" />
              </button>
            </div>

            {/* User Info */}
            <h3 className="text-base md:text-xl font-semibold text-[#029338] mt-10 mb-4">
              {currentTestimonial.name}
            </h3>

            {/* Quote */}
            <blockquote className="text-[#444444] text-base leading-[21px] md:text-lg md:leading-[28px] md:max-w-lg mx-auto px-4">
              "{currentTestimonial.quote}"
            </blockquote>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8 md:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#029338] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CartIcon from "./icons/cart-icon";

interface Product {
  id: string;
  title: string;
  creator: string;
  price: number;
  rating: number;
  ratingCount: number;
  image: string;
  cartCount?: number;
}

const products: Product[] = [
  {
    id: "1",
    title: "Adire Silk Wrap Dress",
    creator: "House of Kente",
    price: 12000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/product-1.svg",
    cartCount: 0,
  },
  {
    id: "2",
    title: "Black Magenta Tribal",
    creator: "Micah Lucas",
    price: 10000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/product-2.svg",
    cartCount: 0,
  },
  {
    id: "3",
    title: "Men's Luxury Business Bl...",
    creator: "House of Kente",
    price: 120000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/product-3.svg",
    cartCount: 0,
  },
  {
    id: "4",
    title: "Stylish Ankara Outfit",
    creator: "Bende Outlah",
    price: 12000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/product-4.svg",
    cartCount: 0,
  },
  {
    id: "5",
    title: "Vintage African Tribal Flo...",
    creator: "Shalom",
    price: 9000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/product-5.svg",
    cartCount: 0,
  },
  {
    id: "6",
    title: "His & Hers Couple Outfit",
    creator: "D'iyanu",
    price: 20000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/product-6.svg",
    cartCount: 0,
  },
  {
    id: "7",
    title: "Modern African Print",
    creator: "D'iyanu",
    price: 15000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/product-7.svg",
    cartCount: 0,
  },
  {
    id: "8",
    title: "Ankara Long Shirt Pattern",
    creator: "House of Kente",
    price: 7000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/product-8.svg",
    cartCount: 0,
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Product Image */}
          <div className="relative aspect-[3/4] bg-gray-200">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-3 md:p-4 space-y-2">
            {/* Title */}
            <h3 className="font-medium text-base md:text-[22.03px] text-[#707070] line-clamp-1">
              {product.title}
            </h3>

            {/* Creator */}
            <p className="text-xs md:text-sm text-[#707070]">
              By {product.creator}
            </p>

            {/* Price */}
            <p className="leading-[27.52px] text-base md:text-[22.03px] text-[#707070] font-medium">
              ₦{product.price.toLocaleString()}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 md:h-4 md:w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-[#029338] text-[#029338]"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs md:text-sm text-primary ml-1">
                {product.rating} rating ({product.ratingCount})
              </span>
            </div>

            {/* Shop Now Button with Cart */}
            <div className="flex items-center gap-2 pt-2">
              <Button
                className="flex-1 bg-[#029338] hover:bg-[#027a2f] text-white text-xs md:text-sm py-2 md:py-2.5 rounded-lg font-medium"
              >
                Shop Now
              </Button>

              {/* Cart Icon with Badge */}
              <div className="relative">
                  <CartIcon className="cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

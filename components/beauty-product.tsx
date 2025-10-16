"use client";

import { Star, ShoppingCart, ArrowRight } from "lucide-react";
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
    title: "Best Natural & Organic S...",
    creator: "By House of Kente",
    price: 12000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/beauty1.svg",
    cartCount: 0,
  },
  {
    id: "2",
    title: "Best Natural & Organic S...",
    creator: "By House of Kente",
    price: 10000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/beauty2.svg",
    cartCount: 0,
  },
  {
    id: "3",
    title: "Carolyn Oil Perfume Mix",
    creator: "By Carolyn",
    price: 120000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/beauty3.png",
    cartCount: 0,
  },
  {
    id: "4",
    title: "Natural Hair Care Products...",
    creator: "By Patt Santo",
    price: 12000,
    rating: 4.5,
    ratingCount: 12,
    image: "/images/products/beauty4.png",
    cartCount: 0,
  },
];

export function BeautyProduct() {
  return (

    <div className="container mx-auto md:px-10 mb-20 md:mb-24">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-left font-medium text-[20px] text-[#595959] md:text-[30.28px]">Beauty Products for You</h3>

            <Button
                variant="ghost"
                className="text-[#029338] text-sm md:text-base font-medium bg-[#F6F6F6] rounded-full whitespace-nowrap hover:bg-green-50 flex-shrink-0"
            >
                View All
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
        </div>

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
    </div>
  );
}

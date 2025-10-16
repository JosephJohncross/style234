import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import Logo from "../logo";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import XIcon from "../icons/x";
import TikTokIcon from "../icons/tiktok";
import YoutubeIcon from "../icons/youtube";

interface FooterProps {
  variant?: "default" | "minimal";
}

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "minimal") {
    return (
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {currentYear} Style123. All rights reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t py-10 bg-black">
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="text-primary md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <Logo/>
            </Link>
            <p className="text-base text-white">
              Made in Nigeria
            </p>
            <p className="text-base">info@style234.com</p>

            <div className="flex items-center gap-4 mt-7">
              <Link href={""}>
                <FacebookIcon className="md:scale-110"/>
              </Link>
              <Link href={""}>
                <InstagramIcon className="md:scale-110"/>
              </Link>
              <Link href={""}>
                <XIcon className="md:scale-110"/>
              </Link>

              <Link href={""}>
                <TikTokIcon className="md:scale-110"/>
              </Link>
              <Link href={""}>
                <YoutubeIcon className="md:scale-110"/>
              </Link>
            </div>
          </div>

          <div className="text-[#CFCFCF] mt-5 md:mt-0">
            <h4 className="font-bold mb-5 text-xl leading-[45px]">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-[#CFCFCF]">
            <h4 className="font-bold mb-5 text-xl leading-[45px]">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base">
                  Fashion Designs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base">
                  Beauty Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-[#CFCFCF]">
            <h4 className="font-bold mb-5 text-xl leading-[45px]">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base">
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="border-t mx-4 sm:mx-12 md:mx-auto max-w-screen-xl mt-8 pt-14  md:pt-10 text-center border-[#737373] text-sm text-[#CFCFCF]">
        ©{currentYear} Style234. All Rights Reserved.
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, ChevronDown, X, ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  variant?: "default" | "minimal";
  showAuth?: boolean;
}

const dropdownItems = [
  { label: "Fashion Designs", href: "" },
  { label: "Beauty Products", href: "" },
  { label: "Accessories", href: "" },
  { label: "Luxury Brands", href: "" },
  { label: "Events", href: "" },
];

export function Header({ variant = "default", showAuth = true }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  return (
    <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="" className="flex items-center hover:opacity-80 transition-opacity">
          <svg width="232" height="34" viewBox="0 0 232 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5209 27.3354C15.8227 27.3354 20.1229 25.6214 20.1229 19.8248C20.1229 15.1936 17.6804 13.3341 14.2908 12.3142L8.49498 10.6003C6.89034 10.1274 6.27061 9.6531 6.27061 8.19372C6.27061 5.82356 7.94798 5.24011 10.7178 5.24011C12.3225 5.24011 15.9666 5.38711 18.2637 5.64171L18.7017 1.5212C15.7484 0.974127 11.9573 0.574049 9.29655 0.574049C4.81295 0.574049 0.474809 1.99554 0.474809 8.52258C0.474809 12.4233 2.07794 14.1373 5.21297 15.0481L11.6285 16.8712C13.3786 17.3455 14.2893 18.1108 14.2893 19.8248C14.2893 22.1571 12.5392 22.7041 9.9875 22.7041C8.05556 22.7041 4.37353 22.4117 0.473294 21.901L-0.000976562 26.0578C3.49923 26.6413 8.45559 27.3338 11.5194 27.3338L11.5209 27.3354ZM208.389 7.94216L208.718 8.96812C210.524 8.06491 212.183 7.61331 213.695 7.61331C216.306 7.61331 218.136 8.17402 219.186 9.29697C221.456 8.17402 223.384 7.61331 224.97 7.61331C227.654 7.61331 229.484 8.19979 230.461 9.37123C231.486 10.5184 231.999 12.3127 231.999 14.7526V26.6867H226.544V16.2529C226.544 15.2769 226.508 14.5328 226.435 14.0191C226.363 13.4584 226.106 12.9825 225.667 12.5916C225.228 12.2006 224.618 12.0051 223.837 12.0051C222.787 12.0051 221.714 12.2127 220.615 12.6279C220.688 13.2871 220.724 13.9949 220.724 14.7511V26.6852H215.269V16.2514C215.269 15.2754 215.233 14.5313 215.16 14.0176C215.088 13.4569 214.832 12.981 214.392 12.59C213.953 12.1991 213.342 12.0036 212.562 12.0036C211.513 12.0036 210.475 12.1869 209.451 12.5522V26.6837H203.996V7.93913H208.389V7.94216ZM200.987 15.3012V19.3277C200.987 19.9384 200.975 20.3522 200.95 20.5719C200.902 21.7191 200.67 22.6466 200.255 23.3543C199.4 24.9894 197.852 26.076 195.606 26.6125C193.215 27.1005 190.873 27.1005 188.578 26.6125C186.7 26.1973 185.284 25.3925 184.333 24.1969C183.966 23.6604 183.698 23.0982 183.528 22.5132C183.26 21.61 183.125 20.5492 183.125 19.3277V15.3012C183.125 14.0812 183.26 13.031 183.528 12.1521C184.04 10.1502 185.725 8.77111 188.58 8.0149C190.874 7.52693 193.217 7.52693 195.608 8.0149C197.853 8.55137 199.402 9.63795 200.256 11.2731C200.476 11.6156 200.647 12.1036 200.769 12.737C200.916 13.5918 200.988 14.4449 200.988 15.2997L200.987 15.3012ZM195.532 19.3277V15.3012C195.532 13.9827 195.3 13.1038 194.836 12.6643C194.397 12.2248 193.47 12.0051 192.054 12.0051C190.736 12.0051 189.835 12.2127 189.345 12.6279C188.857 13.0432 188.601 13.9342 188.577 15.3012V19.3277C188.577 20.6462 188.815 21.5251 189.291 21.9631C189.766 22.4026 190.688 22.6223 192.054 22.6223C193.373 22.6223 194.276 22.3965 194.764 21.9449C195.252 21.4933 195.508 20.6204 195.532 19.3277ZM171.218 15.9968V18.6321C171.218 19.9748 171.517 20.975 172.115 21.6342C172.712 22.2935 173.708 22.6223 175.099 22.6223C177.026 22.6223 178.955 22.4389 180.883 22.0737V26.32C178.467 26.7837 176.319 27.0156 174.44 27.0156C173.391 27.0156 172.305 26.8928 171.182 26.6489C169.303 26.2094 167.9 25.4047 166.973 24.2317C166.606 23.6952 166.338 23.1451 166.168 22.5844C165.9 21.7055 165.765 20.6689 165.765 19.4732V15.1527C165.765 13.957 165.9 12.9325 166.168 12.0778C166.779 10.0032 168.45 8.63624 171.183 7.97702C172.306 7.73303 173.393 7.61028 174.441 7.61028C176.32 7.61028 178.467 7.84214 180.884 8.30587V12.5522C178.957 12.1854 177.028 12.0036 175.1 12.0036C173.709 12.0036 172.715 12.3324 172.117 12.9916C171.518 13.6509 171.22 14.6511 171.22 15.9937L171.218 15.9968ZM163.194 23.9044V24.2332C163.194 25.3077 162.962 26.0396 162.498 26.4306C162.034 26.8216 161.23 27.0171 160.083 27.0171C158.96 27.0171 158.174 26.8216 157.722 26.4306C157.271 26.0396 157.045 25.3077 157.045 24.2332V23.9044C157.045 22.8299 157.271 22.104 157.722 21.7267C158.174 21.3478 158.96 21.1599 160.083 21.1599C161.23 21.1599 162.034 21.3493 162.498 21.7267C162.962 22.1055 163.194 22.8314 163.194 23.9044ZM131.636 17.4198L138.479 0.795304H143.764L137.442 16.3484C137.365 16.6454 137.456 16.7575 137.641 16.7636H144.264V10.1911L145.221 6.12665H149.658V16.7651H153.631V21.2493H149.658V26.7186H144.3V21.2493H135.209C131.93 21.3508 130.987 19.9112 131.634 17.4213L131.636 17.4198ZM123.434 19.3156C123.434 17.979 123.056 17.0439 122.303 16.509C121.55 15.974 120.383 15.6937 118.803 15.6709H114.866V11.3322H118.803C120.333 11.3322 121.403 11.1367 122.011 10.7488C122.618 10.3593 122.922 9.43639 122.922 7.97853C122.922 6.73889 122.55 5.90085 121.809 5.46289C121.068 5.02492 119.871 4.8067 118.218 4.8067C116.177 4.8067 114.209 5.02492 112.313 5.46289V1.27115C114.962 0.736202 116.979 0.467967 118.364 0.467967C120.94 0.467967 122.922 0.686192 124.305 1.12416C125.666 1.51363 126.663 2.2365 127.294 3.29276C127.926 4.35055 128.278 5.91146 128.352 7.97702C128.352 10.5048 127.258 12.2794 125.072 13.2993C127.599 14.1494 128.863 16.1559 128.863 19.3141C128.863 21.8661 128.255 23.7862 127.04 25.0743C126.529 25.585 125.8 26.0093 124.852 26.3503C123.368 26.8125 121.376 27.0429 118.873 27.0429C116.929 27.0429 114.486 26.7155 111.545 26.0593V21.8297C114.048 22.4132 116.442 22.7057 118.726 22.7057C120.305 22.7057 121.484 22.4571 122.262 21.9585C123.04 21.46 123.429 20.5795 123.429 19.3156H123.434ZM105.389 13.7009L97.6973 22.1222H108.342V26.7155H90.8438V22.8875L101.414 10.7109C101.973 10.0789 102.351 9.54399 102.545 9.10602C102.738 8.66957 102.835 8.15887 102.835 7.57542C102.835 6.52976 102.478 5.81295 101.76 5.425C101.043 5.03705 99.9065 4.84155 98.3519 4.84155C96.0184 4.84155 93.7592 5.19465 91.5712 5.89933V1.59849C92.7136 1.18477 93.9531 0.892293 95.2896 0.722563C96.5775 0.552832 97.5973 0.467967 98.3519 0.467967C101.39 0.467967 103.723 0.868046 105.351 1.67123C107.198 2.56989 108.121 4.39298 108.121 7.13897C108.121 8.64533 107.927 9.83647 107.537 10.7124C107.125 11.6353 106.407 12.6325 105.387 13.7024L105.389 13.7009ZM76.0081 19.5702C76.2263 20.7613 76.7491 21.6054 77.5764 22.104C78.4022 22.6026 79.5083 22.8511 80.8932 22.8511C81.7918 22.8511 82.71 22.8208 83.6449 22.7602C84.5813 22.6996 85.4253 22.6087 86.1784 22.4874C86.5678 22.4147 86.7618 22.5602 86.7618 22.9254V25.5138C86.7618 25.8532 86.5905 26.0851 86.2511 26.2063C85.3284 26.4746 84.3434 26.6746 83.2979 26.808C82.2524 26.9413 81.2448 27.008 80.272 27.008C78.5219 27.008 77.0339 26.8019 75.8066 26.3882C74.5792 25.9745 73.5761 25.3668 72.7988 24.5651C72.0215 23.7634 71.4503 22.7845 71.0851 21.6297C70.7199 20.4749 70.5381 19.1686 70.5381 17.7107V16.5802C70.5381 13.7842 71.279 11.5792 72.7625 9.96225C74.2444 8.34678 76.5657 7.53753 79.725 7.53753C82.5191 7.53753 84.6162 8.23616 86.0132 9.6334C87.4103 11.0306 88.1088 12.9204 88.1088 15.3027C88.1088 16.7606 87.6103 17.8365 86.6148 18.5291C85.6193 19.2216 84.2692 19.5687 82.5691 19.5687H76.0081V19.5702ZM79.581 11.6944C78.5598 11.6944 77.7158 11.9975 77.0476 12.6052C76.3793 13.2129 75.9854 14.2707 75.8642 15.777H81.5872C82.0009 15.777 82.3039 15.674 82.4994 15.4664C82.6949 15.2603 82.7918 14.9875 82.7918 14.6465C82.7918 13.6751 82.5358 12.9386 82.0266 12.44C81.516 11.9414 80.7023 11.6929 79.5841 11.6929L79.581 11.6944ZM59.0935 0.757418C59.0935 0.319453 59.2995 0.101229 59.7132 0.101229H63.7952C64.2089 0.101229 64.415 0.319453 64.415 0.757418V20.3355C64.415 21.1872 64.5726 21.8176 64.8893 22.2313C65.2044 22.645 65.8484 22.8511 66.8212 22.8511C67.0879 22.8511 67.3561 22.839 67.6228 22.8148C67.891 22.7905 68.1576 22.7542 68.4243 22.7057C68.8122 22.6329 69.0077 22.7905 69.0077 23.18V25.6956C69.0077 26.0366 68.8016 26.2791 68.3879 26.4246C67.9258 26.5943 67.3667 26.7337 66.7106 26.8443C66.0545 26.9535 65.4469 27.008 64.8877 27.008C62.7982 27.008 61.3087 26.4488 60.4223 25.3304C59.5359 24.212 59.0919 22.742 59.0919 20.9189V0.757418H59.0935ZM42.4697 33.8988C45.2048 33.8988 47.5003 32.6591 48.9216 28.4659L55.9205 8.48621H50.2702L46.1503 22.3041L42.2137 8.48621H36.5633L42.541 26.2776H44.9835L44.5835 27.4445C43.891 29.3403 43.0152 29.9601 41.1197 29.9601C40.5727 29.9601 39.9166 29.9601 38.4953 29.7783L38.0574 33.2426C39.6984 33.6427 41.156 33.8988 42.4682 33.8988H42.4697ZM30.9509 27.3354C32.5555 27.3354 34.4496 27.0808 35.6527 26.861L35.3254 23.5073C34.3056 23.5801 33.2116 23.6164 32.3358 23.6164C30.8781 23.6164 29.7841 23.033 29.7841 20.8462V12.4612H34.5965V8.48772H29.7478V3.45643L24.3899 3.44431V8.62108L21.1821 8.80293V12.4612H24.3899V21.3569C24.3899 26.17 27.5613 27.3354 30.9509 27.3354Z" fill="#029338"/>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        {variant === "default" && (
          <>
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="" className="text-[#595959] text-base hover:text-[#029338] transition-colors font-normal">
                HOME
              </Link>
              <Link href="" className="text-[#595959] text-base hover:text-[#029338] transition-colors font-normal">
                ABOUT US
              </Link>
              
              {/* What's New Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 text-[#595959] text-base hover:text-[#029338] transition-colors font-normal py-2"
                >
                  WHAT'S NEW
                  <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-white rounded-lg shadow-lg border py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#029338] transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="" className="text-[#595959] text-base hover:text-[#029338] transition-colors font-normal">
                ORDERS
              </Link>
              <Link href="" className="text-[#595959] text-base hover:text-[#029338] transition-colors font-normal">
                STYLE234TV
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-7">
              {/* Cart Icon with Badge */}
              <Link href="" className="relative hidden sm:block">
                <svg className="scale-90" width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_45_4823)">
                    <path d="M10.4653 29.8125C11.1039 29.8125 11.6216 29.2948 11.6216 28.6563C11.6216 28.0177 11.1039 27.5 10.4653 27.5C9.82675 27.5 9.30908 28.0177 9.30908 28.6563C9.30908 29.2948 9.82675 29.8125 10.4653 29.8125Z" stroke="#029338" stroke-width="2.3125" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.1841 29.8125C23.8227 29.8125 24.3403 29.2948 24.3403 28.6563C24.3403 28.0177 23.8227 27.5 23.1841 27.5C22.5455 27.5 22.0278 28.0177 22.0278 28.6563C22.0278 29.2948 22.5455 29.8125 23.1841 29.8125Z" stroke="#029338" stroke-width="2.3125" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.21533 5.53125H5.84033L8.93908 21.0134C9.04481 21.5458 9.33441 22.024 9.75718 22.3643C10.1799 22.7046 10.709 22.8854 11.2516 22.875H22.4903C23.033 22.8854 23.562 22.7046 23.9847 22.3643C24.4075 22.024 24.6971 21.5458 24.8028 21.0134L26.6528 11.3125H6.99658" stroke="#029338" stroke-width="1.73438" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <circle cx="26.6527" cy="8.93638" r="7.76752" fill="#EB1C1C" stroke="white" stroke-width="1.41228"/>
                    <path d="M26.4096 12.0964H27.3841V5.91913H25.6215V6.80039H26.4096V12.0964Z" fill="white"/>
                    <defs>
                    <clipPath id="clip0_45_4823">
                    <rect width="27.75" height="27.75" fill="white" transform="translate(0.059082 4.375)"/>
                    </clipPath>
                    </defs>
                </svg>
              </Link>

              {showAuth && (
                <div className="flex items-center gap-7">
                  <Link href="" className="hidden sm:inline-flex text-primary text-base hover:text-[#029338] transition-colors font-normal">
                    LOGIN
                  </Link>
                  <Button className="hidden sm:inline-flex bg-[#029338] hover:bg-[#027a2f] text-white rounded-full px-6">
                    REGISTER
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-8 w-8 text-[#999999]" /> : <Menu size={29} className="h-8 w-8 text-[#999999]" />}
              </Button>
            </div>
          </>
        )}

        {variant === "minimal" && (
          <div className="flex items-center gap-2">
            {showAuth && (
              <Button variant="ghost">Back to Shop</Button>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && variant === "default" && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="" 
              className="text-[#595959] text-base hover:text-[#029338] transition-colors font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="" 
              className="text-[#595959] text-base hover:text-[#029338] transition-colors font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
            
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full text-[#595959] text-base hover:text-[#029338] transition-colors font-normal py-2"
              >
                WHAT'S NEW
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-600 hover:text-[#029338] transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="" 
              className="text-[#595959] text-base hover:text-[#029338] transition-colors font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ORDERS
            </Link>
            <Link 
              href="" 
              className="text-[#595959] text-base hover:text-[#029338] transition-colors font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              STYLE234TV
            </Link>

            {/* Mobile Cart */}
            <Link 
              href="" 
              className="flex items-center gap-2 text-[#595959] text-base hover:text-[#029338] transition-colors font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart className="h-5 w-5" />
              CART {cartCount > 0 && `(${cartCount})`}
            </Link>

            {/* Mobile Auth Buttons */}
            {showAuth && (
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Link href="" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-primary">
                    LOGIN
                  </Button>
                </Link>
                <Link href="" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#029338] hover:bg-[#027a2f]">
                    REGISTER
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

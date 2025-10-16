import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/providers/app-provider";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";

const ubuntu = Ubuntu({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Style234 - Celebrate Nigerian Style",
  description: "Discover authentic Nigerian fashion, beauty, and lifestyle products. From traditional Ankara to modern designs - all made with pride in Nigeria.",
  keywords: "Nigerian fashion, Ankara, African fashion, Nigerian products, ecommerce, style234",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "Style234 - Celebrate Nigerian Style",
    description: "Discover authentic Nigerian fashion, beauty, and lifestyle products",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className={ubuntu.className}>
        <AppProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}

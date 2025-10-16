"use client";

import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { useApp } from "@/providers/app-provider";

interface LayoutWrapperProps {
  children: ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { layoutConfig } = useApp();

  return (
    <>
      <Header 
        variant={layoutConfig.headerVariant} 
        showAuth={layoutConfig.showAuth} 
      />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer variant={layoutConfig.footerVariant} />
    </>
  );
}

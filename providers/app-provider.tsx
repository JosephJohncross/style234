"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LayoutConfig {
  headerVariant: "default" | "minimal";
  footerVariant: "default" | "minimal";
  showAuth: boolean;
}

interface AppContextType {
  layoutConfig: LayoutConfig;
  setLayoutConfig: (config: Partial<LayoutConfig>) => void;
  updateHeaderVariant: (variant: "default" | "minimal") => void;
  updateFooterVariant: (variant: "default" | "minimal") => void;
  toggleAuth: (show: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [layoutConfig, setLayoutConfigState] = useState<LayoutConfig>({
    headerVariant: "default",
    footerVariant: "default",
    showAuth: true,
  });

  const setLayoutConfig = (config: Partial<LayoutConfig>) => {
    setLayoutConfigState((prev) => ({ ...prev, ...config }));
  };

  const updateHeaderVariant = (variant: "default" | "minimal") => {
    setLayoutConfig({ headerVariant: variant });
  };

  const updateFooterVariant = (variant: "default" | "minimal") => {
    setLayoutConfig({ footerVariant: variant });
  };

  const toggleAuth = (show: boolean) => {
    setLayoutConfig({ showAuth: show });
  };

  return (
    <AppContext.Provider
      value={{
        layoutConfig,
        setLayoutConfig,
        updateHeaderVariant,
        updateFooterVariant,
        toggleAuth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

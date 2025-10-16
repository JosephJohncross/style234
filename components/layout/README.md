# Layout Components

This directory contains the reusable layout components for the Style123 application.

## Components

### Header
A flexible header component with variants:
- **default**: Full navigation with auth buttons
- **minimal**: Simplified version for checkout/auth pages

### Footer
A flexible footer component with variants:
- **default**: Full footer with links
- **minimal**: Simple copyright notice

### LayoutWrapper
Wraps the application content with Header and Footer, reading configuration from AppProvider.

## Usage

### Default Layout (Automatic)
The layout is automatically applied via `app/layout.tsx`. No additional configuration needed for standard pages.

### Customizing Layout on Specific Pages

Create a client component to modify the layout:

```tsx
"use client";

import { useEffect } from "react";
import { useApp } from "@/providers/app-provider";

export default function CheckoutPage() {
  const { setLayoutConfig } = useApp();

  useEffect(() => {
    // Set minimal layout for checkout
    setLayoutConfig({
      headerVariant: "minimal",
      footerVariant: "minimal",
      showAuth: false,
    });

    // Cleanup: restore default when leaving
    return () => {
      setLayoutConfig({
        headerVariant: "default",
        footerVariant: "default",
        showAuth: true,
      });
    };
  }, [setLayoutConfig]);

  return (
    <div>
      {/* Your checkout content */}
    </div>
  );
}
```

### Using Individual Helper Methods

```tsx
"use client";

import { useApp } from "@/providers/app-provider";

export default function ProductPage() {
  const { updateHeaderVariant, toggleAuth } = useApp();

  useEffect(() => {
    // Hide auth buttons on product pages
    toggleAuth(false);
  }, [toggleAuth]);

  return <div>{/* Product content */}</div>;
}
```

## AppProvider Context

Available methods:
- `layoutConfig` - Current layout configuration
- `setLayoutConfig(config)` - Update multiple config values
- `updateHeaderVariant(variant)` - Change header variant
- `updateFooterVariant(variant)` - Change footer variant
- `toggleAuth(show)` - Show/hide auth buttons

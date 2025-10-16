# Style123 - Ecommerce Platform

A modern, high-performance ecommerce platform built with Next.js 14, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Tailwind CSS** for responsive, utility-first styling
- 🧩 **shadcn/ui** components for beautiful, accessible UI
- 📱 **Responsive Design** optimized for all devices
- 🚀 **Performance Optimized** with SWC compiler and image optimization
- 🔒 **Type-Safe** with TypeScript
- 🎭 **Modern Icons** with Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- Yarn

### Installation

1. Install dependencies:

```bash
yarn install
```

2. Run the development server:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
│   └── utils.ts       # Helper utilities
├── public/            # Static assets
└── [config files]     # Configuration files
```

## Performance Optimizations

This project includes several performance optimizations:

- **SWC Minification**: Faster builds and smaller bundles
- **Image Optimization**: Automatic AVIF and WebP support
- **Font Optimization**: Next.js font optimization with Inter
- **Tree Shaking**: Automatic removal of unused code
- **Code Splitting**: Automatic route-based code splitting

## Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Utilities**: clsx, tailwind-merge

## Adding More Components

To add more shadcn/ui components, you can use the CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

Or manually add components to the `components/ui` directory.

## License

MIT

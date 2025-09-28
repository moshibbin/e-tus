# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

eTus is a Next.js 15 e-commerce application for media equipment sales, built with TypeScript and React 19. The project uses the App Router architecture and includes a shopping cart system with React Context for state management.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### File Structure
- `/app` - Next.js App Router pages and components
- `/app/components` - Reusable UI components (Header, Footer, Banners, etc.)
- `/app/context` - React Context providers (cart management)
- `/app/data` - Static data files (products, categories, menu)
- `/app/[route]` - Page routes (shop, cart, checkout, about, etc.)

### Key Components
- **Layout**: Main layout in `app/layout.tsx` loads external CSS/JS assets and fonts
- **Providers**: `app/providers.tsx` wraps app with CartProvider and Footer
- **Cart System**: React Context-based cart in `app/context/cart.tsx` with full CRUD operations
- **Product Interface**: Comprehensive product type with images, reviews, ratings, inventory

### External Dependencies
The project relies heavily on external assets loaded via CDN:
- Bootstrap, FontAwesome, jQuery, Swiper, Owl Carousel
- Custom SwiftCart theme CSS/JS in `/public/assets/`

### State Management
- Shopping cart uses React Context (`CartProvider`)
- Cart operations: add, remove, clear, get total, get item count
- Product interface includes detailed metadata (reviews, ratings, stock, etc.)

### Styling
- Global CSS in `app/globals.css`
- External vendor stylesheets loaded in layout
- TypeScript path alias `@/*` points to project root

## Configuration Notes

- Next.js config enforces TypeScript and ESLint checks during builds
- ESLint config extends Next.js defaults with relaxed rules for rapid development
- Turbopack enabled for faster development builds
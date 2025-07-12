# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build and Package
- `npm run dev` - Start development server with Vite
- `npm run build` - Build and package the library 
- `npm run package` - Create distributable package (runs svelte-kit sync, svelte-package, and publint)
- `npm run preview` - Preview the built application

### Code Quality
- `npm run check` - Type check with svelte-check
- `npm run check:watch` - Type check in watch mode
- `npm run lint` - Run prettier and eslint checks
- `npm run format` - Format code with prettier

## Architecture

This is a Svelte 5 component library built with SvelteKit and TypeScript. The library is designed to be published as an npm package.

### Project Structure
- `/src/lib/` - Main library code
  - `/components/` - Reusable UI components
  - `index.ts` - Main library entry point
  - `utils.ts` - Utility functions (includes `cn` function for className merging)
  - `types.ts` - Shared TypeScript types

### Component Architecture
Components follow a consistent pattern:
- Built on top of `bits-ui` primitives for accessibility
- Use `tailwind-variants` for variant-based styling
- Export both the component and related types from component index files
- Components accept a `children` snippet for flexible content rendering
- Styling uses Tailwind CSS with custom design tokens

### Key Dependencies
- `bits-ui` - Accessible component primitives
- `tailwind-variants` - Variant-based CSS-in-JS styling
- `clsx` and `tailwind-merge` - Utility for conditional and merged className handling
- Tailwind CSS plugins: forms, typography, aspect-ratio, container-queries

### Component Development Pattern
When creating new components:
1. Create component folder under `/src/lib/components/`
2. Create the `.svelte` component file using `bits-ui` primitives
3. Define variants and types in `index.ts` using `tailwind-variants`
4. Export from parent component `index.ts` and main library `index.ts`
5. Follow the Button component as a reference implementation

### Build System
- Uses SvelteKit for development and packaging
- Vite for bundling and development server
- `svelte-package` for creating distributable library package
- `publint` for package.json validation
- Output goes to `/dist/` directory

### Type Safety
- Full TypeScript support with strict type checking
- Component props properly typed with generic constraints
- Exports type definitions for consumers
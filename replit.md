# Portfolio Website

## Overview

A full-stack portfolio website for Ben Parker, featuring a modern React frontend with Express.js backend. The application showcases personal information, skills, projects, and includes a contact form. Built with TypeScript, it uses shadcn/ui components for a polished design system and Drizzle ORM with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Framework**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript compiled with esbuild for production
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error middleware with structured error responses
- **Request Logging**: Custom middleware for API request/response logging

### Data Storage
- **Database**: PostgreSQL via Neon serverless database
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Development Storage**: In-memory storage fallback for development environments

### Key Features
- **Contact System**: Form submission with server-side validation using Zod schemas
- **File Downloads**: CV download endpoint with proper file handling
- **Responsive Design**: Mobile-first approach with glassmorphism UI effects
- **Animation System**: Custom CSS animations and transitions
- **Dark Theme**: Built-in dark theme with CSS custom properties

### Development Setup
- **Development Server**: Vite dev server with HMR integration
- **Build Process**: Separate client and server builds using Vite and esbuild
- **Path Aliases**: Configured for clean imports (@, @shared, @assets)
- **Hot Reloading**: Full-stack development with automatic reload

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Database Driver**: @neondatabase/serverless for optimized serverless connections

### UI Components & Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **React Hook Form**: Form state management with validation
- **Date-fns**: Date manipulation library
- **Class Variance Authority**: Type-safe component variants

### Build & Development
- **Vite**: Fast frontend build tool with plugin ecosystem
- **ESBuild**: Fast JavaScript bundler for server builds
- **TypeScript**: Type safety across the entire application
- **Replit Integration**: Development environment optimizations for Replit platform
# 🚀 Next.js 16 E-Commerce Assessment

A modern, high-performance e-commerce application built with the cutting-edge **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project demonstrates scalable architecture, state management with **Zustand 5**, and robust type safety.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## ✨ Key Features

- **⚡ Cutting-Edge Frameworks**: Built on **Next.js 16** and **React 19**, utilizing the latest Server Components and Suspense features for optimal performance.
- **🎨 Modern Styling**: Styled with **Tailwind CSS 4**, featuring a custom design system ("Bosta Red"), dark mode support, and responsive layouts.
- **🛒 Global State Management**: Powered by **Zustand 5**, providing a seamless cart experience with persistent storage features.
- **🔒 Secure Authentication**: Robust authentication system with Server Actions, handling Login and Signup with **Zod 4** validation schemas.
- **📱 Component Architecture**: Modular, reusable components following Atomic Design principles, ensuring maintainability and scalability.
- **♿ Accessibility**: Built with accessibility in mind (a11y), passing automated checks and using semantic HTML.

## 🛠️ Tech Stack

| Category | Technology | Version | Description |
|----------|------------|---------|-------------|
| **Core** | [Next.js](https://nextjs.org/) | `16.1.6` | The React Framework for the Web (App Router). |
| **UI Library** | [React](https://react.dev/) | `19.2.3` | The library for web and native user interfaces. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.0.0` | A utility-first CSS framework for rapid UI development. |
| **State** | [Zustand](https://github.com/pmndrs/zustand) | `^5.0.11` | Small, fast, and scalable bearbones state-management solution. |
| **Validation** | [Zod](https://zod.dev/) | `^4.3.6` | TypeScript-first schema declaration and validation library. |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.564.0` | Beautiful & consistent icon toolkit. |
| **Utilities** | [clsx](https://github.com/lukeed/clsx) | `^2.1.1` | Utility for constructing `className` strings conditionally. |

## 🏗️ Project Structure

The project follows a feature-first and clean architecture approach:

```bash
├── 📂 app/                 # Next.js 16 App Router
│   ├── 📂 (auth)/          # Authentication routes (Login/Signup)
│   ├── 📂 cart/            # Cart page
│   ├── 📂 components/      # Shared UI components
│   ├── 📂 products/        # Product listing & details
│   ├── 📄 layout.tsx       # Root layout with Providers
│   └── 📄 page.tsx         # Home page
├── 📂 components/          # Reusable UI Components
│   ├── 📂 auth/            # Auth forms (Client Components)
│   ├── 📂 cart/            # Cart-specific components
│   ├── 📂 products/        # Product cards, lists, filters
│   └── 📂 ui/              # Shadcn/ui & generic UI elements
├── 📂 actions/             # Server Actions (Data mutations & Auth)
├── 📂 hooks/               # Custom React Hooks
├── 📂 lib/                 # Utilities & Helper functions
│   └── 📄 utils.ts         # Class merging & common utils
├── 📂 schemas/             # Zod Validation Schemas
├── 📂 stores/              # Global State Stores
│   └── 📄 useProductStore.ts # Cartesian & Product state (Zustand)
├── 📂 types/               # TypeScript Definitions
├── 📄 next.config.ts       # Next.js Configuration
└── 📄 postcss.config.mjs   # Tailwind CSS Configuration (v4)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (Recommended for Next.js 16)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bosta-assissment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 🧪 Development Notes

- **Server Components**: We prioritize Server Components for data fetching and layout structure. Client Components are used strictly where interactivity (state, effects) is required.
- **Zustand Implementation**: The store uses specific client-side hydration patterns to prevent hydration mismatches common with persistent storage in SSR frameworks.
- **Tailwind v4**: Note that Tailwind v4 configuration relies heavily on CSS variables and native features, differing slightly from v3 setups.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

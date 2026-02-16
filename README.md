# Bosta Frontend Assessment

This repository contains the solution for the Frontend Technical Assessment for the Frontend Engineer position at Bosta.

## 🚀 Live Demo

[https://bosta-assissment.vercel.app/](https://bosta-assissment.vercel.app/)

## 📋 Assessment Overview

The goal of this project was to develop a React application using the **Fake Store API** to demonstrate proficiency in modern frontend development practices, focusing on component architecture, API integration, state management, and responsive design.

### Core Features

#### 1. Product Listing & Details
- **Data Fetching**: Utilizes the `/products` endpoint to fetch and display a list of products.
- **Product Cards**: Displays essential product details including image, name, price, and category.
- **Navigation**: Each product card has a "View Details" button linking to a dedicated product details page.
- **Sorting**:
  - Sort by Price (Low to High / High to Low).
  - Sort by Category.
- **Pagination**: Implemented to manage large datasets (e.g., 10 products per page).

#### 2. User Experience (UX)
- **Loading States**: Skeletons and spinners provide visual feedback during data fetching.
- **Error Handling**: Graceful error messages for API failures and empty states (e.g., "No products found").
- **Responsiveness**: Fully responsive design ensuring seamless experience across mobile, tablet, and desktop devices.
- **Toast Notifications**: Interactive feedback for actions like adding to cart.

#### 3. Technical Implementation
- **Framework**: Built with [Next.js 16](https://nextjs.org/) (App Router).
- **Library**: [React 19](https://react.dev/).
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) for a utility-first simplified styling approach.
- **State Management**: [Zustand 5](https://github.com/pmndrs/zustand) used for global state (Shopping Cart, Authentication).
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) and [Lucide React](https://lucide.dev/) icons.
- **Validation**: [Zod 4](https://zod.dev/) validation with custom server actions.

## 🛠️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bosta-assissment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```bash
├── actions/            # Server actions for async operations
├── app/                # Next.js App Router (Pages & Layouts)
│   ├── (auth)/         # Authentication routes
│   ├── cart/           # Shopping Cart page
│   ├── products/       # Product Listing & Details pages
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # Reusable Components
│   ├── layout/         # Header, Footer, Navigation
│   ├── ui/             # UI Primitives (Buttons, Inputs, etc.)
│   └── ...             # Feature-specific components
├── hooks/              # Custom React Hooks
├── lib/                # Utility helper functions
├── stores/             # Zustand stores (useCartStore, useAuthStore)
└── types/              # TypeScript interfaces and types
```

## 💡 Key Decisions & Trade-offs

- **Next.js App Router**: Chosen for its robust features like Server Components, automatic code splitting, and simplified routing.
- **Zustand**: Selected over Redux or Context API for its simplicity, minimal boilerplate, and performance with selective reactivity.
- **Image Optimization**: Used `next/image` component for automatic image optimization and layout stability.
- **Modular Components**: The codebase is structured to promote reusability and maintainability (e.g., separating Header into distinct sub-components).

## ✅ Achieved Requirements & Extra Features

### 🎯 Core Requirements (100% Completed)

| Requirement | Implementation Status | Details |
| :--- | :---: | :--- |
| **Framework** | ✅ | **Next.js 16 (App Router)** used. |
| **Product List** | ✅ | Fetches display items from `/products`. |
| **Product Details** | ✅ | Shows Image, Name, Price, Category. |
| **"View Details"** | ✅ | Dedicated dynamic route `/products/[id]`. |
| **Sorting** | ✅ | Sort by Price (Asc/Desc) & Category filtering. |
| **Pagination** | ✅ | Server-side pagination implemented. |
| **State Management** | ✅ | **Zustand 5** for global state. |
| **Styling** | ✅ | **Tailwind CSS 4** for styling. |
| **Responsiveness** | ✅ | Fully mobile-first responsive design. |
| **Loading States** | ✅ | Skeleton loaders for better UX. |
| **Error Handling** | ✅ | Graceful error UI & Toast notifications. |

### 🌟 Bonus & Advanced Features (Beyond Requirements)

The following features were implemented to demonstrate scalability and advanced React patterns:

- **🛒 Full Shopping Cart System**:
  - Global cart state management with Zustand.
  - Persistent storage (cart saves to `localStorage`).
  - Add/Remove items and quantity adjustments.
  
- **🔐 Authentication Flow**:
  - Implemented a simulated Auth system.
  - Login/Logout functionality.
  - Protected routes features.
  
- **🛡️ Server Actions & Zod Validation**:
  - Used Next.js Server Actions for robust form handling.
  - Integrated **Zod** for schema validation on inputs.
  
- **🌚 Dark Mode**:
  - Built-in support for system/user preference theme switching.
  
- **🧩 Atomic Component Architecture**:
  - Refactored `Header` and UI elements into small, reusable atoms.
  - Separation of concerns (Server vs. Client components).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).


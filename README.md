# BostaShop — Frontend Technical Assessment

A modern e-commerce application built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Zustand 5** as the solution for the Frontend Engineer position at [Bosta](https://bosta.co/).

## Live Demo

**[https://bosta-assissment.vercel.app](https://bosta-assissment.vercel.app/)**

**Test Credentials:**
| Field | Value |
|---|---|
| Username | `mor_2314` |
| Password | `83r5^_` |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui (Radix primitives) |
| State Management | Zustand 5 (with persist middleware) |
| Validation | Zod 4 |
| Notifications | Sonner |
| Icons | Lucide React |

---

## Installation & Setup

> **No environment variables required.** The API base URL defaults to `https://fakestoreapi.com` in the code.

```bash
# 1. Clone the repository
git clone https://github.com/Eng1Mahmoud/bosta-assissment.git
cd bosta-assissment

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── actions/               # Server actions (product & auth API calls)
├── app/                   # Next.js App Router
│   ├── (auth)/            # Auth route group (login, signup)
│   ├── (main)/            # Main route group (home, products, cart)
│   ├── error.tsx          # Global error boundary
│   ├── loading.tsx        # Global loading state
│   └── not-found.tsx      # 404 page
├── components/
│   ├── ui/                # shadcn/ui primitives only
│   ├── auth/              # Login & Signup forms
│   ├── cart/              # Cart view, items, summary, empty state
│   ├── layout/            # Header, Footer, Nav components
│   ├── products/          # Product list, card, filters, pagination, skeleton
│   ├── BrandLogo.tsx      # Shared brand logo
│   ├── CategorySelect.tsx # Shared category dropdown (form & filter variants)
│   ├── EmptyState.tsx     # Generic empty state component
│   ├── FieldError.tsx     # Form field error display
│   ├── QuantityControl.tsx# Cart quantity +/- controls
│   └── SubmitButton.tsx   # Form submit button with loading state
├── hooks/                 # Custom hooks (useCart, useCreateProduct, useAddToCart)
├── lib/                   # Utilities (api, validation, cache config)
├── schemas/               # Zod validation schemas
├── stores/                # Zustand stores (auth, products/cart)
├── types/                 # TypeScript type definitions
└── proxy.ts               # Next.js middleware (route protection)
```

---

## Assessment Requirements — Implementation Status

### Core Requirements (All Completed)

| # | Requirement | Status | Implementation |
|---|---|---|---|
| 1 | Product Listing Page | ✅ | Fetches from `/products`, displays image/name/price/category, "View Details" navigation |
| 2 | Sorting by price (asc/desc) | ✅ | 3-state toggle in `ProductFilters` (ascending → descending → none) |
| 3 | Sorting by category | ✅ | Category dropdown filter via shared `CategorySelect` component |
| 4 | Pagination (10/page) | ✅ | Smart pagination with page numbers, prev/next, and ellipsis for large sets |
| 5 | Loading indicator | ✅ | Skeleton grid (10 cards) while fetching products |
| 6 | Error handling | ✅ | Inline error with "Try Again" button, global error boundary, toast notifications |
| 7 | Empty state | ✅ | "No products found" via reusable `EmptyState` component |
| 8 | Product Details Page | ✅ | Server-rendered with image, title, description, category, price, rating |
| 9 | "Back to Products" button | ✅ | Navigation button at top of details page |
| 10 | Create Product Page | ✅ | Form with title, description, price, category dropdown, image URL |
| 11 | Category dropdown from API | ✅ | Fetches from `/products/categories` with caching |
| 12 | Field validation | ✅ | Zod schema: required fields, positive price, valid URL |
| 13 | POST to `/products` | ✅ | Via server action with `useActionState` (React 19) |
| 14 | Success message | ✅ | Toast notification + redirect to products page |
| 15 | Submit button disabled during submission | ✅ | `SubmitButton` component with spinner and disabled state |

### Technical Requirements (All Met)

| Requirement | Implementation |
|---|---|
| React or Next.js | **Next.js 16** with App Router |
| State Management | **Zustand 5** with persist middleware |
| Styling | **Tailwind CSS 4** + **shadcn/ui** |
| API Calls | **Fetch API** via centralized `fetchApi` wrapper |
| Responsiveness | Fully responsive, mobile-first design (sm/md/lg breakpoints) |
| Error Handling | Global error boundary, per-page errors, field-level validation, toast notifications |

### Bonus Features (Both Fully Implemented)

| Feature | Details |
|---|---|
| **Cart** | Add from listing & details pages, cart page with items/quantity/price, update quantities (+/- controls), remove items, clear cart, total calculation, persistent to localStorage |
| **Authentication** | Login via `/auth/login`, signup (simulated), protected routes via middleware, user name in header with avatar dropdown, logout, httpOnly cookie + localStorage persistence |

### Extra Features (Beyond Requirements)

| Feature | Details |
|---|---|
| Dark/Light Mode | Manual toggle with localStorage persistence and custom color scheme |
| Landing Page | Full marketing home page with animated hero, stats, features grid, and CTA sections |
| SEO & Metadata | Dynamic `generateMetadata` with OpenGraph on product details, robots directives |
| Server-Side Rendering | Product details page fetched on server for better SEO and performance |
| Server-Side Caching | `force-cache` with `next.tags` and 1-hour revalidation on products/categories |
| Middleware Route Protection | httpOnly cookie-based auth via Next.js middleware (not just client-side guards) |
| Toast Actions | "View Cart" on add-to-cart, "Login Now" on unauthenticated attempts |
| Callback URL Preservation | Login redirects back to the intended page via `?callback=` parameter |
| Scroll-to-Top | Floating button that appears after scrolling |
| Shared Component Architecture | 6 reusable components (`EmptyState`, `SubmitButton`, `FieldError`, `QuantityControl`, `BrandLogo`, `CategorySelect`) |
| Custom Hooks | `useCart` (selectors), `useCreateProduct` (form logic), `useAddToCart` (auth guard + cart) |
| Glassmorphic UI | Backdrop blur, semi-transparent cards, mesh gradient backgrounds |
| Accessibility | `motion-reduce` support, `sr-only` labels, semantic HTML |

---

## Important Notes for Reviewers

### 1. API Proxy Strategy

FakeStoreAPI (`fakestoreapi.com`) is **blocked or throttled at the network level in some regions** (including Egypt). This causes "Connection Reset" errors especially in Next.js Server Actions that run server-side.

**Solution:**
- **GET requests** are routed through a CDN proxy (`api.codetabs.com`) to bypass the block.
- **POST/PUT/DELETE requests** are **simulated** because free CORS proxies don't support non-GET methods, and FakeStoreAPI doesn't persist data anyway.

In a real production app with a dedicated backend, no proxy or simulation would be needed.

### 2. Client-Side Pagination

FakeStoreAPI **does not support server-side pagination** (no `page` or `limit` query params that filter on the backend). The API returns all 20 products in a single response.

**Our approach:** Fetch all products once (with caching), then paginate client-side in the Zustand store. In a real application, pagination would be handled server-side by passing `page` and `limit` params to the API endpoint.

### 3. Simulated Signup

FakeStoreAPI **does not have a signup endpoint**. The signup flow is simulated with a 1-second delay and a success message that redirects to the login page. This was implemented to fulfill the bonus authentication requirement and demonstrate the full auth UI flow.

### 4. Middleware-Based Route Protection

Protected routes (`/cart`, `/products/create`) are guarded using **Next.js middleware** ([proxy.ts](proxy.ts)) that checks for an httpOnly `token` cookie server-side — not just client-side redirects. Auth routes (`/login`, `/signup`) redirect authenticated users to `/products`.

### 5. Dual Auth Persistence

Authentication state is stored in **two layers**:
- **httpOnly cookie** — for server-side middleware route protection
- **Zustand + localStorage** — for client-side UI (header, cart visibility, etc.)

This ensures route protection works even before JavaScript loads.

---

## Key Architecture Decisions

| Decision | Reasoning |
|---|---|
| **Next.js App Router** | Server components, automatic code splitting, simplified routing, built-in metadata API |
| **Zustand over Redux/Context** | Minimal boilerplate, selective reactivity, built-in persist middleware, simpler for this scale |
| **Server Actions + useActionState** | React 19 pattern for form handling — progressive enhancement, no manual loading state management |
| **Zod for validation** | Type-safe schema validation that integrates naturally with TypeScript and server actions |
| **shadcn/ui components** | Copy-paste Radix primitives — full control over styling, no external runtime dependency |
| **components/ui/ separation** | `components/ui/` contains only shadcn primitives; custom shared components live in `components/` root |

---

## License

This project is open source and available under the [MIT License](LICENSE).


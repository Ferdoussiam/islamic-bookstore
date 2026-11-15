import { Decimal } from "@prisma/client/runtime/library";

// ─── Book ────────────────────────────────────────

export interface BookSummary {
  id: string;
  title: string;
  slug: string;
  author: string;
  price: Decimal | number;
  salePrice: Decimal | number | null;
  coverImage: string;
  category: {
    name: string;
    slug: string;
  };
  language: "ENGLISH" | "ARABIC" | "URDU";
  featured: boolean;
}

export interface BookDetail extends BookSummary {
  translator: string | null;
  publisher: string | null;
  isbn: string | null;
  description: string;
  images: string[];
  pages: number | null;
  weight: Decimal | number | null;
  stock: number;
  reviews: ReviewSummary[];
}

// ─── Cart ────────────────────────────────────────

export interface CartItem {
  id: string;
  title: string;
  slug: string;
  author: string;
  price: number;
  salePrice: number | null;
  coverImage: string;
  quantity: number;
}

// ─── Order ───────────────────────────────────────

export interface OrderSummary {
  id: string;
  orderNumber: string;
  status: string;
  total: number;
  createdAt: string;
  itemCount: number;
}

// ─── Review ──────────────────────────────────────

export interface ReviewSummary {
  id: string;
  rating: number;
  title: string | null;
  body: string | null;
  createdAt: string;
  user: {
    name: string | null;
  };
}

// ─── Filters ─────────────────────────────────────

export interface BookFilters {
  category?: string;
  language?: string;
  author?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sort?: "price-asc" | "price-desc" | "newest" | "title";
  page?: number;
  limit?: number;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  duration: string;
  actionText: string;
  image: string;
  bullets?: string[];
  price?: string;
  meta?: string;
  popupDescription?: string;
  popupInfo?: string;
  popupBullets?: string[];
  popupActionText?: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  age: string;
  role?: string;
}

export interface TestimonialSlide {
  id: number;
  images: [string, string, string];
  quotes: Testimonial[];
}

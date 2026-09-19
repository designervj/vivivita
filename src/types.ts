export interface Program {
  id: string;
  title: string;
  category: 'webinar' | 'mini-trening' | 'mini-program' | 'premium';
  categoryLabel: string;
  description: string;
  duration: string;
  actionText: string;
  image: string;
  bullets?: string[];
  price?: string;
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
  quotes: Testimonial[];
}

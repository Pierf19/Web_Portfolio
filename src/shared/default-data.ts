export interface Profile {
  name: string;
  title: string;
  description: string;
  profileImage?: string;
  awardsCount: number;
  customersCount: number;
  email: string;
  phone: string;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const defaultProfile: Profile = {
  name: "Pier Monica",
  title: "Creative Designer",
  description:
    "Creating beautiful digital experiences with passion and precision.",
  profileImage:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=640&h=640&fit=crop",
  awardsCount: 18,
  customersCount: 4,
  email: "hello@alinaparker.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
};

export const defaultServices: Service[] = [
  {
    id: "1",
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
    icon: "palette",
  },
  {
    id: "2",
    title: "Web Design",
    description:
      "Crafting stunning, responsive websites that capture your brand essence and convert visitors into customers.",
    icon: "globe",
  },
  {
    id: "3",
    title: "Web Development",
    description:
      "Building robust, scalable web applications using modern technologies and best practices.",
    icon: "code",
  },
  {
    id: "4",
    title: "App Development",
    description:
      "Developing high-performance mobile applications that deliver seamless experiences across all devices.",
    icon: "smartphone",
  },
];

export const defaultSkills: Skill[] = [
  { id: "1", name: "UI/UX Design", percentage: 95 },
  { id: "2", name: "Web Development", percentage: 90 },
  { id: "3", name: "Mobile Development", percentage: 85 },
  { id: "4", name: "Brand Identity", percentage: 88 },
];

export const defaultPortfolio: PortfolioProject[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "web",
    description: "Modern online shopping experience",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Mobile Banking App",
    category: "app",
    description: "Secure financial management",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: "3",
    title: "Brand Identity",
    category: "uiux",
    description: "Complete brand redesign",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    featured: false,
  },

];

export const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Outstanding work! The attention to detail and creative approach exceeded all our expectations. Highly recommended for anyone looking for top-tier design services.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    content:
      "A true professional who delivers exceptional results. The project was completed on time and the final product was exactly what we envisioned.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Director at BrandWise",
    content:
      "Incredible talent and expertise! Working together was a smooth and enjoyable experience. The results speak for themselves.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5,
  },
];

export const defaultBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web design, from AI integration to immersive experiences.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    date: "2024-01-15",
    author: "Design Team",
  },
  {
    id: "2",
    title: "Building Scalable Applications with Modern Architecture",
    excerpt:
      "Learn best practices for creating applications that can grow with your business needs.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    date: "2024-01-10",
    author: "Dev Team",
  },
  {
    id: "3",
    title: "UI/UX Best Practices for Mobile Applications",
    excerpt:
      "Discover essential principles for creating intuitive and engaging mobile experiences.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    date: "2024-01-05",
    author: "UX Team",
  },
];

export const defaultSocialLinks: SocialLink[] = [
  { platform: "behance", url: "https://behance.net", icon: "behance" },
  { platform: "dribbble", url: "https://dribbble.com", icon: "dribbble" },
  { platform: "linkedin", url: "https://linkedin.com", icon: "linkedin" },
  { platform: "github", url: "https://github.com", icon: "github" },
];


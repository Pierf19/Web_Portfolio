import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

interface BlogProps {
  posts?: BlogPost[];
}

export function Blog({ posts }: BlogProps) {
  const defaultPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web design, from AI integration to immersive experiences.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      date: "2024-01-15",
      author: "Design Team"
    },
    {
      id: "2",
      title: "Building Scalable Applications with Modern Architecture",
      excerpt: "Learn best practices for creating applications that can grow with your business needs.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      date: "2024-01-10",
      author: "Dev Team"
    },
    {
      id: "3",
      title: "UI/UX Best Practices for Mobile Applications",
      excerpt: "Discover essential principles for creating intuitive and engaging mobile experiences.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      date: "2024-01-05",
      author: "UX Team"
    }
  ];

  const displayPosts = posts || defaultPosts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="blog" className="py-20 lg:py-32 bg-background relative overflow-hidden" data-testid="section-blog">
      <div className="absolute top-20 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h6 className="text-primary font-heading font-semibold text-xl lg:text-2xl" data-testid="text-blog-subtitle">
            Blog
          </h6>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground" data-testid="text-blog-title">
            Latest Insights
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayPosts.map((post, index) => (
            <div
              key={post.id}
              className="group bg-card border border-border hover:border-primary rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-testid={`card-blog-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-testid={`img-blog-${index}`}
                />
              </div>

              <div className="p-6 lg:p-8 space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                  <Calendar className="w-4 h-4" />
                  <span data-testid={`text-blog-date-${index}`}>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <span data-testid={`text-blog-author-${index}`}>{post.author}</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2" data-testid={`text-blog-title-${index}`}>
                  {post.title}
                </h3>

                <p className="text-muted-foreground font-body leading-relaxed line-clamp-3" data-testid={`text-blog-excerpt-${index}`}>
                  {post.excerpt}
                </p>

                <button 
                  className="flex items-center gap-2 text-primary font-heading font-semibold hover:gap-4 transition-all group-hover:text-purple-400"
                  data-testid={`button-read-more-${index}`}
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

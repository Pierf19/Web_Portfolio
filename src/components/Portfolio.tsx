import { ExternalLink } from "lucide-react";

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
}

interface PortfolioProps {
  projects?: PortfolioProject[];
}

export function Portfolio({ projects }: PortfolioProps) {
  const defaultProjects: PortfolioProject[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern online shopping experience",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: "2",
      title: "Mobile Banking App",
      category: "app",
      description: "Secure financial management",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: "3",
      title: "Brand Identity",
      category: "uiux",
      description: "Complete brand redesign",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      featured: false
    },
  ];

  const displayProjects = (projects || defaultProjects).slice(0, 3);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background relative overflow-hidden" data-testid="section-portfolio">
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h6 className="text-primary font-heading font-semibold text-xl lg:text-2xl" data-testid="text-portfolio-subtitle">
            Portfolio
          </h6>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground" data-testid="text-portfolio-title">
            My Latest Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                project.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-testid={`img-project-${index}`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-2" data-testid={`text-project-title-${index}`}>
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground font-body" data-testid={`text-project-description-${index}`}>
                          {project.description}
                        </p>
                      </div>
                      <button 
                        className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                        data-testid={`button-view-project-${index}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

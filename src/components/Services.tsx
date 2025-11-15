import { Code, Palette, Smartphone, Globe } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  services?: Service[];
}

export function Services({ services }: ServicesProps) {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      code: Code,
      palette: Palette,
      smartphone: Smartphone,
      globe: Globe,
    };
    const IconComponent = iconMap[iconName.toLowerCase()] || Code;
    return <IconComponent className="w-12 h-12" />;
  };

  const defaultServices: Service[] = [
    {
      id: "1",
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
      icon: "palette"
    },
    {
      id: "2",
      title: "Web Design",
      description: "Crafting stunning, responsive websites that capture your brand essence and convert visitors into customers.",
      icon: "globe"
    },
    {
      id: "3",
      title: "Web Development",
      description: "Building robust, scalable web applications using modern technologies and best practices.",
      icon: "code"
    },
    {
      id: "4",
      title: "App Development",
      description: "Developing high-performance mobile applications that deliver seamless experiences across all devices.",
      icon: "smartphone"
    }
  ];

  const displayServices = services || defaultServices;

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden" data-testid="section-services">
      <div className="absolute top-40 left-0 w-32 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-16 h-16 bg-purple-500/20 rotate-45 animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h6 className="text-primary font-heading font-semibold text-xl lg:text-2xl" data-testid="text-services-subtitle">
            My Expertise
          </h6>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground" data-testid="text-services-title">
            Provide Wide Range of
            <br />
            Digital Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {displayServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-card border border-transparent hover:border-primary p-8 lg:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-testid={`card-service-${index}`}
            >
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:text-primary transition-colors group-hover:-translate-y-2 duration-300">
                  {getIcon(service.icon)}
                </div>
                
                <div className="flex-1 space-y-3">
                  <h4 className="font-heading font-bold text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground font-body text-base lg:text-lg leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                  <button 
                    className="text-primary font-heading font-semibold text-base lg:text-lg border-b-2 border-primary hover:text-purple-400 hover:border-purple-400 transition-colors inline-block pb-1"
                    data-testid={`button-read-more-${index}`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

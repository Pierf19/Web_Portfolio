import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
      onNavigate?.(sectionId);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center h-20 relative">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-2xl font-heading font-bold text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors z-10"
            data-testid="logo-link"
          >
            <span className="text-primary">Personal</span>Portfolio
          </a>

          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-lg font-heading transition-colors hover:text-primary px-2 ${
                  activeSection === item.id ? "text-primary font-semibold" : "text-foreground"
                }`}
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover-elevate p-2 rounded-md ml-auto"
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div 
            className="lg:hidden bg-card border border-border rounded-lg p-6 mb-4 shadow-xl animate-fade-in"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`text-lg font-heading transition-colors hover:text-primary py-2 ${
                    activeSection === item.id ? "text-primary font-semibold" : "text-foreground"
                  }`}
                  data-testid={`mobile-link-${item.id}`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-lg py-6 rounded-full mt-2"
                data-testid="button-contact-mobile"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

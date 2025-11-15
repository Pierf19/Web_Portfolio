import {
  FaBehance,
  FaDribbble,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

interface FooterProps {
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

export function Footer({ socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const getSocialIcon = (platform: string) => {
    const iconMap: Record<string, any> = {
      behance: FaBehance,
      dribbble: FaDribbble,
      linkedin: FaLinkedinIn,
      github: FaGithub,
      instagram: FaInstagram,
      twitter: FaTwitter,
    };
    const IconComponent = iconMap[platform.toLowerCase()];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  const defaultSocialLinks = socialLinks || [
    { platform: "github", url: "https://github.com/Pierf19", icon: "github" },
    {
      platform: "instagram",
      url: "https://www.instagram.com/pier.moningka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: "instagram",
    },
  ];

  const navSections = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <footer
      className="bg-card border-t border-border py-12 lg:py-16"
      data-testid="footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              <span className="text-primary">Personal</span>Portfolio
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Creating beautiful digital experiences with passion and precision.
            </p>
            <div className="flex gap-3">
              {defaultSocialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-background border border-border rounded-full hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all text-foreground"
                  data-testid={`link-footer-social-${link.platform}`}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {navSections.slice(0, 4).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors font-body"
                  data-testid={`link-footer-${section.id}`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-4">
              Services
            </h4>
            <nav className="space-y-2">
              <a
                href="#services"
                className="block text-muted-foreground hover:text-primary transition-colors font-body"
              >
                UI/UX Design
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Web Development
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Mobile Apps
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Branding
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-4">
              Newsletter
            </h4>
            <p className="text-muted-foreground font-body mb-4">
              Subscribe to get updates on latest projects and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="input-newsletter"
              />
              <button
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-heading font-semibold"
                data-testid="button-subscribe"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-muted-foreground font-body text-sm"
              data-testid="text-copyright"
            >
              © {currentYear} Personal Portfolio All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

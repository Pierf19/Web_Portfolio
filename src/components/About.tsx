import type { Profile } from "@/shared/default-data";

interface AboutProps {
  profile?: Profile;
}

export default function About({ profile }: AboutProps) {
  if (!profile) return null;

  const initials = (profile.name || "YN")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Profile Card */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto">
              <div className="rounded-3xl bg-card border border-border p-8 shadow-xl transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 shrink-0">
                    {profile.profileImage ? (
                      <img
                        src={profile.profileImage}
                        alt={profile.name}
                        className="w-24 h-24 object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                        <span className="text-3xl font-heading font-bold text-white">{initials}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-heading font-bold text-foreground">{profile.name}</h3>
                    <p className="text-muted-foreground">{profile.title}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 rounded-full bg-secondary text-foreground/80 text-xs border border-border">
                        {profile.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary text-foreground/80 text-xs border border-border">
                        {profile.email}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center bg-background rounded-2xl p-4 border border-border">
                    <p className="text-2xl font-heading font-bold text-foreground">
                      {profile.awardsCount}
                    </p>
                    <p className="text-xs text-muted-foreground">Awards</p>
                  </div>
                  <div className="text-center bg-background rounded-2xl p-4 border border-border">
                    <p className="text-2xl font-heading font-bold text-foreground">
                      {profile.customersCount}k+
                    </p>
                    <p className="text-xs text-muted-foreground">Customers</p>
                  </div>
                  <div className="text-center bg-background rounded-2xl p-4 border border-border">
                    <p className="text-2xl font-heading font-bold text-foreground">10+</p>
                    <p className="text-xs text-muted-foreground">Years</p>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-3xl blur-2xl"></div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-28 h-28 bg-purple-500/10 rounded-3xl blur-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {profile.description}
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-foreground/90">Pixel-perfect UI Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-foreground/90">High-performance Web Apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-foreground/90">Responsive & Accessible</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-foreground/90">Clean, Maintainable Code</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollTo("portfolio")}
                  className="px-7 py-3 bg-primary text-primary-foreground rounded-full font-heading font-semibold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  View Portfolio
                </button>
                <button
                  onClick={() => scrollTo("services")}
                  className="px-7 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-heading font-semibold"
                >
                  My Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

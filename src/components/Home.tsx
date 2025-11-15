import { useEffect, useState } from "react";
import { Trophy, Users } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import type { Profile, SocialLink } from "@/shared/default-data";
import CvImage from "@/img/Cv-pier.png";
import ProfileImage from "@/img/2.png";

interface HomeProps {
  profile?: Profile;
  socialLinks?: SocialLink[];
}

export default function HomeSection({ profile, socialLinks }: HomeProps) {
  const [displayName, setDisplayName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);
  const namePhrase = profile?.name || "Your Name";

  useEffect(() => {
    let timeoutId: number;
    if (!isDeleting && displayName.length < namePhrase.length) {
      timeoutId = window.setTimeout(
        () => setDisplayName(namePhrase.slice(0, displayName.length + 1)),
        90
      );
    } else if (!isDeleting && displayName.length === namePhrase.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayName.length > 0) {
      timeoutId = window.setTimeout(
        () => setDisplayName(namePhrase.slice(0, displayName.length - 1)),
        55
      );
    } else if (isDeleting && displayName.length === 0) {
      setIsDeleting(false);
    }
    return () => window.clearTimeout(timeoutId);
  }, [displayName, isDeleting, namePhrase]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleDownloadCv = () => {
    window.open(CvImage, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-[slide-in-left_.6s_ease] md:pl-8 lg:pl-16 xl:pl-24">
            {/* text side */}
            <div className="space-y-4">
              <h2 className="text-primary font-heading font-semibold text-2xl lg:text-3xl">
                Hello, I Am
              </h2>
              <div className="h-20 lg:h-28">
                <h1 className="font-heading font-bold text-5xl lg:text-7xl text-foreground leading-tight">
                  <span>{displayName}</span>
                  <span
                    className="ml-1 w-1.5 inline-block bg-foreground align-middle animate-pulse"
                    aria-hidden="true"
                  />
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={handleDownloadCv}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                Download CV
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary font-heading font-semibold text-lg border-b-2 border-primary hover:text-primary/80 hover:border-primary/80 transition-colors pb-1"
              >
                About Me
              </button>
            </div>

            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center gap-4 mt-4">
                {socialLinks
                  .filter((l) =>
                    ["linkedin", "instagram", "github"].includes(
                      l.platform.toLowerCase()
                    )
                  )
                  .map((link, idx) => (
                    <a
                      key={`${link.platform}-${idx}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center bg-card border border-border rounded-full hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all text-foreground hover:text-primary-foreground"
                      aria-label={link.platform}
                    >
                      {link.platform.toLowerCase() === "linkedin" && (
                        <FaLinkedinIn className="w-5 h-5" />
                      )}
                      {link.platform.toLowerCase() === "instagram" && (
                        <FaInstagram className="w-5 h-5" />
                      )}
                      {link.platform.toLowerCase() === "github" && (
                        <FaGithub className="w-5 h-5" />
                      )}
                    </a>
                  ))}
              </div>
            )}
          </div>

          <div className="relative animate-[slide-in-right_.6s_ease]">
            <div className="relative mx-auto lg:ml-auto max-w-md lg:max-w-lg">
              <div className="relative aspect-square w-72 md:w-96 lg:w-[32rem] rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 p-4 sm:p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.35)]">
                {!imgError ? (
                  <img
                    src={ProfileImage}
                    alt={profile?.name || "Profile photo"}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover rounded-full ring-2 ring-primary/20"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center ring-2 ring-primary/30">
                    <span className="text-7xl font-heading font-bold text-white">
                      {(profile?.name || "YN")
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}

                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-6 shadow-2xl hover:-translate-y-1.5 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Trophy className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">
                        Best Design
                      </p>
                      <p className="text-muted-foreground text-sm">Award</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-6 shadow-2xl hover:-translate-y-1.5 transition-transform">
                  <div className="text-center">
                    <div className="bg-primary/20 p-3 rounded-full inline-block mb-2">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <p className="font-heading font-bold text-2xl text-foreground">
                      {profile?.customersCount || 4}k+
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Connection
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 -left-8 w-16 h-16 border-4 border-primary/30 rounded-full animate-[float_7s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-1/3 -right-8 w-12 h-12 bg-primary/30 rotate-45 animate-[float_9s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

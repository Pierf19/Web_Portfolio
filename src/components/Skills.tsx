import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

const programmingSkills: SkillItem[] = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "Python", icon: FaPython, color: "text-sky-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-28 bg-background relative overflow-hidden"
      data-testid="section-skills"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 space-y-3">
          <h6
            className="text-primary font-heading font-semibold text-xl lg:text-2xl"
            data-testid="text-services-subtitle"
          >
            Skills
          </h6>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
            Programming Skills
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm lg:text-base">
            Technologies and tools I use to craft clean, modern and high-quality
            digital experiences.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl bg-card/40 border border-border/60 backdrop-blur-sm shadow-[0_18px_45px_-24px_rgba(15,23,42,0.6)] px-6 py-8 sm:px-10 sm:py-10 animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {programmingSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center gap-3"
                  data-testid={`skill-${skill.name.toLowerCase()}`}
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-background to-card border border-border/80 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <Icon
                        className={`w-8 h-8 sm:w-9 sm:h-9 ${skill.color}`}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                  <span className="font-heading text-sm sm:text-base text-foreground/90">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

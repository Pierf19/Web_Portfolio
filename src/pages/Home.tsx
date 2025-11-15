import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Header } from "@/components/Header";
import HomeSection from "@/components/Home";
import About from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import type { Profile, Service, PortfolioProject, BlogPost, SocialLink } from "@/shared/default-data";

type DbJson = {
  profile?: Profile;
  services?: Service[];
  portfolio?: PortfolioProject[];
  blog?: BlogPost[];
  socialLinks?: SocialLink[];
};

export default function Home() {
  const [data, setData] = useState<DbJson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await api.get<DbJson>("/db.json");
        if (mounted) {
          setData(res.data || {});
        }
      } catch (e) {
        setError("Gagal memuat data.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 px-4">
          <h2 className="text-2xl font-heading font-bold text-foreground">Gagal memuat portfolio</h2>
          <p className="text-muted-foreground">Silakan refresh halaman</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-heading font-semibold"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HomeSection profile={data?.profile} socialLinks={data?.socialLinks} />
      <About profile={data?.profile} />
      <Services services={data?.services} />
      <Portfolio projects={data?.portfolio} />
      <Blog posts={data?.blog} />
      <Footer socialLinks={data?.socialLinks} />
    </div>
  );
}

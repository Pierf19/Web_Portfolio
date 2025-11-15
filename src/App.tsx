import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import PageLoader from "@/components/PageLoader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && <PageLoader />}
      <div
        className={
          showIntro
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-700"
        }
      >
        <Router />
      </div>
    </>
  );
}

export default App;

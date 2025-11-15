import React from "react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          <div className="absolute inset-3 rounded-full bg-primary/15 blur-2xl" />
        </div>

        <div className="text-center space-y-2">
          <p className="text-[0.7rem] tracking-[0.35em] uppercase text-muted-foreground">
            Portfolio
          </p>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Pierfrenciano Moningka
          </h1>
        </div>

        <div className="w-40 md:w-52 h-1.5 rounded-full bg-border overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-primary via-primary/40 to-primary/80 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

'use client';

import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./(components)/theme-toggle";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
        <body>
            <div className="min-h-screen bg-background text-foreground">
      <header
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://assets.polymet.ai/faithful-salmon-585566"
                alt="Digital Sherpas"
                className="h-8 w-8"
              />

              <span className="font-bold text-xl">
                Digital Sherpas
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <ThemeToggle />
              <Button asChild variant="default">
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
            >
              <Link href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild variant="default" className="w-full">
                <Link href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16">
        {children}
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div
              className="flex items-center space-x-2 mb-4 md:mb-0"
            >
              <img
                src="https://assets.polymet.ai/faithful-salmon-585566"
                alt="Digital Sherpas"
                className="h-6 w-6"
              />

              <span className="font-medium">
                Digital Sherpas
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Digital Sherpas. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
        </body>
    </html>

  );
}

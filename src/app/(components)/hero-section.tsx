'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-background pt-16 md:pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Your Digital Guide to
              <span className="text-primary">
                {" "}
                Success
              </span>
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0"
            >
              Let our expert Sherpas guide you through the digital landscape and
              help you reach new heights in your business journey.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button asChild size="lg" className="px-8">
                <Link href="/contact">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <Image
                src="/images/ds-logo.png"
                alt="Digital Sherpa Mascot"
                className="w-full max-w-md mx-auto"
                width={500}
                height={500}
                priority
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square"
              >
                <div
                  className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-primary to-primary-foreground animate-spin-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

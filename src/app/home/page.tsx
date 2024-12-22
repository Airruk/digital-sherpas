'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "../(components)/hero-section";
import { FeaturesSection } from "../(components)/features-section";
import { TestimonialsSection } from "../(components)/testimonials-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Digital Journey?
          </h2>
          <p
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Let our experienced Sherpas guide you through the digital landscape
            and help you reach new heights.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/contact">
              Contact Us Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

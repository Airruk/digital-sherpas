'use client';

import React from "react";
import { HeroSection } from "./(sections)/hero-section";
import { ValueProposition } from "./(sections)/value-proposition";
import { CoreServices } from "./(sections)/core-services";
import { CaseStudies } from "./(sections)/case-studies";
import { Pricing } from "./(sections)/pricing";
import { FinalCTA } from "./(sections)/final-cta";
import { ContactForm } from "./(components)/contact-form";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ValueProposition />
      <CoreServices />
      <CaseStudies />
      <Pricing />
      <FinalCTA />
      <section id="contact" className="scroll-mt-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Ready to start your product journey? Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

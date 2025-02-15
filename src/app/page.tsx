'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/design-system/atoms/Button";
import { Typography } from "@/components/design-system/atoms/Typography";
import { HeroSection } from "./(components)/hero-section";
import { FeaturesSection } from "./(components)/features-section";
import { TestimonialsSection } from "./(components)/testimonials-section";
import { Mail } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-muted/50 dark:bg-muted/10">
        <div className="container mx-auto px-4 text-center">
          <Typography variant="h2" className="mb-4">
            Let&apos;s Build Smarter AI Together
          </Typography>
          <Typography variant="body" className="mb-8 max-w-2xl mx-auto text-muted-foreground dark:text-muted-foreground/80">
            AI isn&apos;t just a buzzword—it&apos;s a powerful tool for transformation. 
            Let&apos;s build AI solutions that actually make a difference for your business.
          </Typography>
          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              <Icon icon={Mail} size="sm" />
              Get in touch today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

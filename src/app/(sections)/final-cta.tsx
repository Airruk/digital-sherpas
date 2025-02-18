'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/design-system/atoms/Button";
import { ArrowRightIcon } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mb-4">
          Ready to Transform Your Product Journey?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Let&apos;s discuss how our PMaaS solution can accelerate your product success.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="flex gap-1 items-center justify-center">
            <Link href="#contact">
              Schedule a Free Discovery Call
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

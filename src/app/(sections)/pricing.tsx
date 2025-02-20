'use client';

import React from "react";
import { Button } from "@/components/design-system/atoms/Button";
import { ArrowRightIcon } from "lucide-react";
import { CalendlyButton } from "@/components/Calendly";

const tiers = [
  {
    name: "Advisory",
    description: "For teams needing strategic product guidance and mentorship.",
    features: [
      "Product strategy consultation",
      "Weekly advisory sessions",
      "Roadmap planning",
      "Team mentoring",
      "Process optimization",
      "Progress tracking"
    ]
  },
  {
    name: "Embedded",
    description: "Full product leadership integrated with your development team.",
    features: [
      "Dedicated product leadership",
      "Daily team collaboration",
      "Sprint planning & execution",
      "Stakeholder management",
      "Product analytics",
      "Regular reporting"
    ]
  },
  {
    name: "Bespoke Arrangement",
    description: "Custom solutions for complex product initiatives.",
    features: [
      "Tailored engagement model",
      "Multiple product streams",
      "Portfolio management",
      "Enterprise integration",
      "Risk mitigation",
      "Executive alignment"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight text-center">
          Flexible Engagement Models
        </h2>
        <p className="text-lg mt-4 text-muted-foreground text-center max-w-xl mx-auto">
          Choose the right level of support for your product journey
        </p>

        <div className="grid md:grid-cols-3 gap-10 mx-auto mt-12">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-background border border-muted rounded-lg p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-muted-foreground mt-2">{tier.description}</p>
              </div>
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-medium">
                  Includes:
                </h4>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <CalendlyButton>
                <Button 
                  variant={index === 1 ? "primary" : "outline"} 
                  className="w-full"
                >
                  Schedule a Call
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Button>
              </CalendlyButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

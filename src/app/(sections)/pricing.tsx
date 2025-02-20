'use client';

import React from "react";
import { Button } from "@/components/design-system/atoms/Button";
import { ArrowRightIcon } from "lucide-react";
import { initializeCalendly } from "@/components/Calendly";

const tiers = [
  {
    name: "Startup Accelerator",
    description: "Perfect for early-stage startups needing focused product guidance.",
    price: "Starting at $5k/mo",
    features: [
      "2-3 days per week of dedicated product leadership",
      "Product strategy development",
      "MVP definition and roadmap",
      "Development team coordination",
      "User research and validation",
      "Weekly progress reports"
    ]
  },
  {
    name: "Growth Engine",
    description: "Ideal for scaling companies requiring comprehensive product management.",
    price: "Starting at $10k/mo",
    features: [
      "Full-time product leadership",
      "Product strategy and vision",
      "Agile process implementation",
      "Team mentoring and training",
      "Stakeholder management",
      "KPI definition and tracking"
    ]
  },
  {
    name: "Enterprise Innovation",
    description: "For established organizations launching new product initiatives.",
    price: "Custom pricing",
    features: [
      "Dedicated product team",
      "Innovation framework setup",
      "Cross-functional coordination",
      "Risk management",
      "Compliance oversight",
      "Executive reporting"
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
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-muted-foreground mt-2">{tier.description}</p>
              </div>
              <div className="mb-8">
                <p className="text-3xl font-bold">{tier.price}</p>
              </div>
              <div className="space-y-4 mb-6">
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
              <Button 
                variant={index === 1 ? "primary" : "outline"} 
                className="w-full"
                onClick={initializeCalendly}
              >
                Get Started
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

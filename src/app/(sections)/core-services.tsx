'use client';

import React from "react";
import { LightbulbIcon, RocketIcon, UsersIcon, BrainCircuitIcon } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";

const services = [
  {
    title: "Idea Validation",
    description: "Rapidly test product hypotheses through user research, prototyping, and market analysis to ensure product-market fit before significant investment.",
    outcomes: [
      "Clear product vision and strategy",
      "Validated user personas and needs",
      "Market opportunity assessment",
      "Go/no-go decision framework"
    ],
    icon: LightbulbIcon
  },
  {
    title: "MVP Development",
    description: "Transform validated ideas into working products using lean methodologies and agile development practices.",
    outcomes: [
      "Feature prioritization framework",
      "Development roadmap",
      "Sprint planning and execution",
      "User feedback integration"
    ],
    icon: RocketIcon
  },
  {
    title: "Product Team Transformation",
    description: "Elevate your product organization with best practices, tools, and processes that drive consistent results.",
    outcomes: [
      "Team structure optimization",
      "Process implementation",
      "KPI and metrics framework",
      "Knowledge transfer plan"
    ],
    icon: UsersIcon
  },
  {
    title: "Fractional Product Leadership",
    description: "Get experienced product leadership without the overhead of a full-time hire, perfect for startups and growing teams.",
    outcomes: [
      "Strategic product direction",
      "Stakeholder alignment",
      "Resource optimization",
      "Growth planning"
    ],
    icon: BrainCircuitIcon
  }
];

export function CoreServices() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight text-center">
          Core Services
        </h2>
        <p className="text-lg mt-4 text-muted-foreground text-center max-w-xl mx-auto">
          End-to-end product management solutions tailored to your needs
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 mt-16 gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4 bg-offset rounded-lg p-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg p-2 w-12 h-12 shrink-0 flex items-center justify-center">
                  <Icon icon={service.icon} className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-semibold text-xl">{service.title}</h3>
              </div>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-2">
                <h4 className="font-semibold text-sm mb-2">Key Outcomes:</h4>
                <ul className="list-none space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

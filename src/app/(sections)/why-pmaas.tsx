'use client';

import React from "react";
import { Typography } from "@/components/design-system/atoms/Typography";
import { Card, CardContent } from "@/components/design-system/molecules/Card";
import { Clock, Target, DollarSign, Award } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";

const benefits = [
  {
    title: "Faster Time-to-Value",
    description: "Skip the lengthy hiring process and onboarding period. Our experienced product leaders can start adding value from day one.",
    icon: Clock
  },
  {
    title: "Real-World Experience",
    description: "Benefit from battle-tested strategies and insights gained from working across multiple industries and product types.",
    icon: Target
  },
  {
    title: "Cost-Effective",
    description: "Get senior-level product expertise at a fraction of the cost of a full-time hire, with flexible engagement models that scale with your needs.",
    icon: DollarSign
  },
  {
    title: "Best Practices Built-In",
    description: "Access proven frameworks, tools, and methodologies refined through years of successful product launches and transformations.",
    icon: Award
  }
];

export function WhyPMaaS() {
  return (
    <section id="why-pmaas" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Why PMaaS with Digital Sherpas?
          </Typography>
          <Typography variant="body" className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Product Management-as-a-Service that delivers immediate impact
          </Typography>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <Icon icon={benefit.icon} className="text-primary" />
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2">
                      {benefit.title}
                    </Typography>
                    <Typography variant="body" className="text-muted-foreground">
                      {benefit.description}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

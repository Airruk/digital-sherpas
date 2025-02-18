'use client';

import React from "react";
import Link from "next/link";
import { Typography } from "@/components/design-system/atoms/Typography";
import { Card } from "@/components/design-system/molecules/Card";
import { Button } from "@/components/design-system/atoms/Button";
import { Clock, Target, Settings } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";

const plans = [
  {
    title: "Monthly Retainer",
    description: "Flexible support for ongoing product needs",
    icon: Clock,
    packages: [
      "Bronze (10 hours/month)",
      "Silver (20 hours/month)",
      "Gold (40 hours/month)"
    ],
    idealFor: "Founders who want ad-hoc support or consistent engagements for bigger teams"
  },
  {
    title: "Fixed Project Scope",
    description: "Defined timeline and outcomes",
    icon: Target,
    packages: [
      "MVP Launch Package",
      "Product Discovery Sprint",
      "Go-to-Market Strategy"
    ],
    idealFor: "Teams with specific project goals and timelines"
  },
  {
    title: "Bespoke Arrangements",
    description: "Custom solutions for unique needs",
    icon: Settings,
    packages: [
      "Enterprise transformations",
      "Team training & coaching",
      "Full product org setup"
    ],
    idealFor: "Organizations needing comprehensive product leadership"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Engagement Model & Pricing
          </Typography>
          <Typography variant="body" className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible options tailored to your product journey
          </Typography>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <Icon icon={plan.icon} className="text-primary" />
                </div>
                <div>
                  <Typography variant="h3" className="mb-1">
                    {plan.title}
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground">
                    {plan.description}
                  </Typography>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <Typography variant="h4" className="text-sm font-medium">
                  Includes:
                </Typography>
                <ul className="space-y-2">
                  {plan.packages.map((pkg, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {pkg}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Typography variant="h4" className="text-sm font-medium mb-1">
                    Ideal for:
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground">
                    {plan.idealFor}
                  </Typography>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="#contact">
                  Learn More
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

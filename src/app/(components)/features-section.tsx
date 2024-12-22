'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompassIcon, BarChartIcon, RocketIcon, HeartIcon } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: CompassIcon,
      title: "Expert Navigation",
      description:
        "Let us guide you through the complex digital landscape with our expertise and experience.",
    },
    {
      icon: BarChartIcon,
      title: "Data-Driven Growth",
      description:
        "Make informed decisions with our analytics-based approach to digital strategy.",
    },
    {
      icon: RocketIcon,
      title: "Rapid Implementation",
      description:
        "Quick and efficient execution of strategies to help you reach your goals faster.",
    },
    {
      icon: HeartIcon,
      title: "Dedicated Support",
      description:
        "Round-the-clock support from our team of digital Sherpas who care about your success.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Digital Sherpas?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine expertise with dedication to help you navigate the
            digital landscape and achieve your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
              id={`26f3qu_${index}`}
            >
              <CardHeader id={`xt6e0e_${index}`}>
                <feature.icon
                  className="h-12 w-12 text-primary mb-4"
                  id={`6s936x_${index}`}
                />
                <CardTitle id={`fvsp5e_${index}`}>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent id={`038gz9_${index}`}>
                <p className="text-muted-foreground" id={`bn4sop_${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from "react";
import { Typography } from "@/components/design-system/atoms/Typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/design-system/molecules/Card";
import { Rocket, Puzzle, LineChart } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";

const features = [
  {
    title: "AI Strategy & Implementation",
    description: "We don't just plan; we build. We craft an AI roadmap that aligns with your goals and deliver working solutions fast.",
    icon: LineChart
  },
  {
    title: "Seamless Integration",
    description: "Whether you use legacy systems or cutting-edge tools, our AI solutions plug into your business without disrupting operations.",
    icon: Puzzle
  },
  {
    title: "Scalable & Future-Proof",
    description: "We don't just deliver quick fixes. We build AI-powered systems that evolve with your business, ensuring long-term impact.",
    icon: Rocket
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            How We Deliver AI Transformation
          </Typography>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg bg-background dark:bg-muted hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <Icon icon={feature.icon} className="text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography variant="body" className="text-muted-foreground">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from "react";
import { Typography } from "@/components/design-system/atoms/Typography";
import { Card, CardContent } from "@/components/design-system/molecules/Card";
import { Quote } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";

const testimonials = [
  {
    quote: "&ldquo;Digital Sherpas helped us implement an AI-powered chatbot to streamline customer support, allowing us to scale without a proportional increase in headcount. The efficiency gains were immediate.&rdquo;",
    author: "Josh Berg",
    title: "CEO",
    company: "Company Name"
  },
  {
    quote: "&ldquo;They seamlessly plugged into product leadership at SRS, helping us pivot our tech stack and approach how to practically incorporate AI into our overall strategy. The results were transformative.&rdquo;",
    author: "Adam Lee",
    title: "CEO",
    company: "StudentRoomStay"
  },
  {
    quote: "&ldquo;By replacing outdated systems with AI-driven solutions, Digital Sherpas helped us streamline ordering processes for our government customers. The efficiency gains have been remarkable.&rdquo;",
    author: "Anthony Billes",
    title: "Founder",
    company: "Elephino Supply"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Real-World Results from Our Clients
          </Typography>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-muted/50 dark:bg-muted/10 border-none">
              <CardContent className="pt-12">
                <div className="absolute top-6 left-6">
                  <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <Icon icon={Quote} className="text-primary" />
                  </div>
                </div>
                <Typography variant="body" className="mb-6 italic">
                  {testimonial.quote}
                </Typography>
                <div>
                  <Typography variant="h4" className="text-base font-semibold">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="caption">
                    {testimonial.title}, {testimonial.company}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

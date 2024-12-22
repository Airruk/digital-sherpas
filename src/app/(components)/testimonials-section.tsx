'use client';

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://picsum.photos/seed/sarah/200/200",
      content:
        "Digital Sherpas transformed our online presence. Their guidance was invaluable in helping us reach new heights.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      image: "https://picsum.photos/seed/michael/200/200",
      content:
        "The team's expertise and dedication to our success made all the difference. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Founder, InnovateLab",
      image: "https://picsum.photos/seed/emma/200/200",
      content:
        "Working with Digital Sherpas was a game-changer for our business. They truly understand digital strategy.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their journey with Digital Sherpas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-background/50 backdrop-blur-sm"
              id={`wmzh4u_${index}`}
            >
              <CardHeader id={`5nc97n_${index}`}>
                <div
                  className="flex items-center space-x-1 mb-4"
                  id={`hb6s2t_${index}`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                      id={`c8ex65_${index}`}
                    />
                  ))}
                </div>
                <p
                  className="text-muted-foreground italic"
                  id={`5lbzi2_${index}`}
                >
                  "{testimonial.content}"
                </p>
              </CardHeader>
              <CardFooter id={`r3e5aq_${index}`}>
                <div
                  className="flex items-center space-x-4"
                  id={`ieqd7p_${index}`}
                >
                  <Avatar id={`31zqnc_${index}`}>
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      id={`vhjds5_${index}`}
                    />

                    <AvatarFallback id={`hq9tbl_${index}`}>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div id={`2kh7x2_${index}`}>
                    <div className="font-semibold" id={`z51vh9_${index}`}>
                      {testimonial.name}
                    </div>
                    <div
                      className="text-sm text-muted-foreground"
                      id={`t1ays4_${index}`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

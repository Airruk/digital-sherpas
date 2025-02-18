'use client';

import React from "react";
import { Rocket, Puzzle, Users, Scale } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";

const values = [
  {
    title: "Hands-On 0→1 Expertise",
    description: "We're not just consultants; we're doers. Digital Sherpas embeds seasoned product leaders into your organization—leading sprints, defining roadmaps, and managing dev teams to quickly validate your first MVP.",
    icon: Rocket
  },
  {
    title: "Outcome-Oriented Playbooks",
    description: "We adapt proven frameworks (Lean Startup, agile roadmapping, rapid prototyping) to your unique context—cutting through the noise and focusing on outcomes, not deliverables for deliverables' sake.",
    icon: Puzzle
  },
  {
    title: "Fractional, Yet Integrated",
    description: "Engage our Sherpas on your terms—whether you need strategic direction a few days a month or a full-steam push leading to launch. We act as an extension of your team, seamlessly collaborating with engineers, designers, and stakeholders.",
    icon: Users
  },
  {
    title: "Scalable & Flexible Engagement",
    description: "As your product evolves, so do our services. Scale up or down without dealing with hiring overhead—perfect for startups and established orgs pivoting toward new product initiatives.",
    icon: Scale
  }
];

export function ValueProposition() {
  return (
    <section id="value-proposition" className="scroll-mt-24 bg-offset">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            What Makes Us Different
          </h2>
          <p className="text-lg mt-4 text-muted-foreground max-w-xl mx-auto">
            Proven expertise and flexible engagement models to drive your product success
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 mt-16 gap-16">
          {values.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="mt-1 bg-primary/10 rounded-full p-2 w-8 h-8 shrink-0">
                <Icon icon={item.icon} className="text-primary w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

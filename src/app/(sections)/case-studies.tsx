'use client';

import React from "react";

const cases = [
  {
    title: "AI-Powered Healthcare Startup",
    description: "Helping a startup validate and launch an AI-driven patient monitoring system",
    problem: "The startup had innovative AI technology but struggled to translate it into a viable healthcare product that met regulatory requirements and user needs.",
    solution: "Led product discovery workshops, conducted user research with healthcare providers, and developed a regulatory-compliant MVP roadmap.",
    outcome: "Successfully launched MVP within 6 months, secured pilot programs with two major hospitals, and raised Series A funding."
  },
  {
    title: "Enterprise SaaS Transformation",
    description: "Guiding an established software company through a major product modernization",
    problem: "Legacy product with declining market share needed modernization, but the team lacked experience in modern product development practices.",
    solution: "Implemented agile methodologies, established product metrics, and mentored internal teams while maintaining existing customer base.",
    outcome: "30% increase in user satisfaction, successful migration of 80% of customers to new platform, and 25% reduction in development cycle time."
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-24 bg-offset">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight text-center">
          Case Studies
        </h2>
        <p className="text-lg mt-4 text-muted-foreground text-center max-w-xl mx-auto">
          Real results from our hands-on product management approach
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-16 gap-10">
          {cases.map((case_, index) => (
            <div key={index} className="bg-background border border-muted rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{case_.title}</h3>
                <p className="text-muted-foreground">{case_.description}</p>
                
                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                      Challenge
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {case_.problem}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                      Our Approach
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {case_.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                      Results
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {case_.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

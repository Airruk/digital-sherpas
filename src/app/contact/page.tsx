'use client';

import React from "react";
import { ContactForm } from "../(components)/contact-form";
import { CalendlyButton } from "@/components/Calendly";
import { Button } from "@/components/design-system/atoms/Button";
import { ArrowRightIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Ready to start your digital journey? Our Sherpas are here to guide
            you every step of the way.
          </p>
          <CalendlyButton>
            <Button 
              variant="primary"
              size="lg"
              className="flex gap-1 items-center justify-center mx-auto"
            >
              Schedule a Free Discovery Call
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </CalendlyButton>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

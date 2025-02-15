'use client';

import React from "react";
import { ContactForm } from "../(components)/contact-form";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your digital journey? Our Sherpas are here to guide
            you every step of the way.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

'use client';

import React from "react";
import { ContactForm } from "../(components)/contact-form";
import { MapPinIcon, MailIcon, PhoneIcon } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    123 Digital Peak Street
                    <br />
                    Tech Valley, CA 94123
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MailIcon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    hello@digitalsherpas.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">
                    Phone
                  </h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

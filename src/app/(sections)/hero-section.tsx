'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/design-system/atoms/Button";
import { ArrowRightIcon } from "lucide-react";

const logos = [
  { 
    src: "/logos/bfb-logo.webp", 
    alt: "Better For Business",
    className: "h-8 md:h-10"
  },
  { 
    src: "/logos/echo-logo.png", 
    alt: "Echo",
    className: "h-6 md:h-8"
  },
  { 
    src: "/logos/Parable-Group-Logo.png", 
    alt: "Parable Group",
    className: "h-8 md:h-10"
  },
  { 
    src: "/logos/SRS-logo.png", 
    alt: "SRS",
    className: "h-7 md:h-9"
  },
];

export function HeroSection() {
  return (
    <section className="py-16 md:pt-24 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 place-items-center">
          <div className="py-6 order-2 lg:order-1">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
              Your Product Vision,{" "}
              <span className="text-gradient">Our Expertise</span>
            </h1>
            <p className="text-lg mt-4 text-muted-foreground max-w-xl">
              Digital Sherpas delivers hands-on product leadership through our 
              Product Management-as-a-Service (PMaaS) model. From idea validation 
              to market success, we guide your product journey with proven expertise.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex gap-1 items-center justify-center">
                <Link href="#contact">
                  Schedule a Free Discovery Call
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex gap-1 items-center justify-center">
                <Link href="#services">
                  View Our Services
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="py-6 order-1 lg:order-2 relative w-full max-w-md">
            <Image
              src="/images/ds-logo.png"
              alt="Digital Sherpas Logo"
              width={400}
              height={400}
              className="w-full h-auto dark:brightness-[0.8] dark:contrast-[1.2]"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 md:mt-12">
        <h2 className="text-center text-sm font-medium text-muted-foreground">
          TRUSTED BY INNOVATIVE COMPANIES
        </h2>
        <div className="flex flex-wrap gap-12 md:gap-16 items-center justify-center mt-8 max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className={`w-auto opacity-75 hover:opacity-100 transition-opacity duration-150 dark:brightness-[1.2] dark:contrast-[1.2] ${logo.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

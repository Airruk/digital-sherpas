'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/design-system/atoms/Button";
import { ArrowRightIcon } from "lucide-react";
import { CalendlyButton } from "@/components/Calendly";
import { useTheme } from "next-themes";

const logos = [
  {
    name: "Better For Business",
    light: "/logos/bfb-logo-light.webp",
    dark: "/logos/bfb-logo-dark.webp",
    className: "h-8 md:h-10"
  },
  {
    name: "Echo",
    light: "/logos/echo-logo-light.png",
    dark: "/logos/echo-logo-dark.png",
    className: "h-6 md:h-8"
  },
  {
    name: "Parable Group",
    light: "/logos/Parable-Group-light.png",
    dark: "/logos/Parable-Group-dark.png",
    className: "h-8 md:h-10"
  },
  {
    name: "SRS",
    light: "/logos/SRS-logo-light.png",
    dark: "/logos/SRS-logo-dark.png",
    className: "h-7 md:h-9"
  }
];

function LogoImage({ logo }: { logo: typeof logos[0] }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Image
      src={resolvedTheme === 'dark' ? logo.dark : logo.light}
      alt={logo.name}
      width={200}
      height={100}
      className={`w-auto opacity-75 hover:opacity-100 transition-opacity duration-150 ${logo.className}`}
    />
  );
}

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
              Product Management-as-a-Service (PMaaS) solution.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <CalendlyButton>
                <Button 
                  size="lg" 
                  variant="primary"
                  className="flex gap-1 items-center justify-center w-full sm:w-auto"
                >
                  Schedule a Free Discovery Call
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Button>
              </CalendlyButton>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="flex gap-1 items-center justify-center"
              >
                <Link href="#services">
                  View Our Services
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2">
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
              <LogoImage logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

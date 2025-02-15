'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/design-system/atoms/Button";
import { Typography } from "@/components/design-system/atoms/Typography";
import { ArrowRightIcon, Bot, MessageSquare, Database } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Typography variant="h1" className="mb-4">
              AI Solutions That Work for You
            </Typography>
            <Typography variant="body" className="mb-12 text-xl text-muted-foreground">
              At Digital Sherpas, we help businesses implement custom AI agents, intelligent chatbots, 
              and retrieval-augmented generation (RAG) solutions to drive efficiency, improve decision-making, 
              and scale without added overhead.
            </Typography>
            <Typography variant="h2" className="mb-6 text-3xl">
              Our Core AI Offerings
            </Typography>
            <div className="space-y-6 mb-8 text-left">
              <div className="p-4 rounded-lg bg-muted/50 dark:bg-muted/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <Icon icon={Bot} className="text-primary" size="sm" />
                  </div>
                  <Typography variant="h4">
                    Custom AI Agents & Workflows
                  </Typography>
                </div>
                <Typography variant="body">
                  Automate complex tasks, enhance operational efficiency, and streamline decision-making 
                  with AI-driven assistants tailored to your needs.
                </Typography>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 dark:bg-muted/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <Icon icon={MessageSquare} className="text-primary" size="sm" />
                  </div>
                  <Typography variant="h4">
                    Configured Chatbot Solutions
                  </Typography>
                </div>
                <Typography variant="body">
                  Reduce support costs and improve response times with chatbots that handle customer 
                  inquiries and internal workflows intelligently.
                </Typography>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 dark:bg-muted/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <Icon icon={Database} className="text-primary" size="sm" />
                  </div>
                  <Typography variant="h4">
                    Retrieval-Augmented Generation (RAG) Solutions
                  </Typography>
                </div>
                <Typography variant="body">
                  Empower your team with instant, AI-powered access to critical business knowledge—no 
                  more endless document searching.
                </Typography>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <Image
                src="/images/ds-logo.png"
                alt="Digital Sherpa Mascot"
                className="w-full max-w-md mx-auto"
                width={500}
                height={500}
                priority
              />
            </div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square">
                <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-primary to-primary-foreground animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

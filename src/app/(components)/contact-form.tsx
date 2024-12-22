'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">
          Name
        </Label>
        <Input placeholder="Enter your name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">
          Subject
        </Label>
        <Input placeholder="Enter subject" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message
        </Label>
        <Textarea
          placeholder="Enter your message"
          className="min-h-[150px]"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}

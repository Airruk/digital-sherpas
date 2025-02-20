'use client';

import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/images/ds-logo.png"
              alt="Digital Sherpas"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-medium">
              Digital Sherpas
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Digital Sherpas. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

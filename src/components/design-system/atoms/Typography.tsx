import { cn } from '@/lib/utils';
import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-small' | 'caption';
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground dark:text-foreground',
  h2: 'scroll-m-20 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight text-foreground dark:text-foreground',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight text-foreground dark:text-foreground',
  body: 'leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground dark:text-muted-foreground/90',
  'body-small': 'text-sm leading-6 [&:not(:first-child)]:mt-4 text-muted-foreground dark:text-muted-foreground/90',
  caption: 'text-sm text-muted-foreground dark:text-muted-foreground/70',
};

export function Typography({
  variant = 'body',
  children,
  className,
}: TypographyProps) {
  switch (variant) {
    case 'h1':
      return (
        <h1 className={cn(variantStyles[variant], className)}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={cn(variantStyles[variant], className)}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={cn(variantStyles[variant], className)}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={cn(variantStyles[variant], className)}>
          {children}
        </h4>
      );
    case 'caption':
      return (
        <span className={cn(variantStyles[variant], className)}>
          {children}
        </span>
      );
    case 'body':
    case 'body-small':
    default:
      return (
        <p className={cn(variantStyles[variant], className)}>
          {children}
        </p>
      );
  }
}

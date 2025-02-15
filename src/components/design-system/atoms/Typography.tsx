import { cn } from '@/lib/utils';
import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-small' | 'caption';
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
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

const defaultElements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  'body-small': 'p',
  caption: 'span',
} as const;

export function Typography({
  variant = 'body',
  children,
  className,
  as,
}: TypographyProps) {
  const Component = as || defaultElements[variant];
  
  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}

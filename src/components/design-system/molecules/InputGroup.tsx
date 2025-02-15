import React from 'react';
import { cn } from '@/lib/utils';

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ className, label, error, helpText, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
        <input
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm',
            'ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {helpText && <p className="text-sm text-gray-500">{helpText}</p>}
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export { InputGroup, type InputGroupProps };

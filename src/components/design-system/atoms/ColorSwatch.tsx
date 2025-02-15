import React from 'react';

interface ColorSwatchProps {
  color: string;
  name: string;
  hex: string;
}

export function ColorSwatch({ color, name, hex }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div 
        className={`h-24 w-24 rounded-lg shadow-md ${color}`}
        style={{ backgroundColor: hex }}
      />
      <div className="space-y-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{hex}</p>
      </div>
    </div>
  );
}

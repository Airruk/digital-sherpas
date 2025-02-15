import React from 'react';
import { Button } from '@/components/design-system/atoms/Button';
import { InputGroup } from '@/components/design-system/molecules/InputGroup';
import { Typography } from '@/components/design-system/atoms/Typography';
import { ColorSwatch } from '@/components/design-system/atoms/ColorSwatch';
import { Icon } from '@/components/design-system/atoms/Icon';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/design-system/molecules/Card';
import { Search, Heart, Share2, MessageCircle } from 'lucide-react';

const DesignSystemPage = () => {
  const colors = [
    { name: 'Primary', color: 'bg-primary', hex: '#0F172A' },
    { name: 'Secondary', color: 'bg-secondary', hex: '#64748B' },
    { name: 'Accent', color: 'bg-accent', hex: '#F8FAFC' },
    { name: 'Background', color: 'bg-background', hex: '#FFFFFF' },
  ];

  return (
    <div className="container mx-auto py-12">
      <Typography variant="h1" className="mb-8">Design System</Typography>
      
      {/* Colors */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">Colors</Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {colors.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">Typography</Typography>
        <div className="space-y-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="body">Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Typography variant="body-small">Small body text - Lorem ipsum dolor sit amet.</Typography>
          <Typography variant="caption">Caption text - Additional information here</Typography>
        </div>
      </section>

      {/* Icons */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">Icons</Typography>
        <div className="flex gap-4">
          <Icon icon={Search} size="sm" />
          <Icon icon={Heart} size="md" />
          <Icon icon={Share2} size="lg" />
          <Icon icon={MessageCircle} />
        </div>
      </section>
      
      {/* Atoms */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">Atoms</Typography>
        
        <div className="space-y-8">
          <div>
            <Typography variant="h3" className="mb-4">Buttons</Typography>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Molecules */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-6">Molecules</Typography>
        
        <div className="space-y-8">
          <div>
            <Typography variant="h3" className="mb-4">Input Groups</Typography>
            <div className="max-w-md space-y-4">
              <InputGroup
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <InputGroup
                label="Password"
                type="password"
                placeholder="Enter your password"
                error="This field is required"
              />
              <InputGroup
                label="Username"
                placeholder="Choose a username"
                helpText="Must be at least 3 characters long"
              />
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-4">Cards</Typography>
            <div className="max-w-md">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">
                    This is the main content of the card. You can put any content here.
                  </Typography>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm">Action</Button>
                  <Button size="sm" variant="outline">Cancel</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section>
        <Typography variant="h2" className="mb-6">Documentation</Typography>
        <div className="prose max-w-none">
          <Typography variant="body">
            This design system follows atomic design principles, organizing components into:
          </Typography>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Atoms:</strong> Basic building blocks like buttons, inputs, typography, colors, and icons
            </li>
            <li>
              <strong>Molecules:</strong> Simple combinations of atoms that form more complex UI elements like cards and input groups
            </li>
            <li>
              <strong>Organisms:</strong> Complex UI components composed of molecules and atoms
            </li>
            <li>
              <strong>Templates:</strong> Page-level objects that place components into a layout
            </li>
            <li>
              <strong>Pages:</strong> Specific instances of templates with real content
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DesignSystemPage;

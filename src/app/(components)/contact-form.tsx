'use client';

import React, { useState } from "react";
import { Typography } from "@/components/design-system/atoms/Typography";
import { Button } from "@/components/design-system/atoms/Button";
import { Card } from "@/components/design-system/molecules/Card";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { Icon } from "@/components/design-system/atoms/Icon";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Digital Sherpas',
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      setFormStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <Typography variant="h2" className="mb-8">
          Contact Information
        </Typography>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <Icon icon={MapPin} className="text-primary" />
            </div>
            <div>
              <Typography variant="h4" className="mb-1">
                Address
              </Typography>
              <Typography variant="body" className="text-muted-foreground">
                5457 Santa Fe Road
              </Typography>
              <Typography variant="body" className="text-muted-foreground">
                Atascadero, CA 93422
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <Icon icon={Mail} className="text-primary" />
            </div>
            <div>
              <Typography variant="h4" className="mb-1">
                Email
              </Typography>
              <a 
                href="mailto:hello@digitalsherpas.co"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hello@digitalsherpas.co
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <Icon icon={Phone} className="text-primary" />
            </div>
            <div>
              <Typography variant="h4" className="mb-1">
                Phone
              </Typography>
              <a 
                href="tel:+19492367837"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (949) 236-7837
              </a>
            </div>
          </div>
        </div>
      </div>

      <Card className="p-6">
        <Typography variant="h3" className="mb-6">
          Send us a Message
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md bg-background dark:border-muted"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md bg-background dark:border-muted"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border rounded-md bg-background dark:border-muted"
              placeholder="How can we help?"
              required
            />
          </div>

          {formStatus.message && (
            <div className={`p-3 rounded-md ${
              formStatus.type === 'success' 
                ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
                : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
            }`}>
              {formStatus.message}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
}

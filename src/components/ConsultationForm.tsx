import React, { useState, useEffect } from 'react';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  businessName: z.string().optional(),
  automationRequest: z.string().min(10, { message: 'Please describe what you would like to automate' }),
  currentSetup: z.string().optional(),
  desiredResult: z.string().optional(),
  preferredCallTime: z.string().optional(),
  timeZone: z.string().min(1, { message: 'Please select your time zone' }),
});

const currentSetupOptions = [
  { value: 'manual', label: 'Manual workflows' },
  { value: 'some-automations', label: 'Some automations' },
  { value: 'not-sure', label: 'Not sure yet' },
];

const desiredResultOptions = [
  { value: 'save-time', label: 'Save time' },
  { value: 'reduce-manual-work', label: 'Reduce manual work' },
  { value: 'speed-up-response', label: 'Speed up response' },
  { value: 'better-insights', label: 'Better insights' },
];

const timeZones = [
  {
    region: "North America",
    zones: [
      "America/New_York (EST)",
      "America/Chicago (CST)",
      "America/Denver (MST)",
      "America/Los_Angeles (PST)",
      "America/Anchorage (AKST)",
      "Pacific/Honolulu (HST)"
    ]
  },
  {
    region: "Europe",
    zones: [
      "Europe/London (GMT)",
      "Europe/Paris (CET)",
      "Europe/Helsinki (EET)",
      "Europe/Moscow (MSK)"
    ]
  },
  {
    region: "Asia/Pacific",
    zones: [
      "Asia/Dubai (GST)",
      "Asia/Singapore (SGT)",
      "Asia/Tokyo (JST)",
      "Australia/Sydney (AEST)",
      "Pacific/Auckland (NZST)"
    ]
  }
];

const ConsultationForm = () => {
  const [detectedTimeZone, setDetectedTimeZone] = useState('');

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const offset = new Date().getTimezoneOffset();
      const hours = Math.abs(Math.floor(offset / 60));
      const minutes = Math.abs(offset % 60);
      
      const sign = offset > 0 ? '-' : '+';
      const formattedOffset = `GMT${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      
      setDetectedTimeZone(formattedOffset);
    } catch (e) {
      setDetectedTimeZone('GMT+00:00');
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      businessName: '',
      automationRequest: '',
      currentSetup: '',
      desiredResult: '',
      preferredCallTime: '',
      timeZone: '',
    }
  });

  useEffect(() => {
    if (detectedTimeZone) {
      form.setValue('timeZone', detectedTimeZone);
    }
  }, [detectedTimeZone, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('https://waaridh10.app.n8n.cloud/webhook/683f072b-cd65-4434-8419-ac4d18b32357', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success("Form submitted successfully! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error submitting the form. Please try again.");
    }
  }

  return (
    <div className="bg-secondary p-6 rounded-lg" id="consultation-form">
      <h3 className="text-2xl font-semibold mb-6">Book Your Strategy Call</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} className="bg-dark" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address*</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="bg-dark" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name / Website (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company" {...field} className="bg-dark" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="automationRequest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What would you like to automate?*</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="E.g., I want to qualify leads automatically and send notifications." 
                    className="min-h-[100px] bg-dark"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="currentSetup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are you currently using? (optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-dark">
                        <SelectValue placeholder="Select current setup" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {currentSetupOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="desiredResult"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What result are you hoping to achieve? (optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-dark">
                        <SelectValue placeholder="Select desired result" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {desiredResultOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="preferredCallTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred call time (optional)</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} className="bg-dark" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="timeZone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Zone*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-dark">
                        <SelectValue placeholder="Select your time zone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeZones.map((region) => (
                        <SelectGroup key={region.region}>
                          <SelectLabel>{region.region}</SelectLabel>
                          {region.zones.map((zone) => (
                            <SelectItem key={zone} value={zone}>
                              {zone}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-mintGreen text-dark hover:bg-mintGreen/90 glow-effect"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ConsultationForm;

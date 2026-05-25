import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase(),
  
  package: z
    .string()
    .min(1, 'Please select a package'),
  
  month: z
    .string()
    .optional(),
  
  message: z
    .string()
    .max(500, 'Message must be less than 500 characters')
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

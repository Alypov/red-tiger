import * as z from 'zod';
export const validationSchema = z.object({
  name: z.string().min(2).trim(),
  contact: z.string().trim(),
  email: z.string().email().trim(),
});

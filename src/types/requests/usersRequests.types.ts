import z from 'zod';
import { signupSchema } from '~/schemas';

export type SignupBody = z.infer<typeof signupSchema>;

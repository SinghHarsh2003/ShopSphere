import z from 'zod';

export const loginSchema = z.object({
        email: z.string().email(),
        password: z.string(),
      })

export const registerSchema = z.object({
        email: z.string().email(),
        password: z.string(),
        username: z.string().min(3, "Username should be atleast 3 characters").max(63, "Username should be atmost 63 characters").regex(/^[a-z0-9][a-z0-9-_]*[a-z0-9]$/, "Username should start and end with a lowercase letter or number, and can contain lowercase letters, numbers, and underscores in between.").refine((val) => !val.includes("--"), "Username should not contain consecutive dashes").transform((val) => val.toLowerCase()),
      })
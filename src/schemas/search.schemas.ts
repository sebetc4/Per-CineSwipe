import { z } from 'zod';

export const searchMoviesSchema = z.object({
    fromDate: z.string(),
    toDate: z.string(),
    sort: z.enum(['popularity.desc', 'vote_average.desc', 'vote_count.desc']),
});
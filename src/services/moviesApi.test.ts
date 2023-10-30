import { moviesApi } from './moviesApi';
import { describe, it, expect, vi } from 'vitest';


describe('MoviesApi', () => {
    const data = [{ id: 1, name: 'test' }];

    it('should fetch popular movies with default language', async () => {
        vi.mocked(moviesApi.getPopularMovies).mockResolvedValue(data);
        const res = await moviesApi.getPopularMovies();
        expect(moviesApi.getPopularMovies).toHaveBeenCalled();
        expect(res).toEqual(data);
    });
});
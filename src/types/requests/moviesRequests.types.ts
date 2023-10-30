import { searchMoviesSchema } from '~/schemas';
import { Genre, Movie, MovieCredits, MovieDetails } from '..';
import { z } from 'zod';

export type GetMovieDetailsRes = MovieDetails;

export type GetPopularMoviesRes = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type GetMovieSearchRes = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type GetMovieGenresRes = {
    genres: Genre[];
};

export type GetDiscoverMoviesRes = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type GetSimilarMoviesRes = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type GetMovieCreditsRes = MovieCredits;

export type SearchMoviesParams = z.infer<typeof searchMoviesSchema>;

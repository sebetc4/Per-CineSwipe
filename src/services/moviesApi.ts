import 'server-only'
// App
import { GetPopularMoviesRes, GetMovieSearchRes, GetMovieGenresRes, GetDiscoverMoviesRes, GetMovieDetailsRes, GetMovieCreditsRes, GetSimilarMoviesRes, Locale } from '~/types';
import { Api } from './Api';

const { TMDB_API_URL, TMDB_API_KEY } = process.env;

class MoviesApi extends Api {
    private apiKey: string;

    constructor(baseUrl: string, apiKey: string) {
        super(baseUrl);
        this.apiKey = apiKey;
    }

    private getUrl(path: string, language: Locale = 'fr', query?: Record<string, string | undefined>) {
        const url = new URL(`${this.baseUrl}${path}`);
        url.searchParams.append('api_key', this.apiKey!);
        url.searchParams.append('language', language);
        if (query) {
            Object.entries(query).forEach(([key, value]) => {
                value && url.searchParams.append(key, value);
            });
        }
        return url.toString();
    }

    getMovieDetails(id: string, locale: Locale) {
        return this.get<GetMovieDetailsRes>(this.getUrl(`/movie/${id}`, locale));
    }

    getMoviesByIds(ids: string[], locale: Locale) {
        return Promise.all(ids.map(id => this.getMovieDetails(id, locale)));
    }

    getPopularMovies(locale: Locale) {
        return this.get<GetPopularMoviesRes>(this.getUrl('/movie/popular', locale));
    }

    getMovieSearch(query: string, locale: Locale) {
        return this.get<GetMovieSearchRes>(this.getUrl('/search/movie', locale, { query }));
    }

    getMovieGenres(locale: Locale) {
        return this.get<GetMovieGenresRes>(this.getUrl('/genre/movie/list', locale));
    }

    getDiscoverMovies(params: Record<string, string | undefined>, locale: Locale) {
        return this.get<GetDiscoverMoviesRes>(this.getUrl('/discover/movie', locale, params));
    }

    getMovieCredits(id: string, locale: Locale) {
        return this.get<GetMovieCreditsRes>(this.getUrl(`/movie/${id}/credits`, locale));
    }

    getSimilarMovies(id: string, locale: Locale) {
        return this.get<GetSimilarMoviesRes>(this.getUrl(`/movie/${id}/similar`, locale));
    }
}

export const moviesApi = new MoviesApi(TMDB_API_URL!, TMDB_API_KEY!);

export type PageProps<T extends Record<string, string> = never> = {
    params: T;
    searchParams: SearchParams;
};

export type SearchParams = Record<string, string | string[] | undefined>

export type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void }

export enum Path {
    HOME = '/',
    SERIES = '/series',
    MOVIES = '/movies',
    GENRES = '/movies/genres',
    PROFILE = '/user/profile',
    SIGNUP = '/signup',
}

import { notFound } from 'next/navigation';
import { moviesApi } from '~/services';
import { Locale, PageProps } from '~/types';
import { MovieDetails, SimilarMovies } from './components';
import { Suspense } from 'react';
import { Loader } from '~/components';
import { Metadata } from 'next';

export const dynamic = 'force-static';
export const revalidate = 3600;

export const generateMetadata = async ({
    params: { id, locale },
}: PageProps<{ id: string; locale: Locale }>): Promise<Metadata> => {
    const movie = await moviesApi.getMovieDetails(id, locale);

    return {
        title: movie.title,
    };
};

export default async function MovieIdPage({ params: { id, locale } }: PageProps<{ id: string; locale: Locale }>) {
    const movie = await moviesApi.getMovieDetails(id, locale);
    if (!movie) {
        return notFound();
    }

    return (
        <>
            <MovieDetails
                movie={movie}
                locale={locale}
            />
            ;
            <Suspense fallback={<Loader />}>
                <SimilarMovies
                    movieId={movie.id}
                    locale={locale}
                />
            </Suspense>
        </>
    );
}

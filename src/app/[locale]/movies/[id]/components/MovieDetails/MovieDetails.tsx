import Image from 'next/image';
// Styles
import styles from './MovieDetails.module.scss';
// Libs
import { Suspense } from 'react';
// App
import { Locale, MovieDetails as MovieDetailsType } from '~/types';
import { Loader } from '~/components';
import { MovieCredits } from '..';

type MovieDetailsProps = {
    movie: MovieDetailsType;
    locale: Locale
};

export const MovieDetails = ({ movie, locale }: MovieDetailsProps) => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.backgroundImage}
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/original${movie.backdrop_path}`}
                alt={movie.title}
                fill
            />
            <div className={styles.content}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={250}
                    height={400}
                />
                <div className={styles.content__description}>
                    <h1>
                        {movie.title} <span>{new Date(movie.release_date).toLocaleDateString('fr-FR')}</span>
                    </h1>
                    <p className={styles.content__production}>
                        Production:
                        <span>{movie.production_companies.map((company) => company.name).join(', ')}</span>
                    </p>
                    <h2>Synopsis:</h2>
                    <p className={styles.content__overview}>{movie.overview}</p>
                    <h2>Acteurs:</h2>
                    <div className={styles.content__credits}>
                        <Suspense fallback={<Loader />}>
                            <MovieCredits movieId={movie.id} locale={locale} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};

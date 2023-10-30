// Style
import styles from './MovieSearchResults.module.scss';
// Lib
import Image from 'next/image';
import Link from 'next/link';
// App
import { Locale, Movie, Path } from '~/types';

type MovieSearchResults = {
    movies: Movie[];
    locale: Locale
};

export const MovieSearchResults = ({ movies, locale }: MovieSearchResults) => {
    return (
        <div className={styles.container}>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link href={`/${locale}${Path.MOVIES}/${movie.id}`}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w185${movie.backdrop_path}`}
                                alt={movie.title}
                                width={50}
                                height={50}
                            />
                            <p>{movie.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

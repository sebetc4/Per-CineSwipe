import { moviesApi } from '~/services';
import styles from './MovieCredits.module.scss';
import Image from 'next/image';
import { Locale } from '~/types';

type MovieCreditsProps = {
    movieId: number;
    locale: Locale;
};

export const MovieCredits = async ({ movieId, locale }: MovieCreditsProps) => {
    const { cast } = await moviesApi.getMovieCredits(String(movieId), locale);

    return (
        <div className={styles.container}>
            {cast.slice(0, 5).map((actor) => (
                <div key={actor.id}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w185${actor.profile_path}`}
                        alt={actor.name}
                        width={90}
                        height={90}
                    />
                    <p>{actor.name}</p>
                </div>
            ))}
        </div>
    );
};

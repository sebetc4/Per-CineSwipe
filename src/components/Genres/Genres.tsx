// Styles
import styles from './Genres.module.scss';
// Lib
import Link from 'next/link';
// App
import { moviesApi } from '~/services';
import { Locale, Path } from '~/types';

type GenresProps = {
    locale: Locale;
}

export const Genres = async ({locale}: GenresProps) => {
    const { genres } = await moviesApi.getMovieGenres(locale);
    return (
        <section>
            <h2>Parcourir par genres</h2>
            <div className={styles.container}>
                {genres.map((genre) => (
                    <Link
                        key={genre.id}
                        className={styles.genre}
                        href={`/${locale}${Path.GENRES}/${genre.id}`}
                    >
                        {genre.name}
                    </Link>
                ))}
            </div>
        </section>
    );
};

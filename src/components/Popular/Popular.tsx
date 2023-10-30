// Styles
import styles from './Popular.module.scss';
// App
import { moviesApi } from '~/services';

import { Carousel, MediaCard } from '..';
import { Locale } from '~/types';
import { getTranslation } from '~/utils';

type PopularProps = {
    locale: Locale;
};

export const Popular = async ({ locale }: PopularProps) => {
    const { results: movies } = await moviesApi.getPopularMovies(locale);
    const t = await getTranslation(locale);
    return (
        <section className={styles.section}>
            <h2>{t.popular.title}</h2>
            {movies.length > 0 && (
                <Carousel
                    cards={movies.map((movie) => (
                        <MediaCard
                            key={movie.id}
                            media={movie}
                            locale={locale}
                        />
                    ))}
                />
            )}
        </section>
    );
};

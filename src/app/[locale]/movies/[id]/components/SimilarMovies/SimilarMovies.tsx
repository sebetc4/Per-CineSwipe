// Styles
import { Carousel, MediaCard } from '~/components';
import styles from './SimilarMovies.module.scss';
// App
import { moviesApi } from '~/services';
import { Locale } from '~/types';

type SimilarMoviesProps = {
    movieId: number;
    locale: Locale
};

export const SimilarMovies = async ({ movieId, locale }: SimilarMoviesProps) => {
    const { results } = await moviesApi.getSimilarMovies(movieId.toString(), locale);
    return (
        <section className={styles.container}>
            <div>
                {results.length > 0 && (
                    <Carousel
                        cards={results.map((movie) => (
                            <MediaCard
                                key={movie.id}
                                media={movie}
                                locale={locale}
                            />
                        ))}
                    />
                )}
            </div>
        </section>
    );
};

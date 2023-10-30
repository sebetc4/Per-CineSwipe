import { moviesApi } from '~/services';
import styles from './SearchResults.module.scss';
import { Locale, SearchParams } from '~/types';
import { MediaCard } from '~/components';

type SearchResultsProps = {
    searchParams: SearchParams;
    genreId?: string;
    locale: Locale;
};

export const SearchResults = async ({ searchParams, genreId, locale }: SearchResultsProps) => {
    const { results } = await moviesApi.getDiscoverMovies(
        {
            sort_by: searchParams['sort_by'] as string | undefined,
            'release_date.gte': searchParams['release_date.gte'] as string | undefined,
            'release_date.lte': searchParams['release_date.lte'] as string | undefined,
            with_genres: genreId,
        },
        locale
    );

    return (
        <section className={styles.container}>
            {results.map((movie) => (
                <MediaCard
                    key={movie.id}
                    media={movie}
                    locale={locale}
                />
            ))}
        </section>
    );
};

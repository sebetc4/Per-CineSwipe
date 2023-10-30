'use client';
// Style
import styles from './MovieSearch.module.scss';
// Lib
import { useEffect, useState } from 'react';
// App
import { Locale, Movie } from '~/types';
import { nextApi } from '~/services/nextApi';
import { useDebounce } from '~/hooks';
import { MovieSearchResults } from './components';

type MovieSearchProps = {
    locale: Locale;
}

export const MovieSearch = ({locale}: MovieSearchProps) => {
    const [search, setSearch] = useState('');
    const [hasFocus, setHasFocus] = useState(false);
    const [movieResults, setMoviesResults] = useState<Movie[]>([]);
    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        if (!debouncedSearch) {
            setMoviesResults([]);
            return;
        }
        nextApi.getMovieSearch(debouncedSearch, locale).then((movies) => {
            setMoviesResults(movies.results);
        });
    }, [debouncedSearch, locale]);

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                value={search}
                type='text'
                placeholder='Rechercher un titre...'
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => setHasFocus(false)}
                onFocus={() => setHasFocus(true)}
            />
            {movieResults.length > 0 && hasFocus && <MovieSearchResults movies={movieResults} locale={locale} />}
        </div>
    );
};

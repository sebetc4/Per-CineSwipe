// Styles
import styles from './layout.module.scss';
// Lib
import { PropsWithChildren } from 'react';
// App
import { moviesApi } from '~/services';
import { SearchSidebar } from './components';
import { Locale, PageProps } from '~/types';

export default async function MoviesSearchLayout({
    children,
    params: { locale },
}: PropsWithChildren<PageProps<{ locale: Locale }>>) {
    const { genres } = await moviesApi.getMovieGenres(locale);
    return (
        <div className={styles.container}>
            <SearchSidebar genres={genres} />
            <div>{children}</div>
        </div>
    );
}

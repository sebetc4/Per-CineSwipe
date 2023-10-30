import { Locale, PageProps } from '~/types';
import { SearchResults } from './components';

export default function MoviesPage({ params: { locale }, searchParams }: PageProps<{ locale: Locale }>) {
    return (
        <SearchResults
            searchParams={searchParams}
            locale={locale}
        />
    );
}

import { Locale, PageProps } from '~/types';
import { SearchResults } from '../../components';

export default function GenreIdPage({
    params: { id, locale },
    searchParams,
}: PageProps<{ id: string; locale: Locale }>) {
    return (
        <SearchResults
            searchParams={searchParams}
            genreId={id}
            locale={locale}
        />
    );
}

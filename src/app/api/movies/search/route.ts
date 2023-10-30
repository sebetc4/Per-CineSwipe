import { NextRequest } from 'next/server';
import { moviesApi } from '~/services';
import { Locale } from '~/types';
import { availableLocales } from '~/utils';

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url!);
    const query = searchParams.get('query');
    let locale = searchParams.get('locale');
    if (!availableLocales.includes(locale as Locale)) {
        locale = 'fr';
    }
    const searchResults = await moviesApi.getMovieSearch(query!, locale as Locale);
    return new Response(JSON.stringify(searchResults), { status: 200 });
};

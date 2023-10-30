import { useParams } from 'next/navigation';
import { Locale } from '~/types';
import { defaultLocale } from '~/utils';

export const useCurrentLocale = () => {
    const params = useParams();
    return params.locale as Locale || defaultLocale;
};

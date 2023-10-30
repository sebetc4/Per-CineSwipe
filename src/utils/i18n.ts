import { NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { Locale } from '~/types';

export const availableLocales = ['en', 'fr'] as const;
export const defaultLocale = 'fr';

export const getPrefferedLocale = (req: NextRequest) => {
    const headers = { 'accept-language': req.headers.get('accept-language') || '' };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, availableLocales, defaultLocale);
};

export const getLocaleToRedirect = (req: NextRequest) => {
    const pathname = req.nextUrl.pathname;
    const pathnameIsMissingLocale = !availableLocales.some((locale) => pathname.startsWith(`/${locale}`));
    if (pathnameIsMissingLocale) {
        const locale = getPrefferedLocale(req);
        return new URL(`/${locale}${pathname}`, req.url);
    }
};

const dictionaries: Record<Locale, () => Record<string, any>> = {
    en: () => import('../../public/locales/en.json').then((m) => m.default),
    fr: () => import('../../public/locales/fr.json').then((m) => m.default),
};

export const getTranslation = async (locale: Locale) => dictionaries[locale]();

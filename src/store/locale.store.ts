import { create } from 'zustand';
import { Locale } from '~/types';

type UseLocale = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
};

export const useLocale = create<UseLocale>((set) => ({
    locale: 'fr',
    setLocale: (locale) => set({ locale }),
}));

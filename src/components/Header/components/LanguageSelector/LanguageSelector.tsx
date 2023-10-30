'use client';
import { availableLocales } from '~/utils';
// Styles
import styles from './LanguageSelector.module.scss';
// Libs
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useCurrentLocale } from '~/hooks';

export const LanguageSelector = () => {
    const currentLocale = useCurrentLocale();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [currentLocale]);

    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                {currentLocale}
                <FiChevronDown />
            </button>
            <ul>
                {availableLocales
                    .filter((locale) => locale !== currentLocale)
                    .map((locale) => (
                        <li key={locale}>
                            <Link href={`/${locale}`}>{locale}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

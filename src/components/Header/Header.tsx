// Style
import styles from './Header.module.scss';
// Lib
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
// App
import { LogoLeft } from '..';
import { Locale, Path } from '~/types';
import { LanguageSelector, MovieSearch, SignupButton } from './components';

type HeaderProps = {
    locale: Locale;
};

export const Header = ({ locale }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logoContainer}>
                <Link href={`/${locale}${Path.HOME}`}>
                    <LogoLeft />
                </Link>
            </div>
            <div className={styles.header__navContainer}>
                <nav>
                    <ul>
                        <li>
                            <Link href={`/${locale}${Path.SERIES}`}>Séries</Link>
                        </li>
                        <li>
                            <Link href={`/${locale}${Path.MOVIES}`}>Films</Link>
                        </li>
                        <SignupButton locale={locale} />
                    </ul>
                </nav>
                <MovieSearch locale={locale} />
                <Link href={`/${locale}/${Path.PROFILE}`}>
                    <FaUserAlt />
                </Link>
                <LanguageSelector />
            </div>
        </header>
    );
};

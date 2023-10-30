import { Genres, Popular } from '~/components';
import styles from './page.module.scss';
import { Locale, PageProps } from '~/types';

export const revalidate = 86400; // 1 day

export default function HomePage({ params: { locale } }: PageProps<{ locale: Locale }>) {
    return (
        <div className={styles.container}>
            <Popular locale={locale} />
            <Genres locale={locale} />
        </div>
    );
}

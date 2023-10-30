// Styles
import styles from './MediaCard.module.scss';
// Librairies
import Link from 'next/link';
import Image from 'next/image';
// App
import { Locale, Movie, Path } from '~/types';
import { Like } from './components';
// Env
const { NEXT_PUBLIC_TMDB_IMAGE_BASE_URL } = process.env;

type MediaCardProps = {
    media: Movie;
    locale: Locale
};

export const MediaCard = ({ media, locale }: MediaCardProps) => {
    return (
        <article className={styles.card}>
            <Link href={`/${locale}${Path.MOVIES}/${media.id}`}>
                <div className={styles.imageContainer}>
                    <Image
                        src={`${NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w500${media.poster_path}`}
                        alt={media.title}
                        fill
                    />
                </div>
                <Like mediaId={media.id} />
                <div className={styles.content}>
                    <p className={styles.content__vote}>{media.vote_average}</p>
                    <h3>{media.title}</h3>
                    <p>Le {new Date(media.release_date).toLocaleDateString('fr-FR')}</p>
                </div>
            </Link>
        </article>
    );
};

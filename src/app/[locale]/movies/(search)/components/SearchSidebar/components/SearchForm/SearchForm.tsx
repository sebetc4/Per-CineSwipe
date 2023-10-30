// Sytles
import styles from './SearchForm.module.scss';
// App
import { usePathname, useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export const SearchForm = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchParams = new URLSearchParams();
        searchParams.set('release_date.gte', formData.get('fromDate') as string);
        searchParams.set('release_date.lte', formData.get('toDate') as string);
        searchParams.set('sort_by', formData.get('sort') as string);
        router.push(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <h2>Filtrer</h2>
            <div className={styles.field}>
                <h3>Date de sortie</h3>
                <div className={styles.date}>
                    <label htmlFor='fromDate'>Du</label>
                    <input
                        type='date'
                        name='fromDate'
                    />

                    <label htmlFor='toDate'>au</label>
                    <input
                        type='date'
                        name='toDate'
                        defaultValue={new Date().toISOString().substring(0, 10)}
                    />
                </div>
            </div>
            <div className={styles.field}>
                <h3>Trier par</h3>
                <select name='sort'>
                    <option value='popularity.desc'>Popularité</option>
                    <option value='vote_average.desc'>Note</option>
                    <option value='vote_count.desc'>Nombre de notes</option>
                </select>
            </div>
            <div className={styles.submitContainer}>
                <button type='submit'>Rechercher</button>
            </div>
        </form>
    );
};

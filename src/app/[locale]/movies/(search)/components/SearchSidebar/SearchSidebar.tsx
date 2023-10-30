'use client';
// Styles
import styles from './SearchSidebar.module.scss';
// Lib
import { useParams, useSelectedLayoutSegment, notFound } from 'next/navigation';
import React from 'react';
// App
import { Genre } from '~/types';
import { SearchForm } from './components';

type SearchSidebarProps = {
    genres: Genre[];
};

export const SearchSidebar = ({ genres }: SearchSidebarProps) => {
    const segment = useSelectedLayoutSegment();
    const { id } = useParams();
    const getSideBarTitle = () => {
        if (!segment) {
            return null;
        }
        const genre = genres.find((genre) => genre.id === Number(id));
        if (!genre) {
            return notFound();
        }
        return genre.name;
    };

    const genreName = getSideBarTitle();

    return (
        <div className={styles.container}>
            <h1>
                {`Tous les films${genreName ? ' du genre ' : ''}`}
                {genreName && <span className={styles.genre}>&quot;{genreName}&quot;</span>}
            </h1>
            <hr className={styles.divider}/>
            <SearchForm />
        </div>
    );
};

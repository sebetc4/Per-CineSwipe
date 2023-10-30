'use client';

import { ErrorPageProps } from "~/types";

export default function Error({ error, reset }: ErrorPageProps) {
    return (
        <section className='errorPage'>
            <h1>Erreur</h1>
            <p>{"Oups, une erreur s'est produite!"}</p>
        </section>
    );
}

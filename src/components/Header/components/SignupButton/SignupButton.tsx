'use client'

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { Locale, Path } from '~/types';

type SignupButtonProps = {
    locale: Locale;
};

export const SignupButton = ({ locale }: SignupButtonProps) => {
    const session = useSession();

    return (
        <>
            {session.status !== 'authenticated' && (
                <li>
                    <Link href={`/${locale}${Path.SIGNUP}`}>Inscription</Link>
                </li>
            )}
        </>
    );
};

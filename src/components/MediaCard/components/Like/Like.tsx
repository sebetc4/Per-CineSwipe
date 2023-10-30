'use client';

import { useSession } from 'next-auth/react';
import React, { MouseEvent } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { nextApi } from '~/services/nextApi';

type LikePros = {
    mediaId: number;
};

export const Like = ({ mediaId }: LikePros) => {
    const session = useSession();

    const handleLike = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        nextApi.likeMovie(String(mediaId));
    };

    return (
        <>
            {session.status === 'authenticated' && (
                <button onClick={(e) => handleLike(e)}>
                    <AiFillHeart />
                </button>
            )}
        </>
    );
};

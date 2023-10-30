import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/utils';

export const POST = async (req: NextRequest, { params: { id } }: { params: { id: string } }) => {
    const token = await getToken({ req });
    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    await prisma.user.update({
        where: {
            id: Number(token.sub),
        },
        data: {
            moviesLiked: {
                create: {
                    movieId: Number(id),
                },
            },
        },
    });
    return NextResponse.json({ message: 'Movie liked successfuly' }, { status: 200 });
};

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/utils';
import * as bcrypt from 'bcrypt';

export const POST = async (req: NextRequest) => {
    const { email, password } = await req.json();
    const user = await prisma.user.create({
        data: {
            email,
            password: bcrypt.hashSync(password, 10),
        },
    });
    const { password: hashedPassword, ...rest } = user;
    return NextResponse.json(rest, { status: 201 });
};

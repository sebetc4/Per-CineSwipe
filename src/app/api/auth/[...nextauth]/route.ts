import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import * as bcrypt from 'bcrypt';
import { prisma } from '~/utils';


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Adresse E-mail', type: 'email', placeholder: 'Votre adresse e-mail' },
                password: { label: 'Mot de passe', type: 'password', placeholder: 'Votre mot de passe' },
            },
            async authorize(credentials) {
                const { email, password } = credentials!
                const user = await prisma.user.findFirst({
                    where: { email },
                });
                if (!user) {
                    return null;
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    return null;
                }
                const { password: hashedPassword, ...rest } = user;
                return rest;
            },
        }),
    ],
});

export {handler as GET, handler as POST}
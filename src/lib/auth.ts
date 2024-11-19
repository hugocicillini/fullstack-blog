import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { authConfig } from './auth.config';
import { User } from './models';
import { connectToDb } from './utils';

const login = async (credentials: Credentials) => {
  try {
    await connectToDb();

    const user = await User.findOne({ email: credentials.email });

    if (!user) {
      throw new Error('Email ou senha inválidos!');
    }

    const passwordMatch = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!passwordMatch) {
      throw new Error('Email ou senha inválidos!');
    }

    return user;
  } catch (error) {
    throw new Error('Falha ao logar!');
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Credenciais inválidas');
          }

          const user = await login(credentials as Credentials);

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'github') {
        await connectToDb();

        try {
          const existingUser = await User.findOne({ email: profile?.email });

          if (!existingUser) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              img: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});

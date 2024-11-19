import { Post, User } from './models';
import { connectToDb } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export const getPosts = async () => {
  try {
    connectToDb();

    const posts = await Post.find();

    return posts;
  } catch (err) {
    throw new Error('Falha ao buscar posts!');
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();

    const post = await Post.findOne({ slug });

    return post;
  } catch (err) {
    throw new Error('Falha ao buscar posts!');
  }
};

export const getUser = async (id: string) => {
  noStore();
  try {
    connectToDb();

    const user = await User.findById(id);

    return user;
  } catch (err) {
    throw new Error('Falha ao buscar usuario!');
  }
};

export const getUsers = async () => {
  try {
    connectToDb();

    const users = await User.find();

    return users;
  } catch (err) {
    throw new Error('Falha ao buscar usuarios!');
  }
};

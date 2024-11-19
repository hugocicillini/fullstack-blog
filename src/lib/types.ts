type Post = {
  title: string;
  desc: string;
  img?: string;
  userId: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

type User = {
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin: boolean;
};

type Credentials = {
  email: string;
  password: string;
}
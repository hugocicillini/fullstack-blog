import PostUser from '@/components/PostUser';
import { getPost } from '@/lib/data';
import Image from 'next/image';
import { Suspense } from 'react';

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const post: Post = await getPost(slug);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 p-4 lg:p-8">
      <div className="flex-1 relative h-[50vh] lg:h-[calc(100vh-200px)]">
        <Image
          src={post.img || '/noavatar.png'}
          priority
          alt="Post Image"
          width={500}
          height={500}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4 lg:gap-12">
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm lg:text-base">
              Publicado em
            </span>
            <span className="font-light text-xs lg:text-sm">
              {post.createdAt.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="text-base lg:text-xl leading-relaxed mt-12">
          {post.desc}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

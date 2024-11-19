import Image from 'next/image';
import Link from 'next/link';

const PostCard = async ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex">
        {post.img && (
          <div className="w-[90%] h-[400px] relative">
            <Image
              src={post.img}
              alt="thumbnail"
              fill
              className="object-cover"
            />
          </div>
        )}
        <span className="text-xs rotate-[270deg] m-auto">
          {post.createdAt.toLocaleDateString()}
        </span>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2 lg:min-h-16 line-clamp-2">
          {post.title}
        </h1>
        <p className="font-light mb-4 text-gray-400 line-clamp-3">
          {post.desc}
        </p>
        <Link href={`/blog/${post.slug}`} className="underline">
          Ler mais
        </Link>
      </div>
    </div>
  );
};
export default PostCard;

import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/data';

const Blog = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div className="flex flex-wrap gap-4">
      {posts.map((post: Post) => (
        <div
          key={post.slug}
          className="sm:w-[48%] md:w-[30%] lg:w-[23%] w-full"
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default Blog;

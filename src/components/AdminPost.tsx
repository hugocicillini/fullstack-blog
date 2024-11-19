import { deletePost } from '@/lib/action';
import { getPosts } from '@/lib/data';
import Image from 'next/image';

const AdminPost = async () => {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex items-center justify-between bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={post.img || '/noavatar.png'}
                width={64}
                height={64}
                alt={post.title}
                className="rounded-md w-16 h-16 object-cover"
              />
              <span className="text-lg font-medium text-gray-800">
                {post.title}
              </span>
            </div>

            <form action={deletePost as any} className="flex items-center">
              <input type="hidden" name="id" value={post.id} />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
              >
                Deletar
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPost;

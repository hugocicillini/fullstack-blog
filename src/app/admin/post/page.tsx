import AdminPostForm from '@/components/AdminPostForm';
import { auth } from '@/lib/auth';

const AddPost = async () => {
  const session = await auth();

  return (
    <div>
      {session?.user && <AdminPostForm userId={session.user.id || ''} />}
    </div>
  );
};
export default AddPost;

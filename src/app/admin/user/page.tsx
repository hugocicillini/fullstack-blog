import AdminUserForm from '@/components/AdminUserForm';
import { auth } from '@/lib/auth';

const AddUser = async () => {
  const session = await auth();

  return (
    <div>
      {session?.user && <AdminUserForm />}
    </div>
  );
};
export default AddUser;

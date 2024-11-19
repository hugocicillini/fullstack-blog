import { deleteUser } from '@/lib/action';
import { getUsers } from '@/lib/data';
import Image from 'next/image';
import { Suspense } from 'react';

const AdminUser = async () => {
  const users = await getUsers();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-gray-700 font-semibold">Nome</th>
            <th className="p-4 text-left text-gray-700 font-semibold">Email</th>
            <th className="p-4 text-left text-gray-700 font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="p-4 text-gray-800 flex items-center gap-2">
                <Image
                  src={user.img || '/noavatar.png'}
                  width={48}
                  height={48}
                  alt={user.username}
                  className="object-cover w-12 h-12 rounded-full"
                />
                {user.username}
              </td>
              <td className="p-4 text-gray-800">{user.email}</td>
              <td className="p-4">
                <form action={deleteUser as any}>
                  <input type="hidden" name="id" value={user.id} />
                  <button
                    type="submit"
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Deletar
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUser;

import AdminPost from '@/components/AdminPost';
import AdminUser from '@/components/AdminUser';
import Link from 'next/link';
import { Suspense } from 'react';

const Admin = () => {
  return (
    <div className="p-8 space-y-12 bg-gray-900">
      <h1 className="text-4xl text-center font-bold text-white">
        Painel de Administração
      </h1>

      <div className="flex justify-center gap-6 mt-6">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Link href="/admin/post">Criar Post</Link>
        </button>
        <button className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          <Link href="/admin/user">Criar Usuário</Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Gerenciar Posts
          </h2>
          <Suspense
            fallback={<div className="text-gray-400">Carregando Posts...</div>}
          >
            <AdminPost />
          </Suspense>
        </div>

        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Gerenciar Usuários
          </h2>
          <Suspense
            fallback={
              <div className="text-gray-400">Carregando Usuários...</div>
            }
          >
            <AdminUser />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Admin;

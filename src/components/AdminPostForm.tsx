'use client';

import { addPost } from '@/lib/action';
import { useSnackbar } from 'notistack';
import { useActionState, useEffect } from 'react';

const AdminPostForm = ({ userId }: { userId: string }) => {
  const [state, formAction] = useActionState(addPost, undefined);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (state?.success) {
      enqueueSnackbar('Post criado!', {
        variant: 'success',
        autoHideDuration: 3000,
      });
    }
  }, [state?.success]);

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-800 shadow-lg rounded-lg">
      <form action={formAction} className="space-y-4">
        <h1 className="text-2xl text-center font-semibold text-white mb-4">
          Adicionar Post
        </h1>

        <div className="flex flex-col">
          <input type="hidden" name="userId" value={userId} />
          <label className="text-gray-300 font-medium" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título"
            className="px-4 py-2 mt-1 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-300 font-medium" htmlFor="desc">
            Descrição
          </label>
          <textarea
            cols={30}
            rows={3}
            name="desc"
            id="desc"
            placeholder="Descrição"
            className="px-4 py-2 mt-1 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white resize-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-300 font-medium" htmlFor="img">
            Imagem (URL)
          </label>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="URL da imagem"
            className="px-4 py-2 mt-1 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-300 font-medium" htmlFor="slug">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            placeholder="Slug"
            className="px-4 py-2 mt-1 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Salvar
        </button>

        {state?.error && (
          <p className="mt-2 text-red-500 text-center">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default AdminPostForm;

'use client';

import { addUser } from '@/lib/action';
import { useSnackbar } from 'notistack';
import { useActionState, useEffect, useState } from 'react';

const AdminUserForm = () => {
  const [state, formAction] = useActionState(addUser, undefined);
  const { enqueueSnackbar } = useSnackbar();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (state?.success) {
      enqueueSnackbar('Usuário criado!', {
        variant: 'success',
        autoHideDuration: 3000,
      });
    }
  }, [state?.success]);

  const handleToggle = () => {
    setIsAdmin((prevState) => !prevState);
  };

  console.log(isAdmin);

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-800 shadow-lg rounded-lg">
      <form action={formAction} className="space-y-4">
        <h1 className="text-2xl text-center font-semibold text-white mb-4">
          Adicionar Usuário
        </h1>

        <div className="flex flex-col">
          <label className="text-gray-300 font-medium" htmlFor="name">
            Nome
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nome do Usuário"
            className="px-4 py-2 mt-1 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-300 font-medium" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="px-4 py-2 mt-1 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-300 font-medium" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            className="px-4 py-2 mt-1 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div className="flex items-center space-x-3">
          <label className="text-gray-300 font-medium" htmlFor="isAdmin">
            Administrador:
          </label>
          <input
            type="checkbox"
            id="isAdmin"
            name="isAdmin"
            value={isAdmin ? 'true' : 'false'}
            onChange={handleToggle}
            className="w-4 h-4 rounded-full bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default AdminUserForm;

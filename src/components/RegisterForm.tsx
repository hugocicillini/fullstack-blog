'use client';

import { register } from '@/lib/action';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useActionState, useEffect } from 'react';

const RegisterForm = () => {
  const [state, formAction] = useActionState(register, undefined);

  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (state?.success) {
      router.push('/');
      enqueueSnackbar('Conta criada com sucesso, seja bem-vindo!', {
        variant: 'success',
        autoHideDuration: 3000,
      });
    }
  }, [state?.success, state?.error, router]);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input
        type="text"
        placeholder="Nome"
        name="username"
        className="p-4 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        className="p-4 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
      />

      <input
        type="password"
        placeholder="Senha"
        name="password"
        className="p-4 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
      />

      <input
        type="password"
        placeholder="Confirme a senha"
        name="passwordRepeat"
        className="p-4 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
      />

      <button className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition duration-200">
        Cadastrar
      </button>
      {state?.error && (
        <p className="text-red-500 text-center">{state.error}</p>
      )}
    </form>
  );
};
export default RegisterForm;

'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const FormSchema = yup
  .object({
    name: yup.string().min(3, 'Nome inválido').required('Nome é obrigatório!'),
    email: yup
      .string()
      .email('E-mail inválido')
      .min(5, 'E-mail inválido')
      .required('E-mail é obrigatório!'),
    phone: yup
      .string()
      .min(11, 'Telefone inválido')
      .required('Telefone é obrigatório!'),
    message: yup.string().required('Mensagem é obrigatória!'),
  })
  .required();

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex md:flex-row flex-col items-center gap-16 p-8">
      <div className="flex-1 relative h-[500px]">
        <Image
          src="/contact.png"
          alt="Imagem de Contato"
          layout="fill"
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div>
            <input
              {...register('name')}
              placeholder="Nome"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 text-black focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              {...register('email')}
              placeholder="E-mail"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 text-black focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              {...register('phone')}
              placeholder="Celular"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 text-black focus:border-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register('message')}
              placeholder="Mensagem"
              rows={5}
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 text-black focus:border-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import RegisterForm from '@/components/RegisterForm';

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Crie sua conta
        </h2>
        <RegisterForm />
        <p className="text-center text-gray-400 mt-6 text-sm">
          Já tem uma conta?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

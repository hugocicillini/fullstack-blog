import LoginForm from '@/components/LoginForm';
import { handleGitHubLogin } from '@/lib/action';

const Login = async () => {
  return (
    <div className="flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Bem-vindo de volta!
        </h2>

        <LoginForm />

        <p className="text-center text-gray-400 mt-6 text-sm">Ou</p>

        <form action={handleGitHubLogin} className="mt-4">
          <button
            type="submit"
            className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded flex items-center justify-center gap-2 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.204.084 1.837 1.234 1.837 1.234 1.07 1.834 2.809 1.304 3.495.997.108-.774.42-1.305.763-1.605-2.666-.304-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.046.137 3.004.403 2.29-1.553 3.296-1.23 3.296-1.23.654 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.623-5.475 5.92.431.372.816 1.103.816 2.222 0 1.605-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
            Entrar com GitHub
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6 text-sm">
          Não tem uma conta?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

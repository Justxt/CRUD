import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h1 className="text-3xl font-bold mb-4">CRUD NESTJS Y REACT</h1>
      <p className="text-gray-600 mb-6">Usando Supabase</p>

      <div className="flex gap-4">
        {user ? (
          <>
            <Link
              to="/users"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Ver Usuarios
            </Link>
            <Link
              to="/users/create"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Crear Usuario
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

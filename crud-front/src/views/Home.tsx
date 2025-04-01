import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h1 className="text-3xl font-bold mb-4">CRUD NESTJS Y REACT</h1>
      <p className="text-gray-600 mb-6">SIU</p>
      <div className="flex gap-4">
        <Link to="/users" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Ver Usuarios
        </Link>
        <Link to="/users/create" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Crear Usuario
        </Link>
      </div>
    </div>
  );
}

export default Home;

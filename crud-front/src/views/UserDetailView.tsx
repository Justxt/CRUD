import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserController } from '../controllers/UserController';
import { User } from '../models/User';

function UserDetailView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const userData = await UserController.getUserById(Number(id));
        setUser(userData);
        setError(null);
      } catch (err) {
        setError('Error al cargar el usuario');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleDelete = async () => {
    if (!id || !user) return;
    
    if (window.confirm(`¿Estás seguro de que deseas eliminar a ${user.name}?`)) {
      try {
        await UserController.deleteUser(Number(id));
        navigate('/users');
      } catch (err) {
        setError('Error al eliminar el usuario');
        console.error(err);
      }
    }
  };

  if (loading) return <p className="text-center py-4">Cargando</p>;
  if (error) return <p className="text-center py-4 text-red-500">Error: {error}</p>;
  if (!user) return <p className="text-center py-4">No se encuentra el usuario</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Detalles del Usuario</h2>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Creado:</span>{' '}
            {new Date(user.createdAt as Date).toLocaleDateString()}
          </p>

          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => navigate(`/users/edit/${user.id}`)}
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
            >
              Editar
            </button>
            <button 
              onClick={() => navigate('/users')} 
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Volver
            </button>
            <button 
              onClick={handleDelete} 
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailView;
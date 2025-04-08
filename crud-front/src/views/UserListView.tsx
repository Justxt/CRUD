import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserList from "../components/users/UserList";
import { UserController } from "../controllers/UserController";
import { User } from "../models/User";

function UserListView() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await UserController.getAllUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError("Error al cargar los usuarios");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      try {
        await UserController.deleteUser(id);
        // Actualiza la lista cuando se elimina
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        setError("Error al eliminar el usuario");
        console.error(err);
      }
    }
  };

  if (loading) return <p className="text-center py-4">Cargando</p>;
  if (error)
    return <p className="text-center py-4 text-red-500">Error: {error}</p>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Lista de Usuarios</h2>
        <Link
          to="/users/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Crear Usuario
        </Link>
      </div>

      <UserList users={users} onDelete={handleDelete} />
    </div>
  );
}

export default UserListView;

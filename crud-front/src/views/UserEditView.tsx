import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/users/UserForm";
import { UserController } from "../controllers/UserController";
import { User, UpdateUserDTO } from "../models/User";

function UserEditView() {
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
        const userData = await UserController.getUserById(id);
        setUser(userData);
        setError(null);
      } catch (err) {
        setError("Error al cargar el usuario");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (userData: UpdateUserDTO) => {
    if (!id) return;

    try {
      await UserController.updateUser(id, userData);
      navigate("/users");
    } catch (err) {
      setError("Error al actualizar el usuario");
      console.error(err);
    }
  };

  if (loading) return <p className="text-center py-4">Cargando</p>;
  if (error)
    return <p className="text-center py-4 text-red-500">Error: {error}</p>;
  if (!user)
    return <p className="text-center py-4">No se encuentra el Usuario</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Editar Usuario: {user.name}</h2>
        </div>
        <div className="p-6">
          <UserForm user={user} onSubmit={handleSubmit} isEditMode={true} />
          <div className="mt-6">
            <button
              onClick={() => navigate("/users")}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEditView;

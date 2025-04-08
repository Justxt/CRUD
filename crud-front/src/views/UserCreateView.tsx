import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/users/UserForm";
import { UserController } from "../controllers/UserController";
import { CreateUserDTO } from "../models/User";

function UserCreateView() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (userData: CreateUserDTO) => {
    try {
      await UserController.createUser(userData);
      navigate("/users");
    } catch (err) {
      setError("Error al crear el usuario");
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Crear Usuario</h2>
        </div>
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
              {error}
            </div>
          )}
          <UserForm onSubmit={handleSubmit} />
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

export default UserCreateView;

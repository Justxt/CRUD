import { User } from '../../models/User';
import { Link } from 'react-router-dom';

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
}

function UserList({ users, onDelete }: UserListProps) {
  return (
    <div className="overflow-x-auto w-full shadow-md rounded-lg">
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(user.createdAt as Date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <Link 
                    to={`/users/${user.id}`} 
                    className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                  >
                    Ver
                  </Link>
                  <Link 
                    to={`/users/edit/${user.id}`} 
                    className="inline-block px-3 py-1 bg-amber-500 text-white text-sm rounded-md hover:bg-amber-600"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => user.id && onDelete(user.id)}
                    className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-500">No se encontraron usuarios</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
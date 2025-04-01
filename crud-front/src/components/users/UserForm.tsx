import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { User, CreateUserDTO, UpdateUserDTO } from '../../models/User';

interface UserFormProps {
  user?: User;
  onSubmit: (userData: CreateUserDTO | UpdateUserDTO) => void | Promise<void>;
  isEditMode?: boolean;
}

function UserForm({ user, onSubmit, isEditMode = false }: UserFormProps) {
  const [formData, setFormData] = useState<CreateUserDTO | UpdateUserDTO>({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Si se edita no es necesario agg la pass
    if (isEditMode && formData.password === '') {
      const { password, ...dataWithoutPassword } = formData;
      onSubmit(dataWithoutPassword);
    } else {
      onSubmit(formData as CreateUserDTO);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          name="password"
          value={formData.password || ''}
          onChange={handleChange}
          required={!isEditMode}
        />
        {isEditMode && (
          <span className="block text-xs text-gray-500 mt-1">Dejar en blanco para mantener la contraseña actual</span>
        )}
      </div>

      <div>
        <button 
          type="submit" 
          className={`px-4 py-2 rounded-md text-white font-medium ${isEditMode ? 'bg-amber-500 hover:bg-amber-600' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {isEditMode ? 'Actualizar' : 'Crear'} Usuario
        </button>
      </div>
    </form>
  );
}

export default UserForm;
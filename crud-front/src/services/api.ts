import axios from 'axios';
import { User, CreateUserDTO, UpdateUserDTO } from '../models/User';

const API_URL = 'http://localhost:3000/api';

export const UserService = {
  getAll: async (): Promise<User[]> => {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    return response.data;
  },
  
  getById: async (id: number): Promise<User> => {
    const response = await axios.get<User>(`${API_URL}/users/${id}`);
    return response.data;
  },
  
  create: async (user: CreateUserDTO): Promise<User> => {
    const response = await axios.post<User>(`${API_URL}/users`, user);
    return response.data;
  },
  
  update: async (id: number, user: UpdateUserDTO): Promise<User> => {
    const response = await axios.put<User>(`${API_URL}/users/${id}`, user);
    return response.data;
  },
  
  delete: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/users/${id}`);
  }
};
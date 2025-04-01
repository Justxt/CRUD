import { UserService } from '../services/api';
import { User, CreateUserDTO, UpdateUserDTO } from '../models/User';

export class UserController {
  // Actua como intermediaria entre las vistas y el modelo
  static async getAllUsers(): Promise<User[]> {
    try {
      return await UserService.getAll();
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  }

  static async getUserById(id: number): Promise<User> {
    try {
      return await UserService.getById(id);
    } catch (error) {
      console.error(`Error al obtener el usuario ${id}:`, error);
      throw error;
    }
  }

  static async createUser(userData: CreateUserDTO): Promise<User> {
    try {
      return await UserService.create(userData);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  }

  static async updateUser(id: number, userData: UpdateUserDTO): Promise<User> {
    try {
      return await UserService.update(id, userData);
    } catch (error) {
      console.error(`Error al actualizar el usuario ${id}:`, error);
      throw error;
    }
  }

  static async deleteUser(id: number): Promise<void> {
    try {
      await UserService.delete(id);
    } catch (error) {
      console.error(`Error al eliminar el usuario ${id}:`, error);
      throw error;
    }
  }
}
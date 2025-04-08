import { supabase } from './supabase';
import { User, CreateUserDTO, UpdateUserDTO } from '../models/User';

export const UserSupabaseService = {
  getAll: async (): Promise<User[]> => {
    // Verificamos que el usuario esté autenticado antes de llamar a la API
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('No autorizado');
    }
    
    const { data, error } = await supabase
      .from('users') 
      .select('*');
    
    if (error) throw error;
    return data || [];
  },
  
  getById: async (id: number): Promise<User> => {
    // Verificamos que el usuario esté autenticado antes de llamar a la API
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('No autorizado');
    }
    
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    if (!data) throw new Error(`Usuario con ID ${id} no encontrado`);
    return data;
  },
  
  create: async (user: CreateUserDTO): Promise<User> => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('No autorizado');
    }
    
    const { password, ...userData } = user;
    
    const { data, error } = await supabase
      .from('users')
      .insert({
        ...userData,
        created_at: new Date().toISOString()
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  update: async (id: number, user: UpdateUserDTO): Promise<User> => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('No autorizado');
    }
    
    const { password, ...updateData } = user;
    
    const { data, error } = await supabase
      .from('users')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  delete: async (id: number): Promise<void> => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('No autorizado');
    }
    
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

export const AuthService = {
  login: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return data;
  },
  
  register: async (email: string, password: string, name: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });
    
    if (error) throw error;
    
    if (data.user) {
      const { error: userError } = await supabase
        .from('users')
        .insert({
          id: data.user.id, // Usar el mismo ID de auth
          name,
          email,
          created_at: new Date().toISOString()
        });
      
      if (userError) {
        console.error("Error al crear usuario en la tabla users:", userError);
        try {
          throw new Error("No se pudo completar el registro: " + userError.message);
        } catch (e) {
          throw new Error("Error al crear usuario: " + userError.message);
        }
      }
    }
    
    return data;
  },
  
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
  
  getCurrentUser: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  },
  
  updatePassword: async (newPassword: string) => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });
    
    if (error) throw error;
  }
};

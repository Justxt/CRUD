import { supabase } from './supabase';
import { User, CreateUserDTO, UpdateUserDTO } from '../models/User';

export const UserSupabaseService = {
  getAll: async (): Promise<User[]> => {
    const { data, error } = await supabase
      .from('user')
      .select('*');
    
    if (error) throw error;
    return data || [];
  },
  
  getById: async (id: number): Promise<User> => {
    const { data, error } = await supabase
      .from('user')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    if (!data) throw new Error(`Usuario con ID ${id} no encontrado`);
    return data;
  },
  
  create: async (user: CreateUserDTO): Promise<User> => {
    const { data, error } = await supabase
      .from('user')
      .insert(user)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  update: async (id: number, user: UpdateUserDTO): Promise<User> => {
    const { data, error } = await supabase
      .from('user')
      .update(user)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  delete: async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('user')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

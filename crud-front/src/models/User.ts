export interface User {
  id?: string; 
  name: string;
  email: string;
  password?: string;
  created_at?: string | Date;
}

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type UpdateUserDTO = Partial<CreateUserDTO>;
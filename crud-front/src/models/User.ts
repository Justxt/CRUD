export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  createdAt?: string | Date;
}

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type UpdateUserDTO = Partial<CreateUserDTO>;
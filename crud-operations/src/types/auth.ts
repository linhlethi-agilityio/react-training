type UserRule = 'admin' | 'user';

export interface User {
  email: string;
  password: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  rule: UserRule;
}

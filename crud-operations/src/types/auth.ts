type UserRule = 'admin' | 'user';

export interface User {
  email: string;
  password: string;
  createdAt: number;
  updatedAt: number;
  fullName: string;
  rule: UserRule;
}

type UserRule = 'admin';

export interface UserType {
  fullName: string;
  email: string;
  rule: UserRule;
}

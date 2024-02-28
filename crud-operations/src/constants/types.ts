export interface StudentType {
  avatarUrl?: string;
  name: string;
  email: string;
  phone: string;
  enrollNumber: string;
  dateOfAdmission: string;
}

export interface PaymentType {
  name: string;
  paymentSchedule: string;
  billNumber: number;
  amountPaid: number;
  balanceAmount: number;
  date: string;
}

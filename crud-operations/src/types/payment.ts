export interface Payment {
  id: string;
  name: string;
  paymentSchedule: string;
  billNumber: number;
  amountPaid: number;
  balanceAmount: number;
  date: string;
}

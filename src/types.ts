export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string; // Contoh: 'Makanan', 'Transportasi', 'Tagihan'
}

export type AddExpenseFunc = (expense: Omit<Expense, 'id'>) => void;
export type DeleteExpenseFunc = (id: number) => void;
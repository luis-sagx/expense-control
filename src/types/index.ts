
type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Expense = {
  id: string;
  description: string;
  amount: number;
  categoryId: string;
  date: Date;
};

export type DraftExpense = Omit<Expense, 'id'>;

export type Category = {
    id: string;
    name: string;
    icon: string;
}
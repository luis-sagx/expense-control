import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  const filterExpenses = useMemo(() => {
    if(state.currentCategoryId) {
      return state.expenses.filter(exp => exp.categoryId === state.currentCategoryId);
    }
    return state.expenses;
  }, [state.expenses, state.currentCategoryId]);

  return (
    <div className="mt-5">
      <h2 className="text-white font-bold text-2xl">Listado de gastos</h2>

      {isEmpty ? (
        <p className="text-slate-300 font-semibold mt-3">No hay gastos registrados</p>
      ) : (
        <ul>
          {filterExpenses.map(expense => (
            <ExpenseDetail 
                key={expense.id}    
                expense={expense} 
            />
          ))}
        </ul>
      )}
    </div>
  )
}

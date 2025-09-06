import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  return (
    <div className="mt-5 mx-2">
      <h2 className="text-white font-bold mb-4 text-2xl">Listado de gastos</h2>

      {isEmpty ? (
        <p className="text-slate-300 text-lg font-semibold">No hay gastos registrados</p>
      ) : (
        <ul>
          {state.expenses.map(expense => (
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

/* eslint-disable react-refresh/only-export-components */
import { type Dispatch, useReducer, createContext, useEffect, useMemo } from "react"
import { budgetReducer, initialBudgetState, type BudgetAction, type BudgetState } from "../reducers/budget-reducer"
import { validateLocalStorageData, clearCorruptedData } from "../utils/localStorage"

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetAction>;
    totalExpenses: number;
    remainingBudget: number;
}

type BudgetProviderProps = {
    children: React.ReactNode;
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children}: BudgetProviderProps) => {
    // Validar localStorage antes de inicializar
    useEffect(() => {
        if (!validateLocalStorageData()) {
            clearCorruptedData();
            // Recargar la página para usar estado limpio
            window.location.reload();
        }
    }, []);

    const [state, dispatch] = useReducer(budgetReducer, initialBudgetState);
    
    const totalExpenses = useMemo(() => {
      return state.expenses.reduce((total, expense) => total + expense.amount, 0);
    }, [state.expenses]);
    
    const remainingBudget = state.budget - totalExpenses;
    
    return (
        <BudgetContext.Provider 
            value={{ 
                state, 
                dispatch, 
                totalExpenses,
                remainingBudget,
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
/* eslint-disable react-refresh/only-export-components */
import { type Dispatch, useReducer, createContext, useEffect } from "react"
import { budgetReducer, initialBudgetState, type BudgetAction, type BudgetState } from "../reducers/budget-reducer"
import { validateLocalStorageData, clearCorruptedData } from "../utils/localStorage"

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetAction>;
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

    return (
        <BudgetContext.Provider 
            value={{ 
                state, 
                dispatch 
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
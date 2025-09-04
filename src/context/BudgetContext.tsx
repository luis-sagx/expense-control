/* eslint-disable react-refresh/only-export-components */
import { type Dispatch, useReducer, createContext } from "react"
import { budgetReducer, initialBudgetState, type BudgetAction, type BudgetState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetAction>;
}

type BudgetProviderProps = {
    children: React.ReactNode;
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children}: BudgetProviderProps) => {
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
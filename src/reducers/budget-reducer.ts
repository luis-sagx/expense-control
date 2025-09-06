import type { DraftExpense, Expense } from "../types";


export type BudgetAction = 
| { type: 'ADD_BUDGET'; payload: number }
| { type: 'SHOW_MODAL' }
| { type: 'CLOSE_MODAL' }
| { type: 'RESET_BUDGET' }
| { type: 'ADD_EXPENSE' ; payload: DraftExpense };

export type BudgetState = {
    budget: number,
    showModal: boolean
    expenses: Expense[];
}

export const initialBudgetState: BudgetState = {
    budget: 0,
    showModal: false,
    expenses: []
}

export function budgetReducer(state: BudgetState, action: BudgetAction): BudgetState {
    switch (action.type) {
        case 'ADD_BUDGET':
            return { 
                ...state, 
                budget: action.payload 
            };
        case 'SHOW_MODAL':
            return { 
                ...state, 
                showModal: true 
            };
        case 'CLOSE_MODAL':
            return { 
                ...state, 
                showModal: false 
            };
        case 'ADD_EXPENSE':
            return { 
                ...state, 
                expenses: [...state.expenses, { id: crypto.randomUUID(), ...action.payload }],
                showModal: false
            };

        case 'RESET_BUDGET':
            return { 
                ...state, 
                budget: 0 
            };
        default:
            return state;
    }
}
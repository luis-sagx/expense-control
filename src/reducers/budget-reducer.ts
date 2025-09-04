

export type BudgetAction = 
| { type: 'ADD_BUDGET'; payload: number }
| { type: 'RESET_BUDGET' };

export type BudgetState = {
    budget: number;
}

export const initialBudgetState: BudgetState = {
    budget: 0,
}

export function budgetReducer(state: BudgetState, action: BudgetAction): BudgetState {
    switch (action.type) {
        case 'ADD_BUDGET':
            return { 
                ...state, 
                budget: action.payload 
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
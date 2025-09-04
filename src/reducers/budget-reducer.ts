

export type BudgetAction = 
| { type: 'ADD_BUDGET'; payload: number }
| { type: 'SHOW_MODAL' }
| { type: 'CLOSE_MODAL' }
| { type: 'RESET_BUDGET' };

export type BudgetState = {
    budget: number,
    showModal: boolean
}

export const initialBudgetState: BudgetState = {
    budget: 0,
    showModal: false
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
        case 'RESET_BUDGET':
            return { 
                ...state, 
                budget: 0 
            };
        default:
            return state;
    }
}
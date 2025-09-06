import type { DraftExpense, Expense } from "../types";


export type BudgetAction = 
| { type: 'ADD_BUDGET'; payload: number }
| { type: 'SHOW_MODAL' }
| { type: 'CLOSE_MODAL' }
| { type: 'RESET_BUDGET' }
| { type: 'ADD_EXPENSE' ; payload: DraftExpense }
| { type: 'REMOVE_EXPENSE' ; payload: Expense['id'] }
| { type: 'GET_EXPENSE_BY_ID' ; payload: Expense['id'] }
| { type: 'UPDATE_EXPENSE' ; payload: Expense }

export type BudgetState = {
    budget: number,
    showModal: boolean,
    expenses: Expense[],
    editingId?: Expense['id']
}

const initialBudget = () : number => {
    try {
        const budgetFromStorage = localStorage.getItem('budget');
        if (budgetFromStorage) {
            const parsedBudget = parseFloat(budgetFromStorage);
            return !isNaN(parsedBudget) ? parsedBudget : 0;
        }
        return 0;
    } catch (error) {
        console.error('Error reading budget from localStorage:', error);
        return 0;
    }
}

const localStorageExpenses = () : Expense[] => {
    try {
        const expensesFromStorage = localStorage.getItem('expenses');
        if (expensesFromStorage) {
            const parsedExpenses = JSON.parse(expensesFromStorage);
            // Validar que sea un array
            if (Array.isArray(parsedExpenses)) {
                // Convertir strings de fecha de vuelta a objetos Date
                return parsedExpenses.map(expense => ({
                    ...expense,
                    date: new Date(expense.date)
                }));
            }
            return [];
        }
        return [];
    } catch (error) {
        console.error('Error reading expenses from localStorage:', error);
        // Limpiar localStorage corrupto
        localStorage.removeItem('expenses');
        return [];
    }
}

export const initialBudgetState: BudgetState = {
    budget: initialBudget(),
    showModal: false,
    expenses: localStorageExpenses(),
    editingId: ''
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
                showModal: false,
                editingId: ''
            };
        case 'ADD_EXPENSE':
            return { 
                ...state, 
                expenses: [...state.expenses, { id: crypto.randomUUID(), ...action.payload }],
                showModal: false
            };
        case 'REMOVE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };
        case 'GET_EXPENSE_BY_ID':
            return {
                ...state,
                editingId: action.payload,
                showModal: true
            };
        case 'UPDATE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map(expense => expense.id === action.payload.id ? action.payload : expense),
                editingId: '',
                showModal: false
            };

        case 'RESET_BUDGET':
            return { 
                ...state, 
                budget: 0,
                expenses: [],
            };
        default:
            return state;
    }
}
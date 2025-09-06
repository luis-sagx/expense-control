import type { Expense } from "../types"
import { formatDate } from "../helpers"
import AmountDisplay from "./AmountDisplay"
import { useMemo } from "react"
import { categories } from "../data/categories"
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { useBudget } from "../hooks/useBudget"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.categoryId)[0] , [expense])
  const { dispatch } = useBudget();
  
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction 
        onClick={() => dispatch({ type: 'GET_EXPENSE_BY_ID', payload: expense.id })}
        >
            Editar
        </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => dispatch({ type: 'REMOVE_EXPENSE', payload: expense.id })}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

  return (
    <div className="mt-3">
    <SwipeableList>
        <SwipeableListItem
            maxSwipe={40}
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
        <div className="bg-gradient-to-r from-slate-800 to-gray-800 p-4 shadow-md border border-white/10 flex items-center justify-between w-full">
            <div className="flex items-center">
                <img 
                src={`/icono_${categoryInfo?.icon}.svg`} 
                alt={`Ícono de ${categoryInfo?.name}`} 
                className="w-16 h-16 mr-4"
                />
            </div>
            <div className="flex-1">
                
                <h3 className="text-xl my-1 font-bold text-white capitalize">{expense.description}</h3>
                <p className="text-slate-200 text-sm">{formatDate(expense.date)}</p>
            </div>
            <div className="flex flex-col items-end space-y-2">
                <span className="px-1.5 py-1 bg-yellow-400/20 text-yellow-300 text-sm font-medium rounded-lg border border-yellow-400/30 whitespace-nowrap ">
                    {categoryInfo?.name}
                </span>
                <AmountDisplay 
                    amount={expense.amount}
                />
            </div>
            </div>
        </SwipeableListItem>
    </SwipeableList>
    </div>
  )
}

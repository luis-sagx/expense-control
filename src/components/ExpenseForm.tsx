import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import type { DraftExpense } from "../types";
import type { Value } from "react-date-picker/src/shared/types.js";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {

  const [error, setError] = useState<string>('');
  const [previousAmount, setPreviousAmount] = useState<number>(0);
  const { dispatch, state, remainingBudget } = useBudget();

  const [expense, setExpense] = useState<DraftExpense>({
    description: '',
    amount: 0,
    categoryId: '',
    date: new Date(),
  });


  useEffect(() => {
    if(state.editingId) {
      const expenseToEdit = state.expenses.filter(exp => exp.id === state.editingId)[0];
      setExpense(expenseToEdit);
      setPreviousAmount(expenseToEdit.amount);
    }
  }, [state.editingId, state.expenses]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExpense(prev => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) : value
    }));
  }

  const handleChangeDate = (value: Value) => {
    // Handle the case where value might be null or an array (range)
    let dateValue: Date;
    
    if (!value) {
      dateValue = new Date();
    } else if (Array.isArray(value)) {
      // If it's a range, take the first date
      dateValue = value[0] || new Date();
    } else {
      dateValue = value;
    }
    
    setExpense(prev => ({
      ...prev,
      date: dateValue
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(Object.values(expense).includes('') || !expense.date) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if ((expense.amount - previousAmount) > remainingBudget) {
      setError('El monto excede el presupuesto disponible');
      return;
    }

    if(state.editingId) {
      //actualizar gasto
      dispatch({ type: 'UPDATE_EXPENSE', payload: { id: state.editingId, ...expense } });
    } else {
      //agregar nuevo gasto
      dispatch({ type: 'ADD_EXPENSE', payload: expense });
    }

    //resetear form
    setExpense({
      description: '',
      amount: 0,
      categoryId: '',
      date: new Date(),
    });
    
    setError('');
  }

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit } className="space-y-6">
        <legend className="text-3xl font-bold text-amber-400 mb-6 text-center">{state.editingId ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className="flex flex-col space-y-3">
          <label htmlFor="description" className="font-medium text-slate-200">
            Descripción
          </label>
          <input
            type="text"
            id="description"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
            placeholder="Agrega el nombre del gasto"
            value={expense.description}
            onChange={handleChangeInput}
            name="description"
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label htmlFor="amount" className="font-medium text-slate-200">
            Monto
          </label>
          <input
            type="number"
            id="amount"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
            placeholder="Agrega la cantidad del gasto. Ejm: 3000"
            value={expense.amount}
            onChange={handleChangeInput}
            name="amount"
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label htmlFor="category" className="font-medium text-slate-200">
            Categoría
          </label>
          <select
            id="category"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
            value={expense.categoryId}
            onChange={handleChangeInput}
            name="categoryId"
          >
            <option value="" className="bg-slate-800 text-slate-300">--Selecciona una categoría--</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-slate-200">
            Fecha del Gasto
          </label>
          <DatePicker
            onChange={handleChangeDate}
            value={expense.date}
            className="w-full p-3"
          />
        </div>
        
        <input 
          type="submit" 
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer"
          value={state.editingId ? 'Actualizar Gasto' : 'Registrar Gasto'}
        />
      </form>
    </div>
  )
}
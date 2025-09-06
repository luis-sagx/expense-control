import { useMemo, useState } from 'react';
import { useBudget } from '../hooks/useBudget';

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const isValidBudget = useMemo(() => {
    return !isNaN(budget) || budget > 0;
  }, [budget]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BUDGET', payload: budget });
    if (isValidBudget) {
      console.log(`Presupuesto establecido: $${budget.toLocaleString()}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl mb-4 shadow-lg">
          <i className="fa-solid fa-wallet text-slate-900 text-xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Definir Presupuesto</h3>
        <p className="text-slate-300 text-sm">Establece el monto que planeas gastar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-slate-200 mb-2">
            Presupuesto Total
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-slate-400 text-lg">$</span>
            </div>
            <input
              type="number"
              id="budget"
              name='budget'
              value={budget}
              onChange={handleChange}
              className="block w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 text-lg"
              placeholder="Define tu presupuesto"
              step="0.01"
              min="1"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValidBudget}
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-slate-900 disabled:text-slate-400 font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg disabled:hover:shadow-none"
        >
          {isValidBudget ? 'Establecer Presupuesto' : 'Ingresa un monto'}
        </button>
      </form>
    </div>
  );
}

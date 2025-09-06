import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";
import type { ChangeEvent } from "react";

export default function FilterByCategory() {
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'ADD_FILTER_CATEGORY', payload: e.target.value });
  }

  return (
    <div className="bg-gray-800 shadow-xl p-5 rounded-xl mb-10">
      <form>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label htmlFor="category" className="font-semibold text-white">Filtrar Gastos</label>
            <select 
                id="category" 
                className="block w-full bg-gray-700 border border-gray-600 text-slate-200 rounded-lg p-3"
                onChange={handleChange} 
            >
              <option value="">--Seleccionar categoría--</option>
              {categories.map(category => (
                <option 
                    value={category.id}
                    key={category.id}
                >
                    {category.name}
                </option>
              ))}
            </select>
        </div>
      </form>
    </div>
  )
}

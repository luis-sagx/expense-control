import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ExpenseForm() {
  const [date, setDate] = useState<Value>(new Date());

  return (
    <div className="mb-4">
      <form className="space-y-6">
        <legend className="text-3xl font-bold text-amber-400 mb-6 text-center">Nuevo Gasto</legend>
        
        <div className="flex flex-col space-y-3">
          <label htmlFor="description" className="font-medium text-slate-200">
            Descripción
          </label>
          <input
            type="text"
            id="description"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
            placeholder="Agrega el nombre del gasto"
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label htmlFor="amount" className="font-medium text-slate-200">
            Cantidad
          </label>
          <input
            type="number"
            id="amount"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
            placeholder="Agrega la cantidad del gasto. Ejm: 3000"
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label htmlFor="category" className="font-medium text-slate-200">
            Categoría
          </label>
          <select
            id="category"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
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
            onChange={setDate}
            value={date}
            className="w-full"
          />
        </div>
        
        <input 
          type="submit" 
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer"
          value={'Registrar Gasto'}
        />
      </form>
    </div>
  )
}

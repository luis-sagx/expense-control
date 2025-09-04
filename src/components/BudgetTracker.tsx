import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Grafico de gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
            type="button"
            className="bg-amber-600 hover:bg-orange-600 text-slate-900 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
            Resetear App
        </button>

        <AmountDisplay 
            label="Presupuesto"
            amount={300}
        />
        <AmountDisplay 
            label="Disponible"
            amount={200}
        />
        <AmountDisplay 
            label="Gastado"
            amount={100}
        />

      </div>

    </div>
  )
}

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  const { state, dispatch, totalExpenses, remainingBudget } = useBudget();

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% Gastado`}
          styles={buildStyles({
            pathColor: percentage > 99 ? '#ef4444' : '#eac016',
            trailColor: "#384151",
            textSize: '8px',
            textColor: percentage > 99 ? "#ef4444" : "#eac016",
            backgroundColor: 'transparent',
          })}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer border border-red-500/30 backdrop-blur-sm"
          onClick={() => dispatch({ type: 'RESET_BUDGET' })}
        >
            Resetear App
        </button>

        <AmountDisplay 
            label="Presupuesto"
            amount={state.budget}
        />
        <AmountDisplay 
            label="Disponible"
            amount={remainingBudget}
        />
        <AmountDisplay 
            label="Gastado"
            amount={totalExpenses}
        />

      </div>

    </div>
  )
}

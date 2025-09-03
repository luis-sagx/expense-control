import BudgetForm from "./components/BudgetForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-emerald-900 relative overflow-hidden">

      
      <header className="relative z-10 bg-gradient-to-r from-slate-800/90 via-gray-800/80 to-slate-800/90 backdrop-blur-xl border-b border-yellow-400/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-2xl">
                  <i className="fa-solid fa-coins text-slate-900 text-2xl"></i>
                </div>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-0.5">
                  Control de Presupuesto
                </h1>
                <p className="text-slate-400 text-sm font-medium">Control inteligente de finanzas</p>
              </div>
            </div>
            
            <nav className="flex items-center space-x-4">
              <a 
                target="_blank" 
                href="https://github.com/luis-sagx/expense-control"
                className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <i className="fa-brands fa-github text-slate-300 hover:text-white text-xl"></i>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400/30 via-amber-400/30 to-yellow-400/30 p-8 border-b border-white/10">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-1">Panel de Control Financiero</h2>
              <p className="text-slate-200">Gestiona tu dinero con gran facilidad</p>
            </div>
          </div>
          
          <div className="p-8">
            <BudgetForm />
          </div>
        </div>
        
        
      </main>
    </div>
  );
}

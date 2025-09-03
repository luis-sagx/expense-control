export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-gradient-to-l from-emerald-600 via-teal-600 to-cyan-600 shadow-xl border-b border-emerald-300/20">
        <div className="max-w-4xl mx-auto w-full p-8 flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-white flex items-center tracking-tight">
            <i className="fa-solid fa-dollar-sign text-yellow-400 mr-4 text-3xl drop-shadow-lg shadow-yellow-300/50 filter brightness-120 "></i>
              Planificador de Gastos
          </h1>
          <nav>
            <a target="_blank" href="https://github.com/luis-sagx/expense-control"><i className="fa-brands fa-github text-white text-3xl"></i></a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto bg-cyan-50 shadow-lg rounded-lg p-8 mt-8">

      </main>
    </div>
  );
}

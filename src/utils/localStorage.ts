// Utilidades para manejo seguro del localStorage

export const clearCorruptedData = () => {
  try {
    localStorage.removeItem('budget');
    localStorage.removeItem('expenses');
    console.log('localStorage cleared due to corrupted data');
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

export const validateLocalStorageData = (): boolean => {
  try {
    const budget = localStorage.getItem('budget');
    const expenses = localStorage.getItem('expenses');
    
    // Validar budget
    if (budget && isNaN(parseFloat(budget))) {
      console.log('Invalid budget in localStorage');
      return false;
    }
    
    // Validar expenses
    if (expenses) {
      const parsedExpenses = JSON.parse(expenses);
      if (!Array.isArray(parsedExpenses)) {
        console.log('Expenses is not an array');
        return false;
      }
      
      // Validar que cada expense tenga una fecha válida
      for (const expense of parsedExpenses) {
        if (!expense.date) {
          console.log('Expense missing date');
          return false;
        }
        const date = new Date(expense.date);
        if (isNaN(date.getTime())) {
          console.log('Invalid date in expense');
          return false;
        }
      }
    }
    
    return true;
  } catch (error) {
    console.error('Invalid localStorage data:', error);
    return false;
  }
};

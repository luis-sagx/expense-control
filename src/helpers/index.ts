export function formatCurrency(amount: number): string {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

// en espanol
export function formatDate(date: Date | string): string {
    // Convertir string a Date si es necesario
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // Validar que sea una fecha válida
    if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
        console.error('Invalid date provided to formatDate:', date);
        return 'Fecha inválida';
    }
    
    return dateObj.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    });
}


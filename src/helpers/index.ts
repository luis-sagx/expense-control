export function formatCurrency(amount: number): string {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

// en espanol
export function formatDate(date: Date): string {
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    });
}


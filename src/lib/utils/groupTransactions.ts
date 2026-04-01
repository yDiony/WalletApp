export function groupTransactions(transactions: any[]) {
  return transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date).toLocaleDateString("pt-BR");

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(transaction);

    return acc;
  }, {} as Record<string, any[]>);
}
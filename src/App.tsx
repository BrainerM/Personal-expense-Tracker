// src/App.tsx
import React, { useState } from 'react';
import ExpenseInput from './components/ExpenseInput';
import ExpenseSummary from './components/ExpenseSummary';
import type { Expense, AddExpenseFunc, DeleteExpenseFunc } from './types'; // Import Tipe

function App() {
  // Penggunaan STATE: Menyimpan dan mengubah data utama secara dinamis
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [nextId, setNextId] = useState(1);

  // Fungsi untuk Menambah Pengeluaran (Callback untuk ExpenseInput)
  // Menggunakan AddExpenseFunc (type)
  const handleAddExpense: AddExpenseFunc = (newExpense) => {
    const expenseWithId: Expense = {
      ...newExpense,
      id: nextId,
    };
    setExpenses(prevExpenses => [...prevExpenses, expenseWithId]);
    setNextId(prevId => prevId + 1);
  };

  // Fungsi untuk Menghapus Pengeluaran (Callback untuk ExpenseSummary)
  // Menggunakan DeleteExpenseFunc (type)
  const handleDeleteExpense: DeleteExpenseFunc = (id) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="container">
      
      <header className="main-header">
        <h1>Personal Expense Tracker</h1>
        <p className="text-gray-500">Kelola dan lacak pengeluaran Anda dengan mudah.</p>
      </header>

      <div className="grid-layout">
        
        {/* Kolom Kiri: Input Form */}
        <div>
          <ExpenseInput onAddExpense={handleAddExpense} />
        </div>
        
        {/* Kolom Kanan: Summary dan Daftar */}
        <div>
          <ExpenseSummary 
            expenses={expenses} 
            onDeleteExpense={handleDeleteExpense} 
          />
        </div>
        
      </div>
    </div>
  );
}

export default App;
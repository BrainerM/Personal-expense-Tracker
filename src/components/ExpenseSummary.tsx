// src/components/ExpenseSummary.tsx
import React, { useMemo } from 'react';
import type { Expense, DeleteExpenseFunc } from '../types';

interface ExpenseSummaryProps {
  expenses: Expense[]; 
  onDeleteExpense: DeleteExpenseFunc; 
}

const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};

// Fungsi untuk memilih kelas warna kategori
const getCategoryClass = (category: string) => {
    switch (category) {
      case 'Makanan': return 'category-Makanan';
      case 'Transportasi': return 'category-Transportasi';
      case 'Tagihan': return 'category-Tagihan';
      case 'Hiburan': return 'category-Hiburan';
      default: return 'category-Lainnya';
    }
};

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses, onDeleteExpense }) => {
  
  // Perhitungan total yang dinamis (menggunakan useMemo)
  const totalExpense = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);
  
  return (
    <div className="card">
      
      {/* Ringkasan Total Pengeluaran */}
      <div className="summary-box">
        <p>Total Pengeluaran Anda Saat Ini:</p>
        <p className="total-amount">
          {formatRupiah(totalExpense)}
        </p>
      </div>

      <h4 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3" 
          style={{ color: 'var(--color-text-light)', borderBottomColor: 'var(--color-border)' }}>
          Daftar Transaksi
      </h4>
      
      {/* 💡 HEADER LIST - Tiga Kolom Utama */}
      <div className="transaction-header">
          <span>DESKRIPSI</span>
          <span>KATEGORI</span>
          <span style={{textAlign: 'right'}}>JUMLAH</span> 
      </div>

      <ul className="transaction-list">
        {expenses.length === 0 ? (
            <div 
                style={{backgroundColor: 'var(--color-input-bg)', color: 'var(--color-text-secondary)', padding: '15px', borderRadius: '0 0 8px 8px'}}
                className="text-gray-500 italic text-center" 
            >
                Belum ada pengeluaran yang dicatat.
            </div>
        ) : (
            // Reverse() agar transaksi terbaru muncul di atas
            expenses.slice().reverse().map(expense => (
                <li key={expense.id} className="transaction-item">
                    
                    {/* COL 1: DESKRIPSI (45%) */}
                    <div className="item-desc-col">
                        <p>{expense.description}</p>
                    </div>
                    
                    {/* COL 2: KATEGORI (25%) */}
                    <div className="item-category-col">
                        <span className={`item-category ${getCategoryClass(expense.category)}`}>
                            {expense.category}
                        </span>
                    </div>
                    
                    {/* COL 3: JUMLAH & ACTIONS (30%) */}
                    <div className="item-amount-col">
                        <p className="item-amount">
                            -{formatRupiah(expense.amount)}
                        </p>
                        <button 
                            onClick={() => onDeleteExpense(expense.id)} 
                            className="btn-delete"
                            title="Hapus Transaksi"
                        >
                            {/* Icon Trash (SVG) */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{height: '20px', width: '20px'}}>
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 6h6v10H7V6z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </li>
            ))
        )}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
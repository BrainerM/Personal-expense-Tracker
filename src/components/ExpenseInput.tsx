// src/components/ExpenseInput.tsx
import React, { useState } from 'react';
// Pastikan menggunakan 'import type' sesuai error yang Anda temui
import type { AddExpenseFunc } from '../types'; 

interface ExpenseInputProps {
  onAddExpense: AddExpenseFunc; // Menerima props berupa fungsi callback
}

const ExpenseInput: React.FC<ExpenseInputProps> = ({ onAddExpense }) => {
  // Penggunaan STATE lokal untuk mengontrol input form
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Makanan'); // Default category

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verifikasi dasar
    if (description.trim() && amount > 0) {
      // Panggil fungsi props untuk mengirim data ke App (induk)
      onAddExpense({ 
        description: description.trim(), 
        amount, 
        category 
      }); 
      
      // Reset state form setelah submit
      setDescription('');
      setAmount(0);
      setCategory('Makanan');
    }
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold text-gray-800 mb-5 border-b pb-3" 
          style={{ color: 'var(--color-text-light)', borderBottomColor: 'var(--color-border)' }}>
          Input Pengeluaran
      </h3>
      
      <form onSubmit={handleSubmit}>
        
        {/* Layout Grid Responsif untuk Input Fields */}
        <div className="form-group-grid">
          
          <div className="form-group">
            <label htmlFor="description">Deskripsi</label>
            <input 
              id="description"
              type="text" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Contoh: Kopi pagi"
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="amount">Jumlah (Rp)</label>
            <input 
              id="amount"
              type="number" 
              // Menghilangkan 0 dari tampilan saat input tidak fokus
              value={amount === 0 ? '' : amount}
              // Penting: Mengubah nilai string input ke Number
              onChange={(e) => setAmount(Number(e.target.value))}
              min="1"
              required
              placeholder="0"
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Kategori</label>
            <select 
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
            >
              <option value="Makanan">🍽️ Makanan</option>
              <option value="Transportasi">🚗 Transportasi</option>
              <option value="Tagihan">🧾 Tagihan</option>
              <option value="Hiburan">🍿 Hiburan</option>
              <option value="Lainnya">📦 Lainnya</option>
            </select>
          </div>
        </div>
        
        {/* Tombol Submit di Kontainer Aksi */}
        <div className="form-action">
          <button 
            type="submit" 
            className="btn-submit"
          >
            ➕ Catat Pengeluaran
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseInput;
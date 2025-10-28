## Personal Expense Tracker
Aplikasi web untuk mencatat dan melacak pengeluaran pribadi harian, dibangun menggunakan React dan TypeScript dengan tampilan dark mode yang bersih.

Aplikasi ini mendemonstrasikan bagaimana data dapat mengalir antar komponen (Induk ke Anak dan Anak ke Induk) untuk menciptakan pembaruan tampilan yang dinamis.


## Aplikasi ini dibagi menjadi tiga komponen utama yang saling berinteraksi:

App.tsx (Root/Induk)
Peran Utama: Berfungsi sebagai state manager sentral. Menyimpan state utama untuk daftar pengeluaran (expenses).

Logika: Bertanggung jawab untuk fungsi penambahan dan penghapusan data pengeluaran.

Interaksi: Meneruskan data (expenses) ke ExpenseSummary dan meneruskan fungsi callback (handleAddExpense) ke ExpenseInput.

ExpenseInput.tsx (Input Form)
Peran Utama: Menyediakan antarmuka form untuk entri pengeluaran baru (Deskripsi, Jumlah, Kategori).

Logika: Mengelola state lokal (state terkontrol) untuk nilai input form saat ini.

Interaksi: Menggunakan props (berupa fungsi callback) untuk mengirim data yang telah diinput kembali ke komponen App.

ExpenseSummary.tsx (Ringkasan & Tampilan)
Peran Utama: Menampilkan ringkasan total pengeluaran dan daftar transaksi yang sudah dicatat.

Logika: Melakukan perhitungan total pengeluaran secara dinamis menggunakan data yang diterima.

Interaksi: Menerima array data pengeluaran (expenses) melalui props dari App dan me-render tampilan daftar.

Baik, saya mengerti. Anda tidak ingin format tabel untuk bagian "Letak Penggunaan Props dan State".

Berikut adalah daftar poin (`*`) yang menjelaskan penggunaan **Props dan State**, disusun tanpa menggunakan format tabel, siap untuk dimasukkan ke dalam file `README.md` Anda.



## Letak Penggunaan Props dan State

* STATE Utama (`expenses`)**: Disimpan di komponen **`App.tsx`**. State ini menyimpan seluruh *array* data pengeluaran. Setiap penambahan atau penghapusan item akan mengubah *state* ini, memicu pembaruan dinamis pada `ExpenseSummary`.
* STATE Lokal (`description`, `amount`, `category`)**: Disimpan di komponen **`ExpenseInput.tsx`**. State ini hanya digunakan untuk mengontrol nilai *input form* saat pengguna mengetik, sebelum data disubmit ke *state* utama.
* PROPS (Pengiriman Fungsi)**: Fungsi `onAddExpense` dan `onDeleteExpense` dikirim dari **`App`** ke komponen anaknya (`ExpenseInput` dan `ExpenseSummary`). Fungsi-fungsi ini adalah *callback* yang memungkinkan komponen anak memanggilnya untuk mengubah *state* utama di induk.
* PROPS (Pengiriman Data)**: Data `expenses` (data *array* pengeluaran) dikirim dari **`App.tsx`** ke **`ExpenseSummary.tsx`**. Ini adalah bagaimana `ExpenseSummary` menerima data terbaru untuk di-*render* sebagai daftar transaksi dan total biaya.

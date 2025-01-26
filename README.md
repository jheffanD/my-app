1. Penggunaan State Management

State management diterapkan pada bagian berikut:

const [activePage, setActivePage] = useState("Dashboard"); // State untuk menentukan halaman yang aktif
- State activePage: Berfungsi untuk menyimpan informasi halaman yang sedang aktif (misalnya, "Dashboard", "Management", "Report", atau "Profile").
- Fungsi setActivePage: Digunakan untuk mengubah nilai activePage ketika pengguna memilih menu di sidebar.

Setiap kali pengguna mengklik salah satu menu di sidebar, fungsi onClick akan dipanggil:
onClick: () => setActivePage(link.value),

State activePage akan diperbarui dengan nilai link.value, dan komponen utama akan menampilkan konten yang sesuai berdasarkan kondisi berikut:

<div className='flex-1 p-4'>
  {activePage === "Dashboard" && <DashboardContent />}
  {activePage === "Management" && <Management />}
  {activePage === "Report" && <Report />}
  {activePage === "Profile" && <Chart />}
</div>




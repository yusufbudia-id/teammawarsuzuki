// File: src/lib/whatsapp.ts (atau lib/whatsapp.ts)

export const waTeam = [
  { nama: 'Yusuf', no: '6282174635218' },
  { nama: 'Egy', no: '6281327260515' },
  { nama: 'Bima', no: '6289637144539' },
  { nama: 'Kafi', no: '6281329095557' },
  { nama: 'Nabila', no: '6283103278381' },
  { nama: 'Bima', no: '6289637144539' },
  { nama: 'Alma', no: '6282134148101' },
  { nama: 'Indah', no: '6282135245314' }
];

export const getFairWANumber = () => {
  // Memastikan kode hanya berjalan di sisi Klien (Browser)
  if (typeof window !== 'undefined') {
    // 1. Cek apakah pengunjung ini sudah punya "Sales Pegangan" di memori browsernya
    const savedIndex = localStorage.getItem('assignedSalesIndex');

    // Jika sudah ada dan tim tidak dikurangi/dihapus (index aman)
    if (savedIndex !== null && parseInt(savedIndex) < waTeam.length) {
      return waTeam[parseInt(savedIndex)].no;
    }

    // 2. JIKA PENGUNJUNG BARU:
    // Gunakan mili-detik waktu saat ini dibagi jumlah tim.
    // Ini menjamin rotasi (Round-Robin) yang sangat adil secara statistik.
    const newIndex = Date.now() % waTeam.length;
    
    // Simpan nomor index sales ini di memori browser pelanggan
    localStorage.setItem('assignedSalesIndex', newIndex.toString());
    
    return waTeam[newIndex].no;
  }
  
  // Fallback aman untuk Server-Side
  return waTeam[0].no;
};

// Fungsi utama yang dipanggil oleh semua tombol di website
export const openWhatsApp = (message: string) => {
  const fairNo = getFairWANumber();
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${fairNo}?text=${encodedMessage}`, '_blank');
};
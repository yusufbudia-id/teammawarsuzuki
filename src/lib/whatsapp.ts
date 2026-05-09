// File: lib/whatsapp.ts

export const waTeam = [
  { nama: 'Yusuf', no: '6282174635218' },
  { nama: 'Egy', no: '6281327260515' },
  { nama: 'Bima', no: '6289637144539' },
  { nama: 'Kafi', no: '6281329095557' },
  { nama: 'Nabila', no: '6283103278381' },
  { nama: 'Alma', no: '6282134148101' },
  { nama: 'Indah', no: '6282135245314' }
];

// Fungsi untuk mendapatkan nomor acak dari tim
export const getRandomWANumber = () => {
  const randomIndex = Math.floor(Math.random() * waTeam.length);
  return waTeam[randomIndex].no;
};

// Fungsi bantuan untuk langsung membuat link WhatsApp beserta pesannya
export const openWhatsApp = (message: string) => {
  const randomNo = getRandomWANumber();
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${randomNo}?text=${encodedMessage}`, '_blank');
};
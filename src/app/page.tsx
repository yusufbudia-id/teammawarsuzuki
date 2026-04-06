import { Metadata } from 'next';
import HomeClient from './HomeClient';

// Ini akan dibaca oleh robot Google sebelum masuk ke tampilan
export const metadata: Metadata = {
  title: 'Promo & Harga Mobil Suzuki Jogja Terbaru | Dealer Resmi',
  description: 'Temukan mobil Suzuki impian Anda di Dealer Resmi Suzuki Jogja. Tersedia promo diskon puluhan juta untuk XL7, Carry, Ertiga, dan model lainnya. Hubungi kami sekarang!',
  keywords: ['dealer suzuki jogja', 'promo mobil suzuki jogja', 'harga suzuki carry jogja', 'kredit suzuki xl7', 'suzuki s-presso jogja'],
  alternates: {
    canonical: 'https://www.suzuki-jogja.com',
  },
  openGraph: {
    title: 'Promo & Harga Mobil Suzuki Jogja Terbaru',
    description: 'Dealer Resmi Suzuki Jogja memberikan penawaran kredit ringan dan diskon terbaik.',
    url: 'https://www.suzuki-jogja.com',
    siteName: 'Suzuki Jogja',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function Page() {
  return <HomeClient />;
}

import { Metadata } from 'next';
import HomeClient from './HomeClient';

// Metadata yang diperkuat untuk jajaran flagship (XL7, Fronx) dan niaga (Carry, Mobil Box)
export const metadata: Metadata = {
  title: 'Promo Suzuki Jogja: XL7 Hybrid, Fronx, Carry & Mobil Box',
  description: 'Dealer Resmi Suzuki Jogja. Dapatkan promo diskon puluhan juta, simulasi kredit ringan, dan harga OTR terbaik untuk Suzuki XL7 Hybrid, Fronx, Carry Pickup, Mobil Box, dan Mobil MBG.',
  keywords: [
    'dealer suzuki jogja',
    'promo suzuki xl7 jogja',
    'harga xl7 hybrid jogja',
    'kredit xl7 magelang',
    'promo suzuki fronx jogja', 
    'harga carry pickup jogja', 
    'jual mobil box suzuki jogja', 
    'mobil mbg jogja',
    'mobil niaga suzuki',
    'kredit mobil suzuki jogja'
  ],
  alternates: {
    canonical: 'https://www.suzuki-jogja.com',
  },
  openGraph: {
    title: 'Promo Suzuki Jogja: XL7 Hybrid, Fronx, Carry & Mobil Box',
    description: 'Dealer Resmi Suzuki Jogja memberikan penawaran kredit ringan dan diskon puluhan juta untuk XL7, Fronx, hingga kendaraan perniagaan Anda.',
    url: 'https://www.suzuki-jogja.com',
    siteName: 'Suzuki Jogja',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function Page() {
  return <HomeClient />;
}

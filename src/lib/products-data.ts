export interface PriceGroup {
  priceOtr: string;
  priceNett: string;
}

export interface ProductVariant {
  name: string;
  transmission: string;
  fuel: string;
  engine: string;
  priceAB: PriceGroup;    // Harga wilayah Jogja (Plat AB)
  priceAAR: PriceGroup;   // Harga wilayah Kedu & Banyumas (Plat AA & R)
  bonus?: string;         // Bonus khusus sesuai pricelist terbaru
}

export interface ProductType {
  id: number;
  slug: string;
  name: string;
  category: string;
  priceText: string;
  description: string;
  features: string[];
  advantages: string[];
  image: string;
  gallery: string[];
  brochureUrl?: string;
  variants: ProductVariant[];
  specifications: {
    engine: string;
    transmission: string;
    fuel: string;
    power: string;
    torque: string;
    seating: string;
    dimensions: string;
  };
}

export const products: ProductType[] = [
  {
    id: 1,
    slug: 'suzuki-fronx-jogja',
    name: 'Fronx',
    category: 'SUV',
    priceText: '252',
    description: 'Suzuki Fronx hadir sebagai SUV crossover yang memadukan desain tangguh, gaya modern, dan performa lincah untuk jalanan perkotaan. Dilengkapi dengan teknologi Mild Hybrid yang efisien dan fitur keselamatan terkini, Fronx adalah pilihan tepat bagi Anda yang berjiwa muda. Dapatkan kemudahan memiliki mobil baru dengan simulasi cicilan Suzuki Fronx yang terjangkau, DP ringan, serta syarat kredit mobil baru yang mudah hanya di Dealer Suzuki Jogja.',
    features: ['Mesin 1.5L', 'Desain Modern', 'Mild Hybrid'],
    advantages: ['Sunroof panoramic', '360-degree camera', 'Mild hybrid'],
    image: '/images/fronx-1.jpg',
    gallery: ['/images/fronx-1.jpg', '/images/fronx-2.jpg'],
    brochureUrl: '/brochures/fronx.pdf',
    specifications: {
      engine: 'K15C, 1.462 cc, 4 Silinder',
      transmission: '4-Speed AT / 6-Speed AT',
      fuel: 'Bensin',
      power: '103 PS / 6.000 rpm',
      torque: '136.8 Nm / 4.400 rpm',
      seating: '5 Penumpang',
      dimensions: '3.995 x 1.765 x 1.550 mm'
    },
    variants: [
      {
        name: 'GL MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 266.300.000', priceNett: 'Rp 252.300.000' },
        priceAAR: { priceOtr: 'Rp 274.000.000', priceNett: 'Rp 260.000.000' },
        bonus: 'Suzuki NEX* (GL Only) / Apple Watch 11 Series* (GX & SGX Only), Potongan Harga 100 SPK Pertama, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai & Mesin'
      },
      {
        name: 'GL AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 277.300.000', priceNett: 'Rp 263.300.000' },
        priceAAR: { priceOtr: 'Rp 285.400.000', priceNett: 'Rp 271.400.000' },
        bonus: 'Suzuki NEX* (GL Only) / Apple Watch 11 Series* (GX & SGX Only), Potongan Harga 100 SPK Pertama, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai & Mesin'
      },
      {
        name: 'GX MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 288.700.000', priceNett: 'Rp 280.700.000' },
        priceAAR: { priceOtr: 'Rp 297.000.000', priceNett: 'Rp 289.000.000' },
        bonus: 'Suzuki NEX* (GL Only) / Apple Watch 11 Series* (GX & SGX Only), Potongan Harga 100 SPK Pertama, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai & Mesin'
      },
      {
        name: 'GX AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 307.100.000', priceNett: 'Rp 299.100.000' },
        priceAAR: { priceOtr: 'Rp 315.700.000', priceNett: 'Rp 307.700.000' },
        bonus: 'Suzuki NEX* (GL Only) / Apple Watch 11 Series* (GX & SGX Only), Potongan Harga 100 SPK Pertama, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai & Mesin'
      },
      {
        name: 'SGX AT (One Tone)',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 333.200.000', priceNett: 'Rp 325.200.000' },
        priceAAR: { priceOtr: 'Rp 342.200.000', priceNett: 'Rp 334.200.000' },
        bonus: 'Suzuki NEX* (GL Only) / Apple Watch 11 Series* (GX & SGX Only), Potongan Harga 100 SPK Pertama, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai & Mesin'
      },
      {
        name: 'SGX AT (Two Tone)',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 335.200.000', priceNett: 'Rp 327.200.000' },
        priceAAR: { priceOtr: 'Rp 344.200.000', priceNett: 'Rp 336.200.000' },
        bonus: 'Suzuki NEX* (GL Only) / Apple Watch 11 Series* (GX & SGX Only), Potongan Harga 100 SPK Pertama, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai & Mesin'
      }
    ]
  },
  {
    id: 2,
    slug: 'suzuki-xl7-jogja',
    name: 'XL7 Hybrid',
    category: 'SUV',
    priceText: '253',
    description: 'Nikmati perjalanan bersama keluarga dengan Suzuki XL7 Hybrid, SUV 7-seater sejati yang menawarkan perpaduan sempurna antara ketangguhan dan kemewahan. Dengan ground clearance tinggi, kabin lapang, serta teknologi Smart Hybrid Vehicle by Suzuki (SHVS), XL7 memastikan setiap petualangan keluarga Anda terasa lebih premium dan efisien. Hubungi kami untuk info harga OTR Suzuki XL7 Jogja terbaru dan jadwalkan test drive Anda hari ini.',
    features: ['Captain Seat', 'Mesin 1.5L', 'Smart Hybrid'],
    advantages: ['Design premium', 'Electronic Stability Program (ESP)', 'Ground clearance 200mm'],
    image: '/images/xl7-1.jpg',
    gallery: ['/images/xl7-1.jpg', '/images/xl7-2.jpg'],
    brochureUrl: '/brochures/xl7.pdf',
    specifications: {
      engine: 'K15B, 1.462 cc, 4 Silinder',
      transmission: '4-Speed AT / 5-Speed MT',
      fuel: 'Bensin',
      power: '104.7 PS / 6.000 rpm',
      torque: '138 Nm / 4.400 rpm',
      seating: '7 Penumpang',
      dimensions: '4.450 x 1.775 x 1.710 mm'
    },
    variants: [
      {
        name: 'Zeta MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 274.000.000', priceNett: 'Rp 253.000.000' },
        priceAAR: { priceOtr: 'Rp 285.350.000', priceNett: 'Rp 264.350.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Zeta AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 285.000.000', priceNett: 'Rp 264.000.000' },
        priceAAR: { priceOtr: 'Rp 296.800.000', priceNett: 'Rp 275.800.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Beta MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 301.500.000', priceNett: 'Rp 280.500.000' },
        priceAAR: { priceOtr: 'Rp 313.700.000', priceNett: 'Rp 292.700.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Beta AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 312.500.000', priceNett: 'Rp 291.500.000' },
        priceAAR: { priceOtr: 'Rp 325.300.000', priceNett: 'Rp 304.300.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Alpha MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 312.500.000', priceNett: 'Rp 291.500.000' },
        priceAAR: { priceOtr: 'Rp 324.900.000', priceNett: 'Rp 303.900.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Alpha MT (2 Tone)',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 314.500.000', priceNett: 'Rp 293.500.000' },
        priceAAR: { priceOtr: 'Rp 326.900.000', priceNett: 'Rp 305.900.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Alpha AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 323.500.000', priceNett: 'Rp 302.500.000' },
        priceAAR: { priceOtr: 'Rp 336.500.000', priceNett: 'Rp 315.500.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Alpha AT (2 Tone)',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 325.500.000', priceNett: 'Rp 304.500.000' },
        priceAAR: { priceOtr: 'Rp 338.500.000', priceNett: 'Rp 317.500.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Alpha AT Kuro',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 327.500.000', priceNett: 'Rp 306.500.000' },
        priceAAR: { priceOtr: 'Rp 340.500.000', priceNett: 'Rp 319.500.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'Alpha AT Kuro (2 Tone)',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 329.500.000', priceNett: 'Rp 308.500.000' },
        priceAAR: { priceOtr: 'Rp 342.500.000', priceNett: 'Rp 321.500.000' },
        bonus: 'Suzuki Nex* + Free Keur*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      }
    ]
  },
  {
    id: 3,
    slug: 'suz-carry-pickup-jogja',
    name: 'New Carry Pick Up',
    category: 'Pickup',
    priceText: '147',
    description: 'Dikenal sebagai "Rajanya Pick Up" di Indonesia, New Carry Pick Up adalah mitra bisnis paling tangguh yang siap mendukung kesuksesan usaha Anda. Dibekali ruang kargo yang paling luas di kelasnya, sasis tebal, serta mesin K15C-C yang sangat irit, mobil ini menjamin keuntungan maksimal. Tersedia promo paket kredit mobil bak ringan untuk memajukan perniagaan Anda di wilayah Jogja dan sekitarnya.',
    features: ['Kapasitas Besar', 'AC & PS', 'Mesin 1.5L', 'Durable'],
    advantages: [
      'Mesin K15C-C 1.5L yang tangguh dan makin irit bahan bakar',
      'Kapasitas bak terbesar di kelasnya',
      'AC dan Power Steering untuk kenyamanan maksimal',
      'Radius putar terkecil 4.7m, sangat lincah',
      'Sudah terbukti keandalannya di lapangan'
    ],
    image: '/images/carry-1.jpg',
    gallery: ['/images/carry-1.jpg', '/images/carry-2.jpg', '/images/carry-3.jpg'],
    brochureUrl: '/brochures/carry.pdf',
    specifications: {
      engine: 'K15C-C, 1.462 cc, 4 Silinder',
      transmission: '5-Speed Manual',
      fuel: 'Bensin',
      power: '97 PS / 5.600 rpm',
      torque: '135 Nm / 4.400 rpm',
      seating: '3 Penumpang',
      dimensions: '4.195 x 1.660 x 1.860 mm'
    },
    variants: [
      {
        name: 'FD',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 181.250.000', priceNett: 'Rp 147.250.000' },
        priceAAR: { priceOtr: 'Rp 187.000.000', priceNett: 'Rp 153.000.000' },
        bonus: 'Suzuki Burgman* + Free Keur*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'WD',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 182.350.000', priceNett: 'Rp 148.350.000' },
        priceAAR: { priceOtr: 'Rp 188.100.000', priceNett: 'Rp 154.100.000' },
        bonus: 'Suzuki Burgman* + Free Keur*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'FD AC PS',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 189.250.000', priceNett: 'Rp 155.250.000' },
        priceAAR: { priceOtr: 'Rp 195.300.000', priceNett: 'Rp 161.300.000' },
        bonus: 'Suzuki Burgman* + Free Keur*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'WD AC PS',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 190.150.000', priceNett: 'Rp 156.150.000' },
        priceAAR: { priceOtr: 'Rp 196.200.000', priceNett: 'Rp 162.200.000' },
        bonus: 'Suzuki Burgman* + Free Keur*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      }
    ]
  },
  {
    id: 4,
    slug: 'suzuki-s-presso-jogja',
    name: 'S-Presso',
    category: 'City Car',
    priceText: '166',
    description: 'S-Presso adalah city car kompak dengan desain bold bergaya SUV yang dirancang khusus untuk menaklukkan padatnya jalanan kota. Menawarkan ground clearance tinggi, visibilitas berkendara yang sangat baik, dan opsi transmisi AGS yang praktis. Solusi sempurna bagi Anda yang mencari city car murah dan super hemat BBM. Konsultasikan kebutuhan Anda untuk mendapatkan promo kredit mobil Suzuki S-Presso dengan cicilan ringan bulan ini.',
    features: ['AGS Auto', 'Kompak & Lincah', 'Mesin Irit', 'Mudah Parkir'],
    advantages: [
      'Transmisi AGS (Auto Gear Shift) - mudah digunakan',
      'Desain SUV yang gagah dan modern',
      'Mesin 1.0L K10C Dual Jet lebih irit dan responsif',
      'Konsumsi BBM sangat efisien untuk dalam kota'
    ],
    image: '/images/spresso-1.jpg',
    gallery: ['/images/spresso-1.jpg', '/images/spresso-2.jpg', '/images/spresso-3.jpg'],
    brochureUrl: '/brochures/s-presso.pdf',
    specifications: {
      engine: 'K10C Dual Jet, 998 cc, 3 Silinder',
      transmission: '5-Speed Manual / AGS',
      fuel: 'Bensin',
      power: '66.6 PS / 5.500 rpm',
      torque: '89 Nm / 3.500 rpm',
      seating: '5 Penumpang',
      dimensions: '3.565 x 1.520 x 1.565 mm'
    },
    variants: [
      {
        name: 'MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '998 cc',
        priceAB: { priceOtr: 'Rp 182.500.000', priceNett: 'Rp 166.500.000' },
        priceAAR: { priceOtr: 'Rp 188.900.000', priceNett: 'Rp 172.900.000' },
        bonus: 'E-Money / MAP Rp 2.000.000*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'AGS',
        transmission: 'AGS (Auto Gear Shift)',
        fuel: 'Bensin',
        engine: '998 cc',
        priceAB: { priceOtr: 'Rp 193.800.000', priceNett: 'Rp 177.800.000' },
        priceAAR: { priceOtr: 'Rp 199.400.000', priceNett: 'Rp 183.400.000' },
        bonus: 'E-Money / MAP Rp 2.000.000*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      }
    ]
  },
  {
    id: 5,
    slug: 'suzuki-grand-vitara-jogja',
    name: 'Grand Vitara',
    category: 'SUV',
    priceText: '384',
    description: 'Kembalinya sang legenda, Suzuki Grand Vitara kini tampil lebih elegan dan futuristik dengan teknologi Smart Hybrid kelas atas. SUV premium ini dirancang khusus bagi Anda yang menghargai kenyamanan eksklusif, dilengkapi dengan Panoramic Sunroof dan fitur cerdas lainnya. Hubungi Dealer Resmi Suzuki Jogja sekarang untuk mengamankan promo diskon besar dan dapatkan penawaran kredit mobil mewah dengan bunga spesial.',
    features: ['Mesin Hybrid', 'Panoramic Sunroof', '360 Camera'],
    advantages: ['Smart Hybrid 1.5L', 'ADAS Suzuki Safety Sense', 'Ventilated Seats'],
    image: '/images/vitara-1.jpg',
    gallery: ['/images/vitara-1.jpg', '/images/vitara-2.jpg'],
    brochureUrl: '/brochures/grand-vitara.pdf',
    specifications: {
      engine: '1.5L K15C Dual Jet + SHVS',
      transmission: '6-Speed Automatic',
      fuel: 'Bensin',
      power: '103.06 PS / 6.000 rpm',
      torque: '136.8 Nm / 4.400 rpm',
      seating: '5 Penumpang',
      dimensions: '4.345 x 1.795 x 1.645 mm'
    },
    variants: [
      {
        name: 'MC GLX AT (One Tone)',
        transmission: '6-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.5L Hybrid',
        priceAB: { priceOtr: 'Rp 427.400.000', priceNett: 'Rp 384.400.000' },
        priceAAR: { priceOtr: 'Rp 445.000.000', priceNett: 'Rp 402.000.000' },
        bonus: 'Suzuki Burgman* + KF 3 M*, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'MC GLX AT (Two Tone)',
        transmission: '6-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.5L Hybrid',
        priceAB: { priceOtr: 'Rp 430.400.000', priceNett: 'Rp 387.400.000' },
        priceAAR: { priceOtr: 'Rp 448.000.000', priceNett: 'Rp 405.000.000' },
        bonus: 'Suzuki Burgman* + KF 3 M*, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      }
    ]
  },
  {
    id: 6,
    slug: 'suzuki-apv-jogja',
    name: 'APV',
    category: 'Commercial',
    priceText: '183',
    description: 'Suzuki APV adalah solusi kendaraan komersial multifungsi yang dirancang untuk memaksimalkan efisiensi operasional dan logistik bisnis Anda. Menawarkan kapasitas kabin kargo yang lega dan performa mesin legendaris G15A yang tangguh. Kami menyediakan program kredit mobil operasional khusus untuk pengusaha dengan harga niaga terbaik. Jual mobil niaga Suzuki dengan jaminan pelayanan after-sales terpercaya di Yogyakarta.',
    features: ['Blind Van', 'Kapasitas Besar', 'Mesin 1.5L', 'Multifungsi'],
    advantages: ['Kapasitas muatan sangat luas', 'Pintu geser untuk akses mudah', 'Mesin tangguh G15A'],
    image: '/images/apv-1.jpg',
    gallery: ['/images/apv-1.jpg', '/images/apv-2.jpg'],
    brochureUrl: '/brochures/apv.pdf',
    specifications: {
      engine: 'G15A, 1.492 cc, 4 Silinder',
      transmission: '5-Speed Manual',
      fuel: 'Bensin',
      power: '92.4 PS / 6.000 rpm',
      torque: '126 Nm / 3.000 rpm',
      seating: 'Cargo / 8 Penumpang',
      dimensions: '4.155 x 1.655 x 1.865 mm'
    },
    variants: [
      {
        name: 'Blind Van',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc',
        priceAB: { priceOtr: 'Rp 186.000.000', priceNett: 'Rp 183.000.000' },
        priceAAR: { priceOtr: 'Rp 192.000.000', priceNett: 'Rp 189.000.000' },
        bonus: 'Logam Mulia*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'GE MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc',
        priceAB: { priceOtr: 'Rp 227.500.000', priceNett: 'Rp 224.500.000' },
        priceAAR: { priceOtr: 'Rp 235.000.000', priceNett: 'Rp 232.000.000' },
        bonus: 'Logam Mulia*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'GL MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc',
        priceAB: { priceOtr: 'Rp 235.500.000', priceNett: 'Rp 232.500.000' },
        priceAAR: { priceOtr: 'Rp 243.000.000', priceNett: 'Rp 240.000.000' },
        bonus: 'Logam Mulia*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'GX MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc',
        priceAB: { priceOtr: 'Rp 249.500.000', priceNett: 'Rp 246.500.000' },
        priceAAR: { priceOtr: 'Rp 257.000.000', priceNett: 'Rp 254.000.000' },
        bonus: 'Logam Mulia*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'SGX MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc',
        priceAB: { priceOtr: 'Rp 253.000.000', priceNett: 'Rp 250.000.000' },
        priceAAR: { priceOtr: 'Rp 260.500.000', priceNett: 'Rp 257.500.000' },
        bonus: 'Logam Mulia*, Gratis Ganti Oli/Filter/Jasa s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      }
    ]
  },
  {
    id: 7,
    slug: 'suzuki-jimny-jogja',
    name: 'Jimny',
    category: 'SUV Off-Road',
    priceText: '467',
    description: 'Ikon off-road sejati yang tak lekang oleh waktu. Suzuki Jimny diciptakan untuk para petualang dengan sistem penggerak 4x4 ALLGRIP PRO dan sasis ladder frame yang solid. Desainnya yang timeless menjadikannya simbol gaya hidup kebebasan berkendara Anda. Hubungi tim sales kami untuk informasi ketersediaan unit, proses indent Suzuki Jimny yang cepat, serta daftar harga On The Road (OTR) terbaru untuk wilayah Jateng & DIY.',
    features: ['4x4 Genuine', 'Ladder Frame', 'Rigid Axle'],
    advantages: ['Part-time 4WD (ALLGRIP PRO)', 'Approach angle 37°', 'Desain timeless'],
    image: '/images/jimny-1.jpg',
    gallery: ['/images/jimny-1.jpg', '/images/jimny-2.jpg'],
    brochureUrl: '/brochures/jimny.pdf',
    specifications: {
      engine: 'K15B, 1.462 cc, 4 Silinder',
      transmission: '4-Speed AT / 5-Speed MT',
      fuel: 'Bensin',
      power: '102 PS / 6.000 rpm',
      torque: '130 Nm / 4.000 rpm',
      seating: '4 Penumpang',
      dimensions: '3.625 x 1.645 x 1.720 mm'
    },
    variants: [
      {
        name: '3 Door One Tone MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 477.400.000', priceNett: 'Rp 467.400.000' },
        priceAAR: { priceOtr: 'Rp 496.200.000', priceNett: 'Rp 486.200.000' },
        bonus: 'Free KF V-Kool (8 Jt) / iPad Air 11 (10 Jt) / Voucher MAP (20 Jt)'
      },
      {
        name: '3 Door One Tone AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 491.100.000', priceNett: 'Rp 481.100.000' },
        priceAAR: { priceOtr: 'Rp 510.400.000', priceNett: 'Rp 500.400.000' },
        bonus: 'Free KF V-Kool (8 Jt) / iPad Air 11 (10 Jt) / Voucher MAP (20 Jt)'
      },
      {
        name: '3 Door Two Tone MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 480.400.000', priceNett: 'Rp 470.400.000' },
        priceAAR: { priceOtr: 'Rp 499.200.000', priceNett: 'Rp 489.200.000' },
        bonus: 'Free KF V-Kool (8 Jt) / iPad Air 11 (10 Jt) / Voucher MAP (20 Jt)'
      },
      {
        name: '3 Door Two Tone AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 494.100.000', priceNett: 'Rp 484.100.000' },
        priceAAR: { priceOtr: 'Rp 513.500.000', priceNett: 'Rp 503.500.000' },
        bonus: 'Free KF V-Kool (8 Jt) / iPad Air 11 (10 Jt) / Voucher MAP (20 Jt)'
      },
      {
        name: '5 Door One Tone MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 491.800.000', priceNett: 'Rp 481.800.000' },
        priceAAR: { priceOtr: 'Rp 511.900.000', priceNett: 'Rp 501.900.000' },
        bonus: 'Pilihan: Free KF V-Kool (8 Juta) / iPad Air 11\" (10 Juta) / Voucher MAP (20 Juta)'
      },
      {
        name: '5 Door One Tone AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 505.500.000', priceNett: 'Rp 495.500.000' },
        priceAAR: { priceOtr: 'Rp 526.300.000', priceNett: 'Rp 516.300.000' },
        bonus: 'Pilihan: Free KF V-Kool (8 Juta) / iPad Air 11\" (10 Juta) / Voucher MAP (20 Juta)'
      },
      {
        name: '5 Door Two Tone MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 494.800.000', priceNett: 'Rp 484.800.000' },
        priceAAR: { priceOtr: 'Rp 514.900.000', priceNett: 'Rp 504.900.000' },
        bonus: 'Pilihan: Free KF V-Kool (8 Juta) / iPad Air 11\" (10 Juta) / Voucher MAP (20 Juta)'
      },
      {
        name: '5 Door Two Tone AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 508.500.000', priceNett: 'Rp 498.500.000' },
        priceAAR: { priceOtr: 'Rp 529.300.000', priceNett: 'Rp 519.300.000' },
        bonus: 'Pilihan: Free KF V-Kool (8 Juta) / iPad Air 11\" (10 Juta) / Voucher MAP (20 Juta)'
      }
    ]
  },
  {
    id: 8,
    slug: 'suzuki-ertiga-jogja',
    name: 'Ertiga',
    category: 'MPV',
    priceText: '242',
    description: 'Suzuki All New Ertiga adalah MPV keluarga idaman yang selalu mengutamakan kenyamanan di setiap perjalanan. Menawarkan ruang kabin yang mewah, konfigurasi 7 tempat duduk yang lapang, serta efisiensi bahan bakar luar biasa berkat teknologi Smart Hybrid. Wujudkan impian memiliki mobil keluarga tangguh dengan penawaran kredit mobil MPV cicilan ringan dan pilihan DP termurah dari Dealer Resmi Suzuki Jogja.',
    features: ['7 Kursi Nyaman', 'Mesin 1.5L', 'Smart Hybrid'],
    advantages: ['Kabin luas', 'Smart Hybrid Technology', 'Suspensi nyaman'],
    image: '/images/ertiga-1.jpg',
    gallery: ['/images/ertiga-1.jpg', '/images/ertiga-2.jpg'],
    brochureUrl: '/brochures/ertiga.pdf',
    specifications: {
      engine: 'K15B, 1.462 cc, 4 Silinder',
      transmission: '4-Speed AT / 5-Speed MT',
      fuel: 'Bensin',
      power: '104.7 PS / 6.000 rpm',
      torque: '138 Nm / 4.400 rpm',
      seating: '7 Penumpang',
      dimensions: '4.395 x 1.735 x 1.690 mm'
    },
    variants: [
      {
        name: 'GL MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 268.150.000', priceNett: 'Rp 242.150.000' },
        priceAAR: { priceOtr: 'Rp 279.000.000', priceNett: 'Rp 253.000.000' },
        bonus: 'Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'GL AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 279.200.000', priceNett: 'Rp 253.200.000' },
        priceAAR: { priceOtr: 'Rp 290.700.000', priceNett: 'Rp 264.700.000' },
        bonus: 'Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'GX MT (Hybrid)',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 283.250.000', priceNett: 'Rp 257.250.000' },
        priceAAR: { priceOtr: 'Rp 293.200.000', priceNett: 'Rp 267.200.000' },
        bonus: 'Logam Mulia*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      },
      {
        name: 'GX AT (Hybrid)',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 294.400.000', priceNett: 'Rp 268.400.000' },
        priceAAR: { priceOtr: 'Rp 304.800.000', priceNett: 'Rp 278.800.000' },
        bonus: 'Logam Mulia*, Free Service/Oli/Sparepart s/d 50.000KM/30 Bln, Garansi Baterai Lithium 8 Thn/160.000Km, Garansi Mesin 3 Thn/100.000KM'
      }
    ]
  }
];

export function getProductById(id: number): ProductType | undefined {
  return products.find(product => product.id === id);
}

export function getProductBySlug(slug: string): ProductType | undefined {
  return products.find(product => product.slug === slug);
}
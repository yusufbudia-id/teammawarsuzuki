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
    priceText: '250',
    description: 'Suzuki Fronx hadir sebagai SUV crossover yang memadukan desain tangguh, gaya modern, dan performa lincah untuk jalanan perkotaan. Dilengkapi dengan teknologi Mild Hybrid yang efisien dan fitur keselamatan terkini, Fronx adalah pilihan tepat bagi Anda yang berjiwa muda dan menginginkan kendaraan stylish sekaligus irit bahan bakar untuk menemani aktivitas dinamis sehari-hari.',
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
        bonus: 'Promo + free service + garansi'
      },
      {
        name: 'GL AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 277.300.000', priceNett: 'Rp 263.300.000' },
        priceAAR: { priceOtr: 'Rp 285.400.000', priceNett: 'Rp 271.400.000' },
        bonus: 'Promo + free service + garansi'
      },
      {
        name: 'GX MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 288.700.000', priceNett: 'Rp 271.700.000' },
        priceAAR: { priceOtr: 'Rp 297.000.000', priceNett: 'Rp 280.000.000' },
        bonus: 'Promo + free service + garansi'
      },
      {
        name: 'GX AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 307.100.000', priceNett: 'Rp 290.100.000' },
        priceAAR: { priceOtr: 'Rp 315.700.000', priceNett: 'Rp 298.700.000' },
        bonus: 'Promo + free service + garansi'
      },
      {
        name: 'SGX AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 333.200.000', priceNett: 'Rp 316.200.000' },
        priceAAR: { priceOtr: 'Rp 342.200.000', priceNett: 'Rp 325.200.000' },
        bonus: 'Promo + free service + garansi'
      },
      {
        name: 'SGX AT Two Tone',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 335.200.000', priceNett: 'Rp 318.200.000' },
        priceAAR: { priceOtr: 'Rp 344.200.000', priceNett: 'Rp 327.200.000' },
        bonus: 'Promo + free service + garansi'
      }
    ]
  },
  {
    id: 2,
    slug: 'suzuki-xl7-jogja',
    name: 'XL7 Hybrid',
    category: 'SUV',
    priceText: '240',
    description: 'Nikmati perjalanan bersama keluarga dengan Suzuki XL7 Hybrid, SUV 7-seater sejati yang menawarkan perpaduan sempurna antara ketangguhan dan kemewahan. Dengan ground clearance tinggi, kabin lapang, serta teknologi Smart Hybrid Vehicle by Suzuki (SHVS), XL7 memastikan setiap petualangan keluarga Anda terasa lebih premium, efisien, dan ramah lingkungan di berbagai medan.',
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
        priceAB: { priceOtr: 'Rp 272.350.000', priceNett: 'Rp 246.350.000' },
        priceAAR: { priceOtr: 'Rp 283.700.000', priceNett: 'Rp 257.700.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      },
      {
        name: 'Zeta AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 283.500.000', priceNett: 'Rp 257.500.000' },
        priceAAR: { priceOtr: 'Rp 295.300.000', priceNett: 'Rp 269.300.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      },
      {
        name: 'Beta MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 299.900.000', priceNett: 'Rp 273.900.000' },
        priceAAR: { priceOtr: 'Rp 312.100.000', priceNett: 'Rp 286.100.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      },
      {
        name: 'Beta AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 311.100.000', priceNett: 'Rp 285.100.000' },
        priceAAR: { priceOtr: 'Rp 323.900.000', priceNett: 'Rp 297.900.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      },
      {
        name: 'Alpha MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 313.100.000', priceNett: 'Rp 287.100.000' },
        priceAAR: { priceOtr: 'Rp 323.300.000', priceNett: 'Rp 297.300.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      },
      {
        name: 'Alpha AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 322.200.000', priceNett: 'Rp 296.200.000' },
        priceAAR: { priceOtr: 'Rp 335.000.000', priceNett: 'Rp 309.000.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      },
      {
        name: 'Alpha AT Two Tone',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 324.200.000', priceNett: 'Rp 298.200.000' },
        priceAAR: { priceOtr: 'Rp 337.000.000', priceNett: 'Rp 311.000.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      },
      {
        name: 'Alpha AT Kuro',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 326.200.000', priceNett: 'Rp 300.200.000' },
        priceAAR: { priceOtr: 'Rp 339.000.000', priceNett: 'Rp 313.000.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      },
      {
        name: 'Alpha AT Kuro Two Tone',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 328.200.000', priceNett: 'Rp 302.200.000' },
        priceAAR: { priceOtr: 'Rp 341.000.000', priceNett: 'Rp 315.000.000' },
        bonus: 'iPhone 17 Pro Max + free service + garansi'
      }
    ]
  },
  {
    id: 3,
    slug: 'suzuki-carry-pickup-jogja',
    name: 'New Carry Pick Up',
    category: 'Pickup',
    priceText: '140',
    description: 'Dikenal sebagai "Rajanya Pick Up" di Indonesia, New Carry Pick Up adalah mitra bisnis paling tangguh yang siap mendukung kesuksesan usaha Anda. Dibekali ruang kargo yang paling luas di kelasnya, sasis tebal yang tangguh, serta mesin K15C-C yang sangat irit, mobil ini menjamin biaya perawatan yang hemat sekaligus keuntungan maksimal untuk segala jenis perniagaan.',
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
        bonus: 'Logam mulia + free keur + free service + garansi mesin'
      },
      {
        name: 'WD',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 182.350.000', priceNett: 'Rp 148.350.000' },
        priceAAR: { priceOtr: 'Rp 188.100.000', priceNett: 'Rp 154.100.000' },
        bonus: 'Logam mulia + free keur + free service + garansi mesin'
      },
      {
        name: 'FD AC PS',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 189.250.000', priceNett: 'Rp 155.250.000' },
        priceAAR: { priceOtr: 'Rp 195.300.000', priceNett: 'Rp 161.300.000' },
        bonus: 'Logam mulia + free keur + free service + garansi mesin'
      },
      {
        name: 'WD AC PS',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 190.150.000', priceNett: 'Rp 156.150.000' },
        priceAAR: { priceOtr: 'Rp 196.200.000', priceNett: 'Rp 162.200.000' },
        bonus: 'Logam mulia + free keur + free service + garansi mesin'
      }
    ]
  },
  {
    id: 4,
    slug: 'suzuki-s-presso-jogja',
    name: 'S-Presso',
    category: 'City Car',
    priceText: '160',
    description: 'S-Presso adalah city car kompak dengan desain bold bergaya SUV yang dirancang khusus untuk menaklukkan padatnya jalanan kota. Menawarkan ground clearance tinggi, visibilitas berkendara yang sangat baik, dan opsi transmisi AGS yang praktis, mobil ini sangat gesit dan mudah diparkir. Solusi sempurna bagi Anda yang mencari kendaraan harian yang fun to drive dan super hemat BBM.',
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
        priceAB: { priceOtr: 'Rp 182.250.000', priceNett: 'Rp 166.250.000' },
        priceAAR: { priceOtr: 'Rp 188.900.000', priceNett: 'Rp 172.900.000' },
        bonus: 'Suzuki NEX + kaca film + garansi mesin'
      },
      {
        name: 'AGS',
        transmission: 'AGS (Auto Gear Shift)',
        fuel: 'Bensin',
        engine: '998 cc',
        priceAB: { priceOtr: 'Rp 192.250.000', priceNett: 'Rp 176.250.000' },
        priceAAR: { priceOtr: 'Rp 199.400.000', priceNett: 'Rp 183.400.000' },
        bonus: 'Suzuki NEX + kaca film + garansi mesin'
      }
    ]
  },
  {
    id: 5,
    slug: 'suzuki-grand-vitara-jogja',
    name: 'Grand Vitara',
    category: 'SUV',
    priceText: '390',
    description: 'Kembalinya sang legenda, Suzuki Grand Vitara kini tampil lebih elegan dan futuristik dengan teknologi Smart Hybrid kelas atas. Kendaraan flagship SUV ini dirancang khusus bagi Anda yang menghargai kenyamanan premium, dilengkapi dengan Panoramic Sunroof, kamera 360 derajat, ventilated seats, dan fitur cerdas lainnya untuk memberikan pengalaman berkendara yang eksklusif dan penuh kebanggaan.',
    features: ['Mesin Hybrid', 'Panoramic Sunroof', '360 Camera'],
    advantages: ['Smart Hybrid 1.5L', 'ADAS Suzuki Safety Sense', 'Ventilated Seats'],
    image: '/images/vitara-1.jpg',
    gallery: ['/images/vitara-1.jpg', '/images/vitara-2.jpg'],
    brochureUrl: '/brochures/grand-vitara.pdf',
    specifications: {
      engine: '1.5L K15C Dual Jet + SHVS',
      transmission: '6-Speed Automatic / 5-Speed Manual',
      fuel: 'Bensin',
      power: '103.06 PS / 6.000 rpm',
      torque: '136.8 Nm / 4.400 rpm',
      seating: '5 Penumpang',
      dimensions: '4.345 x 1.795 x 1.645 mm'
    },
    variants: [
      {
        name: 'MC GLX MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.5L Hybrid',
        priceAB: { priceOtr: 'Rp 427.400.000', priceNett: 'Rp 399.400.000' },
        priceAAR: { priceOtr: 'Rp 445.000.000', priceNett: 'Rp 417.000.000' },
        bonus: 'iPhone 17 Pro Max + garansi baterai + garansi mesin'
      },
      {
        name: 'MC GLX AT Two Tone',
        transmission: '6-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.5L Hybrid',
        priceAB: { priceOtr: 'Rp 430.400.000', priceNett: 'Rp 402.400.000' },
        priceAAR: { priceOtr: 'Rp 448.000.000', priceNett: 'Rp 420.000.000' },
        bonus: 'iPhone 17 Pro Max + garansi baterai + garansi mesin'
      }
    ]
  },
  {
    id: 6,
    slug: 'suzuki-apv-jogja',
    name: 'APV',
    category: 'Commercial',
    priceText: '180',
    description: 'Suzuki APV Blind Van adalah solusi kendaraan komersial multifungsi yang dirancang untuk memaksimalkan efisiensi operasional dan logistik bisnis Anda. Menawarkan kapasitas kabin kargo yang sangat lega dan aman, akses bongkar muat yang praktis, serta performa mesin legendaris G15A yang sudah teruji ketangguhannya melibas berbagai rute perniagaan dengan muatan penuh.',
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
      seating: 'Cargo',
      dimensions: '4.155 x 1.655 x 1.865 mm'
    },
    variants: [
      {
        name: 'Blind Van',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc',
        priceAB: { priceOtr: 'Rp 184.500.000', priceNett: 'Rp 181.500.000' },
        priceAAR: { priceOtr: 'Rp 191.900.000', priceNett: 'Rp 188.900.000' },
        bonus: 'Free service + garansi mesin'
      }
    ]
  },
  {
    id: 7,
    slug: 'suzuki-jimny-jogja',
    name: 'Jimny',
    category: 'SUV Off-Road',
    priceText: '470',
    description: 'Ikon off-road sejati yang tak lekang oleh waktu. Suzuki Jimny diciptakan untuk para petualang dengan sistem penggerak 4x4 ALLGRIP PRO, sasis ladder frame yang solid, dan suspensi rigid axle yang siap menaklukkan rintangan alam terekstrem. Desainnya yang timeless menjadikannya bukan sekadar mobil fungsional, melainkan juga simbol gaya hidup dan kebebasan berkendara Anda.',
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
        priceAB: { priceOtr: 'Rp 477.400.000', priceNett: 'Rp 477.400.000' },
        priceAAR: { priceOtr: 'Rp 496.200.000', priceNett: 'Rp 496.200.000' },
        bonus: 'Free KF V-Kool'
      },
      {
        name: '3 Door One Tone AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 491.100.000', priceNett: 'Rp 491.100.000' },
        priceAAR: { priceOtr: 'Rp 510.400.000', priceNett: 'Rp 510.400.000' },
        bonus: 'iPad Air / hadiah setara'
      },
      {
        name: '3 Door Two Tone AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp -', priceNett: 'Rp -' },
        priceAAR: { priceOtr: 'Rp 499.200.000', priceNett: 'Rp 499.200.000' },
        bonus: 'iPad Air / hadiah setara'
      },
      {
        name: '5 Door One Tone MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 494.100.000', priceNett: 'Rp 494.100.000' },
        priceAAR: { priceOtr: 'Rp 511.900.000', priceNett: 'Rp 511.900.000' },
        bonus: 'Free KF V-Kool'
      },
      {
        name: '5 Door One Tone AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 505.500.000', priceNett: 'Rp 505.500.000' },
        priceAAR: { priceOtr: 'Rp 526.300.000', priceNett: 'Rp 526.300.000' },
        bonus: 'iPad Air / hadiah setara'
      },
      {
        name: '5 Door Two Tone MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp -', priceNett: 'Rp -' },
        priceAAR: { priceOtr: 'Rp 514.900.000', priceNett: 'Rp 514.900.000' },
        bonus: 'Free KF V-Kool'
      },
      {
        name: '5 Door Two Tone AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 508.500.000', priceNett: 'Rp 508.500.000' },
        priceAAR: { priceOtr: 'Rp 529.300.000', priceNett: 'Rp 529.300.000' },
        bonus: 'iPad Air / hadiah setara'
      }
    ]
  },
  {
    id: 8,
    slug: 'suzuki-ertiga-jogja',
    name: 'Ertiga',
    category: 'MPV',
    priceText: '240',
    description: 'Suzuki All New Ertiga adalah MPV keluarga idaman yang selalu mengutamakan kenyamanan di setiap perjalanan. Menawarkan ruang kabin yang mewah dan senyap, konfigurasi 7 tempat duduk yang lapang, serta efisiensi bahan bakar luar biasa berkat teknologi Smart Hybrid terkini. Pilihan yang paling cerdas dan value-for-money untuk menemani setiap momen berharga bersama keluarga.',
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
        bonus: 'iPhone 17 Pro Max + KF + free service + garansi'
      },
      {
        name: 'GL AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 279.200.000', priceNett: 'Rp 253.200.000' },
        priceAAR: { priceOtr: 'Rp 290.700.000', priceNett: 'Rp 264.700.000' },
        bonus: 'iPhone 17 Pro Max + KF + free service + garansi'
      },
      {
        name: 'GX MT',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 283.250.000', priceNett: 'Rp 257.250.000' },
        priceAAR: { priceOtr: 'Rp 293.200.000', priceNett: 'Rp 267.200.000' },
        bonus: 'iPhone 17 Pro Max + KF + free service + garansi'
      },
      {
        name: 'GX AT',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc',
        priceAB: { priceOtr: 'Rp 294.400.000', priceNett: 'Rp 268.400.000' },
        priceAAR: { priceOtr: 'Rp 304.800.000', priceNett: 'Rp 278.800.000' },
        bonus: 'iPhone 17 Pro Max + KF + free service + garansi'
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
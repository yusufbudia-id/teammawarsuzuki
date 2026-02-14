export interface ProductType {
  id: number;
  name: string;
  category: string;
  priceText: string;
  description: string;
  features: string[];
  advantages: string[];
  image: string;
  gallery: string[];
  brochureUrl?: string;
  variants: Array<{
    name: string;
    priceOtr: string;
    priceNett: string;
    transmission: string;
    fuel: string;
    engine: string;
  }>;
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
    name: 'New Carry Pick Up',
    category: 'Pickup',
    priceText: '140',
    description: 'Pickup legendaris dengan AC dan Power Steering, tangguh dan irit untuk bisnis.',
    features: ['Kapasitas Besar', 'AC & PS', 'Mesin 1.5L', 'Durable'],
    advantages: [
      'Mesin 1.5L yang tangguh dan irit bahan bakar',
      'Kapasitas bak terbesar di kelasnya',
      'AC dan Power Steering untuk kenyamanan maksimal',
      'Radius putar terkecil 4.7m, sangat lincah',
      'Double Din Audio dengan Bluetooth dan USB',
      'Suspensi kokoh untuk muatan berat',
      'Sudah terbukti keandalannya di lapangan'
    ],
    image: '/images/carry-1.jpg',
    gallery: [
      '/images/carry-1.jpg',
      '/images/carry-2.jpg',
      '/images/carry-3.jpg'
    ],
    brochureUrl: '/brochures/carry.pdf',
    specifications: {
      engine: 'G15A, 1.492 cc, 4 Silinder',
      transmission: '5-Speed Manual',
      fuel: 'Bensin',
      power: '78.8 PS / 5.500 rpm',
      torque: '135 Nm / 4.500 rpm',
      seating: '3 Penumpang',
      dimensions: '4.195 x 1.660 x 1.860 mm'
    },
    variants: [
      {
        name: 'FD (Flat Deck)',
        priceOtr: 'Rp 181.250.000',
        priceNett: 'Rp 149.250.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc'
      },
      {
        name: 'WD (Wide Deck)',
        priceOtr: 'Rp 182.350.000',
        priceNett: 'Rp 150.350.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc'
      },
      {
        name: 'FD AC PS',
        priceOtr: 'Rp 189.250.000',
        priceNett: 'Rp 155.250.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc'
      },
      {
        name: 'WD AC PS',
        priceOtr: 'Rp 190.150.000',
        priceNett: 'Rp 156.150.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.492 cc'
      }
    ]
  },
  {
    id: 2,
    name: 'S-Presso',
    category: 'City Car',
    priceText: '160',
    description: 'City car kompak dengan transmisi otomatis AGS, praktis dan irit untuk mobilitas urban.',
    features: ['AGS Auto', 'Kompak & Lincah', 'Mesin Irit', 'Mudah Parkir'],
    advantages: [
      'Transmisi AGS (Auto Gear Shift) - mudah digunakan',
      'Desain SUV yang gagah dan modern',
      'Ground clearance tinggi 180mm',
      'Mesin 1.0L K10B irit dan bertenaga',
      'Audio sistem dengan steering switch',
      'Radius putar kecil, mudah parkir',
      'Konsumsi BBM hingga 21 km/liter'
    ],
    image: '/images/spresso-1.jpg',
    gallery: [
      '/images/spresso-1.jpg',
      '/images/spresso-2.jpg',
      '/images/spresso-3.jpg'
    ],
    brochureUrl: '/brochures/s-presso.pdf',
    specifications: {
      engine: 'K10B, 998 cc, 3 Silinder',
      transmission: '5-Speed Manual / AGS',
      fuel: 'Bensin',
      power: '67 PS / 6.000 rpm',
      torque: '90 Nm / 3.500 rpm',
      seating: '5 Penumpang',
      dimensions: '3.665 x 1.520 x 1.550 mm'
    },
    variants: [
      {
        name: 'MT',
        priceOtr: 'Rp 182.250.000',
        priceNett: 'Rp 166.250.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '998 cc'
      },
      {
        name: 'AGS',
        priceOtr: 'Rp 192.250.000',
        priceNett: 'Rp 176.250.000',
        transmission: 'AGS (Auto Gear Shift)',
        fuel: 'Bensin',
        engine: '998 cc'
      }
    ]
  },
  {
    id: 3,
    name: 'APV',
    category: 'Commercial',
    priceText: '180',
    description: 'Blind van multifungsi untuk bisnis dan logistik, luas dan irit bahan bakar.',
    features: ['Blind Van', 'Kapasitas Besar', 'Mesin 1.6L', 'Multifungsi'],
    advantages: [
      'Kapasitas muatan sangat luas',
      'Pintu geser untuk akses mudah',
      'Mesin 1.6L G15A yang terpercaya',
      'Suspensi nyaman untuk muatan',
      'Double Din Audio',
      'AC yang dingin',
      'Sudah terbukti di bisnis angkutan'
    ],
    image: '/images/apv-1.jpg',
    gallery: [
      '/images/apv-1.jpg',
      '/images/apv-2.jpg',
      '/images/apv-3.jpg'
    ],
    brochureUrl: '/brochures/apv.pdf',
    specifications: {
      engine: 'G15A, 1.590 cc, 4 Silinder',
      transmission: '5-Speed Manual',
      fuel: 'Bensin',
      power: '92 PS / 5.500 rpm',
      torque: '126 Nm / 4.500 rpm',
      seating: 'Cargo',
      dimensions: '4.390 x 1.650 x 1.855 mm'
    },
    variants: [
      {
        name: 'Blind Van',
        priceOtr: 'Rp 184.500.000',
        priceNett: 'Rp 181.500.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.590 cc'
      }
    ]
  },
  {
    id: 4,
    name: 'Ertiga',
    category: 'MPV',
    priceText: '240',
    description: 'MPV keluarga yang legendaris dengan kenyamanan dan kualitas terbaik.',
    features: ['7 Kursi Nyaman', 'Mesin 1.5L', 'Fitur Safety Lengkap'],
    advantages: [
      'Kabin luas untuk 7 penumpang',
      'Mesin 1.5L K15B silent chain',
      'Fitur safety lengkap (SRS airbag, ABS, EBD)',
      'AC Dual dengan blower 3rd row',
      'Audio Touch Screen',
      'Smart Hybrid Technology',
      'Suspension yang nyaman untuk keluarga'
    ],
    image: '/images/ertiga-1.jpg',
    gallery: [
      '/images/ertiga-1.jpg',
      '/images/ertiga-2.jpg',
      '/images/ertiga-3.jpg'
    ],
    brochureUrl: '/brochures/ertiga.pdf',
    specifications: {
      engine: 'K15B, 1.462 cc, 4 Silinder',
      transmission: '4-Speed AT / 5-Speed MT',
      fuel: 'Bensin',
      power: '103 PS / 6.000 rpm',
      torque: '138 Nm / 4.400 rpm',
      seating: '7 Penumpang',
      dimensions: '4.395 x 1.735 x 1.690 mm'
    },
    variants: [
      {
        name: 'GL MT',
        priceOtr: 'Rp 268.150.000',
        priceNett: 'Rp 242.150.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'GL AT',
        priceOtr: 'Rp 279.200.000',
        priceNett: 'Rp 253.200.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'GX MT',
        priceOtr: 'Rp 283.250.000',
        priceNett: 'Rp 257.250.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'GX AT',
        priceOtr: 'Rp 294.400.000',
        priceNett: 'Rp 268.400.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      }
    ]
  },
  {
    id: 5,
    name: 'Fronx',
    category: 'SUV',
    priceText: '250',
    description: 'SUV tangguh dengan desain modern, mesin bertenaga, dan fitur safety lengkap.',
    features: ['Mesin 1.5L', '4x4 Drive', 'Safety Sense', 'Desain Modern'],
    advantages: [
      'Desain SUV crossover yang modern',
      'Mesin 1.5L K15C dengan mild hybrid',
      'Sunroof panoramic',
      'HUD (Head-Up Display)',
      '360-degree camera',
      'Wireless charger',
      'Fitur safety Suzuki Safety Sense'
    ],
    image: '/images/fronx-1.jpg',
    gallery: [
      '/images/fronx-1.jpg',
      '/images/fronx-2.jpg',
      '/images/fronx-3.jpg'
    ],
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
        priceOtr: 'Rp 266.300.000',
        priceNett: 'Rp 252.300.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'GL AT',
        priceOtr: 'Rp 277.300.000',
        priceNett: 'Rp 263.300.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'GX MT',
        priceOtr: 'Rp 286.700.000',
        priceNett: 'Rp 271.700.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'GX AT',
        priceOtr: 'Rp 307.100.000',
        priceNett: 'Rp 290.100.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'SGX AT (Non Tone)',
        priceOtr: 'Rp 333.200.000',
        priceNett: 'Rp 316.200.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'SGX AT (Two Tone)',
        priceOtr: 'Rp 335.200.000',
        priceNett: 'Rp 318.200.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      }
    ]
  },
  {
    id: 6,
    name: 'XL7',
    category: 'SUV',
    priceText: '240',
    description: 'SUV premium keluarga dengan tampilan mewah, fitur lengkap dan kenyamanan maksimal.',
    features: ['Tampilan Premium', 'Mesin 1.5L', 'Fitur Safety Lengkap', 'Spacious'],
    advantages: [
      'Desain SUV yang gagah dan premium',
      'Captain seat untuk kenyamanan ekstra',
      'Mesin 1.5L bertenaga',
      'Electronic Stability Program (ESP)',
      'Hill Hold Control',
      'Auto Climate Control',
      'Ground clearance tinggi 200mm'
    ],
    image: '/images/xl7-1.jpg',
    gallery: [
      '/images/xl7-1.jpg',
      '/images/xl7-2.jpg',
      '/images/xl7-3.jpg'
    ],
    brochureUrl: '/brochures/xl7.pdf',
    specifications: {
      engine: 'K15B, 1.462 cc, 4 Silinder',
      transmission: '4-Speed AT / 5-Speed MT',
      fuel: 'Bensin',
      power: '103 PS / 6.000 rpm',
      torque: '138 Nm / 4.400 rpm',
      seating: '7 Penumpang',
      dimensions: '4.450 x 1.775 x 1.710 mm'
    },
    variants: [
      {
        name: 'ZETA MT',
        priceOtr: 'Rp 272.350.000',
        priceNett: 'Rp 249.350.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'ZETA AT',
        priceOtr: 'Rp 283.500.000',
        priceNett: 'Rp 260.500.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'BETA MT',
        priceOtr: 'Rp 299.000.000',
        priceNett: 'Rp 276.000.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'BETA AT',
        priceOtr: 'Rp 311.100.000',
        priceNett: 'Rp 288.100.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'ALPHA MT',
        priceOtr: 'Rp 311.100.000',
        priceNett: 'Rp 288.100.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'ALPHA AT',
        priceOtr: 'Rp 313.100.000',
        priceNett: 'Rp 290.100.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'ALPHA AT Two Tone',
        priceOtr: 'Rp 322.200.000',
        priceNett: 'Rp 297.200.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      },
      {
        name: 'ALPHA AT Kuro Two Tone',
        priceOtr: 'Rp 328.200.000',
        priceNett: 'Rp 303.200.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.462 cc'
      }
    ]
  },
  {
    id: 7,
    name: 'Grand Vitara',
    category: 'SUV',
    priceText: '390',
    description: 'SUV premium dengan mesin hybrid bertenaga, fitur mewah dan kenyamanan tingkat tinggi.',
    features: ['Mesin Hybrid', 'AllGrip 4WD', 'Fitur Premium', 'Kenyaman Tinggi'],
    advantages: [
      'Mesin 2.0L Smart Hybrid',
      'AllGrip 4WD System',
      '9-inch Smart Play Display',
      '360-degree camera',
      'Panoramic sunroof',
      'Ventilated front seats',
      'ADAS dengan Suzuki Safety Sense 360'
    ],
    image: '/images/vitara-1.jpg',
    gallery: [
      '/images/vitara-1.jpg',
      '/images/vitara-2.jpg',
      '/images/vitara-3.jpg'
    ],
    brochureUrl: '/brochures/grand-vitara.pdf',
    specifications: {
      engine: '2.0L K15C Dual Jet Hybrid',
      transmission: '6-Speed Automatic',
      fuel: 'Bensin',
      power: '140 PS / 6.000 rpm',
      torque: '200 Nm / 4.400 rpm',
      seating: '5 Penumpang',
      dimensions: '4.345 x 1.795 x 1.630 mm'
    },
    variants: [
      {
        name: 'MC GLX AT',
        priceOtr: 'Rp 427.400.000',
        priceNett: 'Rp 399.400.000',
        transmission: '6-Speed Automatic',
        fuel: 'Bensin',
        engine: '2.0L Hybrid'
      },
      {
        name: 'MC GLX AT Two Tone',
        priceOtr: 'Rp 430.400.000',
        priceNett: 'Rp 402.400.000',
        transmission: '6-Speed Automatic',
        fuel: 'Bensin',
        engine: '2.0L Hybrid'
      }
    ]
  },
  {
    id: 8,
    name: 'Jimny',
    category: 'SUV Off-Road',
    priceText: '470',
    description: 'SUV off-road ikonik dengan kemampuan ekstrem, desain klasik yang legendaris.',
    features: ['4x4 Genuine', 'Desain Klasik', 'Off-Road Ready', 'Part-time 4WD'],
    advantages: [
      '4WD part-time system',
      'Pendek dan ringan, sangat lincah off-road',
      'Approach angle 37°, departure angle 49°',
      'Ladder frame yang kokoh',
      '3-link rigid axle suspension',
      'Part-time 4WD dengan low range',
      'Desain ikonik yang timeless'
    ],
    image: '/images/jimny-1.jpg',
    gallery: [
      '/images/jimny-1.jpg',
      '/images/jimny-2.jpg',
      '/images/jimny-3.jpg'
    ],
    brochureUrl: '/brochures/jimny.pdf',
    specifications: {
      engine: 'R06A, 1.5L, 4 Silinder',
      transmission: '4-Speed AT / 5-Speed MT',
      fuel: 'Bensin',
      power: '102 PS / 6.000 rpm',
      torque: '130 Nm / 4.000 rpm',
      seating: '4 Penumpang',
      dimensions: '3.645 x 1.645 x 1.720 mm'
    },
    variants: [
      {
        name: '3 Door MT',
        priceOtr: 'Rp 477.400.000',
        priceNett: 'Rp 477.400.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.5L'
      },
      {
        name: '3 Door AT',
        priceOtr: 'Rp 491.100.000',
        priceNett: 'Rp 491.100.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.5L'
      },
      {
        name: '5 Door MT',
        priceOtr: 'Rp 484.400.000',
        priceNett: 'Rp 484.400.000',
        transmission: '5-Speed Manual',
        fuel: 'Bensin',
        engine: '1.5L'
      },
      {
        name: '5 Door AT',
        priceOtr: 'Rp 491.800.000',
        priceNett: 'Rp 491.800.000',
        transmission: '4-Speed Automatic',
        fuel: 'Bensin',
        engine: '1.5L'
      }
    ]
  }
];

export function getProductById(id: number): ProductType | undefined {
  return products.find(product => product.id === id);
}

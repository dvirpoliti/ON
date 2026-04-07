export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
export const KIDS_SIZES = ['6', '8', '10', '12', '14', '16'];
export const SHOE_SIZES = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'];
export const BALL_SIZES = ['5', '6', '7'];
export const BAG_SIZES = ['אחיד'];

export const PRINT_OPTIONS = [
  { id: 'none', label: 'ללא הדפסה', price: 0 },
  { id: 'number', label: 'מספר בלבד', price: 10 },
  { id: 'name', label: 'שם בלבד', price: 10 },
  { id: 'name_number', label: 'שם + מספר', price: 20 },
];

export const EMBLEM_OPTIONS = [
  { id: 'club', label: 'סמל המועדון', price: 0 },
  { id: 'on_logo', label: 'לוגו ON בלבד', price: 0 },
  { id: 'none', label: 'ללא סמל', price: 0 },
];

export const CATEGORIES = [
  { id: 'bundles', label: 'חבילות', icon: 'package' },
  { id: 'kits', label: 'ערכות ליגה', icon: 'trophy' },
  { id: 'clothing', label: 'ביגוד', icon: 'shirt' },
  { id: 'accessories', label: 'אביזרים', icon: 'star' },
];

export const products = [
  // === BUNDLES ===
  {
    id: 'bundle-school',
    name: 'חבילת בית הספר',
    description: 'כל מה שצריך לעונה — סט דו-צדדי, תיק בית ספר וכדורסל מידה 5',
    price: 299,
    originalPrice: 350,
    category: 'bundles',
    image: null,
    badge: 'חבילה משתלמת',
    customizable: true,
    sizes: KIDS_SIZES,
    hasEmblem: true,
    bundleItems: ['סט דו-צדדי', 'תיק בית ספר', 'כדורסל מידה 5'],
  },

  // === KITS ===
  {
    id: 'kit-reversible',
    name: 'סט דו-צדדי',
    description: 'גופייה ומכנס דו-צדדי — שני צבעים בפריט אחד, לאימונים ולמשחקים',
    price: 149,
    category: 'kits',
    image: null,
    customizable: true,
    sizes: [...KIDS_SIZES, ...SIZES],
    hasEmblem: true,
  },
  {
    id: 'kit-game-2plus1',
    name: 'סט משחק 2+1',
    description: 'שתי גופיות ומכנס אחד — מוכן לכל משחק עם סט מלא ומקצועי',
    price: 219,
    category: 'kits',
    image: null,
    customizable: true,
    sizes: [...KIDS_SIZES, ...SIZES],
    hasEmblem: true,
  },
  {
    id: 'kit-game-2plus2',
    name: 'סט משחק 2+2',
    description: 'שתי גופיות ושני מכנסיים — הציוד המלא לשחקן שרוצה להיות מוכן תמיד',
    price: 269,
    category: 'kits',
    image: null,
    customizable: true,
    sizes: [...KIDS_SIZES, ...SIZES],
    hasEmblem: true,
  },
  {
    id: 'kit-shooting',
    name: 'חולצת שוטינג',
    description: 'חולצת חימום מקצועית לפני המשחק — מראה אחיד ומרשים למגרש',
    price: 99,
    category: 'kits',
    image: null,
    customizable: true,
    sizes: [...KIDS_SIZES, ...SIZES],
    hasEmblem: true,
  },
  {
    id: 'kit-backpack',
    name: 'תיק גב גדול',
    description: 'תיק ספורט גדול ועמיד עם תאים ייעודיים לציוד כדורסל',
    price: 129,
    category: 'kits',
    image: null,
    customizable: false,
    sizes: BAG_SIZES,
    hasEmblem: false,
  },
  {
    id: 'kit-winter',
    name: 'סט חורף',
    description: 'מכנס טרנינג וקפוצ׳ון — חימום מקצועי לימים הקרים',
    price: 199,
    category: 'kits',
    image: null,
    customizable: true,
    sizes: [...KIDS_SIZES, ...SIZES],
    hasEmblem: true,
  },

  // === CLOTHING ===
  {
    id: 'clothing-hat',
    name: 'כובע ON',
    description: 'כובע מצחייה ספורטיבי עם לוגו ON — סטייל על המגרש ומחוצה לו',
    price: 49,
    category: 'clothing',
    image: null,
    customizable: false,
    sizes: ['אחיד'],
    hasEmblem: false,
  },
  {
    id: 'clothing-dryfit',
    name: 'חולצת דריי-פיט בסיסית',
    description: 'חולצת אימון קלה ונושמת מבד מנדף זיעה — נוחות מקסימלית',
    price: 69,
    category: 'clothing',
    image: null,
    customizable: true,
    sizes: [...KIDS_SIZES, ...SIZES],
    hasEmblem: true,
  },
  {
    id: 'clothing-socks',
    name: 'גרבי כדורסל',
    description: 'גרביים גבוהות ומרופדות בעיצוב המועדון — ביצועים ונוחות',
    price: 35,
    category: 'clothing',
    image: null,
    customizable: false,
    sizes: ['S (35-38)', 'M (39-42)', 'L (43-46)'],
    hasEmblem: false,
  },
];

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

// =============================================
// ON Basketball Club Store — Product Data
// =============================================
// Products normalized: color variants merged into single products.
// Prices and descriptions based on typical AllAround basketball club stores.
// Update prices/descriptions/images from reference site as needed.

export const SIZES_ADULT = ['S', 'M', 'L', 'XL', 'XXL'];
export const SIZES_KIDS = ['6', '8', '10', '12', '14', '16'];
export const SIZES_ALL = [...SIZES_KIDS, ...SIZES_ADULT];
export const SIZES_SOCKS = ['S (35-38)', 'M (39-42)', 'L (43-46)'];
export const SIZES_ONE = ['אחיד'];

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
  { id: 'bundles', label: 'ערכות', icon: 'package' },
  { id: 'kits', label: 'ביגוד משחק', icon: 'trophy' },
  { id: 'clothing', label: 'ביגוד נוסף', icon: 'shirt' },
  { id: 'accessories', label: 'אביזרים', icon: 'star' },
];

// =============================================
// Helper: quantity pricing tiers
// Format: { min: N, price: X }
// "Buy N+ units at X₪ each"
// =============================================

export const products = [
  // ===========================================
  // BUNDLES
  // ===========================================
  {
    id: 'bundle-league',
    name: 'ערכת ליגה',
    description: 'הערכה המלאה לשחקן הליגה — כוללת את כל מה שצריך לעונה: סט אימון דו-צדדי, תיק גב פרימיום, חולצת שוטינג, סט משחק וסט חורף. חיסכון משמעותי ביחס לרכישה בנפרד.',
    category: 'bundles',
    badge: 'ערכה משתלמת',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    bundleItems: [
      { name: 'סט אימון דו-צדדי', refId: 'kit-reversible' },
      { name: 'תיק גב פרימיום', refId: 'acc-backpack' },
      { name: 'חולצת שוטינג קצר', refId: 'kit-shooting' },
      { name: 'סט משחק', refId: 'kit-game' },
      { name: 'סט חורף', refId: 'kit-winter' },
    ],
    colors: [
      { id: 'default', name: 'ברירת מחדל', hex: '#111111' },
    ],
    images: {
      default: ['/images/bundle-league.jpg'],
    },
    pricing: [
      { min: 1, price: 749 },
    ],
    originalPrice: 899,
  },

  // ===========================================
  // KITS — Main Game / Training Kits
  // ===========================================
  {
    id: 'kit-reversible',
    name: 'סט אימון דו-צדדי',
    description: 'גופייה ומכנס דו-צדדי עם שני צבעים — צד אחד לאימון וצד שני למשחק. בד מנדף זיעה, גזרה ספורטיבית נוחה.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black-white', name: 'שחור / לבן', hex: '#111111' },
      { id: 'red-white', name: 'אדום / לבן', hex: '#E63946' },
      { id: 'blue-white', name: 'כחול / לבן', hex: '#1D3557' },
    ],
    images: {
      'black-white': ['/images/reversible-black-1.jpg', '/images/reversible-black-2.jpg'],
      'red-white': ['/images/reversible-red-1.jpg', '/images/reversible-red-2.jpg'],
      'blue-white': ['/images/reversible-blue-1.jpg', '/images/reversible-blue-2.jpg'],
    },
    pricing: [
      { min: 1, price: 159 },
      { min: 5, price: 149 },
      { min: 10, price: 139 },
    ],
  },
  {
    id: 'kit-game',
    name: 'סט משחק',
    description: 'סט משחק מקצועי הכולל גופייה ומכנס בעיצוב המועדון. בד קל ונושם לביצועים מקסימליים במגרש.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'red', name: 'אדום', hex: '#E63946' },
    ],
    images: {
      white: ['/images/game-set-white-1.jpg', '/images/game-set-white-2.jpg'],
      black: ['/images/game-set-black-1.jpg', '/images/game-set-black-2.jpg'],
      red: ['/images/game-set-red-1.jpg', '/images/game-set-red-2.jpg'],
    },
    pricing: [
      { min: 1, price: 179 },
      { min: 5, price: 169 },
      { min: 10, price: 159 },
    ],
  },
  {
    id: 'kit-shooting',
    name: 'חולצת שוטינג קצר',
    description: 'חולצת חימום מקצועית לפני המשחק ובהפסקות — מראה אחיד ומרשים לכל הקבוצה.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      black: ['/images/shooting-black-1.jpg'],
      white: ['/images/shooting-white-1.jpg'],
    },
    pricing: [
      { min: 1, price: 99 },
      { min: 5, price: 89 },
      { min: 10, price: 79 },
    ],
  },
  {
    id: 'kit-winter',
    name: 'סט חורף',
    description: 'מכנס טרנינג וקפוצ׳ון עם רוכסן — חימום מקצועי לאימונים ולימים הקרים. בד נעים ומחמם.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'gray', name: 'אפור', hex: '#6B7280' },
    ],
    images: {
      black: ['/images/winter-black-1.jpg', '/images/winter-black-2.jpg'],
      gray: ['/images/winter-gray-1.jpg', '/images/winter-gray-2.jpg'],
    },
    pricing: [
      { min: 1, price: 219 },
      { min: 5, price: 199 },
      { min: 10, price: 189 },
    ],
  },

  // ===========================================
  // CLOTHING — Additional Apparel
  // ===========================================
  {
    id: 'clothing-dryfit',
    name: 'חולצת דריי-פיט',
    description: 'חולצת אימון קלה ונושמת מבד מנדף זיעה — נוחות מקסימלית לכל פעילות ספורטיבית.',
    category: 'clothing',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
      { id: 'red', name: 'אדום', hex: '#E63946' },
    ],
    images: {
      black: ['/images/dryfit-black-1.jpg'],
      white: ['/images/dryfit-white-1.jpg'],
      red: ['/images/dryfit-red-1.jpg'],
    },
    pricing: [
      { min: 1, price: 69 },
      { min: 5, price: 59 },
      { min: 10, price: 55 },
    ],
  },
  {
    id: 'clothing-socks',
    name: 'גרבי כדורסל',
    description: 'גרביים גבוהות ומרופדות בעיצוב המועדון — תמיכה מקסימלית ונוחות לאורך כל המשחק.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_SOCKS,
    colors: [
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      white: ['/images/socks-white-1.jpg'],
      black: ['/images/socks-black-1.jpg'],
    },
    pricing: [
      { min: 1, price: 35 },
      { min: 3, price: 30 },
    ],
  },

  // ===========================================
  // ACCESSORIES
  // ===========================================
  {
    id: 'acc-backpack',
    name: 'תיק גב פרימיום',
    description: 'תיק גב גדול ועמיד עם תאים ייעודיים לציוד כדורסל — תא נעליים, תא כדור ותא לפטופ.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: ['/images/backpack-black-1.jpg', '/images/backpack-black-2.jpg'],
    },
    pricing: [
      { min: 1, price: 149 },
    ],
  },
  {
    id: 'acc-hat',
    name: 'כובע ON',
    description: 'כובע מצחייה ספורטיבי עם לוגו ON — סטייל על המגרש ומחוצה לו.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      black: ['/images/hat-black-1.jpg'],
      white: ['/images/hat-white-1.jpg'],
    },
    pricing: [
      { min: 1, price: 49 },
    ],
  },
];

// =============================================
// Helpers
// =============================================
export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getBasePrice(product) {
  return product.pricing[0]?.price ?? 0;
}

export function getPriceForQuantity(product, qty) {
  let price = product.pricing[0]?.price ?? 0;
  for (const tier of product.pricing) {
    if (qty >= tier.min) price = tier.price;
  }
  return price;
}

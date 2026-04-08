// =============================================
// ON Basketball Club Store — Product Catalog
// Source of truth: AllAround reference site + uploaded images
// =============================================

export const SIZES_ADULT = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];
export const SIZES_KIDS = ['6', '8', '10', '12', '14', '16'];
export const SIZES_ALL = [...SIZES_KIDS, ...SIZES_ADULT];
export const SIZES_SOCKS = ['S (35-38)', 'M (39-42)', 'L (43-46)'];
export const SIZES_ONE = ['אחיד'];

// ON logo is ALWAYS included. These are ADDITIONAL options.
export const PRINT_OPTIONS = [
  { id: 'none', label: 'ללא הדפסה נוספת', price: 0 },
  { id: 'number', label: 'מספר בלבד', price: 10 },
  { id: 'name', label: 'שם בלבד', price: 10 },
  { id: 'name_number', label: 'שם + מספר', price: 20 },
];

export const CATEGORIES = [
  { id: 'bundles', label: 'ערכות', icon: 'package' },
  { id: 'kits', label: 'ביגוד ספורט ממותג', icon: 'trophy' },
  { id: 'clothing', label: 'ביגוד כללי', icon: 'shirt' },
  { id: 'accessories', label: 'אביזרים', icon: 'star' },
];

const img = (name) => `/images/${name}`;

export const products = [
  // ===========================================
  // BUNDLES
  // ===========================================
  {
    id: 'bundle-league',
    name: 'ערכת ליגה',
    description: 'הערכה המלאה לשחקן הליגה — כוללת סט אימון דו-צדדי, תיק גב פרימיום, חולצת שוטינג קצר, סט משחק וסט חורף. חיסכון משמעותי ביחס לרכישה בנפרד.',
    category: 'bundles',
    badge: 'ערכה משתלמת',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    bundleItems: [
      'סט אימון דו-צדדי',
      'תיק גב פרימיום',
      'חולצת שוטינג קצר',
      'סט משחק',
      'סט חורף',
    ],
    colors: [
      { id: 'default', name: 'ברירת מחדל', hex: '#111111' },
    ],
    images: {
      default: [img('8114.png'), img('8109.png'), img('8106.png')],
    },
    pricing: [{ min: 1, price: 699 }],
    originalPrice: 845,
  },

  {
    id: 'bundle-school',
    name: 'ערכת בית ספר',
    description: 'כל מה שצריך לבית הספר — סט דו-צדדי, תיק בית ספר וכדור כדורסל. חבילה שלמה במחיר מיוחד.',
    category: 'bundles',
    badge: 'חבילה לבית הספר',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    bundleItems: [
      'סט אימון דו-צדדי',
      'תיק גב פרימיום',
      'כדור כדורסל',
    ],
    colors: [
      { id: 'default', name: 'ברירת מחדל', hex: '#111111' },
    ],
    images: {
      default: [img('8114.png'), img('8127.png')],
    },
    pricing: [{ min: 1, price: 199 }],
    originalPrice: 230,
  },

  // ===========================================
  // KITS — Branded Sport Items
  // ===========================================
  {
    id: 'kit-training',
    name: 'סט אימון כדורסל ON',
    description: 'גופייה ומכנס דו-צדדי — שני צבעים בפריט אחד. בד מנדף זיעה בגזרה ספורטיבית, מושלם לאימונים ולמשחקים.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'navy', name: 'כחול כהה', hex: '#1B2A4A' },
      { id: 'red', name: 'אדום', hex: '#E63946' },
      { id: 'purple', name: 'סגול', hex: '#7B2D8E' },
      { id: 'green', name: 'ירוק', hex: '#2D8E4E' },
      { id: 'orange', name: 'כתום', hex: '#E87F35' },
      { id: 'yellow', name: 'צהוב', hex: '#F5D020' },
      { id: 'blue', name: 'כחול', hex: '#2563EB' },
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      navy: [img('8114.png'), img('8114-0-8121.png')],
      red: [img('8114-6-8115.png')],
      purple: [img('8114-5-8116.png')],
      green: [img('8114-4-8117.png')],
      orange: [img('8114-3-8118.png')],
      yellow: [img('8114-2-8119.png')],
      blue: [img('8114-1-8120.png')],
      black: [img('8114-0-8121.png')],
    },
    pricing: [
      { min: 1, price: 89 },
    ],
  },
  {
    id: 'kit-game',
    name: 'סט משחק כדורסל ON',
    description: 'סט משחק מקצועי — גופייה ומכנס בעיצוב המועדון. בד קל ונושם לביצועים מקסימליים במגרש.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'blue', name: 'כחול', hex: '#2563EB' },
      { id: 'yellow', name: 'צהוב', hex: '#F5D020' },
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'red', name: 'אדום', hex: '#E63946' },
    ],
    images: {
      blue: [img('8109.png'), img('8109-0-8111.png')],
      yellow: [img('8109-1-8110.png')],
      black: [img('8109-2-8112.png')],
      red: [img('8109-3-8113.png')],
    },
    pricing: [
      { min: 1, price: 269 },
    ],
  },
  {
    id: 'kit-shooting-short',
    name: 'שוטינג שירט קצר ממותג ON',
    description: 'חולצת חימום קצרה ממותגת לפני המשחק ובהפסקות — מראה אחיד ומקצועי לכל הקבוצה.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'red', name: 'אדום', hex: '#E63946' },
      { id: 'blue', name: 'כחול', hex: '#2563EB' },
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      red: [img('17-2-1500x1000.png')],
      blue: [img('17-2-1500x1000.png')],
      black: [img('17-2-1500x1000.png')],
    },
    pricing: [
      { min: 1, price: 82 },
    ],
  },
  {
    id: 'kit-shooting-long',
    name: 'שוטינג שירט ארוך ממותג ON',
    description: 'חולצת חימום ארוכה ממותגת — מתאימה לאימונים ולמשחקים בימים קרים.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'red', name: 'אדום', hex: '#E63946' },
      { id: 'blue', name: 'כחול', hex: '#2563EB' },
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      red: [img('17-2-1500x1000.png')],
      blue: [img('17-2-1500x1000.png')],
      black: [img('17-2-1500x1000.png')],
    },
    pricing: [
      { min: 1, price: 99 },
    ],
  },
  {
    id: 'kit-winter',
    name: 'סט חורף ממותג ON',
    description: 'מכנס טרנינג וקפוצ׳ון — חימום מקצועי עם סמל המועדון ולוגו ON. בד נעים ומחמם לימים הקרים.',
    category: 'kits',
    customizable: true,
    hasEmblem: true,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'blue', name: 'כחול', hex: '#1D3557' },
    ],
    images: {
      black: [img('8106.png'), img('6-1-1500x1000.png')],
      blue: [img('6-2-1500x1000.png')],
    },
    pricing: [
      { min: 1, price: 245 },
    ],
  },
  {
    id: 'kit-hooded-vest',
    name: 'גופיית קפוצ׳ון ON',
    description: 'גופייה ספורטיבית עם כובע — סטייל ייחודי ונוחות מקסימלית לאימונים ולפנאי.',
    category: 'kits',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [img('8-1-1500x1000.png')],
    },
    pricing: [
      { min: 1, price: 90 },
    ],
  },
  {
    id: 'kit-halfzip',
    name: 'קפוצ׳ון חצי רוכסן ON',
    description: 'קפוצ׳ון ספורטיבי עם חצי רוכסן — עיצוב מודרני עם לוגו ON. מתאים לאימונים ולפנאי.',
    category: 'kits',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [img('8130.png'), img('8130-0-8131.png')],
    },
    pricing: [
      { min: 1, price: 169 },
    ],
  },
  {
    id: 'kit-zip-hoodie',
    name: 'קפוצ׳ון רוכסן ON',
    description: 'קפוצ׳ון עם רוכסן מלא ולוגו ON — ספורטיבי ונוח, מתאים לכל יום.',
    category: 'kits',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [img('8130.png'), img('8130-0-8131.png')],
    },
    pricing: [
      { min: 1, price: 149 },
    ],
  },

  {
    id: 'kit-tights-long',
    name: 'טייץ ארוך ON',
    description: 'טייץ דחיסה ארוך עם לוגו ON — תמיכה מלאה לשרירים במהלך אימונים ומשחקים.',
    category: 'kits',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [img('8-1-1500x1000.png')],
    },
    pricing: [
      { min: 1, price: 74 },
    ],
  },
  {
    id: 'kit-tights-short',
    name: 'טייץ קצר ON',
    description: 'טייץ דחיסה קצר (3/4) עם לוגו ON — חופש תנועה מקסימלי.',
    category: 'kits',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [img('8-1-1500x1000.png')],
    },
    pricing: [
      { min: 1, price: 62 },
    ],
  },

  // ===========================================
  // CLOTHING — General Branded Apparel
  // ===========================================
  {
    id: 'clothing-dryfit',
    name: 'חולצת דרייפיט',
    description: 'חולצת אימון קלה ונושמת מבד מנדף זיעה עם סמל המועדון — לאימון ולפנאי.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'gray', name: 'אפור', hex: '#6B7280' },
      { id: 'lightblue', name: 'תכלת', hex: '#93C5FD' },
      { id: 'yellow', name: 'צהוב', hex: '#F5D020' },
      { id: 'red', name: 'אדום', hex: '#E63946' },
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'darkgray', name: 'אפור כהה', hex: '#4B5563' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      gray: [img('604.jpg'), img('604-2-607.jpg')],
      lightblue: [img('604-7-608.jpg')],
      yellow: [img('604-6-612.jpg')],
      red: [img('604-5-567.jpg')],
      navy: [img('604-4-565.jpg')],
      darkgray: [img('604-3-558.jpg')],
      white: [img('604-1-559.jpg')],
      black: [img('604-0-561.jpg')],
    },
    pricing: [
      { min: 1, price: 42 },
      { min: 5, price: 36 },
      { min: 10, price: 24 },
    ],
  },
  {
    id: 'clothing-dryfit-long',
    name: 'חולצת דרייפיט ארוכה',
    description: 'חולצת דרייפיט עם שרוול ארוך וסמל המועדון — מושלמת לאימונים בימים קרים.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'gray', name: 'אפור', hex: '#9CA3AF' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'darkgray', name: 'אפור כהה', hex: '#4B5563' },
    ],
    images: {
      navy: [img('1237.jpg'), img('1237-0-1242.jpg')],
      gray: [img('1237-1-1238.jpg')],
      white: [img('1237-2-1243.jpg')],
      black: [img('1237-3-1241.jpg')],
      darkgray: [img('1237-4-1239.jpg')],
    },
    pricing: [
      { min: 1, price: 52 },
      { min: 5, price: 44 },
      { min: 10, price: 34 },
    ],
  },
  {
    id: 'clothing-polo',
    name: 'חולצת פולו כותנה',
    description: 'חולצת פולו מכותנה איכותית עם סמל המועדון — מראה מסודר ומקצועי.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'gray', name: 'אפור', hex: '#9CA3AF' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      black: [img('594.jpg'), img('594-0-595.jpg')],
      navy: [img('594-1-597.jpg')],
      gray: [img('594-2-596.jpg')],
      white: [img('594-2-596.jpg')],
    },
    pricing: [
      { min: 1, price: 84 },
      { min: 5, price: 64 },
      { min: 10, price: 38 },
    ],
  },
  {
    id: 'clothing-polo-dryfit',
    name: 'חולצת פולו דרייפיט',
    description: 'חולצת פולו ספורטיבית מבד דרייפיט עם סמל המועדון — קלה, נושמת ומסודרת.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      navy: [img('598.jpg')],
      black: [img('598-0-595.jpg')],
      white: [img('598-1-597.jpg')],
    },
    pricing: [
      { min: 1, price: 84 },
      { min: 5, price: 64 },
      { min: 10, price: 38 },
    ],
  },
  {
    id: 'clothing-polo-dryfit-long',
    name: 'חולצת פולו דרייפיט ארוך',
    description: 'חולצת פולו ארוכה מבד דרייפיט עם סמל המועדון — אלגנטית וספורטיבית.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'gray', name: 'אפור', hex: '#6B7280' },
    ],
    images: {
      black: [img('1248.jpg'), img('1248-0-1247.jpg')],
      navy: [img('1248-1-1245.jpg')],
      gray: [img('1248-2-1246.jpg')],
    },
    pricing: [
      { min: 1, price: 88 },
      { min: 5, price: 68 },
      { min: 10, price: 42 },
    ],
  },
  {
    id: 'clothing-cotton-vest',
    name: 'גופיית כותנה',
    description: 'גופיית כותנה נוחה עם סמל המועדון — לאימונים קלים ולפנאי.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'gray', name: 'אפור', hex: '#9CA3AF' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      black: [img('623.jpg'), img('623-0-624.jpg')],
      navy: [img('623-1-627.jpg')],
      gray: [img('623-2-625.jpg')],
      white: [img('623-3-626.jpg')],
    },
    pricing: [
      { min: 1, price: 45 },
      { min: 5, price: 37 },
      { min: 10, price: 27 },
    ],
  },
  {
    id: 'clothing-hoodie-zip',
    name: 'קפוצ׳ון רוכסן',
    description: 'קפוצ׳ון עם רוכסן מלא וסמל המועדון — חמים ונוח, מתאים לכל יום.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'gray', name: 'אפור', hex: '#9CA3AF' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      black: [img('552.jpg'), img('552-0-553.jpg')],
      navy: [img('552-1-556.jpg')],
      gray: [img('552-2-554.jpg')],
      white: [img('552-3-555.jpg')],
    },
    pricing: [
      { min: 1, price: 98 },
      { min: 5, price: 82 },
      { min: 10, price: 66 },
    ],
  },
  {
    id: 'clothing-sweatshirt',
    name: 'סווטשירט',
    description: 'סווטשירט נעים עם סמל המועדון — חמים ונוח לכל הזדמנות.',
    category: 'clothing',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ALL,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'gray', name: 'אפור', hex: '#D1D5DB' },
    ],
    images: {
      black: [img('Sweatshirt-Black.jpg')],
      navy: [img('Sweatshirt-Navy.jpg')],
      gray: [img('Sweatshirt-L-Gray.jpg')],
    },
    pricing: [
      { min: 1, price: 76 },
      { min: 5, price: 62 },
      { min: 10, price: 48 },
    ],
  },

  // ===========================================
  // ACCESSORIES
  // ===========================================
  {
    id: 'acc-backpack',
    name: 'תיק גב פרימיום ON',
    description: 'תיק גב גדול ועמיד עם תאים ייעודיים לציוד כדורסל — תא נעליים, תא כדור ותא לפטופ.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [],
    },
    pricing: [
      { min: 1, price: 74 },
    ],
  },
  {
    id: 'acc-basketball',
    name: 'כדור כדורסל ON',
    description: 'כדורסל ממותג Switching ON — אחיזה מעולה ועמידות גבוהה למגרש ולאימונים.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'gray', name: 'אפור', hex: '#9CA3AF' },
      { id: 'black', name: 'שחור', hex: '#333333' },
    ],
    images: {
      gray: [img('16-1-1500x1000.png'), img('8127-1-8128.png')],
      black: [img('16-2-1500x1000.png'), img('8127.png'), img('8127-0-8129.png')],
    },
    pricing: [
      { min: 1, price: 57 },
    ],
  },
  {
    id: 'acc-sleeve',
    name: 'סליב כדורסל ON',
    description: 'שרוול ספורטיבי לזרוע — תמיכה ודחיסה לביצועים מקסימליים.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [img('8123.png'), img('8123-0-8124.png')],
    },
    pricing: [
      { min: 1, price: 40 },
    ],
  },
  {
    id: 'acc-sweatband',
    name: 'מגן זיעה ON',
    description: 'מגן זיעה ספורטיבי לפרק כף היד — נוח וסופג.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [img('8125.png'), img('8125-0-8124.png')],
    },
    pricing: [
      { min: 1, price: 29 },
    ],
  },
  {
    id: 'acc-bucket-hat',
    name: 'כובע טמבל',
    description: 'כובע טמבל ממותג עם סמל המועדון — הגנה מהשמש בסטייל.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'green', name: 'ירוק', hex: '#166534' },
      { id: 'lightblue', name: 'תכלת', hex: '#67E8F9' },
      { id: 'khaki', name: 'חאקי', hex: '#A3915A' },
      { id: 'red', name: 'אדום', hex: '#E63946' },
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      black: [img('498.jpg'), img('498-0-499.jpg')],
      navy: [img('498-1-506.jpg')],
      green: [img('498-2-505.jpg')],
      lightblue: [img('498-3-500.jpg')],
      khaki: [img('498-4-502.jpg')],
      red: [img('498-5-504.jpg')],
      white: [img('498-6-503.jpg')],
    },
    pricing: [
      { min: 1, price: 35 },
      { min: 5, price: 28 },
      { min: 10, price: 16 },
    ],
  },
  {
    id: 'acc-mesh-cap',
    name: 'כובע רשת',
    description: 'כובע רשת (טראקר) עם סמל המועדון — ספורטיבי ומאוורר.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'white-black', name: 'לבן/שחור', hex: '#FFFFFF', border: true },
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'red', name: 'אדום', hex: '#E63946' },
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      'white-black': [img('507.jpg'), img('507-0-654.jpg')],
      navy: [img('507-1-657.jpg')],
      red: [img('507-2-656.jpg')],
      black: [img('507-3-655.jpg')],
    },
    pricing: [
      { min: 1, price: 38 },
      { min: 5, price: 30 },
      { min: 10, price: 17 },
    ],
  },
  {
    id: 'acc-premium-cap',
    name: 'כובע מצחיה מהודר',
    description: 'כובע מצחיה מהודר עם סמל המועדון — איכות פרימיום ונוחות מקסימלית.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'navy', name: 'כחול כהה', hex: '#2D3A5C' },
      { id: 'gray', name: 'אפור', hex: '#6B7280' },
    ],
    images: {
      navy: [img('1040.jpg'), img('1040-0-1041.jpg')],
      gray: [img('1040-1-1042.jpg')],
    },
    pricing: [
      { min: 1, price: 54 },
      { min: 5, price: 44 },
      { min: 10, price: 29 },
    ],
  },
  {
    id: 'acc-snapback',
    name: 'כובע היפ הופ',
    description: 'כובע סנאפבק ממותג בסטייל היפ הופ — מראה ייחודי עם סמל המועדון.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'gray', name: 'אפור', hex: '#9CA3AF' },
    ],
    images: {
      gray: [img('488.jpg')],
    },
    pricing: [
      { min: 1, price: 59 },
      { min: 5, price: 48 },
      { min: 10, price: 27 },
    ],
  },
  {
    id: 'acc-side-bag',
    name: 'תיק צד',
    description: 'תיק צד קומפקטי ואיכותי עם סמל המועדון — שימושי ליומיום ולאירועים.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'navy', name: 'כחול כהה', hex: '#1D3557' },
      { id: 'gray', name: 'אפור', hex: '#9CA3AF' },
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      navy: [img('641.jpg'), img('641-0-642.jpg')],
      gray: [img('641-1-643.jpg')],
      black: [img('641-2-644.jpg')],
    },
    pricing: [
      { min: 1, price: 51 },
      { min: 5, price: 43 },
      { min: 10, price: 33 },
    ],
  },
  {
    id: 'acc-laptop-bag',
    name: 'תיק ללפטופ 15.6\'',
    description: 'תיק ללפטופ מרופד עם סמל המועדון — הגנה מקסימלית למחשב שלך.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
      { id: 'gray', name: 'אפור', hex: '#9CA3AF' },
    ],
    images: {
      black: [img('645.jpg'), img('645-0-646.jpg')],
      gray: [img('645-1-647.jpg')],
    },
    pricing: [
      { min: 1, price: 55 },
      { min: 5, price: 48 },
      { min: 10, price: 39 },
    ],
  },
  {
    id: 'acc-tote-bag',
    name: 'תיק כנסים כותנה',
    description: 'תיק כנסים מכותנה טבעית עם סמל המועדון — ידידותי לסביבה ושימושי.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'natural', name: 'טבעי', hex: '#D4C9A8' },
    ],
    images: {
      natural: [img('494.jpg')],
    },
    pricing: [
      { min: 1, price: 44 },
      { min: 5, price: 35 },
      { min: 10, price: 21 },
    ],
  },
  {
    id: 'acc-bottle',
    name: 'בקבוק תרמי 500 מ"ל',
    description: 'בקבוק תרמי ממותג — שומר על חום וקור לשעות ארוכות.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      white: [img('496.jpg')],
    },
    pricing: [
      { min: 1, price: 59 },
      { min: 5, price: 49 },
      { min: 10, price: 32 },
    ],
  },
  {
    id: 'acc-mug',
    name: 'ספל קרמיקה',
    description: 'ספל קרמיקה ממותג עם סמל המועדון — מושלם לקפה של הבוקר.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      white: [img('486.jpg')],
    },
    pricing: [
      { min: 1, price: 49 },
      { min: 5, price: 38 },
      { min: 10, price: 21 },
    ],
  },
  {
    id: 'acc-mousepad',
    name: 'פד לעכבר',
    description: 'פד לעכבר ממותג עם סמל המועדון.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      white: [img('522.jpg')],
    },
    pricing: [
      { min: 1, price: 34 },
      { min: 5, price: 27 },
      { min: 10, price: 16 },
    ],
  },
  {
    id: 'acc-gaming-pad',
    name: 'פד גיימינג ממותג',
    description: 'פד גיימינג גדול ממותג עם סמל המועדון — משטח רחב ואיכותי.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'black', name: 'שחור', hex: '#111111' },
    ],
    images: {
      black: [img('389.jpg')],
    },
    pricing: [
      { min: 1, price: 74 },
      { min: 5, price: 58 },
      { min: 10, price: 34 },
    ],
  },
  {
    id: 'acc-coasters',
    name: 'תחתיות עץ לקפה',
    description: 'סט תחתיות מעץ עם סמל המועדון — מתנה מושלמת לאוהדים.',
    category: 'accessories',
    customizable: false,
    hasEmblem: false,
    sizes: SIZES_ONE,
    colors: [
      { id: 'white', name: 'לבן', hex: '#FFFFFF', border: true },
    ],
    images: {
      white: [img('387.jpg')],
    },
    pricing: [
      { min: 1, price: 34 },
      { min: 5, price: 27 },
      { min: 10, price: 13 },
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

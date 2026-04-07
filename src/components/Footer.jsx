export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
            <span className="text-black font-black text-lg tracking-tighter">ON</span>
          </div>

          <p className="text-gray-400 text-sm mb-6 max-w-md">
            ON Basketball Club — ציוד ספורט מקצועי ואיכותי לשחקני המועדון.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#bundles" className="text-gray-400 hover:text-white transition no-underline">חבילות</a>
            <a href="#kits" className="text-gray-400 hover:text-white transition no-underline">ערכות ליגה</a>
            <a href="#clothing" className="text-gray-400 hover:text-white transition no-underline">ביגוד</a>
            <a href="#accessories" className="text-gray-400 hover:text-white transition no-underline">אביזרים</a>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-800 pt-6">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} ON Basketball Club. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
